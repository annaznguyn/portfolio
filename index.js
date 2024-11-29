const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('fade-visible');
        } else {
            e.target.classList.remove('fade-visible');
        }
    });
}, {
    threshold: 0.3
});

// apply for all sections
const sections = document.querySelectorAll('.fade');
sections.forEach(s => {
    observer.observe(s);
});