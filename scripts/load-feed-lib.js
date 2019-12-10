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
function loadxJSON(file,callback,id) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      document.getElementById(id).insertAdjacentHTML('beforeend', callback(JSON.parse(xobj.responseText)));
    }
  };
  xobj.send(null);
 }

/*
function loadJSON(file,callback,callback2,id) {
var xobj = new XMLHttpRequest();
 xobj.overrideMimeType("application/json");
 xobj.open('GET', file, true);
 xobj.onreadystatechange = function () {
 if (xobj.readyState == 4 && xobj.status == "200") {
 callback(xobj.responseText,callback2,id);
 }
 };
 xobj.send(null);
 }

 function dealJsonHtml(data,callback,id) {
   var mydata = JSON.parse(data);
   var items = callback(mydata);
   var d1 = document.getElementById(id);
   d1.insertAdjacentHTML('beforeend', items);
 }
*/
