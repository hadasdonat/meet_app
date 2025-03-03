document.addEventListener("DOMContentLoaded", function () {
    const routes = {
        "/": "home",
        "/login.html": "login",
        "/register.html": "register",
        "/meeting_list.html": "meetings",
        "/meeting_form.html": "meetingForm"
    };

    function loadPage(page) {
        fetch(`../views/${page}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById("app").innerHTML = html;
                executePageScript(page);
            })
            .catch(err => console.error("Error loading page:", err));
    }

    function navigateTo(url) {
        window.history.pushState(null, null, url);
        loadPage(routes[url]);
    }

    window.onpopstate = () => {
        loadPage(routes[window.location.pathname]);
    };

    document.body.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && e.target.hasAttribute("data-link")) {
            e.preventDefault();
            navigateTo(e.target.getAttribute("href"));
        }
    });

    // טוען את הדף הנכון על בסיס ה-URL
    loadPage(routes[window.location.pathname] || "home");
});
