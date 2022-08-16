import "./styles.css";

const eclipse = document.querySelector(".planetEclipse")!;
const moons = document.querySelectorAll(".moonEclipse");
const background = document.querySelector(".background")!;
const button = document.querySelector(".button")!;

function animate() {
  setTimeout(() => {
    eclipse.classList.add("planetAnimation");
  }, 1);

  setTimeout(() => {
    moons.forEach(moon => {
      moon.classList.add("moonAnimation");
    })
  }, 3000);

  setTimeout(() => {
    background.classList.add("loaderFadeOutAnimation");
  }, 6000);

}

button.addEventListener('click', animate);
