/*
  THE HUMANOID STACK — content file
  =================================
  Everything on the page comes from this one file. Edit it on GitHub
  (open data.js → pencil icon → "Commit changes") and the live page
  updates in about a minute.

  Keep the quotes, commas and brackets exactly as they are. If the page
  goes blank after an edit, a comma or quote is usually missing.

  ------------------------------------------------------------------
  LABELS  (the pins on the robot's body)
  ------------------------------------------------------------------
  Each label is one line:

      { id: "knee", text: "Knee", at: [0.52, 0.00, 2.00] },

    id    a short name with no spaces. Components point to it (see below).
    text  what the label says on the robot.
    at    where the pin points: [x, y, z] on the robot
            x = left / right   (robot's left hand is about +0.8)
            y = front / back   (negative = front of the body, positive = back)
            z = height         (0 = floor, about 7 = top of the head)
    side  optional: "left" or "right". Labels normally sit on whichever side
          of the body their point is on; this picks the side when the point
          is near the middle (head, chest, spine).

  How many labels: add or delete lines. There's no limit.

  Where to point: open the page with #edit at the end of the address
  (for example  https://you.github.io/humanoid-stack/#edit ), turn the
  robot to any angle, and click the spot you want. The page shows the
  exact line to copy in here.

  ------------------------------------------------------------------
  COMPONENTS  (the information panels)
  ------------------------------------------------------------------
    labels     which pins this component appears under, by label id
    stance     "china-leads", "contested" or "foreign-led"
    layer      "sensing", "actuation", "power", "manufacturing", "intelligence", "ecosystem"
    timeline   dates as "2025", "2025-03" or "2025-03-18"
    offBody    true for layers with no body location (shown under "Off-Body Layers")
    stanceVerify / verify   whether an item is supported by the 34 sources
               (sources-data.js). Items with no source are shown as unverified.

  The sourced players, events, figures and relationships live in
  sources-data.js, which is generated from the research JSON. The page
  merges them into these components by segment.
*/

window.ROBOT_DATA = {
  title: "The Humanoid Robotics Supply Chain",
  subtitle: "Where China leads, contests, or still depends on foreign suppliers.",
  updated: "2026-09-23",

  labels: [
    { id: "cloud",    text: "Cloud & Compute",        at: [0.00,  0.05, 7.75], side: "right" },
    { id: "brain",    text: "AI \u201cBrain\u201d", at: [0.00,  0.02, 6.72], side: "left" },
    { id: "head",     text: "Head Sensors",           at: [0.00, -0.24, 6.45], side: "right" },
    { id: "neck",     text: "Neck",                   at: [0.00,  0.05, 5.95], side: "right" },
    { id: "shoulder", text: "Shoulder",               at: [0.80,  0.05, 5.57] },
    { id: "chest",    text: "The Robot",       at: [0.00, -0.20, 5.05], side: "left" },
    { id: "elbow",    text: "Elbow",                  at: [0.80,  0.10, 4.45] },
    { id: "torso",    text: "Control Electronics",    at: [0.00, -0.15, 4.30], side: "left" },
    { id: "battery",  text: "Battery Pack",           at: [0.00,  0.55, 4.41], side: "right" },
    { id: "thigh",    text: "Screws & Linear Drives", at: [0.50,  0.02, 2.62] },
    { id: "hip",      text: "Hip",                    at: [0.36, -0.05, 3.62] },
    { id: "wrist",    text: "Wrist",                  at: [0.82,  0.05, 3.40] },
    { id: "hand",     text: "Hand & Fingers",         at: [0.83,  0.00, 2.85] },
    { id: "knee",     text: "Knee",                   at: [0.52,  0.00, 2.00] },
    { id: "ankle",    text: "Ankle",                  at: [0.50,  0.25, 0.50] },
    { id: "floor",    text: "Factory Floor",          at: [0.95, -0.55, 0.03] }
  ],

  components: [
    {
      id: "lidar",
      stanceVerify: { status: "unsupported", note: "No LiDAR entry in the 34 sources." },
      name: "LiDAR",
      layer: "sensing",
      labels: ["head"],
      stance: "china-leads",
      oneLiner: "Laser ranging that gives the robot a 3D map of its surroundings.",
      summary: "China leads the global market for LiDAR.",
      stats: [],
      incumbents: [],
      china: [
        { name: "Hesai Technology", note: "Global market leader" },
        { name: "RoboSense Technology", note: "Global market leader" }
      ],
      timeline: []
    },
    {
      id: "encoders",
      stanceVerify: { status: "unsupported", note: "Sources name only RLS (Slovenia) with no share data." },
      name: "Rotary Encoders",
      layer: "sensing",
      labels: ["knee", "elbow"],
      stance: "foreign-led",
      oneLiner: "Sit at the knees and elbows and measure exactly how far each joint has bent.",
      summary: "Western and Japanese suppliers hold more than half of China's own encoder market. Changchun Yuheng Optics is the leading domestic producer.",
      stats: [
        { value: ">50%", label: "Foreign share of China's encoder market" },
        { value: "9%", label: "Changchun Yuheng Optics' share" }
      ],
      incumbents: [
        { name: "Tamagawa Seiki", country: "Japan", note: "" },
        { name: "Heidenhain", country: "Germany", note: "" }
      ],
      china: [
        { name: "Changchun Yuheng Optics", note: "“Little giant”; leads domestic production (~9%)" }
      ],
      timeline: []
    },
    {
      id: "force-torque",
      stanceVerify: { status: "unsupported", note: "Keli Sensing reports >1,500 units sold (A011); no share data for ATI or the segment." },
      name: "Force/Torque Sensors",
      layer: "sensing",
      labels: ["wrist", "ankle"],
      stance: "contested",
      oneLiner: "Measure the push, pull and twist at a joint so the robot can control how hard it grips or steps.",
      summary: "ATI (US) dominates the global market, but Chinese suppliers are undercutting on price. Domestic production has taken most of China's 6D torque sensor market.",
      stats: [
        { value: "30%", label: "Kunwei's price discount vs. ATI" },
        { value: "70%", label: "Link-Touch's share of 6D torque sensors" },
        { value: "95%", label: "6D torque sensors now produced domestically in China" }
      ],
      incumbents: [
        { name: "ATI Industrial Automation", country: "United States", note: "Dominates the global market" }
      ],
      china: [
        { name: "Keli Sensing (柯力传感)", note: "" },
        { name: "Sunrise Instruments (SRI; 宇立仪器)", note: "" },
        { name: "Link-Touch (蓝点触控)", note: "~70% of 6D torque sensors" },
        { name: "Changzhou Kunwei Sensing (坤维科技)", note: "~30% cheaper than ATI" }
      ],
      timeline: []
    },
    {
      id: "tactile",
      stanceVerify: { status: "unsupported", note: "Sources cover Shadow Robot and Keli Sensing tactile products; no leadership data." },
      name: "Tactile Sensors",
      layer: "sensing",
      labels: ["hand"],
      stance: "foreign-led",
      oneLiner: "Artificial skin in the fingertips and palms that mimics human touch.",
      summary: "US firms lead. Several Chinese startups have secured funding to catch up.",
      stats: [],
      incumbents: [
        { name: "US firms", country: "United States", note: "Lead the market" }
      ],
      china: [
        { name: "Suzhou Leanstar (苏州能斯达电子)", note: "Funded" },
        { name: "Beijing Tashan Technology (北京他山科技)", note: "Funded" },
        { name: "PaXini Tech (帕西尼)", note: "Funded" },
        { name: "Moxian Technology (墨现科技)", note: "Funded" }
      ],
      timeline: []
    },
    {
      id: "coreless-motors",
      stanceVerify: { status: "unsupported", note: "maxon and MOONS' appear in sources (A001, A002, A010) with no share disclosed." },
      name: "Coreless Motors",
      layer: "actuation",
      labels: ["hand", "head"],
      stance: "foreign-led",
      oneLiner: "Small, light motors for hands, fingers, eyes and grippers, where smooth, low-vibration motion matters.",
      summary: "Three European and US makers still dominate the high-end market. Chinese suppliers are expanding domestic production and winning share with lower-cost alternatives.",
      stats: [
        { value: ">70%", label: "Global high-end share held by Maxon, Faulhaber and Portescap" }
      ],
      incumbents: [
        { name: "Maxon", country: "Switzerland", note: "" },
        { name: "Faulhaber", country: "Germany", note: "" },
        { name: "Portescap", country: "United States", note: "" }
      ],
      china: [
        { name: "MOONS’", note: "Lower-cost alternative" },
        { name: "DINGS’", note: "Lower-cost alternative" },
        { name: "VEICHI", note: "Lower-cost alternative" }
      ],
      timeline: []
    },
    {
      id: "frameless-torque-motors",
      stanceVerify: { status: "unsupported", note: "Kollmorgen and JL MAG appear in sources with no share disclosed." },
      name: "Frameless Torque Motors",
      layer: "actuation",
      labels: ["shoulder", "hip"],
      stance: "contested",
      oneLiner: "Larger motors for the major joints, where the robot needs high torque and smooth rotation.",
      summary: "Established US and German makers lead. Chinese manufacturers increasingly supply the domestic market and are pushing this part of the actuator stack toward localization.",
      stats: [],
      incumbents: [
        { name: "Kollmorgen", country: "United States", note: "" },
        { name: "Moog", country: "United States", note: "" },
        { name: "TQ-Group", country: "Germany", note: "" }
      ],
      china: [
        { name: "HeTai Motors", note: "" },
        { name: "Kinco Automation", note: "" },
        { name: "Han’s Motor", note: "" },
        { name: "Haozhi", note: "" }
      ],
      timeline: []
    },
    {
      id: "harmonic-reducers",
      stanceVerify: { status: "unsupported", note: "Leaderdrive appears in sources (A013, A029); Harmonic Drive Systems does not; no share disclosed." },
      name: "Harmonic Reducers",
      layer: "actuation",
      labels: ["neck", "elbow"],
      stance: "contested",
      oneLiner: "Precision gears in the arms, fingers and neck that slow the motor down for fine, exact motion.",
      summary: "Harmonic Drive Systems (Japan) is the dominant incumbent. Leaderdrive has taken meaningful global and domestic share, making this one area where China has materially reduced foreign dependence.",
      stats: [
        { value: "~85%", label: "Harmonic Drive Systems' global share (2023)" },
        { value: "15%", label: "Leaderdrive's global share" },
        { value: "26%", label: "Leaderdrive's share in China" }
      ],
      incumbents: [
        { name: "Harmonic Drive Systems", country: "Japan", note: "Dominant global incumbent" }
      ],
      china: [
        { name: "Leaderdrive", note: "Most important challenger; ~15% global, ~26% domestic" },
        { name: "Laifual Drive", note: "Smaller producer" },
        { name: "Han’s Laser", note: "Smaller producer" },
        { name: "ZhongDa Leader", note: "Smaller producer" },
        { name: "TC Drive", note: "Smaller producer" },
        { name: "CTKM Harmonic", note: "Smaller producer" }
      ],
      timeline: [
        { date: "2023", text: "Harmonic Drive Systems holds roughly 85% of the global harmonic reducer market.", verify: { status: "unsupported", note: "From original notes. Harmonic Drive Systems does not appear in the 34 sources; neither the 85% figure nor its 2023 date is supported." } }
      ]
    },
    {
      id: "rv-reducers",
      stanceVerify: { status: "unsupported", note: "Nabtesco is described as an established industrial supplier whose humanoid leadership is not quantified (A015)." },
      name: "RV Reducers",
      layer: "actuation",
      labels: ["hip", "knee", "shoulder"],
      stance: "contested",
      oneLiner: "Heavier-duty precision reducers for the legs, hips and shoulders, where durability and load-bearing matter most.",
      summary: "Nabtesco (Japan) is still the global leader. Chinese firms are moving from experimental localization into commercial supply: Zhejiang Shuanghuan now supplies reducers to Tesla Optimus and Unitree G1.",
      stats: [],
      incumbents: [
        { name: "Nabtesco", country: "Japan", note: "Major global leader" }
      ],
      china: [
        { name: "Beijing Chietom", note: "Government support to scale RV reducers and humanoid-specific capacity" },
        { name: "Zhejiang Shuanghuan", note: "Leads MIIT-backed localization of RV and harmonic reducers; supplies Tesla Optimus and Unitree G1" }
      ],
      timeline: []
    },
    {
      id: "machine-tools",
      offBody: true,
      stanceVerify: { status: "unsupported", note: "Sources name Qinchuan/Hanjiang and Schaeffler; no import-share data." },
      name: "Machine Tools",
      layer: "manufacturing",
      labels: ["floor"],
      stance: "foreign-led",
      oneLiner: "The factory equipment needed to make high-precision reducers and other robot components.",
      summary: "China is increasingly making RV reducers itself, but it imports about 90% of the machine tools used to make them, mostly from Japan. Firms like Chietom and Shuanghuan may localize the reducer while still relying on foreign machinery to produce it.",
      stats: [
        { value: "~90%", label: "Share of RV-reducer machine tools China imports" }
      ],
      incumbents: [
        { name: "Japanese machine-tool suppliers", country: "Japan", note: "Main source of imports" }
      ],
      china: [
        { name: "Chinese reducer makers (Chietom, Shuanghuan)", note: "Localize the reducer, but still depend on imported machinery" }
      ],
      timeline: []
    },
    {
      id: "robotics-data",
      offBody: true,
      stanceVerify: { status: "unsupported", note: "Sources document AgiBot, Galbot, NVIDIA and Infineon activity; no leadership measure." },
      name: "Robotics Data",
      layer: "intelligence",
      labels: ["brain"],
      stance: "contested",
      oneLiner: "Real-world visual, tactile and motion data used to train embodied-AI systems.",
      summary: "China is building large tactile and embodied-intelligence data facilities to fix a shortage of high-quality robot training data. The problem isn't only volume: useful robot data is expensive, slow and fragmented to collect.",
      stats: [
        { value: "80+", label: "Everyday-skill categories in AgiBot's dataset" }
      ],
      incumbents: [],
      china: [
        { name: "AgiBot", note: "Building open-source humanoid datasets with Chinese research institutions" },
        { name: "Chinese research / data centers", note: "Large-scale tactile and embodied-intelligence data facilities" }
      ],
      timeline: []
    },
    {
      id: "physical-ai-software",
      offBody: true,
      stanceVerify: { status: "unsupported", note: "Sources cover NVIDIA, Google DeepMind and AgiBot models; no adoption or share data." },
      name: "Physical-AI Software & Foundation Models",
      layer: "intelligence",
      labels: ["brain"],
      stance: "foreign-led",
      oneLiner: "Software that lets robots understand instructions, perceive their environment, plan actions and learn movement.",
      summary: "Nvidia is the central player. Its Isaac GR00T models, Cosmos and simulation tools make up the physical-AI stack many Chinese robot firms adopt instead of building their own.",
      stats: [],
      incumbents: [
        { name: "Nvidia", country: "United States", note: "Isaac GR00T, Cosmos, simulation tools" },
        { name: "Google DeepMind", country: "United States / UK", note: "Co-developing the Newton physics engine", verify: "Sources classify Google DeepMind as UK-based (A005); the US parent is separate under the classification rule." },
        { name: "Disney Research", country: "United States", note: "Co-developing the Newton physics engine" }
      ],
      china: [],
      timeline: [
        { date: "2025-03", text: "Nvidia releases Isaac GR00T N1, an open foundation model for humanoid robots, at GTC.", verify: { status: "unsupported", note: "Not in the 34 sources. The nearest sourced NVIDIA events are Jetson Thor availability (2025-08-25, A025) and the Isaac GR00T reference robot (2026-05-31, A026)." } },
        { date: "2025-03", text: "Nvidia, Google DeepMind and Disney Research announce Newton, a physics engine for robot simulation and learning.", verify: { status: "unsupported", note: "Not in the 34 sources; no Newton or Disney Research entry exists." } }
      ]
    },
    {
      id: "cloud-compute",
      stanceVerify: { status: "unsupported", note: "No Alibaba Cloud, Sharetronic or Inspur entries in the sources." },
      name: "Cloud & Compute Infrastructure",
      layer: "intelligence",
      labels: ["cloud"],
      stance: "foreign-led",
      oneLiner: "The computing environment used to train large robotics models.",
      summary: "Major Chinese cloud and infrastructure providers train robotics models on Nvidia's GR00T stack.",
      stats: [],
      incumbents: [
        { name: "Nvidia", country: "United States", note: "GR00T used for training" }
      ],
      china: [
        { name: "Alibaba Cloud", note: "Uses Nvidia GR00T for robotics model training" },
        { name: "Sharetronic Data", note: "Uses GR00T in its training infrastructure" },
        { name: "Inspur", note: "Provided Nvidia with simulation infrastructure before its Entity List designation" }
      ],
      timeline: [
        { date: "2023-03", text: "Inspur is added to the US Entity List.", verify: { status: "unsupported", note: "Not in the 34 sources; Inspur has no entry." } }
      ]
    },
    {
      id: "humanoid-oems",
      stanceVerify: { status: "supported", source: "A034", note: "SAG estimates AgiBot (44%) and Unitree (31%) led SAG-tracked global humanoid shipments in H1 2026." },
      name: "Humanoid Makers on Nvidia",
      layer: "ecosystem",
      labels: ["chest"],
      stance: "china-leads",
      oneLiner: "Chinese companies building the robot itself, while relying partly on Nvidia for training and software.",
      summary: "China has many competitive robot makers, but a significant share still run on top of US-controlled software infrastructure.",
      stats: [],
      incumbents: [
        { name: "Nvidia", country: "United States", note: "Software and training layer underneath" }
      ],
      china: [
        { name: "Unitree", note: "Uses Nvidia models and tools; gets domestic reducers from Shuanghuan for the G1" },
        { name: "Fourier Intelligence", note: "Nvidia simulation and training infrastructure" },
        { name: "AgiBot / Zhiyuan", note: "Nvidia tools plus its own large datasets" },
        { name: "UBTECH", note: "Nvidia models and training stack" },
        { name: "Galbot", note: "Nvidia physical-AI ecosystem" },
        { name: "Star Era", note: "Nvidia physical-AI ecosystem" },
        { name: "Galaxy General", note: "Nvidia physical-AI ecosystem" },
        { name: "XPENG", note: "Nvidia physical-AI ecosystem" },
        { name: "Beijing Humanoid Robotics Innovation Center", note: "Nvidia physical-AI ecosystem" }
      ],
      timeline: [
        { date: "2024-05", text: "Unitree unveils the G1 humanoid.", verify: { status: "unsupported", note: "Not in the 34 sources. Unitree's sourced events are the H2 Plus reference-design role (2026-05-31, A026) and its H1 2026 shipment ranking (A034)." } }
      ]
    },
    {
      id: "sensing-control",
      stanceVerify: { status: "unsupported", note: "Sources cover Orbbec, NXP and Agility Robotics; no share data." },
      name: "Sensors & Control Components",
      layer: "ecosystem",
      labels: ["torso"],
      stance: "foreign-led",
      oneLiner: "Hardware that lets robots perceive their surroundings and execute movement accurately.",
      summary: "Chinese sensing and control suppliers are integrating Nvidia's tools and infrastructure.",
      stats: [],
      incumbents: [
        { name: "Nvidia", country: "United States", note: "Tools and infrastructure" }
      ],
      china: [
        { name: "Orbbec", note: "Nvidia tools in sensing applications" },
        { name: "BYD Electronics", note: "Integrating Nvidia tech into sensing/control" },
        { name: "Apuqi", note: "Nvidia infrastructure for control applications" }
      ],
      timeline: []
    },
    {
      id: "actuators",
      name: "Integrated Actuators",
      layer: "actuation",
      labels: ["shoulder", "hip", "knee", "elbow"],
      stance: null,
      oneLiner: "Joint modules that combine a motor, transmission, bearings, encoder, force sensing and drive electronics.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "bearings",
      name: "Bearings",
      layer: "actuation",
      labels: ["shoulder", "hip"],
      stance: null,
      oneLiner: "Cross-roller rings and precision bearings that carry multidirectional loads in rotating joints.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "screws",
      name: "Ball & Roller Screws",
      layer: "actuation",
      labels: ["thigh"],
      stance: null,
      oneLiner: "Precision screws that turn rotary motion into linear motion for leg and linear actuators.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "dexterous-hands",
      name: "Dexterous Hands",
      layer: "actuation",
      labels: ["hand"],
      stance: null,
      oneLiner: "Multi-finger hands, grippers and end-effectors with integrated sensing and control.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "batteries",
      name: "Batteries & Power",
      layer: "power",
      labels: ["battery"],
      stance: null,
      oneLiner: "Battery cells, packs and management systems that power the robot.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "semis-compute",
      name: "Semiconductors & Compute",
      layer: "intelligence",
      labels: ["brain", "torso"],
      stance: null,
      oneLiner: "Onboard AI compute, microcontrollers, motor-control and power semiconductors.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Assembly",
      layer: "manufacturing",
      offBody: true,
      labels: [],
      stance: null,
      oneLiner: "Contract manufacturers, automotive groups and in-house lines that build the robots.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    },
    {
      id: "materials",
      name: "Materials & Structure",
      layer: "manufacturing",
      offBody: true,
      labels: [],
      stance: null,
      oneLiner: "Rare-earth magnets, structural components and the industrial policy shaping the component ecosystem.",
      summary: "",
      stats: [],
      incumbents: [],
      china: [],
      timeline: []
    }
  ]
};
