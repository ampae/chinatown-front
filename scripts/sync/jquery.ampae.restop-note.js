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

var ampaeGetTopNoteUrl         = 'feeds/feed-top-note.json';

jQuery(function($){
    ampaeDisplayDataTopNote();
});

function ampaeDisplayDataTopNote()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetTopNoteUrl,
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
        var items = ampaeQtTopNote(data);
        $("#notifications").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtTopNote(data)
    {
        var s = '';
        var items = '';
        var i = 0;

        $.each(data, function ( key, val ) {

          if( typeof val.link !== 'undefined' && val.link !== null ){
            items += ampaeQtTopNoteItem(key, val);
            i++;
          }
        });


        s += '';
        s += '<button onclick="toggle_visibility(\'myDropdown\')" class="dropbtn icon-wrapper-white">';
            s += '<i class="fa fa-bell"></i>';
            if (i>0) {

                        s += '<span class="badge">'+i+'</span>';
            }
        s += '</button>';
        s += '<div id="myDropdown" class="dropdown-content" style="display:none;">';
        if (i>0){
          s += items;
        }
        s += '</div>';

        return s + '\n';
    }

    function ampaeQtTopNoteItem(key, val) {
      var r = '<a href="'+val.link+'">'+val.note+'</a>';
      return r + '\n';
    }
