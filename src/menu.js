import pizza from './pizza.jpg';

const menuList = (text) => ({ text });
// const menuImage = (image) => ({ image });

const listOne = menuList('Burger..............KSH. 700');
const listTwo = menuList('Kiwi Mocktail..............KSH. 400');
const listThree = menuList('Taandori chicken wrap..............KSH. 600');
const listFour = menuList('Java Icecream..............KSH. 250');
const listFive = menuList('Java Granola bars ..............KSH. 200');
const listSix = menuList('Coffe and bakery combo..............KSH 400');
// const listImage = menuImage(pizza)
const menuTab = document.createElement('div');
menuTab.classList.add('d-flex');
const wrap = document.createElement('div');
wrap.classList.add('mr-5');
const wrapper = document.createElement('div');
wrapper.innerText = listOne.text;
const wrapper2 = document.createElement('div');
wrapper2.innerText = listTwo.text;
const wrapper3 = document.createElement('div');
wrapper3.innerText = listThree.text;
const wrapper4 = document.createElement('div');
wrapper4.innerText = listFour.text;
const wrapper5 = document.createElement('div');
wrapper5.innerText = listFive.text;
const wrapper6 = document.createElement('div');
wrapper6.innerText = listSix.text;
const myIcon = new Image();
myIcon.classList.add('pizza');
myIcon.src = pizza;

const menu = () => {
  const tabContent = document.querySelector('.tab-content');
  wrap.appendChild(wrapper);
  wrap.appendChild(wrapper2);
  wrap.appendChild(wrapper3);
  wrap.appendChild(wrapper4);
  wrap.appendChild(wrapper5);
  wrap.appendChild(wrapper6);
  menuTab.appendChild(wrap);
  menuTab.appendChild(myIcon);
  tabContent.appendChild(menuTab);
};


export default menu;