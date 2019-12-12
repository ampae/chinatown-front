function ampaeDisplayDataTopNote(val) {
  var r = '<a href="'+val.link+'">'+val.note+'</a>';
  return r + '\n';
}

ampaeDocumentReady(function(){
  var s = '';
  s += '';
  s += '<button onclick="toggle_visibility(\'myDropdown\')" class="dropbtn icon-wrapper-white">';
      s += '<i class="fa fa-bell"></i>';
      //if (i>0) {
        s += '<span id="msgCount" class="badge" style="display:none;"></span>';
      //}
  s += '</button>';
  s += '<div id="myDropdown" class="dropdown-content" style="display:none;"></div>';

  document.getElementById('notifications').insertAdjacentHTML('afterbegin', s);

  ampaeJsonCount('feeds/feed-top-note-cnt.json','msgCount');

  ampaeDealJson('feeds/feed-top-note.json', ampaeDisplayDataTopNote, 'myDropdown'); // feed, callback, id, position


});
