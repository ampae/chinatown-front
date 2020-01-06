/*
jQuery(function($) {
$("#navigation-dash .sub-menu > a").click(function(e) {
$("#navigation-dash ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
e.stopPropagation()
})
});
*/

jQuery(function($) {
    $("#navigation-dash .sub-menu > a").click(function(e) {
        $("#navigation-dash ul ul").slideUp();
        $(this).next().is(":visible") || $(this).next().slideDown();
        e.stopPropagation();
    })
});

/*
const items = document.getElementById("kkk").querySelectorAll('.sub-menu > a');
items.forEach(item => {
	item.addEventListener('click',(e)=>{
    alert(e.target.toString());
		//console.log(e.target.textContent);
    //alert(e.target.textContent);
    //$("#navigation-dash ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
	}
	)
})
*/

/*
var el = document.querySelector("#kkk .sub-menu > a");
el.onclick = function what_to_do(){
var theText = this.innerHTML;
alert(theText);
}
*/
