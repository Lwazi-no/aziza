function editUser() {
  var inputFields = document.querySelectorAll("input");

  var editBtn = document.querySelector("#editBtn");
  inputFields.forEach((inputField) => {
    inputField.disabled = false;
  });

  editBtn.textContent = "Update user";
  inputFields[0].focus();
}

function PreviewImage() {
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("updateUserPic").files[0]);

  oFReader.onload = function (oFREvent) {
    document.getElementById("selectedImage").src = oFREvent.target.result;
  };
}
