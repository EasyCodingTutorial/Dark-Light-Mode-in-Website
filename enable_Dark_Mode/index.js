let ToggleBtn = document.getElementById("toggle");
let darkMode = localStorage.getItem("dark-mode");
let Body = document.body;

// To Enable The Dark Mode
const Enable = () => {
  ToggleBtn.classList.replace("fa-sun", "fa-moon");
  Body.classList.add("Dark");
  localStorage.setItem("dark-mode", "enabled");
};

// To Disable The Dark Mode
const Disable = () => {
  ToggleBtn.classList.replace("fa-moon", "fa-sun");
  Body.classList.remove("Dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  Enable();
}

ToggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    Enable();
  } else {
    Disable();
  }
};
