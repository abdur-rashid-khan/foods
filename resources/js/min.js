window.addEventListener('scroll',function(){
    const header=document.querySelector('nav');
    header.classList.toggle('sticky',window.scrollY>0);
});
function openMenu(){document.getElementById('myNav').style.width="100%"}
function closeMenu(){document.getElementById('myNav').style.width="0%"}

var preloader = document.getElementById("loading");
function loading() {
    preloader.style.display = "none";
}
// jQuery
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:20,
        items:3,
        loop:true,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,
        responseresponsiveRefreshRate:true,
        responsive:{
            0:{
                items:1,
            },
            575.98:{
                items:1,
            },
            767.98:{
                items:2,
            },
            991.98:{
                items:3,
            },
            1199.98:{
                items:4,
            },
            1919.98:{
                items:5,
            }
        }
    });
    AOS.init({
    });

});