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

var ampaeGetTopUrl         = 'feeds/feed-top.json';

jQuery(function($){
    ampaeDisplayDataTop();
});

function ampaeDisplayDataTop()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetTopUrl,
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
        var items = ampaeQtTop(data);

            $("#topuser").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtTop(data)
    {
        var s = '';
        // var type = val.uid;

        s += '';


        s += '<button onclick="toggle_visibility(\'myDropdown2\')" class="dropbtn icon-wrapper-white">';
            s += '<i class="fa fa-user"></i>';
        s += '</button>';
        s += '<div id="myDropdown2" class="dropdown-content" style="display:none;">';
  //          s += '<a href="#">Settings</a>';
  //          s += '<a href="#">Log Out</a>';

  $.each(data, function ( key, val ) {
    if (val.link !== 'undefined') {
      s += ampaeQtTopItem(key, val);
    }
  });

        s += '</div>';


        return s + '\n';
    }

/*
same !!!
*/
    function ampaeQtTopItem(key, val) {
      var r = '<a href="'+val.link+'">'+val.value+'</a>';
      return r + '\n';
    }
