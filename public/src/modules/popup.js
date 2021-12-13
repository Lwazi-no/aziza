function openModal(ID) {
  var modalContainer = document.getElementById(ID);
  modalContainer.style.display = "grid";
  window.onclick = function (event) {
    var modal = document.getElementById(ID);
    if (event.target == modal) {
      closeModal(ID);
    }
  };
}

function closeModal(ID) {
  var modalContainer = document.getElementById(ID);
  modalContainer.style.display = "none";
}