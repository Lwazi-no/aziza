var stationPersonelTypes = (function () {
  var radioOptions = ["Responders", "Admin"];
  customRadio("stationPersonelType", radioOptions, "personelType");
})();

var paginatePersonel = (function () {
  var paginatedList = document.querySelector(".paginated");
  paginate(paginatedList);
})();

var listSearch = (function () {
  let table = document.querySelector(".stationPersonelList");
  let searchInputID = "personelSearchInput";

  searchInTable(table, searchInputID);
})();
