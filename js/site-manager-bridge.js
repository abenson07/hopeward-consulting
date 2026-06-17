(function () {
  var SOURCE = "site-manager-bridge";

  var annotationActive = false;
  var mobileCommentMode = false;
  var pinnedDataId = null;
  var hoveredElement = null;

  function post(type, payload) {
    var msg = { source: SOURCE, type: type };
    if (payload) {
      for (var key in payload) {
        if (Object.prototype.hasOwnProperty.call(payload, key)) {
          msg[key] = payload[key];
        }
      }
    }
    window.parent.postMessage(msg, "*");
  }

  function findDataIdTarget(event) {
    var path = event.composedPath();
    for (var i = 0; i < path.length; i++) {
      var node = path[i];
      if (node === document.documentElement || node === document.body) break;
      if (
        node instanceof HTMLElement &&
        node.hasAttribute("data-id") &&
        node.dataset.id
      ) {
        return node;
      }
    }
    return null;
  }

  function findSectionId(element) {
    var current = element.parentElement;
    while (current && current !== document.body) {
      if (current.hasAttribute("data-section-id")) {
        return current.getAttribute("data-section-id");
      }
      if (current.hasAttribute("data-id") && current !== element) {
        return current.getAttribute("data-id");
      }
      current = current.parentElement;
    }
    return null;
  }

  function getRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  }

  function sendHover(element) {
    if (!element) {
      hoveredElement = null;
      post("clear-hover");
      return;
    }
    hoveredElement = element;
    post("hover", {
      dataId: element.dataset.id,
      sectionId: findSectionId(element),
      rect: getRect(element),
    });
  }

  function sendPin(element) {
    pinnedDataId = element.dataset.id || null;
    post("pin", {
      dataId: element.dataset.id,
      sectionId: findSectionId(element),
      rect: getRect(element),
    });
  }

  function syncActiveTarget() {
    if (pinnedDataId) {
      var pinned = document.querySelector('[data-id="' + pinnedDataId + '"]');
      if (pinned instanceof HTMLElement) {
        sendPin(pinned);
        return;
      }
    }
    if (hoveredElement && hoveredElement.isConnected) {
      sendHover(hoveredElement);
    }
  }

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || data.source !== SOURCE) return;

    if (data.type === "annotation-mode") {
      annotationActive = !!data.active;
      mobileCommentMode = !!data.mobileCommentMode;
      document.body.style.cursor = annotationActive ? "crosshair" : "";
      if (!annotationActive) {
        pinnedDataId = null;
        hoveredElement = null;
      }
    }

    if (data.type === "unpin") {
      pinnedDataId = null;
    }
  });

  document.addEventListener(
    "pointermove",
    function (event) {
      if (!annotationActive || pinnedDataId) return;
      sendHover(findDataIdTarget(event));
    },
    true
  );

  document.addEventListener(
    "pointerleave",
    function (event) {
      if (!annotationActive || pinnedDataId) return;
      if (event.target === document.documentElement) {
        sendHover(null);
      }
    },
    true
  );

  document.addEventListener(
    "click",
    function (event) {
      if (!annotationActive) return;

      var target = findDataIdTarget(event);
      if (target) {
        event.preventDefault();
        event.stopPropagation();
        sendPin(target);
        return;
      }

      if (mobileCommentMode) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );

  document.addEventListener("scroll", syncActiveTarget, true);
  window.addEventListener("resize", syncActiveTarget);

  if (window.parent !== window) {
    post("ready");
  }
})();
