const editorHTML = `

<div class="editor">
  <div class="toolbar">
    <div class="line">
      <div class="box">
        <span
          class="btn icon smaller"
          data-action="bold"
          data-tag-name="b"
          title="Bold"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25432.svg"
          />
        </span>
        <span
          class="btn icon smaller"
          data-action="italic"
          data-tag-name="i"
          title="Italic"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25392.svg"
          />
        </span>
        <span
          class="btn icon smaller"
          data-action="underline"
          data-tag-name="u"
          title="Underline"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25433.svg"
          />
        </span>
        <span
          class="btn icon smaller"
          data-action="strikeThrough"
          data-tag-name="strike"
          title="Strike through"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25626.svg"
          />
        </span>
      </div>

      <div class="box">
        <span class="btn icon has-submenu">
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25351.svg"
          />
          <div class="submenu">
            <span
              class="btn icon"
              data-action="justifyLeft"
              data-style="textAlign:left"
              title="Justify left"
            >
              <img
                loading="lazy"
                src="https://image.flaticon.com/icons/svg/25/25351.svg"
              />
            </span>
            <span
              class="btn icon"
              data-action="justifyCenter"
              data-style="textAlign:center"
              title="Justify center"
            >
              <img
                loading="lazy"
                src="https://image.flaticon.com/icons/svg/25/25440.svg"
              />
            </span>
            <span
              class="btn icon"
              data-action="justifyRight"
              data-style="textAlign:right"
              title="Justify right"
            >
              <img
                loading="lazy"
                src="https://image.flaticon.com/icons/svg/25/25288.svg"
              />
            </span>
            <span
              class="btn icon"
              data-action="formatBlock"
              data-style="textAlign:justify"
              title="Justify block"
            >
              <img
                loading="lazy"
                src="https://image.flaticon.com/icons/svg/25/25181.svg"
              />
            </span>
          </div>
        </span>
        <span
          class="btn icon"
          data-action="insertOrderedList"
          data-tag-name="ol"
          title="Insert ordered list"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25242.svg"
          />
        </span>
        <span
          class="btn icon"
          data-action="insertUnorderedList"
          data-tag-name="ul"
          title="Insert unordered list"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25648.svg"
          />
        </span>
        <span class="btn icon" data-action="outdent" title="Outdent">
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25410.svg"
          />
        </span>
        <span class="btn icon" data-action="indent" title="Indent">
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25233.svg"
          />
        </span>
      </div>
      <div class="box">
        <span
          class="btn icon"
          data-action="insertHorizontalRule"
          title="Insert horizontal rule"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25232.svg"
          />
        </span>
      </div>
    </div>
    <div class="line">
      <div class="box">
        <span
          class="btn icon smaller"
          data-action="undo"
          title="Undo"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25249.svg"
          />
        </span>
        <span
          class="btn icon"
          data-action="removeFormat"
          title="Remove format"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25454.svg"
          />
        </span>
      </div>

      <div class="box">
        <span
          class="btn icon smaller"
          data-action="createLink"
          title="Insert Link"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25385.svg"
          />
        </span>
        <span
          class="btn icon smaller"
          data-action="unlink"
          data-tag-name="a"
          title="Unlink"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25341.svg"
          />
        </span>
      </div>

      <div class="box">
        <span
          class="btn icon"
          data-action="code"
          title="Show HTML-Code"
        >
          <img
            loading="lazy"
            src="https://image.flaticon.com/icons/svg/25/25185.svg"
          />
        </span>
      </div>
    </div>
  </div>
  <div class="content-area">
    <div class="visuell-view privacy" contenteditable>
      <p>&nbsp;</p>
      <h4>Introduction</h4>
      <p>
        Welcome to the SouthAfrica.info website www.southafrica.info.
        The website provides information about the country for
        <a href="http://www.brandsouthafrica.com/" target="_blank"
          >Brand South Africa</a
        >
        (Brand SA). The website is owned by Brand SA, hosted by
        <a href="http://www.privatelabel.co.za/" target="_blank"
          >Private Label Web Solutions</a
        >, and is located within the Republic of South Africa.
      </p>
      <p>
        By accessing and using this website, you agree to be bound by
        the terms and conditions set out in this notice. If you do not
        wish to be bound by these terms and conditions, then you may
        not access, display, use, download, copy or distribute any of
        the content of this website.
      </p>
      <h4>Your use of the website</h4>
      <p>
        You agree that your use of this website is for lawful purposes
        only. You agree that you will not use this website for any
        unlawful purpose, including committing a criminal offence,
        gaining unauthorised access to other computer systems, or
        transmitting unlawful material.
      </p>
      <h4>General disclaimer</h4>
      <p>
        You agree to access and use this site entirely at your own
        risk. Please read the Exclusion of Liability clauses below.
      </p>
      <h4>Choice of law</h4>
      <p>
        This website is owned and operated within the Republic of
        South Africa. Therefore, these terms and conditions are
        governed by the laws of the Republic of South Africa, and the
        user consents to the jurisdiction of the Witwatersrand High
        Court in the event of any dispute.
      </p>
      <h4>Accuracy of information</h4>
      <p>
        While every effort is made to ensure that the information
        provided on this website is current and accurate, you should
        not assume that this is always the case, and should consult
        other sources before making any decision to act on this
        information.
      </p>
      <h4>Your privacy</h4>
      <p>
        We respect the privacy of all visitors to this site. You may
        use this site without providing any personal information.
        However, so that we can regularly assess and improve the site,
        we collect information on the number of visits to the site,
        pages viewed, etc.
      </p>
      <h4>Copyright and use of material</h4>
      <p>
        Brand SA retains copyright in the website and all current and
        future content displayed on the website which is not owned by
        third parties.
      </p>
      <p>
        In terms of a limited licence, granted for general use, Brand
        SA grants the user, subject to these terms and conditions, a
        non-exclusive, non-transferable, limited and revocable right
        to access, display, use, download and otherwise copy the
        current and future content of the website for your personal,
        non-commercial and informational purposes only.
      </p>
      <p>
        In addition, Brand SA grants you permission to copy and
        distribute information from the website for non-commercial
        purposes, provided that: (i) this information has not been
        sourced from third parties; (ii) you notify Brand SA of such
        use; and (iii) SouthAfrica.info is acknowledged as the source
        by reference to the website address.
      </p>
      <p>
        This website and its contents may not be reproduced,
        duplicated, copied, resold or otherwise used for any
        commercial purpose without the express prior written consent
        of Brand SA.
      </p>
      <h4>Your comments</h4>
      <p>
        We value feedback received from visitors to our site. However,
        you agree not to transmit any material that is unlawful,
        harmful, defamatory, abusive, threatening, vulgar or obscene.
        You remain liable to any third party for your comments, and
        Brand SA is not liable to any third party for the content of
        your comments.
      </p>
      <p>
        Please also note that we cannot respond to all feedback we
        receive.
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          <a
            href="http://www.brandsouthafrica.com/contact-us"
            target="_blank"
            >Comments: Brand South Africa</a
          >
        </li>
      </ul>
      <p>&nbsp;</p>
      <h4>External links and advertising</h4>
      <p>
        Wherever this website provides links to other websites, this
        should not be construed as constituting any relationship or
        endorsement of the linked third party, and reliance on all
        information provided by the external link is done so at your
        own risk.
      </p>
      <p>
        Wherever third party advertising or promotional material is
        displayed on this website, this should not be construed as
        Brand SA endorsing or creating any relationship between Brand
        SA and that third party. Reliance on any such material is
        entirely at your own risk.
      </p>
      <h4>Linking</h4>
      <p>
        Any third party wishing to link to this website from their
        website must obtain permission from Brand SA, and permission
        may be granted on terms and conditions agreed.
      </p>
      <h4>Exclusion of liability</h4>
      <p>
        You expressly agree that the use of this website is entirely
        at your own risk. The website and all its contents are
        provided on an “as is” basis, and Brand SA makes no
        representations or warranties of any kind, whether express or
        implied, to the accuracy of the contents of the website. Brand
        SA does not warrant that the website’s functions will be
        uninterrupted or error-free, or that the site or its server is
        free from viruses or other harmful components.
      </p>
      <p>
        Brand SA, its owners, directors, employees, officials,
        suppliers, agents and/or representatives shall not be liable
        for any loss or damage, whether direct, indirect or
        consequential, or any expense of any nature whatsoever, which
        may be suffered by the user, which arises directly or
        indirectly from reliance of the website and/or its content.
      </p>
      <p>
        Brand SA, its agents or suppliers shall not be responsible for
        any direct or indirect special consequential or other damage
        of any kind whatsoever suffered or incurred by you related to
        your use of, or your inability to access or use, the content
        or the website or any functionality of the website or of any
        linked website, even where Brand SA is expressly advised
        thereof.
      </p>
      <p>
        You will indemnify Brand SA, its owners, directors, employees,
        officials, agents, suppliers or representatives, and keep them
        fully indemnified, from and against any loss or damage
        suffered or liability incurred in respect of any third party,
        which arises from your use of this website.
      </p>
      <h4>
        Contact details for any purposes related to these terms and
        conditions
      </h4>
      <p>Telephone: +27 (0)11 483-0122</p>
      <p>Fax: +27 (0)11 483-0124</p>
      <p>E-mail: info@brandsouthafrica.com</p>
    </div>
    <textarea class="html-view"></textarea>
  </div>
</div>

<div class="tinyModal">
  <div class="modal-bg"></div>
  <div class="modal-wrapper">
    <div class="close">✖</div>
    <div class="modal-content" id="modalCreateLink">
      <h3>Insert Link</h3>
      <input
        type="text"
        id="linkValue"
        placeholder="Link (example: https://webdeasy.de/)"
      />
      <div class="row">
        <input type="checkbox" id="new-tab" />
        <label for="new-tab">Open in new Tab?</label>
      </div>
      <button class="done">Done</button>
    </div>
  </div>
</div>

`;

var wysiwyg = function () {
  // define vars
  const editor = document.getElementsByClassName("editor")[0];
  const toolbar = editor.getElementsByClassName("toolbar")[0];
  const buttons = toolbar.querySelectorAll(".btn:not(.has-submenu)");
  const contentArea = editor.getElementsByClassName("content-area")[0];
  const visuellView = contentArea.getElementsByClassName("visuell-view")[0];
  const htmlView = contentArea.getElementsByClassName("html-view")[0];
  const modal = document.getElementsByClassName("tinyModal")[0];

  // add active tag event
  document.addEventListener("selectionchange", selectionChange);

  // add toolbar button actions
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener("click", function (e) {
      let action = this.dataset.action;

      switch (action) {
        case "code":
          execCodeAction(this, editor);
          break;
        case "createLink":
          execLinkAction();
          break;
        default:
          execDefaultAction(action);
      }
    });
  }

  // this function toggles between visual and html view
  function execCodeAction(button, editor) {
    if (button.classList.contains("active")) {
      // show visuell view
      visuellView.innerHTML = htmlView.value;
      htmlView.style.display = "none";
      visuellView.style.display = "block";

      button.classList.remove("active");
    } else {
      // show html view
      htmlView.innerText = visuellView.innerHTML;
      visuellView.style.display = "none";
      htmlView.style.display = "block";

      button.classList.add("active");
      saveBrief();
    }
  }

  // add link action
  function execLinkAction() {
    modal.style.display = "block";
    let selection = saveSelection();

    let submit = modal.querySelectorAll("button.done")[0];
    let close = modal.querySelectorAll(".close")[0];

    // done button active => add link
    submit.addEventListener("click", function () {
      let newTabCheckbox = modal.querySelectorAll("#new-tab")[0];
      let linkInput = modal.querySelectorAll("#linkValue")[0];
      let linkValue = linkInput.value;
      let newTab = newTabCheckbox.checked;
      console.log(linkInput.value);

      restoreSelection(selection);

      if (window.getSelection().toString()) {
        let a = document.createElement("a");
        a.href = linkValue;
        if (newTab) a.target = "_blank";
        window.getSelection().getRangeAt(0).surroundContents(a);
      }

      modal.style.display = "none";
      linkInput.value = "";

      // deregister modal events
      submit.removeEventListener("click", arguments.callee);
      close.removeEventListener("click", arguments.callee);
    });

    // close modal on X click
    close.addEventListener("click", function () {
      let linkInput = modal.querySelectorAll("#linkValue")[0];

      modal.style.display = "none";
      linkInput.value = "";

      // deregister modal events
      submit.removeEventListener("click", arguments.callee);
      close.removeEventListener("click", arguments.callee);
    });
  }

  // executes normal actions
  function execDefaultAction(action) {
    document.execCommand(action, false);
  }

  // saves the current selection
  function saveSelection() {
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        let ranges = [];
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          ranges.push(sel.getRangeAt(i));
        }
        return ranges;
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }
    return null;
  }

  // loads a saved selection
  function restoreSelection(savedSel) {
    if (savedSel) {
      if (window.getSelection) {
        sel = window.getSelection();
        sel.removeAllRanges();
        for (var i = 0, len = savedSel.length; i < len; ++i) {
          sel.addRange(savedSel[i]);
        }
      } else if (document.selection && savedSel.select) {
        savedSel.select();
      }
    }
  }

  // sets the current format buttons active/inactive
  function selectionChange() {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.classList.remove("active");
    }

    parentTagActive(window.getSelection().anchorNode.parentNode);
  }

  function parentTagActive(elem) {
    if (elem.classList.contains("visuell-view")) return false;

    let toolbarButton;

    // active by tag names
    let tagName = elem.tagName.toLowerCase();
    toolbarButton = document.querySelectorAll(
      `.toolbar .btn[data-tag-name="${tagName}"]`
    )[0];
    if (toolbarButton) {
      toolbarButton.classList.add("active");
    }

    // active by text-align
    let textAlign = elem.style.textAlign;
    toolbarButton = document.querySelectorAll(
      `.toolbar .btn[data-style="textAlign:${textAlign}"]`
    )[0];
    if (toolbarButton) {
      toolbarButton.classList.add("active");
    }

    return parentTagActive(elem.parentNode);
  }

  // Temporary. May delete for backend

  function saveTermsToLocal() {
    const terms = visuellView.innerHTML;
    localStorage.setItem("terms", terms);
  }

  function savePrivacyToLocal() {
    let visualView = contentArea.querySelector(".visuell-view privacy");
    const privacy = visualView.innerHTML;
    localStorage.setItem("privacyPolicy", privacy);
    console.log(privacy);
  }
};
