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

function login() {
  window.location.href = "./views/office/layout/layout.html";
}

// login();
