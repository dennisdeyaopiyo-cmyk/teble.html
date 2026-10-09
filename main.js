const titler = document.querySelector("#head");
const txt = document.querySelector("#txt");
const btn = document.querySelector("#btn");

let like= 0;
txt.addEventListener("input", () => {
  titler.textContent  ="Hi " + txt.value + ", welcome to my website";  
  
});

btn.addEventListener("click", () => {
  like++;
  btn.value = `Like (${like})`;
});

if (like == 10) {
  alert("You have liked this 10 times!");
}