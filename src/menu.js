import pizza from './assets/pizza.jpg';

const menuList = (text) => ({ text });

const listOne = menuList('Burger..............KSH. 700');
const listTwo = menuList('Kiwi Mocktail..............KSH. 400');
const listThree = menuList('Taandori chicken wrap..............KSH. 600');
const listFour = menuList('Java Icecream..............KSH. 250');
const listFive = menuList('Java Granola bars ..............KSH. 200');
const listSix = menuList('Coffe and bakery combo..............KSH 400');

const menuTab = document.createElement('div');
menuTab.classList.add('d-flex');
const wrap = document.createElement('div');
wrap.classList.add('mr-5');
const wrapper = [listOne.text,listTwo.text,listThree.text,listFour.text,listFive.text,listSix.text]

wrapper.forEach(item=>{
  const wrapAll = document.createElement('div')
  wrapAll.innerHTML = item
  wrap.appendChild(wrapAll)
})

const myIcon = new Image();
myIcon.classList.add('pizza');
myIcon.src = pizza;

const menu = () => {
  const tabContent = document.querySelector('.tab-content');
  menuTab.appendChild(wrap);
  menuTab.appendChild(myIcon);
  tabContent.appendChild(menuTab);
};

export default menu;