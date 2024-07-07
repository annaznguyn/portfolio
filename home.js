document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionIndex = Array.from(sections).indexOf(entry.target);
                const nextSection = sections[currentSectionIndex + 1];

                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                    observer.unobserve(entry.target); // Optional: to stop observing the current section
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});