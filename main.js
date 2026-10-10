const titler = document.querySelector("#head");
const txt = document.querySelector("#txt");
const btn = document.querySelector("#btn");
const show = document.querySelector("#par")

let like = 0;
txt.addEventListener("input", () => {
  titler.textContent = "Hi " + txt.value + ", welcome to my website";

});

btn.addEventListener("click", () => {
  like++;
  btn.value = `Like (${like})`;
});

btn.addEventListener("click", () => {
  if (like == 1 || like < 1) { show.textContent = txt.value + " you have liked it " + like + " time" }
  else show.textContent = txt.value + " you have liked it " + like + " times"
});

