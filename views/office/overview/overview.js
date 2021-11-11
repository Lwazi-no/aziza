var radioOptions = ["Law Enforcement", "Emergency Services", "Staff", "Users"];
var bodyLayout = document.querySelector(".bodyLayout");
var rightSide = document.querySelector(".rightSide");

customRadio("thisRadio", radioOptions, "services");

function stationIcons() {
  var healthStations = document.querySelectorAll(".station.health");
  var policeStations = document.querySelectorAll(".station.police");

  function placeHealthicon(healthStation) {
    var imageContainer = healthStation.querySelector(".stationTypeImage");

    imageContainer.innerHTML = ` <img src="../../../src/media/health.svg" alt="" />`;
  }
  function placePoliceIcon(policeStation) {
    var imageContainer = policeStation.querySelector(".stationTypeImage");

    imageContainer.innerHTML = ` <img src="../../../src/media/police.svg" alt="" />`;
  }

  healthStations.forEach(placeHealthicon);
  policeStations.forEach(placePoliceIcon);
}

stationIcons();

function filterStations() {
  var healthStations = document.querySelectorAll(".station.health");
  var policeStations = document.querySelectorAll(".station.police");
}

var stations = document.querySelector(".stations");
paginate(stations);

function openStation() {
  window.location.href = "../responders-list/responders-list.html";
}

function showOnlySelected() {
  var selectableItems = document.querySelector(".optionSelector").children;

  var paginationRows = document.querySelectorAll(".paginationRow");
  var stations = document.querySelector(".stations");
  var stationsContainer = document.querySelector(".stationsContainer");
  var police = stationsContainer.querySelectorAll(".police");
  var health = stationsContainer.querySelectorAll(".health");
  var clusterStaff = document.querySelector(".clusterStaff");
  var clusterUsers = document.querySelector(".clusterUsers");

  function bodyStyle() {
    bodyLayout.style = `
  display: grid;
  grid-gap: 0.5rem;
  height: 100%;
  grid-template-columns: 2.5fr 1fr;
  grid-template-areas: "leftSide leftSide";

  background-color: #f7f8fa70;`;

    rightSide.style.display = "none";
  }

  function resetPagination() {
    paginationRows.forEach((paginationRow) => {
      paginationRow.style.display = "none";
    });
  }

  selectableItems[0].addEventListener("click", function () {
    bodyStyle();
    stationsContainer.style.display = "flex";
    clusterStaff.style.display = "none";
    clusterUsers.style.display = "none";

    police.forEach((eachPolice) => {
      eachPolice.style.display = "grid";
    });

    health.forEach((eachHealth) => {
      eachHealth.style.display = "none";
    });
    paginationRows.forEach((paginationRow) => {
      paginationRow.style.display = "flex";
    });
  });

  selectableItems[1].addEventListener("click", function () {
    bodyStyle();
    stationsContainer.style.display = "flex";
    clusterStaff.style.display = "none";
    clusterUsers.style.display = "none";

    police.forEach((eachPolice) => {
      eachPolice.style.display = "none";
    });

    health.forEach((eachHealth) => {
      eachHealth.style.display = "grid";
    });
    paginationRows.forEach((paginationRow) => {
      paginationRow.style.display = "flex";
    });
  });

  selectableItems[2].addEventListener("click", function () {
    bodyStyle();
    resetPagination();
    stationsContainer.style.display = "none";
    clusterStaff.style.display = "block";
    clusterUsers.style.display = "none";
    var clusterStaffTable = document.querySelector(".stationPersonelList");
  });
  selectableItems[3].addEventListener("click", function () {
    bodyStyle();
    resetPagination();
    stationsContainer.style.display = "none";
    clusterStaff.style.display = "none";
    clusterUsers.style.display = "block";
    var clusterStaffTable = document.querySelector(".stationPersonelList");
  });

  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    selectableItems[0].click();
  })();
}
showOnlySelected();

function openUser(selectedUser) {
  var allUsers = document.querySelectorAll("tbody tr td");

  var thisUser = selectedUser.querySelectorAll("td");

  rightSide.style.display = "flex";

  bodyLayout.style = `
   display: grid;
  height: 100%;
  grid-template-columns: 2.5fr 1fr;
  grid-template-areas:
   
    "leftSide rightSide";
    transition: all 250ms ease-in-out;
    `;

  function removeActive(eachUser) {
    eachUser.classList.remove("active");
  }

  function addActive(thisUser) {
    thisUser.classList.add("active");
  }

  allUsers.forEach(removeActive);
  thisUser.forEach(addActive);
}
