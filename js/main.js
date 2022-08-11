const primaryNav = document.querySelector(".sidebar");

const navToggle = document.querySelector(".mobile-menu-btn");

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('open')
})



