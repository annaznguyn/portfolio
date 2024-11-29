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

// slideshow effect
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

// document.addEventListener('DOMContentLoaded', () => {
//     const swiper = new Swiper('.swiper', {
//         spaceBetween: 5,
//         slidesPerView: 3,
//         loop: true,
//         // allowSlideNext: true,
//         // speed: 500,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//         breakpoints: {
//             // Responsive breakpoints for different screen sizes
//             320: {
//                 slidesPerView: 1, // For small screens, show 1 slide at a time
//             },
//             480: {
//                 slidesPerView: 2, // For small-medium screens, show 2 slides at a time
//             },
//             768: {
//                 slidesPerView: 3, // For medium screens, show 3 slides at a time
//             },
//             1024: {
//                 slidesPerView: 4, // For larger screens, show 4 slides at a time
//             },
//         }
//     });

    // const mySwiper = document.querySelector('.swiper').swiper;
    // if (mySwiper) {
    //     mySwiper.slideNext();
    // } else {
    //     console.error('Swiper instance not found');
    // }
// });