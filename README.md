# calculator-app
A web-based calculator application built using HTML, CSS, and JavaScript that performs real-time arithmetic calculations with an interactive and responsive user interface.
🧮 Calculator Web Application

A simple and responsive Calculator web application built using HTML, CSS, and JavaScript that performs real-time arithmetic operations with an intuitive user interface.

---

🚀 Features

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- 🔄 Clear display functionality
- ⚡ Real-time input handling
- 🎨 Clean and responsive UI

---

🛠️ Tech Stack

- HTML5 – Structure
- CSS3 – Styling and layout
- JavaScript (Vanilla JS) – Functionality and logic

---

📂 Project Structure

calculator-app/
│── index.html
│── script.js
│── style.css
│── utils.css

---

⚙️ How It Works

The calculator uses JavaScript functions to manage input and calculations:

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").innerText = currentInput;
}

function clearDisplay() {
    currentInput = "0";
}

function calculate() {
    currentInput = eval(currentInput);
}

---

⚙️ How to Run

1. Clone or download the repository
2. Open the project folder
3. Run "index.html" in your browser

---

🌐 Live Demo

(Add your GitHub Pages link here)

---

📸 Screenshots

(Add screenshots here using README image syntax)

---

📌 Future Improvements

- 🔢 Advanced operations (%, √, etc.)
- ⌨️ Keyboard input support
- 🌙 Dark mode
- 📱 Better mobile responsiveness

---

👨‍💻 Author

Adityabarna Das

---

⭐ Acknowledgement

This project was built to practice JavaScript fundamentals and DOM manipulation.
