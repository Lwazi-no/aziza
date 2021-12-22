function openModal(ID) {
  var modalContainer = document.getElementById(ID);
  modalContainer.style.display = "grid";
  modalContainer.onclick = function (event) {
    console.log(event.target);
    // var modal = document.getElementById(ID);
    const targetID = event.target.id;
    const parentID = event.target.parentNode.id;
    const parentOfParentID = event.target.parentNode.parentNode.id;

    console.log(targetID, parentID, parentOfParentID);
    if (targetID == ID || parentID === ID || parentOfParentID === ID) {
      closeModal(ID);
    }
  };
}

function closeModal(ID) {
  var modalContainer = document.getElementById(ID);
  modalContainer.style.display = "none";
}
