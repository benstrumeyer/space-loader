import "./styles.css";

const eclipse = document.querySelector(".planetEclipse")!;
const moons = document.querySelectorAll(".moonEclipse");
const background = document.querySelector(".background")!;
const button = document.querySelector(".button")!;

function animate() {
  eclipse.classList.add("planetAnimation");

  setTimeout(() => {
    moons.forEach(moon => {
      moon.classList.add("moonAnimation");
    })
  }, 3000);

  setTimeout(() => {
    background.classList.add("loaderFadeOutAnimation");
  }, 5500);

}

button.addEventListener('click', animate);
