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
function ampaeDealJson(file,callback,id,pos='afterbegin') {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      ampaeJsonLoop(JSON.parse(xobj.responseText),callback,id,pos);
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

/*

*/
function ampaeDealMoreJson(file,callback,id,lim,off) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file + "?limit=" + lim + "&offset=" + off, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      document.getElementById('loader_image').style.display = "none";
      ampaeJsonMoreLoop(JSON.parse(xobj.responseText),callback,id,'afterbegin');
    }
  };
  xobj.send(null);
 }

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
