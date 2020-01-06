ampaeDealJson('feeds/feed-left.json', ampaeQtLeftItem, 'leftside-navigation'); // feed, callback, id, position
function ampaeQtLeftItem(val) {
  var r = '';
  if (val.link!==undefined) {
    r = ampaeQtLeftInner(val);
  } else {
    r = '<li class="sub-menu">';
    r += '<a href="javascript:void(0);"><i class="fa '+val.icon+'"></i><span>'+val.value+'</span>';
    r += '<i class="arrow fa fa-angle-right pull-right"></i></a><ul>\n';
    r += ampaeQtLeftLoop(val.sub);
    r += '</ul></li>\n';
  }
  return r + '\n';
}
function ampaeQtLeftLoop(items) {
  var r = '';
  items.forEach(function (val) {
    r += ampaeQtLeftInnerK(val);
  });
  return r;
}
function ampaeQtLeftInner(val) {
  var r = '<li><a href="'+val.link+'"><i class="fa '+val.icon+'"></i>'+val.value+'</a></li>\n';
  return r;
}
function ampaeQtLeftInnerK(val) {
    var r = '<li><a href="'+val.link+'">'+val.value+'</a></li>\n';
  return r;
}
/*
<li class="sub-menu"><a href="javascript:void(0);"><i class="fa fa-cogs"></i><span>UI Elements</span>
<i class="arrow fa fa-angle-right pull-right"></i></a>
<ul>
<li>
<a href="ui-alerts-notifications.html">Alerts &amp; Notifications</a>
</li>
*/
