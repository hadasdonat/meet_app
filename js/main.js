document.addEventListener("DOMContentLoaded", function () {
    console.log("SmartMeet מוכן לשימוש!");

    // הפניה לעמוד קביעת פגישה
    const startBtns = document.querySelectorAll(".start-btn");
    startBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            window.location.href = "meeting_form.html";
        });
    });

    // הפניה לעמוד כניסה
    const loginLink = document.querySelector(".register-link a");
    if (loginLink) {
        loginLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "login.html";
        });
    }
});
