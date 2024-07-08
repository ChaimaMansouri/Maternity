document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.global.login').style.display = 'none';
        document.querySelector('.signup').style.display = 'block';
    });

    document.getElementById('login-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.signup').style.display = 'none';
        document.querySelector('.global.login').style.display = 'block';
    });
});

