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

var ampaeGetRightUrl         = 'feeds/feed-right.json';

jQuery(function($){
    ampaeDisplayDataRight();
});

function ampaeDisplayDataRight()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetRightUrl,
    mimeType: "application/json",
//    data: '',
    cache: false,
    dataType: "JSON",
    beforeSend: function () {
        //$("#loader_message").html("").hide();
        //$('#loader_image').show();
    },
    success: function (data) {
        //$('#loader_image').hide();
        var items = ampaeQtRight(data);
        $("#asideRight").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtRight(data)
    {
        var s = '';
        var items = '';
        var i = 0;

        $.each(data, function ( key, val ) {

          if( typeof val.link !== 'undefined' && val.link !== null ){
            items += ampaeQtRightItem(key, val);
            i++;
          }
        });


        s += '';

        if (i>0){
          s += items;
        }

        return s + '\n';
    }

    function ampaeQtRightItem(key, val) {
      var r = '';

      r +='<div style="display:flex;width:98%;height:auto;margin:0 0 .4em 0;padding:0;color:#444;';
      r +='background-color:#eee;font-family:Verdana, Arial, Helvetica, sans-serif;">';
      r +='<div id="first" style="background-color:#fff;padding:0; flex-wrap: wrap;">';
      //if (true) {
        r += '<figure style="">';
        r += '<a style="color:#444;text-decoration:none;" href="'+val.link+'">';
              r += '<img style="width:auto;height:auto;width:auto;max-width: 100%;max-height:120px;" src="img/1.jpg" class="" alt="IMG" />';
              r += '</a>';
        r += '</figure>';
      //}
      r +='</div>';
      r +='<div id="second" style="flex-grow:1;background-color:#fff;padding:.4em;">';
      r +='<a href="'+val.link+'" style="color:#fff;">';
      r +='<p style="margin:0;padding:0;color:#555;font-size:1em;font-weight:bold;">';
      r +='One Year Home Warranty</p>';
      r +='<p style="margin:0;padding:0;color:#555;font-size:.9em;">'+val.note+'</p>';
      r +='<p style="margin:0;padding:0;color:#555;font-weight:bold;font-size:.9em;">MyBRAND</p>';
      r +='</a>';
      r +='</div>';
      r +='<div id="third" style="background-color:#fff;padding:.4em;">';
      r +='<a href="https://www.cpxbee" style="color:#444;text-decoration:none;">';
      r +='<p style="margin:0;padding:0;color:#000;font-size:1em;font-weight:bold;">&#x25B7;';
      r +='</p>';
      r +='</a>';
      r +='</div>';
      r +='</div>';

      //r +='<p style="margin:0;padding:0;color:#000;font-size:1em;font-weight:bold;">';
      //r +='<a href="https://www.cpxbee" style="color:#fff;">&#x25B7;</a>';
      //r +='</p>';

/*
      r +='<div style="width:98%;height:auto;margin:0;padding:5px;';
      r +='color:#fff;background-color:#eee;font-family:Verdana, Arial, Helvetica, sans-serif;">';
      r +='<a href="http://www.aaa.com/deep" style="margin:0;padding:0;font-weight:normal;';
      r +='font-size:1.1em;color:#555;text-decoration:none;"><span style="font-weight:bold;">';
      r +='One Year Home Warranty</span><br />';
      r +='Home Inspection - Up to $400 edhgdfghg jfhfghdrst thdhdrgsrydjhd</a><br />';
      r +='<a href="http://www.aaa.com" style="margin:0;padding:0;color:#555;font-weight:bold;';
      r +='font-size:.8em;background:inherit;text-decoration:none;">MyBRAND</a>';
      r +='<a href="https://www.cpxbee" style="float:right;margin:0;padding:0;';
      r +='color:#000;font-size:1em;text-decoration:none;font-weight:bold;">&#x25B7;</a></div>';
*/


      return r + '\n';
    }
