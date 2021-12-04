var paginatePersonel = (function () {
  var paginatedList = document.querySelector(".paginated");
  paginate(paginatedList);
})();

var listSearch = (function () {
  let table = document.querySelector(".stationPersonelList");
  let searchInputID = "personelSearchInput";

  searchInTable(table, searchInputID);
})();

// function expandMap() {
//   var bodyLayout = document.querySelector(".bodyLayout");
//   var leftSide = document.querySelector(".leftSide");

//   bodyLayout.stylw = `display: grid;
//   height: 100%;
//   grid-template-columns: 2fr 2.5fr;
//   grid-template-areas: "rightSide rightSide";
//   transition: all 250ms ease-in-out;`;

//   leftSide.getElementsByClassName.display = "none";
// }

function openUser(selectedUser) {}
