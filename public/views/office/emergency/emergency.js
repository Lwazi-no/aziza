var bodyLayout = document.querySelector(".bodyLayout");
// var stationsList = [
//   {
//     province: "Gauteng",
//     metros: [
//       {
//         metroName: "JoburgMetro",

//         clusters: [
//           {
//             clusterName: "Joburg Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//           {
//             clusterName: "Another Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         metroName: "EkurhuleniMetro",

//         clusters: [
//           {
//             clusterName: "Joburg Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//           {
//             clusterName: "Another Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     province: "Limpopo",
//     metros: [
//       {
//         metroName: "Ga-Kibi Metro",

//         clusters: [
//           {
//             clusterName: "Joburg Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//           {
//             clusterName: "Another Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         metroName: "Polokwane Metro",

//         clusters: [
//           {
//             clusterName: "Polok Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//           {
//             clusterName: "Another Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     province: "KwazuluNatal",
//     metros: [
//       {
//         metroName: "Ga-Kibi Metro",

//         clusters: [
//           {
//             clusterName: "Joburg Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//           {
//             clusterName: "Another Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         metroName: "Polokwane Metro",

//         clusters: [
//           {
//             clusterName: "Polok Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//           {
//             clusterName: "Another Cluster",
//             stations: [
//               {
//                 stationName: "CBD",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//               {
//                 stationName: "HIllbrow",
//                 stationManagerName: "Nomgqibelo Ncibisa",
//                 stationManagerNumber: "071 728 1113",
//                 stationManagerEmail: "nncamisile@saps.com",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

var clustersList = [
  (Gauteng = [
    ({ joburg } = [
      { clusterName: "jONe" },
      { clusterName: "jTwo" },
      { clusterName: "jThree" },
    ]),
    (tshwane = [jONe, jTwo, jThree]),
  ]),
  (Limpopo = [(polokwane = [jONe, jTwo, jThree])]),
];

console.log(clustersList[0]);
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

openClusterForm();
function loadProvinces() {
  var provinceContainer = document.querySelector("#provinceList");

  var stationList = document.querySelector("#stationList");

  stationsList.forEach(function (stationsListItem) {
    provinceContainer.insertAdjacentHTML(
      "beforeend",
      `<option value="${stationsListItem.province}" id="${stationsListItem.province}" ></option>`
    );
  });
}

loadProvinces();

function loadMetros(thisProvince) {
  var metroContainer = document.querySelector("#metroList");

  let clickedProvince = stationsList.find(
    ({ province }) => province === thisProvince.value
  );
  let selectedProvinceMetros = clickedProvince.metros;

  selectedProvinceMetros.forEach(function (provinceMetro) {
    metroContainer.insertAdjacentHTML(
      "beforeend",
      `<option value="${provinceMetro.metroName}" id="${provinceMetro.metroName}" ></option>`
    );
  });
}
function loadClusters(thisMetro) {
  var clusterContainer = document.querySelector("#clusterList");

  let selectedMetro = `"${thisMetro.value}"`;
  let clickedProvince = stationsList.find(
    ({ metroName }) => metroName === thisMetro.value
  );

  // console.log(selectedMetro);

  console.log(thisMetro.value);
  console.log(clickedProvince);
  // let selectedProvinceMetros = clickedProvince.metros;

  // selectedProvinceMetros.forEach(function (provinceMetro) {
  //   clusterContainer.insertAdjacentHTML(
  //     "beforeend",
  //     `<option value="${provinceMetro.metroName}" id="${provinceMetro.metroName}" ></option>`
  //   );
  // });
}
