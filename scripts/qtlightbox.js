//window.onload = ampaeDocumentReady ( function() {
const tmp_popup = document.getElementById("qt_popup");
const tmp_popup_header = document.getElementById("qt_popup_header");
const tmp_popup_content = document.getElementById("qt_popup_content");
const tmp_popup_footer = document.getElementById("qt_popup_footer");
const tmp_body = document.getElementsByTagName('body');
//});

    jQuery('.qt-lightbox').click(function(e) {
        e.preventDefault();

        var tmp_href = this.getAttribute('data-source');
        var tmp_title = this.getAttribute('title');
        var tmp_desc = this.getAttribute('desc');
        var tmp_type = this.getAttribute('qt-lightbox-type');


tmp_popup_content.style.background = 'url(' + tmp_href + ') center center  no-repeat';
tmp_popup_content.style.backgroundSize = 'contain';

tmp_popup_header.innerHTML='<span class=title>' + tmp_title + '</span>'; // !!! it kills cross !!!
tmp_popup_footer.innerHTML='<span class=desc>' + tmp_desc + '</span>';

var newElement = document.createElement('div');
newElement.setAttribute('id', 'qt_popup_overlay');
newElement.setAttribute('class', 'qt_popup_overlay');
//newElement.setAttribute('class', 'qtHide');

document.body.appendChild(newElement);

var tmp_popup_overlay = newElement; //document.getElementById("qt_popup_overlay");

        qt_popup_up(newElement);

        tmp_popup_content.addEventListener('click',kk=(e)=>{
          tmp_popup_content.removeEventListener('click',kk,false);
          qt_popup_down(newElement);
        });

    });





function qt_popup_up(tmp_popup_overlay) {


    //tmp_popup_overlay.style.background = '#ff9900';
    tmp_popup_overlay.classList.remove('qtHide');
    tmp_popup_overlay.classList.add('qtShow');

    tmp_popup.classList.add('qtShow');

    setTimeout(function(){
      tmp_popup.style.display = 'block';
      //tmp_popup.style.opacity = '1';
    }, 500);


    //tmp_popup.classList.remove('qtHide');
    //tmp_popup.classList.add('qtShow');

    //jQuery('#qt_popup').fadeIn(500);
}

function qt_popup_down(tmp_popup_overlay) {
    //var tmp_popup_overlay = document.getElementById("qt_popup_overlay");

    //jQuery('#qt_popup').fadeOut(500);

    tmp_popup.style.display = 'none';

    tmp_popup_overlay.classList.remove('qtShow');
    tmp_popup_overlay.classList.add('qtHide');

    //tmp_popup.classList.remove('qtShow');
    //tmp_popup.classList.add('qtHide');

    setTimeout(function(){
      tmp_popup_content.style.backgroundImage = 'none';
      tmp_popup_header.innerHTML='';
      tmp_popup_footer.innerHTML='';

      tmp_popup_overlay.parentNode.removeChild(tmp_popup_overlay);

      //  jQuery('.qt-lightbox-iframe').remove();
    }, 500);


}
