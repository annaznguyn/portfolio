function copyLink() {
    const link = "annanguyn99@gmail.com";
    navigator.clipboard.writeText(link);

    document.getElementById("copy-icon").style.display = "none";
    document.getElementById("tick-icon").style.display = "block";
}

function toggleMenu() {
    const menu = document.getElementById("burger-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menu.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

// switching between original nav items and burger menu when resizing the screen
window.addEventListener("resize", function () {
    const menu = document.getElementById("burger-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const sidebar = document.getElementById("sidebar");

    if (window.innerWidth > 810) {
        menu.style.display = "none";
        menuIcon.style.display = "none";
        closeIcon.style.display = "none";
        sidebar.style.display = "flex"
    } else {
        sidebar.style.display = "none";
        menuIcon.style.display = "block";
    }
});

// pop cat
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");

logo1.addEventListener("mouseover", () => {
    logo2.style.display = "block";
    logo1.style.display = "none";
});

logo1.addEventListener("mouseleave", () => {
    logo2.style.display = "none";
    logo1.style.display = "block";
});

// vertical scroll animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        } else {
            e.target.classList.remove("show");
        }
    });
});

hiddenElements.forEach((e) => observer.observe(e));

// horizontal scroll animation
const horizontalHiddenElements = document.querySelectorAll(".hidden-horizontal");

const horizontalObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("show-horizontal");
        } else {
            e.target.classList.remove("show-horizontal");
        }
    });
});

horizontalHiddenElements.forEach((e) => horizontalObserver.observe(e));

// scroll between hackathon projects slides
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".slider-container").forEach((container) => {
        const slider = container.querySelector(".slider");
        const dots = container.querySelectorAll(".slider-nav a");
        const slides = container.querySelectorAll(".slider img, .slider video");

        dots[0].style.opacity = "1";

        dots.forEach((dot, index) => {
            dot.addEventListener("click", function (event) {
                event.preventDefault();
                
                const slideWidth = slides[0].clientWidth;

                slider.scrollTo({
                    left: slideWidth * index,
                    behavior: "smooth",
                });

                dots.forEach(dot => dot.style.opacity = "0.5");
                dots[index].style.opacity = "1";
            });
        });
    });
});
