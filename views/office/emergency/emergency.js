var bodyLayout = document.querySelector(".bodyLayout");

function toggleFilters() {
  var filterMenu = document.querySelector(".filterMenu");
  var filterRowLabel = document.querySelector(".filterRowLabel");

  filterRowLabel.classList.toggle("active");
  filterMenu.classList.toggle("active");
}

var provinces = [
  "Gauteng",
  "Limpopo",
  "North West",
  "Northern Cape",
  "Kwazulu Natal",
  "Eastern Cape",
  "Western Cape",
  "Mpumalanga",
  "Free State",
];

function includeProvinces() {
  var provinceFilter = document.querySelector(".filterClassOptions.provinces");

  function addToFilter(thisItem) {}

  provinces.forEach(function (province) {
    provinceFilter.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="province">${province}</a>`
    );
  });

  var includedProvinces = document.querySelectorAll(".province");
  var filtersItemsCloseBtn = document.querySelectorAll(".filterItem:after");

  includedProvinces.forEach(function (included) {
    included.addEventListener("click", () => {
      var appliedFilters = document.querySelector(".appliedFilters");

      appliedFilters.insertAdjacentHTML(
        "beforeend",
        ` <span class="filterItem">${included.innerText}</span>`
      );
    });
  });
}

includeProvinces();

function openStation() {
  window.location.href = "../responders-list/responders-list.html";
}

var paginatePersonel = (function () {
  var paginatedList = document.querySelector(".paginated");
  paginate(paginatedList);
})();
