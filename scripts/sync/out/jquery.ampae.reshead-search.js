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

var ampaeGetHeadUrl         = 'feeds/feed-head.json';

jQuery(function($){
    ampaeDisplayDataHead();
});

function ampaeDisplayDataHead()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetHeadUrl,
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
        var items = ampaeQtHead(data);

            $("#cozy").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtHead(val)
    {
        var s = '';
        // var type = val.uid;
/*
        var v = "videoURL:'kgpYSUF8xn4'";
        v+=",containment:'self',autoPlay:true";
//        s += '<div class="player" data-property="{videoURL:\'https://www.youtube.com/watch?v=kgpYSUF8xn4\',containment:\'self\',autoPlay:true, loop:1, mute:true, rel:0, startAt:0, opacity:1, mute: true, showControls:false}">';
        s += '<div id="player" class="player" data-property="{'+v+'}">';
*/
s += '<section id="bill" class="bill">';

        s += '<div id="player" class="player" data-property="{}">';

          s += '<div class="overlay"><div class="text-center hbox">';
          s += '<img src="img/logo-white.svg" alt="Logo">';
/*
if (typeof variable !== 'undefined') {
    // the variable is defined
}
*/
          s += '<h2>'+val.head2+'</h2>';
          s += '<h3>'+val.head3+'</h3>';
          s += '<h4>'+val.head4+'</h4>';

          s += '</div></div>';
        s += '</div>';
        s += '</section>';

        s += '<section id="cta-home" class="cta-home">';
          s += '<div class="container">';
              s += '<div class="callout text-center">';
                s += '<a href="signin.html" class="btn btn-large btn-shadow-dark btn-orange-inverse" type="button">Sign Up</a>';
                s += '<a href="signin.html" class="btn btn-large btn-shadow-dark btn-black" type="button">Sign In</a>';
              s += '</div>';
          s += '</div>';
        s += '</section>';

        return s + '\n';
    }
