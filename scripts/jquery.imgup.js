
var maxImgSize = 4194304;

jQuery(function($) {
    $('#photoimg').change(function(){
        if(this.files[0].size < maxImgSize) {
            if (this.files[0].name.match(/\.jpg$/) == null && this.files[0].name.match(/\.png$/) == null && this.files[0].name.match(/\.JPG$/) == null && this.files[0].name.match(/\.jpeg$/) == null) {
                alert('Not supported');
            } else {
                $("#co-post-img").html( $("input[name*='iid']").val() );
                $("#preview").html('');$("#preview").html('<img src="img/loader.gif" alt="Uploading..."/>');
                $("#imageform").ajaxForm({target: '#preview'}).submit();
            }
        } else {
            alert('Too Big');
        }
    });
});
function getFfile(){
    document.getElementById("photoimg").click();
}
