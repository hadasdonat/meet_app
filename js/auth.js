document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", async function () {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.token) {
                localStorage.setItem("userToken", data.token);
                window.location.href = "/meetings";
            } else {
                alert("שגיאה בהתחברות");
            }
        });
    }
});
