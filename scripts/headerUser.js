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

function toggle_visibility(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display!='none') ? 'none' : 'block');
}
