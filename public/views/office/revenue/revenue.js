function editRate(thisBtn) {
  var rateInput = document.querySelector("#currentRate");

  thisBtn.innerText = "Update Rate";
  rateInput.disabled = false;
  rateInput.focus();
  rateInput.select();
  console.log(thisBtn.innerText);
}
