(function () {
  function image(folder, prefix, index) {
    return folder + "/" + prefix + "_" + String(index).padStart(2, "0") + ".jpg";
  }

  function range(folder, prefix, start, end) {
    return Array.from({ length: end - start + 1 }, function (_, offset) {
      return image(folder, prefix, start + offset);
    });
  }

  function single(folder, prefix, index) {
    return [image(folder, prefix, index)];
  }

  var architecturePrefix = "Portfolio_Architecture_QiuyuZhang";
  var computationPrefix = "Portfolio_Computation_QiuyuZhang";

  window.PORTFOLIO_SITE = {
    owner: "Qiuyu Zhang",
    strapline: "Spatial systems, computational tools, and civic atmospheres.",
    projects: [
      {
        slug: "exploring",
        title: "Exploring",
        subtitle: "An interface prototype for subject extraction, image pairing, and workflow tests.",
        category: "Computation",
        season: "2025",
        year: 2025,
        location: "Prototype study",
        summary:
          "A three-screen interface exploration that tests upload, extraction, and paired image-output workflows for a lightweight visual tool.",
        details: [
          { label: "Format", value: "Interface prototype" },
          { label: "Focus", value: "Subject extraction and paired output workflow" },
          { label: "Pages", value: "01-03" }
        ],
        tags: ["Prototype", "Workflow", "Interface", "Image processing"],
        cover: "Exploring/Exploring-01.jpg",
        images: [
          "Exploring/Exploring-01.jpg",
          "Exploring/Exploring-02.jpg",
          "Exploring/Exploring-03.jpg"
        ],
        pinnedPosition: "top",
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
        slug: "moodbox",
        title: "MoodBox",
        subtitle: "A light-and-shadow installation developed through angular form studies.",
        category: "Architecture",
        season: "Fall 2018",
        year: 2018,
        location: "Montreal, Canada",
        summary:
          "A compact installation study that uses folded planes, spot lighting, and shadow projection to produce an atmospheric object.",
        details: [
          { label: "Studio", value: "McGill University SoA" },
          { label: "Course", value: "ARCH 202 Design and Construction 1" },
          { label: "Instructor", value: "David Covo" },
          { label: "Collaboration", value: "with Yuxuan Wu" },
          { label: "Pages", value: "21" }
        ],
        tags: ["Lighting", "Installation", "Model", "Shadow study"],
        cover: image("Architecture", architecturePrefix, 21),
        images: single("Architecture", architecturePrefix, 21),
        needsCorrection: false
      },
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
          { label: "Pages", value: "20" }
        ],
        tags: ["Furniture", "Prototype", "Construction", "Material study"],
        cover: image("Architecture", architecturePrefix, 20),
        images: single("Architecture", architecturePrefix, 20),
        needsCorrection: false
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
        needsCorrection: false
      },
      {
        slug: "biotic-door",
        title: "Biotic Door",
        subtitle: "An interactive installation for lilong life, thresholds, and social catalysts.",
        category: "Computation",
        season: "Fall 2023 - 2024",
        year: 2024,
        location: "Shanghai, China",
        summary:
          "A responsive installation study that transforms the traditional lilong doorway into a sensor-driven social threshold, extended here as a continuous page sequence from C11 to C18.",
        details: [
          { label: "Format", value: "Art installation + prototype" },
          { label: "Role", value: "Prototyping, manufacture, Arduino design, site installation" },
          { label: "Group member", value: "Liu Qingyun" },
          { label: "Pages", value: "11-18" }
        ],
        tags: ["Interactive art", "Lilong", "Arduino", "Threshold"],
        cover: image("Computation", computationPrefix, 11),
        images: range("Computation", computationPrefix, 11, 18),
        needsCorrection: false
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
          "A research-led proposal that rethinks the lilong threshold as a catalytic social device, focusing here on the classification and interaction studies shown on pages C19-C20.",
        details: [
          { label: "Format", value: "Urban research + spatial intervention" },
          { label: "Focus", value: "Revitalization of traditional lilong threshold" },
          { label: "Pages", value: "19-20" }
        ],
        tags: ["Urban renewal", "Threshold", "Classification", "Shanghai"],
        cover: image("Computation", computationPrefix, 19),
        images: range("Computation", computationPrefix, 19, 20).concat([
          "LandMark/LandMark-01.png",
          "LandMark/LandMark-02.png",
          "LandMark/LandMark-03.png",
          "LandMark/LandMark-04.png",
          "LandMark/LandMark-05.png",
          "LandMark/LandMark-06.png",
          "LandMark/LandMark-07.png",
          "LandMark/LandMark-08.png",
          "LandMark/LandMark-09.png",
          "LandMark/LandMark-10.png",
          "LandMark/LandMark-11.png",
          "LandMark/LandMark-12.png",
          "LandMark/LandMark-13.png",
          "LandMark/LandMark-14.png"
        ]),
        needsCorrection: false
      },
      {
        slug: "the-chasse",
        title: "The Chasse",
        subtitle: "Environmental nudges via eye-tracking and bio-sensory measures.",
        category: "Computation",
        season: "Summer 2024",
        year: 2024,
        location: "DigitalFUTURES 2024",
        summary:
          "A workshop research project that studies how dance projection, kinesthetic response, and canon movement can encourage spontaneous exercise through eye-tracking, motion capture, and EMG-informed analysis.",
        details: [
          { label: "Format", value: "Workshop research + poster" },
          { label: "Event", value: "14th DigitalFUTURES Summer Workshops" },
          { label: "Methods", value: "Eye-tracking, motion capture, electromyography (EMG)" },
          { label: "Collaboration", value: "with Ying Qi, Ziyi Chen, Yuanjing Hu, Shiyao Xu, Daoxin Chen, and Jing Zhao" },
          { label: "Pages", value: "01-06" }
        ],
        tags: ["Eye-tracking", "EMG", "Motion capture", "Dance analysis"],
        cover: "DanceStudy/Dance00-screen.png",
        images: [
          "DanceStudy/Dance00-screen.png",
          "DanceStudy/Dance01-screen.png",
          "DanceStudy/Dance02-screen.png",
          "DanceStudy/Dance03-screen.png",
          "DanceStudy/Dance04-screen.png",
          "DanceStudy/Dance05-screen.png"
        ],
        needsCorrection: false
      },
      {
        slug: "explored",
        title: "Explored",
        subtitle: "A geometry-and-fabrication snapshot linking modeling, data, and material output.",
        category: "Computation",
        season: "2017",
        year: 2017,
        location: "Process archive",
        summary:
          "A single-frame archive image that gathers Rhino modeling, numerical traces, and fabrication output into one condensed record of an already-explored workflow.",
        details: [
          { label: "Format", value: "Process archive" },
          { label: "Focus", value: "Geometry, toolpath logic, and fabrication feedback" },
          { label: "Pages", value: "01" }
        ],
        tags: ["Rhino", "Fabrication", "Geometry", "Archive"],
        cover: "Explored/Explored-00.png",
        images: ["Explored/Explored-00.png"],
        pinnedPosition: "bottom",
        needsCorrection: false
      }
    ]
  };
})();
