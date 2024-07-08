var i=0;
var slide = ["img/home3.jpg","img/home4.jpg","img/home5.jpg","img/home8.jpg","img/home10.jpg","img/home11.jpg"]

function hide() {
    document.main.src = slide[i]
       if(i<slide.length-1)
        i++;
     else
         i=0;
    
    setTimeout(hide,3000)
}
hide()


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu");
    const bar = document.querySelector(".bar");
    const homeTitle = document.querySelector(".home1 .text h1");

    menuIcon.addEventListener("click", function () {
        if (bar.style.display === "none" || bar.style.display === "") {
            bar.style.display = "flex";
        } else {
            bar.style.display = "none";
        }
    });
});

ScrollReveal({
    reset: true,
    distance: '40px' ,
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.first',{delay:500,origin:'right'});
ScrollReveal().reveal('.second',{delay:600,origin:'right'});
ScrollReveal().reveal('.third',{delay:600,origin:'left'});
ScrollReveal().reveal('.fourth',{delay:500,origin:'left'});

ScrollReveal({
    distance: '20px' ,
});
ScrollReveal().reveal('.Ser h1,.ti h1',{delay:500,origin:'top'});
ScrollReveal().reveal('.card',{delay:500,origin:'left'});
ScrollReveal().reveal('.comment_box,.text',{delay:500,origin:'right'});
ScrollReveal({
    distance: '40px' ,
});
ScrollReveal().reveal('.comment_box,.text h1',{delay:500,origin:'left'});


document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.socialIcons a , .footerNav a', {
        duration: 2000,
        distance: '40px',
        origin: 'bottom',
        delay: 300,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 200
    });

    const socialIcons = document.querySelectorAll('.socialIcons a');
    const social = document.querySelectorAll('.footerNav a');
});

document.addEventListener('DOMContentLoaded', function () {
    const profilePopup = document.getElementById('profile-popup');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.card_details a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            profilePopup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        profilePopup.style.display = 'none';
    });

    // Close the popup when clicking outside the profile card
    window.addEventListener('click', function (event) {
        if (event.target == profilePopup) {
            profilePopup.style.display = 'none';
        }
    });
});
