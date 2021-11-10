var generateUserTypeOptions = (function () {
  var radioOptions = ["Responders", "Admin"];

  customRadio("stationPersonelType", radioOptions, "services");
})();

function goBack() {
  window.location.replace(document.referrer);
}

function openUser(selectedUser) {
  var allUsers = document.querySelectorAll("tbody tr td");
  var rightSide = document.querySelector(".rightSide");
  var bodyLayout = document.querySelector(".bodyLayout");
  var thisUser = selectedUser.querySelectorAll("td");

  rightSide.style.display = "flex";

  bodyLayout.style = `
   display: grid;
  height: 100%;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 2.5fr 1fr;
  grid-template-areas:
    "backBtn rightSide "
    "leftSide rightSide";
    transition: all 250ms ease-in-out;
    `;

  function removeActive(eachUser) {
    eachUser.classList.remove("active");
  }

  function addActive(thisUser) {
    thisUser.classList.add("active");
  }

  allUsers.forEach(removeActive);
  thisUser.forEach(addActive);
}

var paginatePersonel = (function () {
  var paginatedList = document.querySelector(".paginated");
  paginate(paginatedList);
})();

var listSearch = (function () {
  let table = document.querySelector(".stationPersonelList");
  let searchInputID = "personelSearchInput";

  searchInTable(table, searchInputID);
})();

function showOnlySelected() {
  var userTypes = document.querySelector(".optionSelector").children;
  let allPersonel = document.querySelectorAll(".stationPersonelList tbody tr");

  function showAllPersonel() {
    allPersonel.forEach((allPerson) => {
      allPerson.style.display = "table-row";
    });
  }

  userTypes[0].addEventListener("click", function () {
    showAllPersonel();
    let responders = document.querySelectorAll(
      ".stationPersonelList tbody .responder"
    );
    allPersonel.forEach((allPerson) => {
      allPerson.style.display = "none";
    });
    responders.forEach((responder) => {
      responder.style.display = "table-row";
    });
  });

  userTypes[1].addEventListener("click", function () {
    showAllPersonel();
    let admins = document.querySelectorAll(".stationPersonelList tbody .admin");
    allPersonel.forEach((allPerson) => {
      allPerson.style.display = "none";
    });
    admins.forEach((admin) => {
      admin.style.display = "table-row";
    });
  });

  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    document.querySelector("#Responders").click();
  })();
}
showOnlySelected();
