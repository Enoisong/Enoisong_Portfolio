// Interactivity for intro section
const role = document.querySelector('.first-role');
const interactiveText = () => {
  role.innerText = 'Front-end Developer';
  setInterval(() => {
    if (role.innerText === 'Front-end Developer') {
      role.innerText = 'Back-end Developer';
    } else if (role.innerText === 'Back-end Developer') {
      role.innerText = 'Full-stack Developer';
    } else {
      role.innerText = 'Front-end Developer';
    }
  },
  4000);
};
interactiveText();

// Interactivity for mobile hamburger CSS icon
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.top-nav');
const navItems = document.querySelectorAll('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

navItems.forEach((navItem) => navItem.addEventListener('click', () => {
  document.querySelector('.hamburger').classList.remove('active');
  mobileNav.classList.remove('active');
}));

// Action for closing every modal
const closeModal = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.getElementById('modal-container').removeChild(document.querySelector('.modal'));
};

// Object containing the first card details
const firstCardInfo = {
  id: 1,
  class: 'more',
  image: 'move.png',
  title2: 'MovieBest',
  details: 'MovieBest is an API-based app that allows client to have the best movie browsing experience',
  tech_stack: {
    tech0: 'React',
    tech1: 'Redux',
    tech2: 'API',
  },
};

// Displays the first card with details
document.getElementById('first-project').innerHTML = `<div id="img"></div>
                    <div id="card">
                      <div id="main-text">
                        <h3>${firstCardInfo.title2}</h3>
                      </div>
                      <div id="support-text">
                        <p>
                          ${firstCardInfo.details}
                        </p>
                      </div>
                      <div class="tech-box">
                        <ul>
                          <li>${firstCardInfo.tech_stack.tech0}</li>
                          <li>${firstCardInfo.tech_stack.tech1}</li>
                          <li>${firstCardInfo.tech_stack.tech2}</li>
                        </ul>
                      </div>
                      <button id="project-button" type="button" href='#modal'>See Project</button>
                    </div>`;

// Styling the first card
const img = document.getElementById('img');
img.style.width = '100%';
img.style.background = `url(assets/${firstCardInfo.image})`;
img.style.backgroundRepeat = 'no-repeat';
img.style.backgroundSize = 'cover';
img.style.backgroundPosition = '25% 0';
img.style.zIndex = '1';
img.style.border = '1px solid black';

// Popup modal for the first card (will be executed when the user clicks on the first card button)
const modalfirst = `<div id="modal" class="modal">
  <header class='modal-header'>
    <h1 class="modal-heading">${firstCardInfo.title2}</h1>
    <div class="close-btn">
      <div class="rotator1"></div>
      <div class="rotator2"></div>
    </div>
  </header>
  <div class="tech-box popup">
    <ul>
      <li>${firstCardInfo.tech_stack.tech0}</li>
      <li>${firstCardInfo.tech_stack.tech1}</li>
      <li>${firstCardInfo.tech_stack.tech2}</li>
    </ul>
  </div>
  <div class="content">
    <div id="move">
      <img src="assets/move.png" class="popup-img" /> <!-- Change the image source here -->
    </div>
    <div class="right-section">
      <p class="description popup">${firstCardInfo.details}</p>
      <div class="button-container">
        <button type="submit" class="project-button popup">
          <a class="link" href="https://moviebest.onrender.com" target="_blank">See Live<img src="icons/seeLive.svg" /></a>
        </button>
        <button type="submit" class="project-button popup">
          <a class="link" href="https://github.com/Enoisong/ruby-capstone-project.git" target="_blank">See Source<img src="icons/seeSource.svg" /></a>
        </button>
      </div>
    </div>
  </div>
</div>
<div class="overlay"></div>`;



// Action for displaying the modal for the first card
const firstModal = () => {
  document.getElementById('modal-container').innerHTML = modalfirst;
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.onclick = closeModal;
};

// Displays the modal for the first card when the user clicks on the first card button
const firstButton = document.getElementById('project-button');
firstButton.onclick = firstModal;

// Array of objects which contain details of each card except the first card
const cardsInfo = [
  {
    id: 1,
    class: 'techscape',
    image: 'techscape_1.png',
    title: 'CuisineConnect',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    description: `CuisineConnect is a web app built on an external API. It fetches data from the API and displays a list of food dishes with likes and comments.`,
    tech_stack: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    liveLink: 'https://enoisong.github.io/Module2-Capstone/',
    sourceLink: 'https://github.com/Enoisong/Module2-Capstone.git',
  },
  {
    id: 2,
    class: 'mootv',
    image: 'calc.png',
    title: 'PHP Form_Calculator',
    description: 'A single page web application form that allows users to  perform addition, subtraction, multiplication and division..',
    tech_stack: {
      tech1: 'PHP',
      tech2: 'CSS',
      tech3: 'HTML',
    },
    liveLink: 'http://localhost/calculator_php/index.php',
    sourceLink: 'https://github.com/Enoisong/calculator_php.git',
  },
  {
    id: 3,
    class: 'calculator',
    image: 'math_magicians.png',
    title: 'Math Magicians',
    description: 'Math Magicians is a single page application built with React. It can be used to deal with simple calculations and to display a random quote each time the page reloads.',
    tech_stack: {
      tech1: 'React',
      tech2: 'CSS',
      tech3: 'API',
    },
    liveLink: 'https://math-magician-h0xv.onrender.com/',
    sourceLink: 'https://github.com/Enoisong/math-magicians.git',
  },
  {
    id: 4,
    class: 'space',
    image: 'space.png',
    title: 'KitchenCompass',
    description: 'A web application that allows users to easily store, organize, and share recipes.',
    tech_stack: {
      tech1: 'Ruby on Rails',
      tech2: 'PostgreSQL',
      tech3: 'TailwindCSS',
    },
    liveLink: 'http://127.0.0.1:3000/',
    sourceLink: 'https://github.com/Enoisong/Recipe-app.git',
  },
  {
    id: 5,
    class: 'got',
    image: 'WhimsyNamer.png',
    title: 'WhimsyNamer',
    description: 'Checkout this user-friendly app that efficiently showcase a list of student names, providing an organized and accessible interface for users.',
    tech_stack: {
      tech1: 'PHP',
      tech2: 'postgreSQL',
      tech3: 'HTML/CSS',
       
    },
    liveLink: 'http://localhost/WhimsyNamer/test.php', 
        sourceLink: 'https://github.com/Enoisong/WhimsyNamer.git',
  },
  {
    id: 6,
    class: 'budget',
    image: 'budget.png',
    title: 'BudgetTracker',
    description: 'Budget Tracker is a web application that allows users to track their expenses and incomes.',
    tech_stack: {
      tech1: 'Ruby on Rails',
      tech2: 'TailwindCSS',
      tech3: 'PostgreSQL',
    },
    liveLink: 'https://eno-s9dz.onrender.com/',
    sourceLink: 'https://github.com/Enoisong/budget_tracker.git',
  },
];

// Extracting each card's details from the array and insert it inside each card
const card = cardsInfo.map((cardInfo) => `<div class="card ${cardInfo.class}">
                    <div class="description">
                      <div class="heading">${cardInfo.title}</div>
                        <div class="support-text">
                          <p>
                            ${cardInfo.description}
                          </p>
                        </div>
                        <div class="tech-stack">
                          <ul>
                            <li>${cardInfo.tech_stack.tech1}</li>
                            <li>${cardInfo.tech_stack.tech2}</li>
                            <li>${cardInfo.tech_stack.tech3}</li>
                          </ul>
                        </div>
                      </div>
                    <button id=${cardInfo.id} type="submit" class="project-button popup">See Project</button>
                  </div> `);

// Displays a collection of cards with details
document.querySelector('.card-container').innerHTML = card.join('');

// Popup modal for each card
const popupInfo = (projectId) => {
  if (projectId == null) return;
  let checked = cardsInfo.filter((cardInfo) => cardInfo.id === parseInt(projectId, 10));
  checked = checked.shift();
  const modalBox = ` <div id="modal "class="modal">
                        <header class='modal-header'>
                          <h1 class="modal-heading">${checked.title}</h1>
                          <div class="close-btn">
                            <div class="rotator1"></div>
                            <div class="rotator2"></div>
                          </div>
                        </header>
                        <div class="tech-box popup">
                          <ul>
                            <li>${checked.tech_stack.tech1}</li>
                            <li>${checked.tech_stack.tech2}</li>
                            <li>${checked.tech_stack.tech3}</li>
                          </ul>
                        </div>
                        <div class="content">
                        <div><img src="assets/${checked.image}" class='popup-img' /></div>
                          <div class="right-section">
                            <p class="description popup">${checked.description}</p>
                            <div class="button-container">
                              <button type="submit" class="project-button popup">
                                <div class='link-wrapper'>
                                  <a class="link" href=${checked.liveLink} target="_blank">See Live<img src="icons/seeLive.svg" /></a>
                                </div>
                              </button>
                              <button type="submit" class="project-button popup"><a class="link" href=${checked.sourceLink} target="_blank">See Source<img src="icons/seeSource.svg" /></a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>`;
  document.getElementById('modal-container').innerHTML = modalBox;
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach((btn) => btn.addEventListener('click', closeModal));
};

// Displays the modal for each card when the user clicks on the card button
const popupBtn = document.querySelectorAll('.project-button.popup');
popupBtn.forEach((btn) => btn.addEventListener('click', (event) => {
  const projectId = event.target.id;
  popupInfo(projectId);
}));

// Form validation
const validatorLog = document.getElementById('validator-log');
const form = document.getElementById('form');
const emailBox = document.getElementById('email');
const regexp = /[A-Z]/;

form.addEventListener('submit', (event) => {
  if (regexp.test(emailBox.value)) {
    event.preventDefault();
    validatorLog.innerText = '*no capital letters can be used for email address';
  }
});
