export const customRadio = function customRadio(
  containerID,
  radioOptions,
  radioName
) {
  var optionSelectorContainer = document.querySelector(`#${containerID}`);

  for (let i = 0; i < radioOptions.length; i++) {
    optionSelectorContainer.innerHTML += `
   <div class="optionSelector">
   <label for="${radioOptions[i]}" class="optionSelectorLabel">
     <input
       type="radio"
       class="invisibleInput"
       name="${radioName}"
       id="${radioOptions[i]}"
       checked="checked"
     />
     <div class="background">
       <span class="optionLabel">${radioOptions[i]}</span>
     </div>
   </label>

 </div>`;
  }
};
