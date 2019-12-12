//var i = 0; //ampaeJsonCount('feeds/feed-top-note.json');
//ampaeJsonCount('feeds/feed-main.json','wallCount');


//ampaeDealJson('feeds/feed-top-note.json', ampaeDisplayDataTopNote, 'myDropdown'); // feed, callback, id, position
function ampaeChkMsgFn() {
   ampaeJsonCount('feeds/feed-main-cnt.json','wallCount');
}
function ampaeDisplayDataTopNote(val) {
  var r = '<a href="'+val.link+'">'+val.note+'</a>';
  return r + '\n';
}
function ampaeSetWall(v){
  ampaeJsonCountCls('wallCount');
  ampaeGetDataOffset = 0;
  ampaeDealMoreJson(ampaeGetDataUrl, ampaeItemMain, ampaeGetDataRes, ampaeGetDataLimit, ampaeGetDataOffset);
}

ampaeDocumentReady(function(){
  var s = '';
  s += '';
  s += '<button onclick="ampaeSetWall(\'kkk\')" class="dropbtn icon-wrapper-white">';
      s += '<i class="fa fa-dumpster-fire"></i>';
      s += '<span id="wallCount" class="badge" style="display:none;"></span>';
  s += '</button>';

  document.getElementById('walls').insertAdjacentHTML('afterbegin', s);
  var ampaeChkMsgInt = setInterval(ampaeChkMsgFn, 9000);
  ampaeSetWall('ini');
});
