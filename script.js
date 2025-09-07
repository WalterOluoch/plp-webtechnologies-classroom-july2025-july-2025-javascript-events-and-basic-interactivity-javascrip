// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Custom Form Validation
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop default form submission

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let errors = [];

    if (username.length < 3) {
        errors.push("Username must be at least 3 characters.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        errors.push("Please enter a valid email.");
    }

    if (password.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }

    if (errors.length > 0) {
        formMessage.textContent = errors.join(" ");
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        form.reset();
    }
});

// Character Counter
const messageBox = document.getElementById("messageBox");
const charCount = document.getElementById("charCount");

messageBox.addEventListener("input", () => {
    charCount.textContent = messageBox.value.length;

    if (messageBox.value.length > 100) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});

// Click Counter

const clickBtn = document.getElementById("clickBtn");
const clickCount = document.getElementById("clickCount");
let count = 0;

clickBtn.addEventListener("click", () => {
    count++;
    clickCount.textContent = count;
});
