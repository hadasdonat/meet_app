document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("התחברת בהצלחה!");
            window.location.href = "meeting_list.html";
        });
    }

    const registerBtn = document.querySelector(".register-btn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("נרשמת בהצלחה!");
            window.location.href = "login.html";
        });
    }
});
