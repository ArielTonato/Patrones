import singleton from "./counter.js";

const button = document.querySelector("#blue");
const counter = document.querySelector(".counter");

button.addEventListener("click", () => {
    singleton.increment();
    counter.textContent = singleton.getCounter();
});