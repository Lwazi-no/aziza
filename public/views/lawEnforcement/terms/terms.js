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

  var terms = document.querySelector("#terms");
  var privacy = document.querySelector("#privacy");

  settingsSelector[0].addEventListener("click", function () {
    terms.style.display = "block";
    privacy.style.display = "none";
  });

  settingsSelector[1].addEventListener("click", function () {
    terms.style.display = "none";
    privacy.style.display = "block";
  });

  var clickOnLoad = (function clickOnLoad() {
    settingsSelector[0].click();
  })();
}

showOnlySelected();
