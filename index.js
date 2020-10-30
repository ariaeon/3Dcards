// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Items
const title = document.querySelector('.info h1');
const sneaker = document.querySelector('.header img');
const purchase = document.querySelector('.description');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.abilities');

const body = document.querySelector('.body');
const cursor = document.querySelector('.cursor');
const buttons = document.querySelectorAll('button');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  // console.log(xAxis, yAxis)
  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) translateZ(1px)`;

});

body.addEventListener('mousemove', (e) => {
  // console.log(e.pageX, e.pageY);
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});

card.addEventListener('mouseenter', () => {
  cursor.classList.add('card-hover');
});
card.addEventListener('mouseleave', () => {
  cursor.classList.remove('card-hover');
});


buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    cursor.classList.add('button-hover');
  });
  button.addEventListener('mouseleave', () => {
    cursor.classList.remove('button-hover');
  });
});


// Animate In
container.addEventListener('mouseenter', () => {
  card.style.transition = 'none';
  // Popout
  // title.style.transform = 'translateZ(50px)';
  // sneaker.style.transform = 'translateZ(25px)';
  // description.style.transform = 'translateZ(40px)';
  // sizes.style.transform = 'translateZ(35px)';
  // purchase.style.transform = 'translateZ(25px)';
});
// Animate Out
container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  // Popback
  // title.style.transform = 'translateZ(0px)';
  // sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  // description.style.transform = 'translateZ(0px)';
  // sizes.style.transform = 'translateZ(0px)';
  // purchase.style.transform = 'translateZ(0px)';
});