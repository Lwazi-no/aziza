import { paginate } from "../../src/modules/pagination.js";
import { customRadio } from "../../src/modules/customRadio.js";
var radioOptions = ["Emergency Services", "Users"];

customRadio("thisRadio", radioOptions, "services");

var stations = document.querySelector(".stations");
paginate(stations);

function stationIcons() {
  var healthStations = document.querySelectorAll(".station.health");
  var policeStations = document.querySelectorAll(".station.police");

  function placeHealthicon(healthStation) {
    var imageContainer = healthStation.querySelector(".stationTypeImage");

    imageContainer.innerHTML = ` <img src="../../src/media/health.svg" alt="" />`;
  }
  function placePoliceIcon(policeStation) {
    var imageContainer = policeStation.querySelector(".stationTypeImage");

    imageContainer.innerHTML = ` <img src="../../src/media/police.svg" alt="" />`;
  }

  console.log(healthStations, policeStations);
  healthStations.forEach(placeHealthicon);
  policeStations.forEach(placePoliceIcon);
}

stationIcons();

function filterStations() {
  var healthStations = document.querySelectorAll(".station.health");
  var policeStations = document.querySelectorAll(".station.police");
}
