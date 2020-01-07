/**
 * <codeheader>
 * <name>Bonsai Front</name>
 * <version>2.1</version>
 * <description>Display JSON Data as an HTML5 Article</description>
 * <base>https://ampae.com/bonsai/</base>
 * <author>V Bugroff</author>
 * <author>M Karodine</author>
 * <email>bugroff@protonmail.com</email>
 * <email>usr04@protonmail.com</email>
 * <copyright file="LICENSE.txt" company="AMPAE">
 * THIS CODE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR
 * A PARTICULAR PURPOSE.
 * </copyright>
 * <date>2019-01-01</date>
 * <summary>
 * Script File
 * </summary>
 * </codeheader>
**/

function ampaeDocumentReady(callback){
  if (/complete/i.test(document.readyState)) {
    callback();
  } else {
    setTimeout(ampaeDocumentReady,50,callback);
  }
}
//ampaeDocumentReady(function(){});
/*
if (/loaded|complete/i.test(document.readyState)) {
if( !/in/.test(document.readyState) ) {
Browser has 3 loading states: "loading", "interactive", and "complete"
(older WebKit also used "loaded", but you don't have to worry about that any more).
You will notice that both "loading" and "interactive" contain the text "in"...
so if the string "in" is found inside of document.readyState,
then we know we are not ready yet.
*/

function ampaeGetFile(file,callback) {
  var xobj = new XMLHttpRequest();
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  //xobj.setRequestHeader('Access-Control-Allow-Headers', '*');
  //xobj.setRequestHeader('Access-Control-Allow-Origin', '*');
  xobj.send(null);
 }

function ampaeReplaceCurly(string, arr) {
var regex = /{{(.*?)}}/g;
return string.replace(regex, (m, c) => (arr)[c.trim().toLowerCase()]);
}

function ampaeGetJson(file,callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.setRequestHeader('Accept', 'application/json');
  // xobj.setRequestHeader('Content-Type', 'application/json');
  xobj.setRequestHeader('Access-Control-Allow-Headers', '*');
  xobj.setRequestHeader('Access-Control-Allow-Origin', '*');
  // xobj.setRequestHeader("Authorization", "Basic <API KEY>");
  xobj.send(null);
 }

 /**
  * APP - Library
 **/

 function ampaeDoTmpl(file,ext,id,pos,arr) {
   ampaeGetFile (file+'.'+ext,function(data) {
       document.getElementById(id).insertAdjacentHTML(pos, ampaeReplaceCurly(data,arr));
   });
 }

 /**
  * 
 **/

function ampaeDealJson(file,callback,id,pos='afterbegin') {
  ampaeGetJson (file,function(data) {
      ampaeJsonLoop(data,callback,id,pos);
  });
 }

 function ampaeJsonCount(file,id) {
   var cnt = 0;
   ampaeGetJson (file,function(data) {
     cnt = data[0]['cnt'];
     if (cnt>0) {
       if (cnt>9) {
         cnt='9+';
       }
       document.getElementById(id).innerHTML = cnt;
       document.getElementById(id).style.display = "block";
     }
   });
 }

 function ampaeDealMoreJson(file,callback,id,lim,off) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', file + "?limit=" + lim + "&offset=" + off, true);
   xobj.onreadystatechange = function () {
     if (xobj.readyState == 4 && xobj.status == "200") {
       if (off===0) {
         document.getElementById(id).innerHTML="";
       }
       document.getElementById('loader_image').style.display = "none";
       ampaeJsonMoreLoop(JSON.parse(xobj.responseText),callback,id,'afterbegin');
     }
   };
   xobj.send(null);
  }


 function ampaeJsonLoop(data,callback,id,pos) {
    data.forEach(function (val) {
        ampaeAppendHTML(id,callback(val),pos);
    });
 }

function ampaeAppendHTML(id,data,pos) {
  document.getElementById(id).insertAdjacentHTML(pos, data);
}

function ampaeJsonCountCls(id) {
  document.getElementById(id).innerHTML = '';
  document.getElementById(id).style.display = "none";
}


/*
function ampaeJsonCount(file,id) {
  var items = null;
  var cnt = 0;
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function (items) {
    if (xobj.readyState == 4 && xobj.status == "200") {
      items = JSON.parse(xobj.responseText);

      cnt = items[0]['cnt'];
      if (cnt>0) {
        if (cnt>9) {
          cnt='9+';
        }
        document.getElementById(id).innerHTML = cnt;
        document.getElementById(id).style.display = "block";
      }

    }
  }
  xobj.send(null);
}
*/



 function ampaeJsonMoreLoop(data,callback,id,pos) {
   if (data == "") {
     document.getElementById('loader_message').innerHTML='<div class="cnt"><hr></div>';
   } else {
     document.getElementById('loader_message').innerHTML='<div class="cnt"><button class="btn btn-medium btn-skew btn-shadow-dark btn-red" type="button">Load More..</button></div><br />';
   }
    data.forEach(function (val) {
        ampaeAppendHTML(id,callback(val),pos);
    });
 }
