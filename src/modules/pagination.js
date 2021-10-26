export const paginate = function paginate(paginatedList) {
  // var paginatedList = document.querySelector(".paginated");
  var paginatedItems = paginatedList.children;

  let createELements = function () {
    var paginationRow = `<div class="paginationRow">
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
    </select>
  </label>

  <div class="pageSelection">
    <a href="#" class="paginationBtn" id="paginateLeft">
      <i class="fas fa-chevron-left"></i>
    </a>
    <div class="paginationPages"></div>

    <a href="#" class="paginationBtn" id="paginateRight">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>`;

    paginatedList.insertAdjacentHTML("afterend", paginationRow);
  };

  createELements();

  (function () {
    function Pagination() {
      const prevButton = document.getElementById("paginateLeft");
      const nextButton = document.getElementById("paginateRight");
      const clickPageNumber = document.querySelectorAll(".clickPageNumber");

      const pageSizeSelector = document.querySelector("#pageSizeSelector");

      function getValue() {
        return pageSizeSelector.options[pageSizeSelector.selectedIndex].value;
      }

      function valueSelected() {
        pageSizeSelector.addEventListener("change", function () {
          let SelectedValue =
            pageSizeSelector.options[pageSizeSelector.selectedIndex].value;
          console.log(SelectedValue);

          // return { SelectedValue };
        });
      }

      valueSelected();

      // var valueSelected =
      //   numberOfRows.options[numberOfRows.selectedIndex].value;

      let current_page = 1;
      let records_per_page = 10;

      this.init = function () {
        changePage(1);
        pageNumbers();
        selectedPage();
        clickPage();
        addEventListeners();
      };

      let addEventListeners = function () {
        prevButton.addEventListener("click", prevPage);
        nextButton.addEventListener("click", nextPage);
      };

      let selectedPage = function () {
        let page_number = document
          .querySelector(".paginationPages")
          .querySelectorAll(".clickPageNumber");
        for (let i = 0; i < page_number.length; i++) {
          if (i == current_page - 1) {
            // page_number[i].style.opacity = "1.0";
            page_number[i].classList.add("active");
          } else {
            // page_number[i].style.opacity = "0.5";
            page_number[i].classList.remove("active");
          }
        }
      };

      let checkButtonOpacity = function () {
        current_page == 1
          ? prevButton.classList.add("opacity")
          : prevButton.classList.remove("opacity");
        current_page == numPages()
          ? nextButton.classList.add("opacity")
          : nextButton.classList.remove("opacity");
      };

      let changePage = function (page) {
        const tbody = paginatedList.innerHTML;

        if (page < 1) {
          page = 1;
        }
        if (page > numPages() - 1) {
          page = numPages();
        }

        for (
          var i = (page - 1) * records_per_page;
          i < page * records_per_page && i < paginatedItems.length;
          i++
        ) {
          paginatedList.innerHTML = tbody;
        }
        checkButtonOpacity();
        selectedPage();
      };

      let prevPage = function () {
        if (current_page > 1) {
          current_page--;
          changePage(current_page);
        }
      };

      let nextPage = function () {
        if (current_page < numPages()) {
          current_page++;
          changePage(current_page);
        }
      };

      let clickPage = function () {
        document.addEventListener("click", function (e) {
          if (
            e.target.nodeName == "SPAN" &&
            e.target.classList.contains("clickPageNumber")
          ) {
            current_page = e.target.textContent;
            changePage(current_page);
          }
        });
      };

      let pageNumbers = function () {
        let pageNumber = document.querySelector(".paginationPages");
        pageNumber.innerHTML = "";

        for (let i = 1; i < numPages() + 1; i++) {
          pageNumber.innerHTML += `<span class='clickPageNumber paginationPage'>${i}</span>`;
        }
      };

      let numPages = function () {
        return Math.ceil(paginatedItems.length / records_per_page);
      };
    }
    let pagination = new Pagination();
    pagination.init();
  })();
};
