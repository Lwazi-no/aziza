var contentCanvas = document.querySelector(".contentCanvas");

function replacecanvascontent(html_path) {
  contentCanvas.innerHTML = `<object type="text/html" id="currentPage"  data="${html_path}" width="100%" height="100%"></object>`;
}

//  Navigation

function activeNav(thePageLink) {
  var navLinks = document.querySelectorAll(".navLink");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });

  thePageLink.classList.add("active");
}

function gotoOverview(thisPage) {
  var link = "../law-enforcement/law-enforcement.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

function gotoRespondersList(thisPage) {
  var link = "../responders-list/responders-list.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoRescueCalls(thisPage) {
  var link = "../rescue-calls/rescue-calls.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

function gotoTrack(thisPage) {
  var link = "../track/track.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

function gotoUsers(thisPage) {
  var link = "../users/users.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoSettings(thisPage) {
  var link = "../settings/settings.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
  document.querySelectorAll(".navLink")[4].click();
})();

function openUserMenu() {
  openModal("loggedInUserPopup");
}

function openProfile() {
  var link = "../users/user-profile/user-profile.html";
  replacecanvascontent(link);
  let thisPage = document.querySelectorAll(".navLink")[3];
  activeNav(thisPage);
}

function logout() {
  window.location.href = "../index.html";
}

// add user popup

function openUserForm() {
  openModal("addUserPopup");
}
var addUserTypeSelector = (function () {
  var radioOptions = ["user", "station"];

  customRadio("addUserTypeSelector", radioOptions, "userTypes");
})();
