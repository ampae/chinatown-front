/*
 * <codeheader>
 * <name>AMPAE Qt LightBox</name>
 * <version>1.0</version>
 * <description>Qt LightBox</description>
 * <base>https://ampae.com/</base>
 * <author>AMPAE</author>
 * <email>info@ampae.com</email>
 * <copyright file="LICENSE.txt" company="AMPAE">
 * THIS CODE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR
 * A PARTICULAR PURPOSE.
 * </copyright>
 * <date>2018-09-17</date>
 * <summary>
 * Script for Qt LightBox;
 * </summary>
 * </codeheader>
*/
/*
jQuery(function($) {
  var qtPopupTmpl = '<div class="qt_popup_header">';
  qtPopupTmpl += '<span id="qt_popup_close" class="qt-popup-close-button">X</span>';
  qtPopupTmpl += '</div><div class="qt_popup_body"><div class="qt_popup_content"></div></div>';
  qtPopupTmpl += '<div class="qt_popup_footer"></div>';
  $("#qt_popup").prepend(qtPopupTmpl);
});
*/

jQuery(function($) {

    $('.qt-lightbox').click( function(e) {
        e.preventDefault();

		var tmp_href = $(this).attr('data-source');
		var tmp_title = $(this).attr('title');
    var tmp_desc = $(this).attr('desc');
		var tmp_type = $(this).attr('qt-lightbox-type');

    if (tmp_type=='iframe') {

    var tmp_ifr = '<div class="qt-lightbox-iframe"><iframe id="qt_lightbox_iframe" class="" src="' + tmp_href + '" ></iframe></div>';
    $(tmp_ifr).appendTo('#qt_popup .qt_popup_body .qt_popup_content');


    } else {

$('#qt_popup .qt_popup_body .qt_popup_content').css('background', 'url('+tmp_href+') center center  no-repeat');

$('#qt_popup .qt_popup_body .qt_popup_content').css('background-size', 'contain');


$('#qt_popup .qt_popup_body .qt_popup_content').css('-webkit-background-size', 'contain');
$('#qt_popup .qt_popup_body .qt_popup_content').css('-moz-background-size', 'contain');
$('#qt_popup .qt_popup_body .qt_popup_content').css('-o-background-size', 'contain');

$('<span class=title>' + tmp_title + '</span>').appendTo('#qt_popup .qt_popup_header');
$('<span class=desc>' + tmp_desc + '</span>').appendTo('#qt_popup  .qt_popup_footer');

}

qt_popup_up();

	});

});


jQuery(document).on('click', '#qt_popup_close', function() {qt_popup_down();});
//jQuery(document).on('click', '#qt_popup_overlay', function() {qt_popup_down();});
jQuery(document).on('click', '#qt_popup .qt_popup_content', function() {qt_popup_down();});



function qt_popup_up(){
//  jQuery('html, body').css({'overflow': 'hidden','height': '100%'});
//  jQuery('body').bind('touchmove', function(e){e.preventDefault()});

  jQuery('body').prepend('<div id="qt_popup_overlay" class="qt_popup_overlay"></div>');

  jQuery('#qt_popup_overlay').animate({opacity:0.9},500);

/*
  jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
*/
  jQuery('#qt_popup').fadeIn(500);
}

function qt_popup_down(){
//  jQuery('html, body').css({'overflow': 'auto','height': 'auto'});
//  jQuery('body').unbind('touchmove');


  jQuery('#qt_popup').fadeOut(500);

//  jQuery('#qt_popup_overlay').animate({opacity:0},500);

  jQuery('#qt_popup_overlay').animate({opacity:0.0},500, function(){
    jQuery('#qt_popup .qt_popup_header .title').remove();
    jQuery("#qt_popup .qt_popup_body .qt_popup_content").css('background-image', 'none');
    jQuery('.qt-lightbox-iframe').remove();
    jQuery('#qt_popup .qt_popup_footer .desc').remove();
    jQuery('#qt_popup_overlay').remove();
  });


//  jQuery('#qt_popup_overlay').remove();
}
