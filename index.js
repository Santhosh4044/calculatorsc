let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let exp = display.value;
    let result = eval(exp);
    addHistory(exp + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function square() {
  display.value = Math.pow(display.value, 2);
}

function cube() {
  display.value = Math.pow(display.value, 3);
}

function sqrt() {
  display.value = Math.sqrt(display.value);
}

function sin() {
  display.value = Math.sin(display.value * Math.PI / 180).toFixed(4);
}

function cos() {
  display.value = Math.cos(display.value * Math.PI / 180).toFixed(4);
}

function tan() {
  display.value = Math.tan(display.value * Math.PI / 180).toFixed(4);
}

function addHistory(text) {
  let li = document.createElement("li");
  li.textContent = text;
  historyList.prepend(li);
}

/* Keyboard Support */
document.addEventListener("keydown", e => {
  if ("0123456789+-*/.".includes(e.key)) append(e.key);
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") del();
  if (e.key === "Escape") clearDisplay();
});
function log() {
  display.value = Math.log10(display.value);
}

function power() {
  let base = prompt("Enter base:");
  let exp = prompt("Enter exponent:");
  display.value = Math.pow(base, exp);
}

function pi() {
  display.value += Math.PI.toFixed(4);
}
