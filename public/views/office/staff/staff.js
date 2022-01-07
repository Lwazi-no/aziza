function openUser(selectedUser) {
  var allUsers = document.querySelectorAll("tbody tr td");
  var rightSide = document.querySelector(".rightSide");
  var bodyLayout = document.querySelector(".bodyLayout");
  var thisUser = selectedUser.querySelectorAll("td");

  rightSide.style.display = "flex";

  bodyLayout.style = `
     display: grid;
    height: 100%;
    grid-template-columns: 2.5fr 1fr;
    grid-template-areas:     
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

function openUserForm() {
  openModal("addUserPopup");
}

function editUser() {
  var inputFields = document.querySelectorAll(".editable");

  var editBtn = document.querySelector("#editBtn");
  inputFields.forEach((inputField) => {
    inputField.disabled = false;
  });

  editBtn.textContent = "Save";
  inputFields[0].focus();
}
