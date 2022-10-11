//  Modal Data for each project

const data = [
  {
    heading: 'Multi Post Stories',
    image: './assets/project-image 1.png',
    tags: ['css', 'html', 'bootstrap', 'ruby'],
    content: `A daily selection of privately 
    personalized reads; no accounts or sign-ups required. 
    has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a standard dummy text.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },

  {
    heading: 'Data Dashboard Healthcare',
    image: 'assets/modal-6.png',
    tags: ['css', 'html', 'bootstrap'],
    content: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a standard dummy text.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },

  {
    heading: 'Website Portfolio',
    image: './assets/modal-image.png',
    tags: ['css', 'html', 'bootstrap'],
    content: `A daily selection of privately personalized reads;
    no accounts or sign-ups required. has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },

  {
    heading: 'Profesional Art Printing Data More',
    image: 'assets/modal-4.png',
    tags: ['css', 'html', 'bootstrap'],
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nesciunt eligendi error ab nam fugit. Debitis laudantium blanditiis
    consectetur tempore ipsa eligendi iste, et, at quos quia tenetur inventore odit alias.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },

  {
    heading: 'Website Portfolio',
    image: 'assets/modal-2.png',
    tags: ['css', 'html', 'bootstrap'],
    content: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer 
    took a standard dummy text.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },

  {
    heading: 'Data Dashboard Healthcare',
    image: 'assets/modal-3.png',
    tags: ['css', 'html', 'bootstrap'],
    content: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },

  {
    heading: 'Profesional Art Printing Data More',
    image: 'assets/modal-4.png',
    tags: ['css', 'html', 'bootstrap'],
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nesciunt eligendi error ab nam fugit. Debitis laudantium blanditiis
    consectetur tempore ipsa eligendi iste, et, at quos quia tenetur inventore odit alias.`,
    liveUrl: 'https://order-summary-card-f-mentor.netlify.app/',
    githubRepo: 'https://github.com/munyite001/Microverse-Portfolio',
  },
];

//  Get the open and close menu btns
const openBnt = document.getElementById('mobile-menu-btn');

//  Then we also get the mobile menu
const mobileMenu = document.querySelector('.mobile-menu');

//  Ten we also need to grab the mobile menu links
//  so as to close the mobile menu, when a link is clicked
const menuLinks = document.querySelectorAll('.menu-link');

//  Add an event listener for the menu open btn
openBnt.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

//  Add an event listener for the menu links in order
// to close the mobile menu when a link is clicked
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu');
  });
});

/* Modal */
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const projectBtns = document.querySelectorAll('.modal-btn');

projectBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const i = parseInt(e.currentTarget.dataset.id, 10) - 1;
    modalContent.innerHTML = `
    <div class='modal-heading'>
      <h3 class='sub-heading'>${data[i].heading}</h3>
      <span class='close-modal'>&times;</span>
    </div>
    <div class='wrapper'>
      <div class='left'>
        <ul class="tags modal-list">
          <li class="lang-tag modal-tags">${data[i].tags[0]}</li>
          <li class="lang-tag modal-tags">${data[i].tags[1]}</li>
          <li class="lang-tag modal-tags">${data[i].tags[2]}</li>
        </ul>
        <div class="image-container">
          <img class="modal-image" src="${data[i].image}" alt="Modal Project Image">
        </div>
      </div>
      <div class="right">
        <p>
        ${data[i].content}
        </p>
        <div class="modal-btn-container">
          <a href="${data[i].liveUrl}" target="_blank">
            <button class="btn">
              See Live <img src="./assets/see-live -icon.svg" alt="see live icon" class="modal-icon">
            </button>
          </a>
          <a href="${data[i].githubRepo}" target="_blank">
            <button class="btn">
              See source<img src="./assets/git modal icon.png" alt="Git Modal Icon" class="modal-icon">
            </button>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.style.visibility = 'visible';

    const closeBtn = document.querySelector('.close-modal');

    closeBtn.addEventListener('click', () => {
      modal.style.visibility = 'hidden';
    });
  });
});
