const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");

// Light/Dark Mode
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Append input
function appendValue(val) {
  display.value += val;
}

// Clear
function clearDisplay() {
  display.value = "";
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});