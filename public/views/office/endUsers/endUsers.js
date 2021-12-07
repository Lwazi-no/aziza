var generateUserTypeOptions = (function () {
  var radioOptions = ["Subscribed Users", "Non Subscribed Users"];

  customRadio("stationPersonelType", radioOptions, "services");
})();

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

function openNotificationForm() {
  openModal("notificationForm");
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
    let subscribed = document.querySelectorAll(
      ".stationPersonelList tbody .subscribed"
    );
    allPersonel.forEach((allPerson) => {
      allPerson.style.display = "none";
    });
    subscribed.forEach((subscriber) => {
      subscriber.style.display = "table-row";
    });
  });

  userTypes[1].addEventListener("click", function () {
    showAllPersonel();
    let unsubscribed = document.querySelectorAll(
      ".stationPersonelList tbody .notSubscribed"
    );
    allPersonel.forEach((allPerson) => {
      allPerson.style.display = "none";
    });
    unsubscribed.forEach((notSubscribed) => {
      notSubscribed.style.display = "table-row";
    });
  });

  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    userTypes[0].click();
  })();
}
showOnlySelected();
