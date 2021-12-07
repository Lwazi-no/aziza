var generateUserTypeOptions = (function () {
  var radioOptions = ["Terms Of Use", "Privacy Policy"];

  customRadio("stationPersonelType", radioOptions, "services");
})();

function initEditor() {
  var wysiwygContainers = document.querySelectorAll(".wysiwyg");
  wysiwygContainers.forEach((wysiwygContainer) => {
    wysiwygContainer.innerHTML = editorHTML;
  });
}

initEditor();
wysiwyg();

function showOnlySelected() {
  var settingsSelector = document.querySelector(".optionSelector").children;
  let allPersonel = document.querySelectorAll(".stationPersonelList tbody tr");

  function showAllPersonel() {
    allPersonel.forEach((allPerson) => {
      allPerson.style.display = "table-row";
    });
  }

  var terms = document.querySelector("#terms");
  var privacy = document.querySelector("#privacy");

  settingsSelector[0].addEventListener("click", function () {
    showAllPersonel();
    terms.style.display = "block";
    privacy.style.display = "none";
  });

  settingsSelector[1].addEventListener("click", function () {
    terms.style.display = "none";
    privacy.style.display = "block";
  });
  settingsSelector[2].addEventListener("click", function () {
    terms.style.display = "none";
    privacy.style.display = "none";
  });

  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    settingsSelector[0].click();
  })();
}

showOnlySelected();
