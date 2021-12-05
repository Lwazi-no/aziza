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
  var clusterStaff = document.querySelector(".clusterStaff");

  function resetPagination() {
    paginationRows.forEach((paginationRow) => {
      paginationRow.style.display = "none";
    });
  }

  selectableItems[0].addEventListener("click", function () {
    stationsContainer.style.display = "flex";
    clusterStaff.style.display = "none";
    paginationRows.forEach((paginationRow) => {
      paginationRow.style.display = "flex";
    });
  });

  selectableItems[1].addEventListener("click", function () {
    resetPagination();
    stationsContainer.style.display = "none";
    clusterStaff.style.display = "block";
    var clusterStaffTable = document.querySelector(".stationPersonelList");
  });

  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    selectableItems[0].click();
  })();
}
showOnlySelected();
