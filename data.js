(function () {
  function image(folder, prefix, index) {
    return folder + "/" + prefix + "_" + String(index).padStart(2, "0") + ".jpg";
  }

  function range(folder, prefix, start, end) {
    return Array.from({ length: end - start + 1 }, function (_, offset) {
      return image(folder, prefix, start + offset);
    });
  }

  var architecturePrefix = "Portfolio_Architecture_QiuyuZhang";
  var computationPrefix = "Portfolio_Computation_QiuyuZhang";

  window.PORTFOLIO_SITE = {
    owner: "Qiuyu Zhang",
    strapline: "Spatial systems, computational tools, and civic atmospheres.",
    projects: [
      {
        slug: "folding-fold-chair",
        title: "Folding Fold Chair",
        subtitle: "A compact furniture study exploring simple joints, collapse, and reuse.",
        category: "Architecture",
        season: "Fall 2018",
        year: 2018,
        location: "Montreal, Canada",
        summary:
          "An early construction studio exercise focused on folding logic, efficient assembly, and the tactile behavior of a lightweight chair.",
        details: [
          { label: "Studio", value: "McGill University SoA" },
          { label: "Course", value: "ARCH 202 Design and Construction 1" },
          { label: "Instructor", value: "David Covo" },
          { label: "Pages", value: "20-21" }
        ],
        tags: ["Furniture", "Prototype", "Construction", "Material study"],
        cover: image("Architecture", architecturePrefix, 20),
        images: range("Architecture", architecturePrefix, 20, 21),
        needsCorrection: false
      },
      {
        slug: "net-zero-mix-use",
        title: "Net-Zero Mix-Use",
        subtitle: "Passive systems, energy strategies, and mixed-use urban living.",
        category: "Architecture",
        season: "Winter 2019",
        year: 2019,
        location: "Montreal, Canada",
        summary:
          "A mixed-use proposal shaped by solar access, wind behavior, and green technology, balancing residential life with environmental performance.",
        details: [
          { label: "Studio", value: "McGill University SoA" },
          { label: "Course", value: "ARCH 304 Design and Construction 3" },
          { label: "Instructor", value: "Avi Friedman" },
          { label: "Collaboration", value: "with Yijia Du" },
          { label: "Pages", value: "13-19" }
        ],
        tags: ["Net zero", "Housing", "Climate", "Mixed use"],
        cover: image("Architecture", architecturePrefix, 13),
        images: range("Architecture", architecturePrefix, 13, 19),
        needsCorrection: false
      },
      {
        slug: "pixel-school",
        title: "The Pixel School",
        subtitle: "A school prototype organized through courtyard life and roof-field logic.",
        category: "Architecture",
        season: "Fall 2020",
        year: 2020,
        location: "Montreal, Canada",
        summary:
          "A low-rise learning environment that uses a pixelated organizational system to negotiate daylight, social space, and the relationship between classrooms and landscape.",
        details: [
          { label: "Studio", value: "McGill University SoA" },
          { label: "Course", value: "ARCH 406 Design and Construction 3" },
          { label: "Instructor", value: "Lia Ruccolo" },
          { label: "Collaboration", value: "with Sally Abd-Ali" },
          { label: "Pages", value: "08-12" }
        ],
        tags: ["School", "Courtyard", "Axonometric", "Daylight"],
        cover: image("Architecture", architecturePrefix, 8),
        images: range("Architecture", architecturePrefix, 8, 12),
        needsCorrection: false
      },
      {
        slug: "living-monument",
        title: "The Living Monument",
        subtitle: "A temporary civic pavilion that reframes contested memory in public space.",
        category: "Architecture",
        season: "Winter 2021",
        year: 2021,
        location: "Place d'Armes, Montreal",
        summary:
          "A speculative monument for protest and dialogue, designed to hold collective memory around colonial histories and shifting public opinion.",
        details: [
          { label: "Studio", value: "McGill University SoA" },
          { label: "Course", value: "ARCH 406 Design and Construction 4" },
          { label: "Instructor", value: "Ipek Tureli" },
          { label: "Collaboration", value: "revised with Zhi Lin" },
          { label: "Pages", value: "02-07" }
        ],
        tags: ["Public space", "Pavilion", "Collective memory", "Civic design"],
        cover: image("Architecture", architecturePrefix, 2),
        images: range("Architecture", architecturePrefix, 2, 7),
        needsCorrection: false
      },
      {
        slug: "biotic-door",
        title: "Biotic Door",
        subtitle: "An interactive installation for lilong life, thresholds, and social catalysts.",
        category: "Computation",
        season: "Fall 2023",
        year: 2023,
        location: "Shanghai, China",
        summary:
          "A responsive art installation and prototyping study that transforms the traditional lilong doorway into a sensor-driven social threshold.",
        details: [
          { label: "Format", value: "Art installation + prototype" },
          { label: "Role", value: "Prototyping, manufacture, Arduino design, site installation" },
          { label: "Group member", value: "Liu Qingyun" },
          { label: "Pages", value: "11-17" }
        ],
        tags: ["Interactive art", "Lilong", "Arduino", "Threshold"],
        cover: image("Computation", computationPrefix, 11),
        images: range("Computation", computationPrefix, 11, 17),
        needsCorrection: true
      },
      {
        slug: "catalytic-resonance",
        title: "Catalytic Resonance",
        subtitle: "A revitalization study for traditional lilong thresholds and social exchange.",
        category: "Computation",
        season: "2024",
        year: 2024,
        location: "Shanghai, China",
        summary:
          "A research-led proposal that rethinks the lilong threshold as a catalytic social device, supported by field observations, classification, and spatial testing.",
        details: [
          { label: "Format", value: "Urban research + spatial intervention" },
          { label: "Focus", value: "Revitalization of traditional lilong threshold" },
          { label: "Pages", value: "18-20" }
        ],
        tags: ["Urban renewal", "Threshold", "Classification", "Shanghai"],
        cover: image("Computation", computationPrefix, 18),
        images: range("Computation", computationPrefix, 18, 20),
        needsCorrection: true
      },
      {
        slug: "citywalk-sentiment",
        title: "CityWalk Sentiment",
        subtitle: "Emotion, EEG, NLP, and computer vision for reading street atmosphere.",
        category: "Computation",
        season: "Winter 2023 - Spring 2024",
        year: 2024,
        location: "Changsha, Hunan, China",
        summary:
          "A cross-disciplinary study that combines EEG recording, computer vision, and social-media language analysis to map how urban renewal shapes the felt experience of streets.",
        details: [
          { label: "Format", value: "Research + street analysis" },
          { label: "Role", value: "Research, conceptual design, data analysis, computer vision, architectural design" },
          { label: "Group work", value: "VR recording and testing with Tan Shenyao and Qian Xinyan" },
          { label: "Pages", value: "02-10" }
        ],
        tags: ["EEG", "NLP", "Computer vision", "Urban renewal"],
        cover: image("Computation", computationPrefix, 2),
        images: range("Computation", computationPrefix, 2, 10),
        needsCorrection: true
      }
    ]
  };
})();
