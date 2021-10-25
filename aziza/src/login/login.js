import { openModal, closeModal } from "../modules/popup.js";

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
  window.location.href = "./pages/layout/layout.html";
}

login();
