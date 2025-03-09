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

// switching between original nav items and burger menu
window.addEventListener("resize", function() {
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
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".slider-container").forEach((container) => {
        const slider = container.querySelector(".slider");
        const dots = container.querySelectorAll(".slider-nav a");
        const slides = container.querySelectorAll(".slider img, .slider video");

        dots[0].style.opacity = "1";

        dots.forEach((dot, index) => {
            dot.addEventListener("click", function(event) {
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

// stars effect
function createStars() {
    const starsRise = document.createElement("div");
    // var starsLeftToRight = document.createElement("div");
    // var starsRightToLeft = document.createElement("div");
    const starsRiseBlurry = document.createElement("div");

    starsRise.classList.add("star-rise");
    // starsLeftToRight.classList.add("star-left-to-right");
    // starsRightToLeft.classList.add("star-right-to-left");
    starsRiseBlurry.classList.add("star-rise-blurry");

    const starVerticalStart = Math.random() * window.innerWidth;
    // var starsHorizontalStart = Math.random() * window.innerHeight;

    starsRise.style.left = `${starVerticalStart}px`;
    // starsLeftToRight.style.top = `${starsHorizontalStart}px`;
    // starsRightToLeft.style.top = `${starsHorizontalStart}px`;
    starsRiseBlurry.style.left = `${starVerticalStart}px`;

    document.querySelector(".intro-container").appendChild(starsRise);
    // document.querySelector(".intro-container").appendChild(starsLeftToRight);
    // document.querySelector(".intro-container").appendChild(starsRightToLeft);
    document.querySelector(".star-rise-blurry").appendChild(starsRiseBlurry);

    setTimeout(() => {
        starsRise.remove();
        // starsLeftToRight.remove();
        // starsRightToLeft.remove();
        starsRiseBlurry.remove();
        // snowBlurry.remove();
    }, 10000);
}

// setInterval(createStars, 1000);

// function moveBall(x, y, xSpeed, ySpeed, ballWall, introContainerWall) {
//     if (ballWall.left <= introContainerWall.left || ballWall.right >= introContainerWall.right) {
//         xSpeed *= -1
//     }

//     if (ballWall.top <= introContainerWall.top || ballWall.bottom >= introContainerWall.bottom) {
//         ySpeed *= -1
//     }

//     x += xSpeed;
//     y += ySpeed;

//     ball.style.left = `${x}px`;
//     ball.style.top = `${y}px`;

//     requestAnimationFrame(moveBall);
// }

// ball
// document.addEventListener("DOMContentLoaded", function() {
//     const introContainer = document.querySelector(".intro-container");
//     const ball = document.querySelector(".ball");

//     const introContainerWall = introContainer.getBoundingClientRect();
//     const ballWall = ball.getBoundingClientRect();

//     let x = 0;
//     let y = 0;
//     let xSpeed = 3;
//     let ySpeed = 3;

//     moveBall(x, y, xSpeed, ySpeed, ballWall, introContainerWall);
// });