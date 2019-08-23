/**
 * <codeheader>
 * <name>Bonsai Front</name>
 * <version>2.1</version>
 * <description>Display JSON Data as an HTML5 Article</description>
 * <base>https://ampae.com/bonsai/</base>
 * <author>V Bugroff</author>
 * <author>M Karodine</author>
 * <email>bugroff@protonmail.com</email>
 * <email>usr04@protonmail.com</email>
 * <copyright file="LICENSE.txt" company="AMPAE">
 * THIS CODE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR
 * A PARTICULAR PURPOSE.
 * </copyright>
 * <date>2019-01-01</date>
 * <summary>
 * Script File
 * </summary>
 * </codeheader>
**/

var ampaeGetDataLimit       = 5
var ampaeGetDataOffset      = 0;
var ampaeGetDataUrl         = 'feeds/feed-main.json';
var ampaeGetDataMessage     = '#loader_message';
var ampaeGetDataImage       = '#loader_image';
var ampaeGetDataRes         = '#results';

var ampaeResArt         = '#ampaeResArt';

jQuery(function($){
    ampaeDisplayDataRec(ampaeGetDataLimit, ampaeGetDataOffset);
    $("#loader_message").on("click",function() {
      var d = $('#loader_message').find("button").attr("data-atr");
      if (d != "nodata" && d != "undefined") {
          ampaeGetDataOffset = ampaeGetDataLimit + ampaeGetDataOffset;
          // ampaeDisplayDataRec(ampaeGetDataLimit, ampaeGetDataOffset);
      }
    });
});

function ampaeDisplayDataRec(lim, off)
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetDataUrl,
    data: false,
    mimeType: "application/json",
    data: "limit=" + lim + "&offset=" + off + "&uid=" + $('#results').attr("data-results"),
    cache: false,
    dataType: "JSON",
    beforeSend: function () {
        $("#loader_message").html("").hide();
        $('#loader_image').show();
    },
    success: function (data) {
        $('#loader_image').hide();
        var items = [];

        $.each(data, function ( key, val ) {
            items.push(ampaeQtBox(key, val));
        });

            $("#results").append(items);

        if (data == "") {
            $("#loader_message").html('<div class="cnt"><hr></div>').show()
        } else {
            $("#loader_message").html('<div class="cnt"><button class="btn btn-medium btn-skew btn-shadow-dark btn-red" type="button">Load More..</button></div><br />').show();
        }

    }
    });
}


    function ampaeQtBox(key, val)
    {
        var s = '';
        var type = val.uid;

        s += '<article id="post-' + val.did + '" class="hentry">';

        if (val.value_3!='') {
          s += '<figure>';
              s += '<div class="panel-thumbnail">';
              s += '<span class="qt-lightbox" data-source="' + val.value_3 + '" title="Image Title" desc="Image Description">';
              s += '<a href="' + val.value_3 + '">';
                s += '<img width="250" height="250" src="' + val.value_3 + '" class="" alt="" />';
                s += '</a>';
                s += '</span>';
              s += '</div>';
          s += '</figure>';
        }

          s += '<header class="entry-header">';

            s += '<section class="author">';
              s += '<a class="author vcard" href="#"><img alt="" src="' + val.avatar + '" class="avatar avatar-50 photo" height="50" width="50" /> &bull; ' + val.uname + '</a>';
            s += '</section>';

            s += '<section class="time-loc">';
              s += '<time class="updated" datetime="2019-05-18">' + val.ago + '</time>';
            s += '</section>';

          s += '</header><!-- .entry-header -->';

          s += '<section class="entry-content">';
//            s += '<h2 class="entry-title"><a href="post/' + val.did + '">' + val.fm + '</a></h2>';
            s += '<p id="fu-msg-' + val.did + '" class="mmsg">' + val.value + '</p><br />';
          s += '</section><!-- .entry-content -->';

          s += '<footer class="entry-footer">';
            s += '<div class="pull-right">';
              s += '<a class="btn btn-small btn-orange-inverse" href="#">read | comment</a>';
            s += '</div>';
            s += '<p class="">';
               s += '<a href="#">comments</a>';
            s += '</p>';
            s += '<a href="#" rel="category tag">HTML</a> <br />  # <a href="#" rel="tag">css</a>';
          s += '</footer><!-- .entry-footer -->';
        s += '</article><!-- #post-## -->';



/*
            s += '<div class="module"><div class="panel panel-default">';
        if (val.value_3!='') {
            s += '<a class="" href="' + val.value_3 + '"><div class="panel-thumbnail"><img src="' + val.value_3 + '" alt="" /></div></a>';
        }
            s += '<div class="panel-body">';
            s += '<span class="pull-right"><div class="btn-group">';
            s += '</div></span>';
            s += '<div class="media">';
            s += '<span class="pull-left"><img class="media-object" src="' + val.avatar + '" height="50" width="50" alt=""></span>';
            s += '<div class="media-body"><a class="media-heading" href="' + val.uname + '">@' + val.uname + '</a>';
            s += '<p class="small"><span class="text-muted">' + val.ago + ' &bull; </span> <a href="post/' + val.did + '">' + val.fm + '</a></p>';
            s += '</div></div>  <br />';
            s += '<p id="fu-msg-' + val.did + '" class="mmsg">' + val.value + '</p><div class="clearfix"></div>';
            s += '<p class="small text-muted co-liligo"> <span id="count-msg-' + val.did + '" class="star-msg-btn" >' + val.sst + '</span> '+val.sct+' &bull; ';
*/

/*
        if (val.s) {
            s += ' <a href="post/' + val.did + '">' + val.ccom + ' '+val.comt+'</a></p>';
        } else {
            s += ' Comments are Closed.</p>';
        }
*/

/*
            s += ' <a href="post/' + val.did + '">' + val.ccom + ' '+val.comt+'</a></p>';
*/
            /*
            s += '<br /><hr />';
            */
/*
            s += '</div></div>';
            s += '</div>';
*/
        return s + '\n';
    }
