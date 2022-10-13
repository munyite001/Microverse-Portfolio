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
const closeMenu = document.getElementById('close-btn');

//  Then we also get the mobile menu
const mobileMenu = document.querySelector('.mobile-menu');

//  Ten we also need to grab the mobile menu links
//  so as to close the mobile menu, when a link is clicked
const menuLinks = document.querySelectorAll('.menu-link');

//  Add an event listener for the menu open btn
openBnt.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show-mobile-menu');
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
            <button class="btn modal-live-buttons">
              See Live <img src="./assets/see-live -icon.svg" alt="see live icon" class="modal-icon">
            </button>
          </a>
          <a href="${data[i].githubRepo}" target="_blank">
            <button class="btn modal-live-buttons">
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

//  Local Storage
//  Object to store User Data in Local Storage
const userData = {
  name: '',
  email: '',
  message: '',
};

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

const getData = localStorage.getItem('UserData');
const newData = JSON.parse(getData);
userName.value = newData.name;
userEmail.value = newData.email;
userMessage.value = newData.message;

// Function to save data in local storage
function saveData() {
  userData.name = userName.value;
  userData.email = userEmail.value;
  userData.message = userMessage.value;
  // Convert userData to JSON format
  const localData = JSON.stringify(userData);
  localStorage.setItem('UserData', localData);
}

//  Email validation
const form = document.querySelector('.portfolio-form');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = form.elements.email.value;
  const correctInput = emailInput.toLowerCase();

  if (emailInput === correctInput) {
    saveData();
    form.submit();
  } else {
    error.style.display = 'block';
    form.elements.email.style.border = '1px solid red';
  }
});
