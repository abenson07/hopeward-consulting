/**
 * Hopeward booking modal — opens from .cta-book, Submit RFP, Book a call, etc.
 * Webflow IX2 does not run reliably on composite Hopeward pages.
 */
(function () {
  "use strict";

  var BOOK_LABEL_RE = /^(submit rfp|book a call|book now)$/i;
  var modal = null;
  var closeBtn = null;
  var firstFocusable = null;

  function getModal() {
    return document.getElementById("hopeward-book-modal") || document.querySelector(".modal-book");
  }

  function labelForTrigger(el) {
    var label = el.querySelector("[button-text], .button-text, .book-button-text");
    if (label) {
      return label.textContent.replace(/\s+/g, " ").trim();
    }
    return el.textContent.replace(/\s+/g, " ").trim();
  }

  function isBookTrigger(el) {
    if (!el || el.closest(".modal-book")) {
      return false;
    }
    if (el.matches(".cta-book, [data-hopeward-book-modal]")) {
      return true;
    }
    if (el.matches("a, button, .cta-main.w-button, input.cta-main")) {
      return BOOK_LABEL_RE.test(labelForTrigger(el));
    }
    if (el.matches("a.link-cs-card") && /^book a call$/i.test(labelForTrigger(el))) {
      return true;
    }
    return false;
  }

  function openModal() {
    modal = getModal();
    if (!modal) {
      return;
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("hopeward-book-modal-open");
    closeBtn = modal.querySelector(".book-close-button");
    firstFocusable = modal.querySelector(
      "input:not([type='hidden']), select, textarea, button, [href]"
    );
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  function closeModal() {
    modal = getModal();
    if (!modal) {
      return;
    }
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("hopeward-book-modal-open");
  }

  function onDocumentClick(event) {
    var trigger = event.target.closest("a, button, input[type='submit']");
    if (!trigger || !isBookTrigger(trigger)) {
      return;
    }
    event.preventDefault();
    openModal();
  }

  function onKeydown(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function bindModal() {
    modal = getModal();
    if (!modal) {
      return;
    }
    closeBtn = modal.querySelector(".book-close-button");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
    var inner = modal.querySelector(".modal-inner");
    if (inner) {
      inner.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }
  }

  function init() {
    bindModal();
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeydown);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
