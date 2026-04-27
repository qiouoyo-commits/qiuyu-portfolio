(function () {
  var lightboxNode = null;
  var lightboxImageNode = null;
  var lightboxCaptionNode = null;
  var closeButtonNode = null;

  function ensureLightbox() {
    if (lightboxNode) {
      return;
    }

    lightboxNode = document.createElement("div");
    lightboxNode.className = "lightbox";
    lightboxNode.setAttribute("aria-hidden", "true");
    lightboxNode.innerHTML =
      '<div class="lightbox__backdrop" data-lightbox-close="true"></div>' +
      '<figure class="lightbox__figure">' +
      '<button class="lightbox__close" type="button" aria-label="Close image preview" data-lightbox-close="true">Close</button>' +
      '<img class="lightbox__image" data-lightbox-ignore="true" alt="" />' +
      '<figcaption class="lightbox__caption"></figcaption>' +
      "</figure>";

    document.body.appendChild(lightboxNode);

    lightboxImageNode = lightboxNode.querySelector(".lightbox__image");
    lightboxCaptionNode = lightboxNode.querySelector(".lightbox__caption");
    closeButtonNode = lightboxNode.querySelector(".lightbox__close");

    lightboxNode.addEventListener("click", function (event) {
      if (event.target.dataset.lightboxClose === "true") {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightboxNode.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  function openLightbox(sourceNode) {
    ensureLightbox();

    lightboxImageNode.className = "lightbox__image";
    if (sourceNode.classList.contains("asset--corrected")) {
      lightboxImageNode.classList.add("asset--corrected");
    }

    lightboxImageNode.src = sourceNode.currentSrc || sourceNode.src;
    lightboxImageNode.alt = sourceNode.alt || "";
    lightboxCaptionNode.textContent = sourceNode.alt || "";

    lightboxNode.classList.add("is-open");
    lightboxNode.setAttribute("aria-hidden", "false");
    document.body.classList.add("body--lightbox-open");
    closeButtonNode.focus();
  }

  function closeLightbox() {
    if (!lightboxNode) {
      return;
    }

    lightboxNode.classList.remove("is-open");
    lightboxNode.setAttribute("aria-hidden", "true");
    document.body.classList.remove("body--lightbox-open");
  }

  function bindImageZoom(rootNode) {
    var scope = rootNode || document;
    scope.querySelectorAll("img").forEach(function (imageNode) {
      if (imageNode.dataset.zoomBound === "true" || imageNode.dataset.lightboxIgnore === "true") {
        return;
      }

      imageNode.dataset.zoomBound = "true";
      imageNode.classList.add("zoomable-image");
      imageNode.setAttribute("tabindex", "0");
      imageNode.setAttribute("role", "button");
      imageNode.setAttribute("aria-label", "Open enlarged image");

      imageNode.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openLightbox(imageNode);
      });

      imageNode.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(imageNode);
        }
      });
    });
  }

  window.PORTFOLIO_LIGHTBOX = {
    bindImageZoom: bindImageZoom
  };
})();
