var caseTypes = (function () {
  var radioOptions = ["Active Calls", "Attended Calls"];
  customRadio("stationPersonelType", radioOptions, "personelType");
})();

var paginatedList = document.querySelector(".paginated");

function showOnlySelected() {
  var userTypes = document.querySelector(".optionSelector").children;
  var casesContainer = document.querySelector(".casesContainer");

  var casesTable = document.querySelector(".casesList");

  var activeCasesHtml = `<thead>
  <tr>
    <th>Rescue Call Status</th>
    <th>Victim Fullnames</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <span class="caseStatus inProgress">In progress</span>
    </td>
    <td>
      <div class="userNameAndPic">
        <div class="userPic">
          <img src="../../../src/media/man.jpg" alt="" />
        </div>
        <span>Edward Smitten</span>
      </div>
    </td>
    <td>
      <a href="../track/track.html"  class="userRowAction track">Track</a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="caseStatus active">Unassigned</span>
    </td>
    <td>
      <div class="userNameAndPic">
        <div class="userPic">
          <img src="../../../src/media/man.jpg" alt="" />
        </div>
        <span>Edward Smitten</span>
      </div>
    </td>
    <td>
      <a href="#" class="userRowAction assign">Assign to</a>
    </td>
  </tr>
</tbody>`;

  var attendedCasesHtml = `  <thead>
<tr>
  <th>Date & time</th>
  <th>Victim Fullnames</th>
  
  <th>Responder</th>
</tr>
</thead>
<tbody>
<tr>
  <td>
    <span class="time">17/10/2021, at 16:24</span>
  </td>
  <td>
    <div class="userNameAndPic">
      <div class="userPic">
        <img src="../../../src/media/man.jpg" alt="" />
      </div>
      <span>Edward Smitten</span>
    </div>
  </td>
  
  <td><span class="attender">Thabo Neo</span></td>
</tr>
</tbody>`;

  userTypes[0].addEventListener("click", function () {
    let responders = document.querySelector(".responders");
    responders.style.display = "flex";
    casesContainer.style = ` display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
      " options options"
      "cases responders";`;

    casesTable.innerHTML = activeCasesHtml;
  });

  userTypes[1].addEventListener("click", function () {
    let responders = document.querySelector(".responders");
    responders.style.display = "none";
    casesContainer.style = ` display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
      " options options"
      "cases cases";`;
    casesTable.innerHTML = attendedCasesHtml;
  });
  var clickOnLoad = (function cliclickOnLoadckOverviewPage() {
    userTypes[0].click();
  })();

  paginate(paginatedList);
}
showOnlySelected();
