/*
 * <codeheader>
 * <name>AMPAE Chinatown Front</name>
 * <version>1.0</version>
 * <description>Qt Chinatown Front</description>
 * <base>https://ampae.com/</base>
 * <author>AMPAE</author>
 * <email>info@ampae.com</email>
 * <copyright file="LICENSE.txt" company="AMPAE">
 * THIS CODE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR
 * A PARTICULAR PURPOSE.
 * </copyright>
 * <date>2019-06-28</date>
 * <summary>
 * Script for Chinatown Front;
 * </summary>
 * </codeheader>
*/
var breakPoint = 767;
var asideWidth = 260;
var asideRight = 400;

function chkScr(){
  if (window.innerWidth > breakPoint) {
    document.getElementById('chkMenu').checked = true;
    openNav();
    document.getElementById('main').style.right = asideRight + 'px';

  } else {
    document.getElementById('chkMenu').checked = false;
    closeNav();

  }
}

function showHideAsideLeft(chkMenu) {
   if(chkMenu.checked) {
     openNav();
   } else {
     closeNav();
   }
}

function openNav() {
  document.getElementById('main').style.left = asideWidth + 'px';
  document.getElementById('main').style.right = '-'+asideWidth+'px';
  document.getElementById('chkMenuLabel').innerHTML = '&times;';
}

function closeNav() {
  document.getElementById('main').style.left = '0';
  document.getElementById('main').style.right = '0';
  document.getElementById('chkMenuLabel').innerHTML = '&#9776;';
}
