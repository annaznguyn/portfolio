// fading effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("fade-visible");
        } else {
            e.target.classList.remove("fade-visible");
        }
    });
}, {
    threshold: 0.3
});

// apply for all sections
const sections = document.querySelectorAll(".fade");
sections.forEach(s => {
    observer.observe(s);
});

// indicate the current section by keeping the line under that section in the nav bar
// function keepUnderline(id) {
//     const allLinks = document.querySelectorAll("nav ul li a");
//     allLinks.forEach(link => link.classList.remove("active"));

//     const current = document.getElementById(id);
//     current.classList.add("active");
// }