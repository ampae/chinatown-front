  var s = '';
  s += '';
  s += '<button onclick="toggle_visibility(\'myDropdown2\')" class="dropbtn icon-wrapper-white">';
  s += '<i class="fa fa-user"></i>';
  s += '</button>';
  s += '<div id="myDropdown2" class="dropdown-content" style="display:none;"></div>';

  document.getElementById('topuser').insertAdjacentHTML('afterbegin', s);

  ampaeDealJson('feeds/feed-top.json', ampaeDisplayDataTop, 'myDropdown2'); // feed, callback, id, position

function ampaeDisplayDataTop(val) {
  var r = '<a href="'+val.link+'">'+val.value+'</a>';
  return r + '\n';
}
