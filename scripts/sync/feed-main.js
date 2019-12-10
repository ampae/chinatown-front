var ampaeGetDataLimit = 5
var ampaeGetDataOffset = 0;
var ampaeGetDataUrl = 'feeds/feed-main.json';
var ampaeGetDataRes = 'results';

var ampaeGetDataMessage = 'loader_message';
var ampaeGetDataImage = 'loader_image';
// var ampaeResArt = 'ampaeResArt';

document.getElementById("loader_message").onclick = function() {ampaeDisplayDataRec()};

function ampaeDisplayDataRec() {
  ampaeDealMoreJson(ampaeGetDataUrl, ampaeItemMain, ampaeGetDataRes, ampaeGetDataLimit, ampaeGetDataOffset);
  ampaeGetDataOffset = ampaeGetDataLimit + ampaeGetDataOffset;
}

ampaeDealMoreJson(ampaeGetDataUrl, ampaeItemMain, ampaeGetDataRes, ampaeGetDataLimit, ampaeGetDataOffset);


function ampaeItemMain(val) {
  var s = '';
	var type = val.uid;

	s += '<article id="post-' + val.did + '" class="hentry">';

	if (val.value_3 != '') {
		s += '<figure>';
		s += '<div class="panel-thumbnail">';
		s += '<span class="qt-lightbox" data-source="' + val.value_3 + '" title="Image Title" desc="Image Description">';
		s += '<a href="' + val.value_3 + '">';
		s += '<img width="250" height="250" src="' + val.value_3 + '" class="" alt="" />';
		s += '</a>';
		s += '</span>';
		s += '</div>';
		s += '</figure>';
	}
	s += '<header class="entry-header">';
	s += '<section class="author">';
	s += '<a class="author vcard" href="#"><img alt="" src="' + val.avatar + '" class="avatar avatar-50 photo" height="50" width="50" /> • ' + val.uname + '</a>';
	s += '</section>';

	s += '<section class="time-loc">';
	s += '<time class="updated" datetime="2019-05-18">' + val.ago + '</time>';
	s += '</section>';

	s += '</header><!-- .entry-header -->';

	s += '<section class="entry-content">';

	s += '<p id="fu-msg-' + val.did + '" class="mmsg">' + val.value + '</p><br />';
	s += '</section><!-- .entry-content -->';

	s += '<footer class="entry-footer">';
	s += '<div class="pull-right">';
	s += '<a class="btn btn-small btn-orange-inverse" href="#">read | comment</a>';
	s += '</div>';
	s += '<p class="">';
	s += '<a href="#">comments</a>';
	s += '</p>';
	s += '<a href="#" rel="category tag">HTML</a> <br />  # <a href="#" rel="tag">css</a>';
	s += '</footer><!-- .entry-footer -->';
	s += '</article><!-- #post-## -->';

	return s + '\n';
}
