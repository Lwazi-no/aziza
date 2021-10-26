import { openModal, closeModal } from "../../src/modules/popup.js";

var contentCanvas = document.querySelector(".contentCanvas");

function replacecanvascontent(html_path) {
  contentCanvas.innerHTML = `<object type="text/html" id="currentPage"  data="${html_path}" width="100%" height="100%"></object>`;
}

//  Navigation
function gotoOverview() {
  var link = "../law-enforcement/law-enforcement.html";
  replacecanvascontent(link);
}
function gotoRespondersList() {
  var link = "../responders-list/responders-list.html";
  replacecanvascontent(link);
}

gotoRespondersList();

// var openUserMenu = () => {
//   openModal("loggedInUserPopup");
// };

// open user menu
document.querySelector(".loggedInUser").addEventListener("click", function () {
  openModal("loggedInUserPopup");
});

function logout() {
  window.location.href = "../index.html";
}
