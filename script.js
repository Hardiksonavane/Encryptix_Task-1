
document.querySelectorAll('navlist').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault('navlist');

        document.querySelector(this.getAttribute('active')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const currentYear = new Date().getFullYear();
document.querySelector('bottom-bar').innerText = `&copy; ${currentYear} Your Name. All rights reserved.`;
