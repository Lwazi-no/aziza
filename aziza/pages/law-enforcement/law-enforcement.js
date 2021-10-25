import { paginate } from "../../src/modules/pagination.js";

function loadAndPaginateStations() {
  var paginatedList = document.querySelector(".stations");
  var paginatedItems = paginatedList.children;
  var pageSizeValue = 10;

  var paginationAttributes = paginate(paginatedItems.length, 1, 3);

  function addPages() {
    var pages = paginationAttributes.pages;

    function includePage(thePage, index) {
      paginationPages.insertAdjacentHTML(
        "beforeend",
        `<a href="#" class="paginationPage">${thePage}</a>`
      );
    }

    pages.forEach(includePage);
  }

  var paginationRow = `
  <div class="paginationRow">
  <label for="pageSizeSelector" class="selectorRow">
    <span>Show</span>
    <select
      name="pageSizeSelector"
      id="pageSizeSelector"
      class="pageSizeSelector"
    >
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="${paginationAttributes.totalItems}">${paginationAttributes.totalItems}</option>

    </select>
  </label>

  <div class="pageSelection">
    <a href="#" class="paginationBtn" id="paginateLeft">
      <i class="fas fa-chevron-left"></i>
    </a>
    <div class="paginationPages">

    </div>

    <a href="#" class="paginationBtn" id="paginateRight">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
  </div>

  `;

  paginatedList.insertAdjacentHTML("afterend", paginationRow);

  var paginationPages = document.querySelector(".paginationPages");

  addPages();
  console.log(paginationPages);
}

loadAndPaginateStations();
