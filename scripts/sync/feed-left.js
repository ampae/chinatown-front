ampaeDealJson('feeds/feed-left.json', ampaeQtLeftItem, 'leftside-navigation'); // feed, callback, id, position

function ampaeQtLeftItem(val) {

  var r = '<li><a href="'+val.link+'"><i class="fa '+val.icon+'"></i>'+val.value;
    if (val.upper) {
      r += '<i class="arrow fa fa-angle-right pull-right"></i></a></li>';
    }
    r += '</a></li>';
  return r + '\n';
}
