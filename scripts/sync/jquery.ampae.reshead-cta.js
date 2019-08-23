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

var ampaeGetHeadCtaUrl         = 'feeds/feed-head.json';

jQuery(function($){
    ampaeDisplayDataHeadCta();
});

function ampaeDisplayDataHeadCta()
{
$.ajax({
    type: "GET",
    async: true,
    url: ampaeGetHeadCtaUrl,
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
        var items = ampaeQtHeadCta(data);

            $("#cta-home").append(items);

        if (data == "") {
            //$("#loader_message").html('<div class="cnt"><hr></div>').show()
        }

    }
    });
}


    function ampaeQtHeadCta(val)
    {
        var s = '';

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
