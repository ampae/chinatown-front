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

var ampaeGetLeftUrl         = 'feeds/feed-left.json';

jQuery(function($){
    ampaeDisplayDataLeft();
});

function ampaeDisplayDataLeft()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetLeftUrl,
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
        var items = ampaeQtLeft(data);

            $("#leftside-navigation").append(items);
            //$("#asideLeft").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtLeft(data)
    {
        var s = '';
        // var type = val.uid;

        s += '<ul>';



  $.each(data, function ( key, val ) {
    if (val.link !== 'undefined') {
      s += ampaeQtLeftItem(key, val);
    }
  });

        s += '</ul>';

        return s + '\n';
    }

/*
same !!!
*/
    function ampaeQtLeftItem(key, val) {
      //var r = '<li><a href="'+val.link+'"><i class="fa fa-cogs"></i><span>'+val.value+'</span><i class="arrow fa fa-angle-right pull-right"></i></a></li>';
      var r = '<li><a href="'+val.link+'"><i class="fa '+val.icon+'"></i>'+val.value;

        if (val.upper) {
          r += '<i class="arrow fa fa-angle-right pull-right"></i></a></li>';
        }

          r += '</a></li>';
      return r + '\n';
    }
