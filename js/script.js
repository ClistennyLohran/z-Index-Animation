let myRange = document.getElementById('myRange');
let rangeDisplay = document.getElementById('rangeDisplay');
let myRadius = document.getElementById('myRadius')
let radiusDisplay = document.getElementById('radiusDisplay');

let btnContainer = document.getElementById('btn-container');

let after = document.getElementById('after');
let middle = document.getElementById('middle');
let before = document.getElementById('before');

let checkBorder = false;

myRange.oninput = function() {
  rangeDisplay.innerHTML = `VALOR: ${this.value}`;
  btnContainer.style.transform = `rotateX(${this.value}deg)`;
}
myRadius.oninput = function() {
  radiusDisplay.innerHTML = `BORDER RADIUS: ${this.value}`;
  after.style.borderRadius = `${this.value}px`;
  middle.style.borderRadius = `${this.value}px`;
  before.style.borderRadius = `${this.value}px`;
}
btnContainer.onclick = function() {
  if(checkBorder == false) {
    after.style.borderRadius = "0px";
    middle.style.borderRadius = "0px";
    before.style.borderRadius = "0px";
    radiusDisplay.innerHTML = `BORDER RADIUS: 0`;
    myRadius.value = 0;
    checkBorder = true;
    return;
  }
  after.style.borderRadius = "120px";
  middle.style.borderRadius = "120px";
  before.style.borderRadius = "120px";
  radiusDisplay.innerHTML = `BORDER RADIUS: 120`;
  myRadius.value = 120;
  checkBorder = false;
}