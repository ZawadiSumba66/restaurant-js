const menuList = (text) => ({ text });

const listOne = menuList('Burger..............KSH. 700');
const listTwo = menuList('Kiwi Mocktail..............KSH. 400');
const listThree = menuList('Taandori chicken wrap..............KSH. 600');
const listFour = menuList('Java Icecream..............KSH. 250');
const listFive = menuList('Java Granola bars ..............KSH. 200');
const listSix = menuList('Coffe and bakery combo..............KSH 400');
const listSeven = menuList('1/2 chicken+chips+soda..............ksh. 1000');


const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.innerText += listOne.text + listTwo.text + listThree.text;
wrapper.innerText += listFour.text + listFive.text + listSix.text + listSeven.text;
const menu = () => {
  const tabContent = document.querySelector('.tab-content');

  tabContent.appendChild(wrapper);
};

export default menu;