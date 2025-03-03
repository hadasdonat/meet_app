document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo img");
    if (logo) {
        logo.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
