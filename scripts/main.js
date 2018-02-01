$(document).ready(function(){

    /*$(".welcome-container").slideDown(1000);*/

    
});

var siteSubtext = '.site-subtext';
var normalSubtext = 'Scroll down to see more or <a class="resume-link" href="resume.html">click here for my resume</a>';
var resizedSubtext = 'Scroll down to see more or<br> <a class="resume-link" href="resume.html">click here for my resume</a>';
var resized = false;

$(window).resize(function(){
    if($(window).width() <= 500 && !resized){   
        $(siteSubtext).html(resizedSubtext);
        resized = true;
    }    
});

$(window).resize(function(){
    if($(window).width() > 500 && resized){
        $(siteSubtext).html(normalSubtext);
        resized = false;
    }
});


document.addEventListener('DOMContentLoaded', function(event){
    
        var dataText = ['Welcome'];
    
        function typeWriter(text, i, fnCallback){
    
            if(i < (text.length)){
    
                document.querySelector(".site-welcome").innerHTML = text.substring(0, i+1) + '<span class="site-welcome-span" aria-hidden="true"></span>';
    
                setTimeout(function(){
                    typeWriter(text, i + 1, fnCallback)
                }, 250);
            }
            else if(typeof fnCallback == 'function'){
                $(".site-subtext").fadeIn(1500);
                setTimeout(fnCallback, 700);
            }
        }
    
        function StartTextAnimation(i){
            if(typeof dataText[i] == 'undefined'){
                setTimeout(function(){
                    StartTextAnimation(0);
                }, 20000);
            }
    
            if(dataText[i] && i < dataText[i].length){
                typeWriter(dataText[i], 0, function(){
                    StartTextAnimation(i + 1);
                });
            }
        }
    
    StartTextAnimation(0);
});

/*
    Form Validation
*/

$(".contact-form").submit(function(){
    return false;
});

