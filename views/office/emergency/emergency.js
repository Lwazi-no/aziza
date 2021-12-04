var bodyLayout = document.querySelector(".bodyLayout");
var stationsList = [
  {
    province: "Gauteng",
    metros: [
      {
        metroName: "Joburg Metro",

        clusters: [
          {
            clusterName: "Joburg Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
          {
            clusterName: "Another Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
        ],
      },
      {
        metroName: "Ekurhuleni Metro",

        clusters: [
          {
            clusterName: "Joburg Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
          {
            clusterName: "Another Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    province: "Limpopo",
    metros: [
      {
        metroName: "Ga-Kibi Metro",

        clusters: [
          {
            clusterName: "Joburg Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
          {
            clusterName: "Another Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
        ],
      },
      {
        metroName: "Polokwane Metro",

        clusters: [
          {
            clusterName: "Polok Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
          {
            clusterName: "Another Cluster",
            stations: [
              {
                stationName: "CBD",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
              {
                stationName: "HIllbrow",
                stationManagerName: "Nomgqibelo Ncibisa",
                stationManagerNumber: "071 728 1113",
                stationManagerEmail: "nncamisile@saps.com",
              },
            ],
          },
        ],
      },
    ],
  },
];

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

  function addToFilter(thisItem) {}

  stationsList.forEach(function (stationsListItem) {
    provinceFilter.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="filterItem provinceFilterItem ${stationsListItem.province}">${stationsListItem.province}</a>`
    );

    var filterItemProvince = document.querySelector(
      `.provinceFilterItem.${stationsListItem.province.replace(/\s+/g, "")}`
    );

    filterItemProvince.addEventListener("click", (e) => {
      let clickedProvince = stationsList.find(
        ({ province }) => province === e.target.innerText
      );
      let provinceMetros = clickedProvince.metros;

      provinceMetros.forEach(function (provinceMetro) {
        metroFilter.insertAdjacentHTML(
          "beforeend",
          `<a href="#" class="filterItem metroFilterItem ${provinceMetro.metroName.replace(
            /\s+/g,
            ""
          )}">${provinceMetro.metroName}</a>`
        );

        var filterItemMetro = document.querySelector(
          `.metroFilterItem.${provinceMetro.metroName.replace(/\s+/g, "")}`
        );

        filterItemMetro.addEventListener("click", (e) => {
          let clickedMetro = provinceMetros.find(
            ({ metroName }) => metroName === e.target.innerText
          );
          let metroClusters = clickedMetro.clusters;

          metroClusters.forEach(function (metroCluster) {
            clusterFilter.insertAdjacentHTML(
              "beforeend",
              `<a href="#" class="filterItem clusterFilterItem ${metroCluster.clusterName.replace(
                /\s+/g,
                ""
              )}">${metroCluster.clusterName}</a>`
            );
          });
        });
      });
    });
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
