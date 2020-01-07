window.onload = function() {

  var propsHeader = {
      'loaderfile': 'img/loader.gif',
      'loadertitle': 'Loading...please wait',
  }
  ampaeDoTmpl('tmpl/header-index', 'tmpl', 'header', 'afterbegin', null);

  var propsMain = {
      'loaderfile': 'img/loader.gif',
      'loadertitle': 'Loading...please wait'
  }
  ampaeDoTmpl('tmpl/main-index', 'tmpl', 'main', 'afterbegin', null);

  var propsLeftMenu = {
      'leftmenu': 'John'
  }
  ampaeDoTmpl('tmpl/aside-left', 'tmpl', 'asideLeft', 'afterbegin', propsLeftMenu);
  ampaeDealJson('feeds/feed-left.json', ampaeQtLeftItem, 'leftside-navigation'); // feed, callback, id, position

  var propsRight = {
      'leftmenu': 'John'
  }
  ampaeDoTmpl('tmpl/aside-right', 'tmpl', 'asideRight', 'afterbegin', null);
  ampaeDealJson('feeds/feed-right.json', ampaeQtRightItem, 'asideRight'); // feed, callback, id, position


  ctLoadCssFile('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');
  ctLoadCssFile('styles/style.css');
  ctLoadCssFile('styles/index/style.css');
}
