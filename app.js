//  Get the open and close menu btns
const open_btn = document.getElementById('mobile-menu-btn');
const close_btn = document.getElementById('close-btn');

//  Then we also get the mobile menu
const mobile_menu = document.querySelector('.mobile-menu');

//  Ten we also need to grab the mobile menu links 
//  so as to close the mobile menu, when a link is clicked
const menu_links = document.querySelectorAll('.menu-link');

//  Add an event listener for the menu open btn
open_btn.addEventListener('click', () => {
    mobile_menu.classList.add('show-mobile-menu');
})

//  Add an event listener for the close open btn
close_btn.addEventListener('click', () => {
    mobile_menu.classList.remove('show-mobile-menu');
})

//  Add an event listener for the menu links in order
// to close the mobile menu when a link is clicked
menu_links.forEach(link => {
    link.addEventListener('click',() => {
        mobile_menu.classList.remove('show-mobile-menu');
    })
})