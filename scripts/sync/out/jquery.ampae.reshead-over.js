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

var ampaeGetHeadOverUrl         = 'feeds/feed-head.json';

jQuery(function($){
    ampaeDisplayDataHeadOver();
});

function ampaeDisplayDataHeadOver()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetHeadOverUrl,
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
        var items = ampaeQtHeadOver(data);

            $("#bannerOverlay").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtHeadOver(val)
    {
        var s = '';

          s += '<div class="text-center hbox">';
          s += '<img src="img/logo-white.svg" alt="Logo">';
/*
if (typeof variable !== 'undefined') {
    // the variable is defined
}
*/
          s += '<h2>'+val.head2+'</h2>';
          s += '<h3>'+val.head3+'</h3>';
          s += '<h4>'+val.head4+'</h4>';

          s += '</div>';

        return s + '\n';
    }
