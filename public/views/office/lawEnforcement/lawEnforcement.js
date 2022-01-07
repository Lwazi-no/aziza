var bodyLayout = document.querySelector(".bodyLayout");
var provinces = Object.keys(stationsList.Provinces);

function toggleFilters() {
  var filterMenu = document.querySelector(".filterMenu");
  var filterRowLabel = document.querySelector(".filterRowLabel");
  filterRowLabel.classList.toggle("active");
  filterMenu.classList.toggle("active");
}

function includeFilters() {
  var provinceFilter = document.querySelector(
    ".filterClassOptions.provincesFilter"
  );
  var metroFilter = document.querySelector(".filterClassOptions.metrosFilter");
  var clusterFilter = document.querySelector(
    ".filterClassOptions.clustersFilter"
  );

  provinces.forEach(function (eachProvince) {
    provinceFilter.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="filterItem provinceFilterItem ${eachProvince}">${eachProvince}</a>`
    );
  });

  var selectedFilters = document.querySelectorAll(".filterItem");
  var filtersItemsCloseBtn = document.querySelectorAll(".filterItem:after");

  selectedFilters.forEach(function (included) {
    included.addEventListener("click", () => {
      var appliedFilters = document.querySelector(".appliedFilters");

      appliedFilters.insertAdjacentHTML(
        "beforeend",
        ` <span class="selectedfilterItem">${included.innerText}
        <a class="selectedfilterItemCloseBtn" onclick="return this.parentNode.remove()" href="#">X</a>
        </span>`
      );
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
  console.log(provinceDatalist);
}

loadProvinces();
