const about = () => {
  const tabContent = document.querySelector('.tab-content');
  const about = document.createElement('div');
  about.classList.add('text-center', 'mx-auto', 'w-50');
  const info = document.createElement('div');
  info.textContent = 'Java House, commonly referred to as ‘Nairobi Java’,opened itsfirst store in 1999\nat Adam’s Arcade in Nairobi. With the aim of introducing gourmet';
  const infoTwo = document.createElement('div');
  infoTwo.textContent = 'The first outlet was a coffee shop and later the brand evolved to an American diner style restaurant to its present-day status as a 3 -day part coffee-led, casual dining concept.';
  about.appendChild(info);
  about.appendChild(infoTwo);
  tabContent.appendChild(about);
};

export default about;