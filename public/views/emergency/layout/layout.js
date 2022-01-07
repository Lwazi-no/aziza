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
  var link = "../overview/overview.html";
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
function gotoTerms(thisPage) {
  var link = "../terms/terms.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
  document.querySelectorAll(".navLink")[0].click();
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

function ToggleNotifications() {
  openModal("notificationsContainer");
}

function OpenNotification() {
  openModal("notificationPopupContainer");
}

function closeNotification() {
  closeModal("notificationPopupContainer");
}

function logout() {
  window.location.href = "../../../../index.html";
}

// add user popup

function openUserForm() {
  openModal("addUserPopup");
}
