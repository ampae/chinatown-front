window.onload = function() {

  var propsHeader = {
      'loaderfile': 'img/loader.gif',
      'loadertitle': 'Loading...please wait',
  }
  ampaeDoTmpl('tmpl/header-dash', 'tmpl', 'body', 'afterend', propsHeader);

  var propsMain = {
      'loaderfile': 'img/loader.gif',
      'loadertitle': 'Loading...please wait',
  }
  ampaeDoTmpl('tmpl/main', 'tmpl', 'body', 'afterend', propsMain);
  //ampaeDoTmpl('tmpl/main', 'tmpl', 'header', 'afterend', propsMain);

    var propsLeftMenu = {
        'leftmenu': 'John'
    }
    ampaeDoTmpl('tmpl/aside-left', 'tmpl', 'main', 'afterend', propsLeftMenu);
    ampaeDealJson('feeds/feed-left.json', ampaeQtLeftItem, 'leftside-navigation'); // feed, callback, id, position

    var propsRight = {
        'leftmenu': 'John'
    }
    ampaeDoTmpl('tmpl/aside-right', 'tmpl', 'main', 'afterend', null);
    ampaeDealJson('feeds/feed-right.json', ampaeQtRightItem, 'asideRight'); // feed, callback, id, position


    //ampaeDoTmpl('tmpl/dialog', 'tmpl', 'main', 'afterend', null);
    //ampaeDoTmpl('tmpl/footer', 'tmpl', 'main', 'afterend', null);




}
