//var i = 0; //ampaeJsonCount('feeds/feed-top-note.json');
ampaeJsonCount('feeds/feed-top-note.json','wallCount');
var s = '';
s += '';
s += '<button onclick="ampaeSetWall(\'kkk\')" class="dropbtn icon-wrapper-white">';
    s += '<i class="fa fa-dumpster-fire"></i>';
    s += '<span id="wallCount" class="badge" style="display:none;"></span>';
s += '</button>';

document.getElementById('walls').insertAdjacentHTML('afterbegin', s);

//ampaeDealJson('feeds/feed-top-note.json', ampaeDisplayDataTopNote, 'myDropdown'); // feed, callback, id, position

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
  ampaeSetWall('ini');
});
