  var propsHeader = {
      'loaderfile': 'img/loader.gif',
      'loadertitle': 'Loading...please wait',
  }
  ampaeDoTmpl('tmpl/header-dash', 'tmpl', 'header', 'afterbegin', null);

  var propsMain = {
      'loaderfile': 'img/loader.gif',
      'loadertitle': 'Loading...please wait',
  }
  ampaeDoTmpl('tmpl/main-dash', 'tmpl', 'main', 'afterbegin', propsMain);

    var propsLeftMenu = {
        'leftmenu': 'John'
    }
    ampaeDoTmpl('tmpl/aside-left', 'tmpl', 'asideLeft', 'afterbegin', propsLeftMenu);

    var propsRight = {
        'leftmenu': 'John'
    }
    ampaeDoTmpl('tmpl/aside-right', 'tmpl', 'asideRight', 'afterbegin', null);


    ampaeDoTmpl('tmpl/dialog', 'tmpl', 'dialog', 'afterbegin', null);
    ampaeDoTmpl('tmpl/footer', 'tmpl', 'colophon', 'afterbegin', null);


    ctLoadCssFile('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');
    ctLoadCssFile('styles/style.css');
    ctLoadCssFile('styles/dashboard/style.css');
