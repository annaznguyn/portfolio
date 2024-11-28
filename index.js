const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-visible');
        } else {
            entry.target.classList.remove('fade-visible');
        }
    });
}, {
    threshold: 0.4
});

// apply for all sections
const sections = document.querySelectorAll('.fade');
sections.forEach(section => {
    observer.observe(section);
});