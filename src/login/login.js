(function () {
  document.getElementById("forgotBtn").addEventListener("click", (e) => {
    openModal("passwordModal");
  });
})();

(function () {
  document.getElementById("backToLoginBtn").addEventListener("click", (e) => {
    closeModal("passwordModal");
  });
})();

function sendEmail() {}

function updatePassword() {
  window.location.href = "./views/office/layout/layout.html";
}

function login() {
  document.querySelector(".loginWrapper").style.display = "none";
  document.querySelector(".getSartedWrapper").style.display = "grid";
}
