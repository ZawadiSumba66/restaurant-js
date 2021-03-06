import burger from './assets/burger.png';

const content = document.querySelector('#content');

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav-bar', 'pb-3', 'px-5', 'py-3');
  const left = document.createElement('div');
  left.textContent = 'JAVAHOUSE';
  left.style.color = 'white';
  const right = document.createElement('button');
  right.innerHTML = '<i class="fas fa-bars"></i>';
  right.style.color = 'white';
  nav.appendChild(left);
  nav.appendChild(right);
  content.appendChild(nav);
};

const showcase = () => {
  const main = document.createElement('div');
  main.classList.add('showcase');
  const heading = document.createElement('h1');
  heading.classList.add('head');
  heading.textContent = 'JAVAHOUSE';
  const showcaseContent = document.createElement('p');
  showcaseContent.textContent = 'Come and experience exquisite delicacies at JAVA HOUSE at fantastic prices. Available for pickup at branches or deliveries from Jumia food, Glovo and Uber Eats';
  const offerButton = document.createElement('button');
  offerButton.classList.add('btn', 'btn-danger', 'font-weight-bold');
  offerButton.textContent = 'ORDER HERE';
  heading.style.color = 'white';
  main.style.background = `url(${burger})`;
  main.style.backgroundRepeat = 'no-repeat';
  main.style.backgroundSize = 'cover';
  main.appendChild(heading);
  main.appendChild(showcaseContent);
  main.appendChild(offerButton);
  content.appendChild(main);
};
const tabsToggle = () => {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs', 'd-flex', 'justify-content-between', 'mx-auto', 'w-50');
  const menu = document.createElement('h3');
  menu.classList.add('tab', 'show');
  menu.innerHTML = 'Menu';
  const about = document.createElement('h3');
  about.classList.add('tab');
  about.innerHTML = 'About';
  const contact = document.createElement('h3');
  contact.classList.add('tab');
  contact.innerHTML = 'Contact';
  const tabContent = document.createElement('div');
  tabContent.classList.add('tab-content', 'd-flex', 'justify-content-center', 'pt-3');
  tabs.appendChild(menu);
  tabs.appendChild(about);
  tabs.appendChild(contact);
  content.appendChild(tabs);
  content.appendChild(tabContent);
};
const footer = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer', 'text-center', 'py-4');
  footer.innerHTML = 'Made with <i class="far fa-heart"></i> by Rose Sumba.';
  content.appendChild(footer);
};

export {
  navbar, showcase, tabsToggle, footer,
};