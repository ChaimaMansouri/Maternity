// JavaScript for toggling sections

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.bar a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});

document.querySelectorAll('.reply-button').forEach(button => {
    button.addEventListener('click', () => {
        const replySection = button.nextElementSibling;
        if (replySection.style.display === "none" || replySection.style.display === "") {
            replySection.style.display = "block";
            
        } else {
            replySection.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.getElementsByClassName('p');

    Array.from(paragraphs).forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            if (paragraph.classList.contains('expanded')) {
                paragraph.classList.remove('expanded');
                paragraph.classList.add('p');
            } else {
                paragraph.classList.add('expanded');
                paragraph.classList.remove('p');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.m1', {
        duration: 2000,
        distance: '50px',
        origin: 'left',
        delay: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 200
    });

    const socialIcons = document.querySelectorAll('.m1');
});


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

document.addEventListener('DOMContentLoaded', function () {
    const profilePopup = document.getElementById('profile-popup');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.account-client a').forEach(item => {
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
