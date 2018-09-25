var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".modal-login");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector("form");
var login = loginPopup.querySelector("[name=login]");
var password = loginPopup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var mapButton = document.querySelector(".contacts-button-map");
var mapLink = document.querySelector(".contacts-link-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");


/* make a pop-up modal login window */
loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        loginPopup.classList.add("modal-error");
        alert('Вы не ввели логин или пароль!');
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains("modal-show")) {
            loginPopup.classList.remove("modal-show");
            loginPopup.classList.remove("modal-error");
        }
    }
});

/* re-create login to lower case */
function lowcase() {
    var str = document.getElementById("user-login").value;
    var res = str.toLowerCase();
    document.getElementById("user-login").value = res;
}

/* make a pop-up modal map window */
mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});