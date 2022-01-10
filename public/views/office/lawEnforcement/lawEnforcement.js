var bodyLayout = document.querySelector(".bodyLayout");
var provinces = Object.keys(stationsList.Provinces);

function openFilters() {
  openModal("filterMenu");
}

function includeFilters() {
  var provinceFilter = document.querySelector(
    ".filterClassOptions.provincesFilter"
  );
  var metroFilter = document.querySelector(".filterClassOptions.metrosFilter");
  var regionsFilter = document.querySelector(
    ".filterClassOptions.clustersFilter"
  );

  provinces.forEach(function (eachProvince) {
    provinceFilter.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="filterItem provinceFilterItem">${eachProvince}</a>`
    );
  });
  var provinceFilterItems = document.querySelectorAll(".provinceFilterItem");

  provinceFilterItems.forEach(function (theProvince) {
    theProvince.addEventListener("click", (clickedProvince) => {
      var theProvinceMunicipalities = Object.keys(
        stationsList.Provinces[clickedProvince.target.textContent].Municipaties
      );
      clickedProvince.target.parentNode.childNodes.forEach(function (
        allProvinces
      ) {
        allProvinces.classList.remove("selectedFilter");
      });

      clickedProvince.target.classList.add("selectedFilter");
      metroFilter.innerHTML = "";
      theProvinceMunicipalities.forEach(function (provinceMunicipal) {
        metroFilter.insertAdjacentHTML(
          "beforeend",
          `<a href="#" class="filterItem municipalFilterItem" >${provinceMunicipal}</a>`
        );
      });

      var municipalFilterItems = document.querySelectorAll(
        ".municipalFilterItem"
      );

      municipalFilterItems.forEach(function (municipalItem) {
        municipalItem.addEventListener("click", (clickedMunicipal) => {
          clickedMunicipal.target.parentNode.childNodes.forEach(function (
            allMuniciapls
          ) {
            allMuniciapls.classList.remove("selectedFilter");
          });
          clickedMunicipal.target.classList.add("selectedFilter");
          var municipalRegions =
            stationsList.Provinces[clickedProvince.target.textContent]
              .Municipaties[clickedMunicipal.target.textContent].Regions;
          regionsFilter.innerHTML = "";
          municipalRegions.forEach(function (munipalRegion) {
            regionsFilter.insertAdjacentHTML(
              "beforeend",
              `<a href="#" class="filterItem regionFilterItem" >${munipalRegion}</a>`
            );

            var regions = document.querySelectorAll(".regionFilterItem");

            regions.forEach(function (region) {
              region.addEventListener("click", (e) => {
                e.target.parentNode.childNodes.forEach(function (allRegions) {
                  allRegions.classList.remove("selectedFilter");
                });
                e.target.classList.add("selectedFilter");
              });
            });
          });
        });
      });
    });
  });
}

includeFilters();

function openStation() {
  window.location.href = "../responders-list/responders-list.html";
}

var paginatePersonel = (function () {
  var paginatedList = document.querySelector(".paginated");
  paginate(paginatedList);
})();

function openClusterForm() {
  openModal("addUserPopup");
}

function loadProvinces() {
  var provinceDatalist = document.querySelector("#provinceList");

  provinces.forEach(function (eachProvince) {
    provinceDatalist.insertAdjacentHTML(
      "beforeend",
      `<option value ="${eachProvince}"><option>`
    );
  });
}

loadProvinces();

function loadMunicipalities(thisProvince) {
  var municipalityDatalist = document.querySelector("#metroList");
  var selectedProvince = `${thisProvince.value}`;
  provinceMunicipalities = Object.keys(
    stationsList.Provinces[selectedProvince].Municipaties
  );

  provinceMunicipalities.forEach(function (eachMunicipality) {
    municipalityDatalist.insertAdjacentHTML(
      "beforeend",
      `<option value ="${eachMunicipality}"><option>`
    );
  });
}
function loadRegions(thisMunicipality) {
  var regionDatalist = document.querySelector("#clusterList");
  var regionProvince = document.querySelector("#addStationProvince").value;
  var selectedMunicipality = `${thisMunicipality.value}`;
  municipalityRegions =
    stationsList.Provinces[regionProvince].Municipaties[selectedMunicipality]
      .Regions;

  municipalityRegions.forEach(function (eachRegion) {
    regionDatalist.insertAdjacentHTML(
      "beforeend",
      `<option value ="${eachRegion}"><option>`
    );
  });
}
