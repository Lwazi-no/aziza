function showLoader() {
  var loaderContainer = document.createElement("div");
  loaderContainer.className += "loaderContainer";
  loaderContainer.innerHTML = `<div class="lds-roller">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div>`;
  document.getElementsByTagName("body")[0].append(loaderContainer);
  window.onload = function () {
    loaderContainer.style.display = "none";
  };
}

showLoader();
