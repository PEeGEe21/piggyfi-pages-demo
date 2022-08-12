const primaryNav = document.querySelector(".sidebar");

const navToggle = document.querySelector(".mobile-menu-btn");

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('open')
})

// const dropbtnvalue = document.querySelector(".dropdown-toggle").getAttribute('aria-expanded');
// const dropbtn = document.querySelector("# dropdownMenuButton")
// const dropdown = document.querySelector(".dropdown");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// console.log(dropbtn)


// dropbtn.addEventListener('click', () => {
//     const visibility = dropbtn.getAttribute('aria-expanded')
//     console.log(visibility)
//     dropdown.classList.toggle('show')
//     dropdownMenu.classList.toggle('show')
// })


document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-btn]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('show')
        
    }

    document.querySelectorAll("[data-dropdown].show").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('show')
    })
})

