var paginatePersonel = (function () {
  var paginatedList = document.querySelector(".paginated");
  paginate(paginatedList);
})();

var listSearch = (function () {
  let table = document.querySelector(".stationPersonelList");
  let searchInputID = "personelSearchInput";

  searchInTable(table, searchInputID);
})();

function initMap() {
  // The location of South Africa
  const southAfrica = { lat: -28.4792625, lng: 24.6727135 };
  // The map, centered in South Africa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: southAfrica,
  });
}

initMap();

function expandMapToggle() {
  var bodyLayout = document.querySelector(".bodyLayout");
  var leftSide = document.querySelector(".leftSide");

  bodyLayout.classList.toggle("fullMap");
  leftSide.classList.toggle("fullMap");
}
