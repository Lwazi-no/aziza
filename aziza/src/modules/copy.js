//pagination and fill users table

(function () {
  var paginatedList = document.querySelector(".paginated");
  var paginatedItems = paginatedList.children;
  //   const paginatedList = document.querySelector(".toggledList");

  function Pagination() {
    const prevButton = document.getElementById("paginateLeft");
    const nextButton = document.getElementById("paginateRight");
    const clickPageNumber = document.querySelectorAll(".clickPageNumber");

    const numberOfRows = document.querySelector("#pageSizeSelector");
    var valueSelected = numberOfRows.options[numberOfRows.selectedIndex].value;

    let current_page = 1;
    let records_per_page = numberOfRows.value;

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
        .getElementById("page_number")
        .getElementsByClassName("clickPageNumber");
      for (let i = 0; i < page_number.length; i++) {
        if (i == current_page - 1) {
          page_number[i].style.opacity = "1.0";
        } else {
          page_number[i].style.opacity = "0.5";
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
      //  define users currently shown and paginate based on those specific users and not both

      const tbody = paginatedItems;

      if (page < 1) {
        page = 1;
      }
      if (page > numPages() - 1) {
        page = numPages();
      }

      for (
        var i = (page - 1) * records_per_page;
        i < page * records_per_page && i < paginatedList.length;
        i++
      )
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
      return Math.ceil(paginatedList.length / records_per_page);
    };
  }
  let pagination = new Pagination();
  pagination.init();
})();
