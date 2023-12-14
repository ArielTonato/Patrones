import singleton from "./counter.js";

const button = document.querySelector("#green");
const counter = document.querySelector(".counter");

button.addEventListener("click", () => {
    singleton.decrement();
    counter.textContent = singleton.getCounter();
});