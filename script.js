function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const nameInput = document.getElementById("fname");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const textareaInput = document.getElementById("yourmsg");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        if (!validateName(nameInput.value)) {
            nameInput.style.borderColor = "red";
            isValid = false;
        } else {
            nameInput.style.borderColor = "";
        }

        if (!validateEmail(emailInput.value)) {
            emailInput.style.borderColor = "red";
            isValid = false;
        } else {
            emailInput.style.borderColor = "";
        }

        if (!validateSubject(subjectInput.value)) {
            subjectInput.style.borderColor = "red";
            isValid = false;
        } else {
            subjectInput.style.borderColor = "";
        }

        if (!validateTextarea(textareaInput.value)) {
            textareaInput.style.borderColor = "red";
            isValid = false;
        } else {
            textareaInput.style.borderColor = "";
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateName(name) {
        return name.trim() !== "";
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateSubject(subject) {
        return subject.trim() !== "";
    }

    function validateTextarea(message) {
        return message.trim() !== "";
    }
});        
