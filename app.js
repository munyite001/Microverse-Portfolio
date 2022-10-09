//  Get the open and close menu btns
const openBnt = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-btn');

//  Then we also get the mobile menu
const mobileMenu = document.querySelector('.mobile-menu');

//  Ten we also need to grab the mobile menu links
//  so as to close the mobile menu, when a link is clicked
const menuLinks = document.querySelectorAll('.menu-link');

//  Add an event listener for the menu open btn
openBnt.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

//  Add an event listener for the close open btn
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-mobile-menu');
});

//  Add an event listener for the menu links in order
// to close the mobile menu when a link is clicked
menuLinks.forEach(link, (link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu');
  });
});