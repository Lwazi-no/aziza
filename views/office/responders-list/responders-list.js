function editProfile(thisBtn) {
  var formInputs = document.querySelectorAll(".infoText");

  formInputs.forEach(function (formInput) {
    formInput.disabled = false;
  });
  formInputs[0].focus();
  thisBtn.lastElementChild.innerText = "Save";
  console.log(thisBtn.lastElementChild.innerText);
}

function openManagerForm() {
  openModal("addManagerPopup");
}
