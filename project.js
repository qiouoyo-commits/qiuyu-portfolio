(function () {
  var site = window.PORTFOLIO_SITE;
  if (!site) {
    return;
  }

  var slug = document.body.dataset.project;
  var projects = site.projects
    .map(function (project, index) {
      return { project: project, index: index };
    })
    .sort(function (left, right) {
      if (left.project.year !== right.project.year) {
        return right.project.year - left.project.year;
      }

      return right.index - left.index;
    })
    .map(function (item) {
      return item.project;
    });
  var project = projects.find(function (item) {
    return item.slug === slug;
  });

  if (!project) {
    return;
  }

  var heroNode = document.getElementById("project-hero");
  var sideNode = document.getElementById("project-side");
  var galleryNode = document.getElementById("project-gallery");
  var pagerNode = document.getElementById("project-pagination");
  var relatedNode = document.getElementById("related-projects");

  function assetPath(path) {
    return new URL("../" + path, window.location.href).toString();
  }

  function projectPath(projectSlug) {
    return new URL("./" + projectSlug + ".html", window.location.href).toString();
  }

  function categoryChip(category) {
    var modifier = category === "Architecture" ? "" : " detail-chip--comp";
    return '<span class="detail-chip' + modifier + '">' + category + "</span>";
  }

  function correctedClass() {
    return project.needsCorrection ? " asset--corrected" : "";
  }

  function renderHero() {
    document.title = project.title + " | Qiuyu Zhang";
    heroNode.innerHTML =
      '<div class="project-panel">' +
      '<div class="detail-chips">' +
      categoryChip(project.category) +
      '<span class="detail-chip">' + project.season + "</span>" +
      '<span class="detail-chip">' + project.location + "</span>" +
      "</div>" +
      '<h1 class="project-title">' + project.title + "</h1>" +
      '<p class="project-subtitle">' + project.subtitle + "</p>" +
      '<p class="project-intro">' + project.summary + "</p>" +
      "</div>" +
      '<div class="project-cover">' +
      '<img class="' + correctedClass().trim() + '" src="' + assetPath(project.cover) + '" alt="' + project.title + ' cover image" />' +
      "</div>";
  }

  function renderSidebar() {
    var details = project.details
      .map(function (item) {
        return (
          '<div class="detail-row">' +
          '<div class="meta-label">' + item.label + "</div>" +
          '<div class="detail-value">' + item.value + "</div>" +
          "</div>"
        );
      })
      .join("");

    var tags = project.tags
      .map(function (tag) {
        return '<span class="pill">' + tag + "</span>";
      })
      .join("");

    var index = projects
      .map(function (item) {
        var active = item.slug === project.slug ? " pill--active" : "";
        return '<a class="pill' + active + '" href="' + projectPath(item.slug) + '">' + item.title + "</a>";
      })
      .join("");

    sideNode.innerHTML =
      '<aside class="project-side">' +
      '<div class="project-panel project-side__block">' +
      '<h2 class="project-side__title">Project details</h2>' +
      '<div class="detail-list">' + details + "</div>" +
      "</div>" +
      '<div class="project-panel project-side__block">' +
      '<h2 class="project-side__title">Key themes</h2>' +
      '<div class="project-tags">' + tags + "</div>" +
      "</div>" +
      '<div class="project-panel project-side__block">' +
      '<h2 class="project-side__title">Project index</h2>' +
      '<div class="project-index">' + index + "</div>" +
      "</div>" +
      "</aside>";
  }

  function renderGallery() {
    galleryNode.innerHTML = project.images
      .map(function (src, index) {
        var wide = index === 0 || index % 4 === 3 ? " page-frame--wide" : "";
        var eager = index < 2 ? "eager" : "lazy";
        return (
          '<figure class="page-frame' + wide + ' is-reveal">' +
          '<div class="page-frame__image">' +
          '<img class="' + correctedClass().trim() + '" src="' + assetPath(src) + '" alt="' + project.title + ' page ' + String(index + 1) + '" loading="' + eager + '" />' +
          "</div>" +
          '<figcaption class="page-num">Portfolio page ' +
          src.match(/_(\d+)\.jpg$/)[1] +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("");
  }

  function renderPagination() {
    var currentIndex = projects.findIndex(function (item) {
      return item.slug === project.slug;
    });
    var previous = projects[currentIndex - 1] || null;
    var next = projects[currentIndex + 1] || null;
    var cards = [];

    if (previous) {
      cards.push(
        '<a href="' + projectPath(previous.slug) + '">' +
          '<div class="project-pagination__label">Previous</div>' +
          '<div class="project-pagination__title">' + previous.title + "</div>" +
          '<div class="timeline-summary">' + previous.season + "</div>" +
        "</a>"
      );
    }

    if (next) {
      cards.push(
        '<a href="' + projectPath(next.slug) + '">' +
          '<div class="project-pagination__label">Next</div>' +
          '<div class="project-pagination__title">' + next.title + "</div>" +
          '<div class="timeline-summary">' + next.season + "</div>" +
        "</a>"
      );
    }

    pagerNode.innerHTML = cards.join("");
  }

  function renderRelated() {
    var related = projects.filter(function (item) {
      return item.category === project.category && item.slug !== project.slug;
    }).slice(0, 2);

    if (!related.length) {
      relatedNode.remove();
      return;
    }

    relatedNode.innerHTML =
      '<div class="project-panel related">' +
      '<h2 class="project-side__title">More in ' + project.category + "</h2>" +
      '<div class="related-grid">' +
      related
        .map(function (item) {
          var corrected = item.needsCorrection ? " asset--corrected" : "";
          return (
            '<a class="related-card" href="' + projectPath(item.slug) + '">' +
            '<div class="related-card__media">' +
            '<img class="' + corrected.trim() + '" src="' + assetPath(item.cover) + '" alt="' + item.title + ' preview" loading="lazy" />' +
            "</div>" +
            '<div class="related-card__body">' +
            '<div class="' + (item.category === "Architecture" ? "pill pill--arch" : "pill pill--comp") + '">' + item.season + "</div>" +
            '<h3 class="related-card__title">' + item.title + "</h3>" +
            "</div>" +
            "</a>"
          );
        })
        .join("") +
      "</div>" +
      "</div>";
  }

  function observeReveal() {
    var cards = document.querySelectorAll(".is-reveal");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    cards.forEach(function (node) {
      observer.observe(node);
    });
  }

  renderHero();
  renderSidebar();
  renderGallery();
  renderPagination();
  renderRelated();
  observeReveal();
})();
