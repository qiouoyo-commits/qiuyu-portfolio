(function () {
  var site = window.PORTFOLIO_SITE;
  if (!site) {
    return;
  }

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
  var filtersNode = document.getElementById("filters");
  var timelineNode = document.getElementById("timeline");
  var statsNode = document.getElementById("hero-stats");
  var lightbox = window.PORTFOLIO_LIGHTBOX;
  var currentFilter = "All";

  function assetPath(path) {
    return new URL(path, window.location.href).toString();
  }

  function projectPath(slug) {
    return new URL("./projects/" + slug + ".html", window.location.href).toString();
  }

  function pillClass(category) {
    return category === "Architecture" ? "pill pill--arch" : "pill pill--comp";
  }

  function renderStats() {
    var values = [
      { value: String(projects.length), label: "Projects" },
      { value: "2018-2024", label: "Timeline" },
      { value: "2", label: "Disciplines" }
    ];

    statsNode.innerHTML = values
      .map(function (item) {
        return (
          '<div class="stat">' +
          '<div class="stat__value">' + item.value + "</div>" +
          '<div class="stat__label">' + item.label + "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderFilters() {
    var categories = ["All", "Architecture", "Computation"];
    filtersNode.innerHTML = categories
      .map(function (category) {
        var active = category === currentFilter ? " is-active" : "";
        return (
          '<button class="filter-btn' + active + '" type="button" data-filter="' + category + '">' +
          category +
          "</button>"
        );
      })
      .join("");

    filtersNode.querySelectorAll("[data-filter]").forEach(function (button) {
      button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;
        renderFilters();
        applyFilter();
      });
    });
  }

  function createTimelineCard(project) {
    var correctedClass = project.needsCorrection ? " asset--corrected" : "";
    var tags = project.tags
      .slice(0, 3)
      .map(function (tag) {
        return '<span class="timeline-tag">' + tag + "</span>";
      })
      .join("");

    return (
      '<article class="timeline-item is-reveal" data-category="' + project.category + '">' +
      '<div class="timeline-marker">' +
      '<div class="timeline-dot"></div>' +
      '<div class="timeline-year">' + project.year + "</div>" +
      "</div>" +
      '<a class="timeline-card" href="' + projectPath(project.slug) + '">' +
      '<div class="timeline-card__media">' +
      '<img class="' + correctedClass.trim() + '" src="' + assetPath(project.cover) + '" alt="' + project.title + ' cover image" loading="lazy" />' +
      "</div>" +
      '<div class="timeline-card__body">' +
      '<div class="timeline-meta">' +
      '<span class="' + pillClass(project.category) + '">' + project.category + "</span>" +
      '<span class="pill">' + project.season + "</span>" +
      "</div>" +
      '<h3 class="timeline-title">' + project.title + "</h3>" +
      '<p class="timeline-summary">' + project.summary + "</p>" +
      '<div class="timeline-tags">' + tags + "</div>" +
      '<div class="timeline-arrow">Open project</div>' +
      "</div>" +
      "</a>" +
      "</article>"
    );
  }

  function renderTimeline() {
    timelineNode.innerHTML = projects.map(createTimelineCard).join("");
    if (lightbox) {
      lightbox.bindImageZoom(timelineNode);
    }
    observeReveal();
  }

  function applyFilter() {
    timelineNode.querySelectorAll(".timeline-item").forEach(function (item) {
      var matches = currentFilter === "All" || item.dataset.category === currentFilter;
      item.classList.toggle("is-hidden", !matches);
    });
  }

  function observeReveal() {
    var cards = timelineNode.querySelectorAll(".is-reveal");
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
      { threshold: 0.2 }
    );

    cards.forEach(function (node) {
      observer.observe(node);
    });
  }

  renderStats();
  renderFilters();
  renderTimeline();
  applyFilter();
})();
