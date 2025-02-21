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
        console.log(menu.style.display)
    }
}

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

// vertical, downwards scroll animation
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