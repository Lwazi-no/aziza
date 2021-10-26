function customRadio(containerID, radioOptions, radioName) {
  var optionSelectorContainer = document.querySelector(`#${containerID}`);
  optionSelectorContainer.innerHTML = `<div class="optionSelector"></div>`;

  for (let i = 0; i < radioOptions.length; i++) {
    optionSelectorContainer.childNodes[0].innerHTML += `

     <label for="${radioOptions[i]}" class="optionSelectorLabel">
       <input
         type="radio"
         class="invisibleInput"
         name="${radioName}"
         id="${radioOptions[i]}"
         value="${radioOptions[i]}"
         checked
       />
       <div class="background">
         <span class="optionLabel">${radioOptions[i]}</span>
       </div>
     </label>
   `;
  }
}
