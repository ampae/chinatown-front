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
window.onscroll = function() {

  if(window.innerWidth > 1000) {
    ampaeScroll();
  } else {
    ampaeNoScroll();
  }
};

function ampaeScroll() {

  var topNavBar = document.getElementById("topnav").classList;
  var headerLogo = document.getElementById("headerLogoImg");

  var main = document.getElementById("main");
  var stickyMain = main.offsetTop;

  var asideLeft = document.getElementById("asideLeft");
  var asideRight = document.getElementById("asideRight");

  if (window.pageYOffset >= stickyMain) {

          asideLeft.classList.remove("absLeft");
          asideLeft.classList.add("stickyLeft");

          asideRight.classList.remove("absRight");
          asideRight.classList.add("stickyRight");
  } else {
          asideLeft.classList.remove("stickyLeft");
          asideLeft.classList.add("absLeft");

          asideRight.classList.remove("stickyRight");
          asideRight.classList.add("absRight");
  }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  topNavBar.remove("navBarBig");
  topNavBar.add("navBarSmall");

  headerLogo.style.width = "32px";

} else {
  topNavBar.remove("navBarSmall");
  topNavBar.add("navBarBig");

  headerLogo.style.width = "64px";
}

}

function ampaeNoScroll() {
  var topNavBar = document.getElementById("topnav").classList;
  var headerLogo = document.getElementById("headerLogoImg");
  topNavBar.remove("navBarBig");
  topNavBar.add("navBarSmall");

  headerLogo.style.width = "32px";
}
