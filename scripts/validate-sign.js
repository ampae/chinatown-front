/*
 * <codeheader>
 * <name>ChinaTown</name>
 * <version>5.1.1</version>
 * <description>User Registration and Management LAMP SaaS FrameWork. Secure, Fast, Small and Light.</description>
 * <base>https://ampae.com/chinatown/</base>
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
 */
jQuery(function($) {

    $.validator.addMethod("pwcheck", function(value) {
        return /^[A-Za-z0-9\d=!\-@#$%._=^&*()~]*$/.test(value) // consists of only these
            &&
            /[a-z]/.test(value) // has a lowercase letter
            &&
            /\d/.test(value) // has a digit
    });

    $('#sin-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            pword: {
                required: true,
                /*
                pwcheck: true,
                */
                rangelength: [6, 32]
            },
        },
        messages: {
            pword: {
                required: "Password Reqired!",
                pwcheck: "Password shoud be strong!",
                rangelength: "Password should be between 6 and 32 characters!"
            }
        }
    });

    $('#sup-form').validate({
        rules: {
            uname: {
                required: true,
                rangelength: [4, 64]
            },
            email: {
                required: true,
                email: true
            }
        }
    });

    $('#req-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }
    });


});
