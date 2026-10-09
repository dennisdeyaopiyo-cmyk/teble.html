const titler = document.querySelector("#head");
const txt = document.querySelector("#txt");


txt.addEventListener("input", () => {
  titler.textContent  ="i am typing " + txt.value;  
  
});