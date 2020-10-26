//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".info h1");
const sneaker = document.querySelector(".header img");
const purchase = document.querySelector(".description");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".abilities");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	// console.log(xAxis, yAxis)
  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  // title.style.transform = "translateZ(25px)";
  // sneaker.style.transform = "translateZ(25px)";
  // description.style.transform = "translateZ(25px)";
  // sizes.style.transform = "translateZ(25px)";
  // purchase.style.transform = "translateZ(25px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  // title.style.transform = "translateZ(0px)";
  // sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  // description.style.transform = "translateZ(0px)";
  // sizes.style.transform = "translateZ(0px)";
  // purchase.style.transform = "translateZ(0px)";
});