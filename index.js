// fading effect
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(e => {
//         if (e.isIntersecting) {
//             e.target.classList.add("fade-visible");
//         } else {
//             e.target.classList.remove("fade-visible");
//         }
//     });
// }, {
//     threshold: 0.3
// });

// // apply for all sections
// const sections = document.querySelectorAll(".fade");
// sections.forEach(s => {
//     observer.observe(s);
// });

function copyLink() {
    var link = "annanguyn99@gmail.com";
    navigator.clipboard.writeText(link);

    document.getElementById("copy-icon").style.display = "none";
    document.getElementById("tick-icon").style.display = "block";
}

// pop cat
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");

logo1.addEventListener("mouseover", () => {
    logo2.style.display = "block";
    logo1.style.display = "none";
});

logo1.addEventListener("mouseleave", () => {
    logo2.style.display = "none";
    logo1.style.display = "block";
});