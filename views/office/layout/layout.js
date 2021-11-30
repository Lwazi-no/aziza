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
function gotoLawEnforcement(thisPage) {
  var link = "../lawEnforcement/lawEnforcement.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoEmergency(thisPage) {
  var link = "../emergency/emergency.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

function gotoRescueCalls(thisPage) {
  var link = "../rescue-calls/rescue-calls.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoRescues(thisPage) {
  var link = "../rescue-calls/rescue-calls.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

function gotoTrack(thisPage) {
  var link = "../track/track.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}

function gotoStaff(thisPage) {
  var link = "../staff/staff.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoEndUsers(thisPage) {
  var link = "../endUsers/endUsers.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoRevenue(thisPage) {
  var link = "../revenue/revenue.html";
  replacecanvascontent(link);
  activeNav(thisPage);
}
function gotoSettings(thisPage) {
  var link = "../settings/settings.html";
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
  var link = "../user-profile/user-profile.html";
  replacecanvascontent(link);
  let thisPage = document.querySelectorAll(".navLink")[3];
  activeNav(thisPage);
}

function ToggleNotifications() {
  const notificationsToggle = document.querySelector(".notesContainer");
  notificationsToggle.classList.toggle("active");
  console.log(notificationsToggle);
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
var addUserTypeSelector = (function () {
  var radioOptions = ["cluster", "user"];

  customRadio("addUserTypeSelector", radioOptions, "userTypes");
})();

function showOnlySelected() {
  var userTypes = document.querySelector(".optionSelector").children;
  var stationForm = document.querySelector("#clusterForm");
  var userForm = document.querySelector("#userForm");

  userTypes[0].addEventListener("click", function () {
    userForm.style.display = "none";
    stationForm.style.display = "flex";
  });

  userTypes[1].addEventListener("click", function () {
    stationForm.style.display = "none";
    userForm.style.display = "flex";
  });

  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    userTypes[0].click();
  })();
}
showOnlySelected();
