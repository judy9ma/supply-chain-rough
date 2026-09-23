/* Generated from humanoid_robotics_supply_chain_sources.json by build_sources.py.
   34 sources, 41 players, 20 events, 12 market-share/scale figures, 22 relationships.
   Do not edit by hand; re-run the build script instead. */
window.SOURCE_DATA = {
 "meta": {
  "research_cutoff": "2026-09-23",
  "source_count": 34,
  "language_counts": {
   "English": 24,
   "Chinese": 10
  },
  "coverage_status": "Substantial multilingual research; direct Google and Baidu search-result access was unavailable, so the requested engine coverage is incomplete.",
  "search_method": "English and Chinese searches through the available web-search service, followed by original documents or identified filing mirrors. Included simplified and traditional Chinese. Direct Baidu indexing of individual selected URLs was not verified.",
  "quality_scale": "1–5 for each score; 5 is strongest. Ordered primarily by research usefulness and information density, not publication recency.",
  "interpretation_rules": "Company disclosures remain company-reported. Forecasts, targets, samples, orders, capacity and shipments are distinct. Unknown dates use null. Empty arrays mean no extracted supported entry, not proof that the source never mentions the segment.",
  "classification_rule": "Chinese means mainland-China headquarters. Parent ownership is separate; Taiwan is Non-Chinese under the requested definition.",
  "taxonomy_note": "Raw/specialty materials and structural components use other, as the supplied schema has no separate columns for them.",
  "limitations": "Public sources rarely support defensible humanoid-component market shares. Percentages lacking a clear year, geography, denominator or metric were excluded. Vendor technical claims are not independent validation; robot shipment definitions vary.",
  "verification_method": "PDF text inspection supplied page-level evidence; inaccessible body content was excluded from numerical extraction. JSON syntax, required fields, classifications, score ranges and share metadata were checked."
 },
 "segments": [
  {
   "key": "motors",
   "name": "Motors",
   "offBody": false,
   "components": [
    "coreless-motors",
    "frameless-torque-motors"
   ]
  },
  {
   "key": "actuators",
   "name": "Actuators",
   "offBody": false,
   "components": [
    "actuators"
   ]
  },
  {
   "key": "precision_reducers",
   "name": "Precision Reducers",
   "offBody": false,
   "components": [
    "harmonic-reducers",
    "rv-reducers"
   ]
  },
  {
   "key": "bearings",
   "name": "Bearings",
   "offBody": false,
   "components": [
    "bearings"
   ]
  },
  {
   "key": "ball_and_roller_screws",
   "name": "Ball and Roller Screws",
   "offBody": false,
   "components": [
    "screws"
   ]
  },
  {
   "key": "encoders",
   "name": "Encoders",
   "offBody": false,
   "components": [
    "encoders"
   ]
  },
  {
   "key": "sensors",
   "name": "Sensors",
   "offBody": false,
   "components": [
    "force-torque",
    "tactile",
    "sensing-control"
   ]
  },
  {
   "key": "dexterous_hands",
   "name": "Dexterous Hands",
   "offBody": false,
   "components": [
    "dexterous-hands"
   ]
  },
  {
   "key": "batteries_and_power",
   "name": "Batteries and Power",
   "offBody": false,
   "components": [
    "batteries"
   ]
  },
  {
   "key": "semiconductors_and_compute",
   "name": "Semiconductors and Compute",
   "offBody": false,
   "components": [
    "semis-compute"
   ]
  },
  {
   "key": "controllers_and_electronics",
   "name": "Controllers and Electronics",
   "offBody": false,
   "components": [
    "sensing-control"
   ]
  },
  {
   "key": "full_robot_integration",
   "name": "Full Robot Integration",
   "offBody": false,
   "components": [
    "humanoid-oems"
   ]
  },
  {
   "key": "software_and_ai",
   "name": "Software and AI",
   "offBody": true,
   "components": [
    "physical-ai-software"
   ]
  },
  {
   "key": "testing_simulation_and_data",
   "name": "Testing, Simulation and Data",
   "offBody": true,
   "components": [
    "robotics-data"
   ]
  },
  {
   "key": "machine_tools",
   "name": "Machine Tools",
   "offBody": true,
   "components": [
    "machine-tools"
   ]
  },
  {
   "key": "manufacturing_and_assembly",
   "name": "Manufacturing and Assembly",
   "offBody": true,
   "components": [
    "manufacturing"
   ]
  },
  {
   "key": "other",
   "name": "Other (Materials and Structure)",
   "offBody": true,
   "components": [
    "materials"
   ]
  }
 ],
 "sources": {
  "A001": {
   "id": "A001",
   "title": "The Humanoid Hardware Value Chain: Can the European Manufacturing Industry Capitalize on the Humanoid Momentum?",
   "titleOriginal": "The Humanoid Hardware Value Chain: Can the European Manufacturing Industry Capitalize on the Humanoid Momentum?",
   "publisher": "Fraunhofer IPA; P3",
   "date": "2026-02-26",
   "url": "https://www.ipa.fraunhofer.de/content/dam/ipa/de/documents/Publikationen/Studien/260219_Humanoid_Value_Chain_final.pdf",
   "language": "English",
   "type": "industry report",
   "scores": {
    "depth": 5,
    "data": 4,
    "primary": 4
   },
   "reason": "Detailed component comparisons and an explicitly bounded hardware-cost model.",
   "summary": "Examines component maturity, manufacturing trade-offs and European opportunities. Its European low-volume/prototype cost model excludes assembly and software; supplier tables are not evidence of customer contracts."
  },
  "A002": {
   "id": "A002",
   "title": "Turning humanoid supply chain constraints into billion-dollar wins",
   "titleOriginal": "Turning humanoid supply chain constraints into billion-dollar wins",
   "publisher": "McKinsey & Company",
   "date": "2026-04-17",
   "url": "https://www.mckinsey.com/industries/industrials/our-insights/turning-humanoid-supply-chain-constraints-into-billion-dollar-wins",
   "language": "English",
   "type": "industry report",
   "scores": {
    "depth": 5,
    "data": 4,
    "primary": 3
   },
   "reason": "Cross-component analysis of cost, standardization and production bottlenecks.",
   "summary": "Explains why actuation and tactile sensing can constrain scale despite mature compute and battery industries. BOM percentages are cost composition, not supplier market shares."
  },
  "A003": {
   "id": "A003",
   "title": "Humanoids at Schaeffler",
   "titleOriginal": "Humanoids at Schaeffler",
   "publisher": "Schaeffler AG",
   "date": "2026",
   "url": "https://www.schaeffler.com/remotemedien/media/_shared_media_rwd/08_investor_relations/presentations/20260205_humanoids_at_schaeffler.pdf",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "February 2026 investor presentation gives actuator architecture and order-stage evidence.",
   "summary": "Explains Schaeffler's integrated component strategy and production-process capabilities; promotional market-share aspirations are excluded."
  },
  "A004": {
   "id": "A004",
   "title": "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
   "titleOriginal": "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
   "publisher": "arXiv",
   "date": "2025-03-09",
   "url": "https://arxiv.org/abs/2503.06669",
   "language": "English",
   "type": "academic paper",
   "scores": {
    "depth": 5,
    "data": 4,
    "primary": 5
   },
   "reason": "Original dataset and policy research with reproducible technical detail; preprint rather than independent commercial validation.",
   "summary": "Analyzes standardized robot-data collection and generalist manipulation policies; latest listed revision is August 4, 2025."
  },
  "A005": {
   "id": "A005",
   "title": "Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer",
   "titleOriginal": "Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer",
   "publisher": "arXiv",
   "date": "2025-10-02",
   "url": "https://arxiv.org/abs/2510.03342",
   "language": "English",
   "type": "academic paper",
   "scores": {
    "depth": 5,
    "data": 4,
    "primary": 5
   },
   "reason": "Original model architecture and evaluation research; relevant to the software and data layers.",
   "summary": "Describes multi-embodiment learning and embodied reasoning. Latest listed revision is November 28, 2025; benchmark leadership is not a commercial-market-share measure."
  },
  "A006": {
   "id": "A006",
   "title": "Embodied AI: China’s ambitious path to transform its robotics industry",
   "titleOriginal": "Embodied AI: China’s ambitious path to transform its robotics industry",
   "publisher": "MERICS",
   "date": "2026-04-30",
   "url": "https://merics.org/en/report/embodied-ai-chinas-ambitious-path-transform-its-robotics-industry",
   "language": "English",
   "type": "industry report",
   "scores": {
    "depth": 5,
    "data": 3,
    "primary": 3
   },
   "reason": "Substantive policy-and-industry analysis with linked evidence and explicit capability constraints.",
   "summary": "Distinguishes industrial robots, humanoids and embodied AI while examining China's hardware advantages and foreign software dependencies."
  },
  "A007": {
   "id": "A007",
   "title": "Jiangsu Hengli Hydraulic Co., Ltd. 2025 Annual Report",
   "titleOriginal": "江苏恒立液压股份有限公司2025年年度报告",
   "publisher": "Jiangsu Hengli Hydraulic; filing mirrored by Sina Finance",
   "date": "2026-04-21",
   "url": "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12118901",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 5,
    "primary": 5
   },
   "reason": "Distinguishes established ball-screw capacity from early roller-screw commercialization.",
   "summary": "Reports linear-motion expansion without equating ball-screw capacity to humanoid roller-screw output."
  },
  "A008": {
   "id": "A008",
   "title": "JL MAG Rare-Earth Co., Ltd. 2025 Annual Report",
   "titleOriginal": "江西金力永磁科技股份有限公司2025年年度报告全文",
   "publisher": "JL MAG Rare-Earth",
   "date": "2026-03-26",
   "url": "https://www.jlmag.com.cn/uploads/soft/20260330/1774844219812095.pdf",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 5,
    "primary": 5
   },
   "reason": "Connects upstream magnets, named material suppliers and early robot-rotor deliveries.",
   "summary": "Separates company-wide magnetic-material capacity from its much earlier-stage embodied-robot rotor business."
  },
  "A009": {
   "id": "A009",
   "title": "Orbbec Inc. 2025 Annual Report",
   "titleOriginal": "奥比中光科技集团股份有限公司2025年年度报告",
   "publisher": "Orbbec; filing mirrored by Eastmoney",
   "date": "2026-04-20",
   "url": "https://pdf.dfcfw.com/pdf/H2_AN202604191821320724_1.pdf",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 5,
    "primary": 5
   },
   "reason": "Names a foreign humanoid customer and an explicitly validated compute-platform integration.",
   "summary": "Documents cross-border depth-camera adoption and the engineering requirements of wrist-mounted robot vision."
  },
  "A010": {
   "id": "A010",
   "title": "Shanghai MOONS' Electric Co., Ltd. 2025 Annual Report",
   "titleOriginal": "上海鸣志电器股份有限公司2025年年度报告",
   "publisher": "Shanghai MOONS' Electric; filing mirrored by Sina Finance",
   "date": "2026-04-25",
   "url": "https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12191548&stockid=603728",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Useful motor-architecture detail and explicitly timed capacity expansion.",
   "summary": "Describes robot-related motor and drive growth across multiple robot types, not just humanoids."
  },
  "A011": {
   "id": "A011",
   "title": "Ningbo Keli Sensing Technology Co., Ltd. 2025 Annual Report",
   "titleOriginal": "宁波柯力传感科技股份有限公司2025年年度报告",
   "publisher": "Keli Sensing; filing mirrored by Sina Finance",
   "date": "2026-04-28",
   "url": "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12209189",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Provides an actual robot-sensor delivery measure and technical production discussion.",
   "summary": "Tracks commercialization of force/torque sensing, including calibration and signal-processing requirements."
  },
  "A012": {
   "id": "A012",
   "title": "Qinchuan Machine Tool & Tool Group Corp. 2025 Annual Report",
   "titleOriginal": "秦川机床工具集团股份公司2025年年度报告全文",
   "publisher": "Qinchuan Machine Tool; filing mirrored by Sina Finance",
   "date": "2026-03-27",
   "url": "https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12025001&stockid=000837",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Identifies manufacturing equipment designed specifically for planetary roller screws.",
   "summary": "Shows the machine-tool layer behind precision transmission localization."
  },
  "A013": {
   "id": "A013",
   "title": "Suzhou Leaderdrive Harmonic Drive Co., Ltd. 2025 Annual Report (Corrected)",
   "titleOriginal": "苏州绿的谐波传动科技股份有限公司2025年年度报告（更正后）",
   "publisher": "Leaderdrive; corrected filing mirrored by Sina Finance",
   "date": "2026-07-10",
   "url": "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12438944&stockid=688017",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Corrected primary filing details the materials and process challenges of precision gearing.",
   "summary": "Explains reducer and integrated-joint development; no unsupported humanoid-customer attribution is added."
  },
  "A014": {
   "id": "A014",
   "title": "Zhejiang Sanhua Intelligent Controls Co., Ltd. 2025 Annual Report",
   "titleOriginal": "浙江三花智能控制股份有限公司2025年年度报告",
   "publisher": "Sanhua Intelligent Controls; filing mirrored by Sina Finance",
   "date": "2026-03-24",
   "url": "https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12012988&stockid=002050",
   "language": "Chinese (Simplified)",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Clarifies the development stage of a frequently discussed actuator entrant.",
   "summary": "Describes actuator engineering and sample delivery without disclosing named humanoid customers."
  },
  "A015": {
   "id": "A015",
   "title": "Nabtesco Value Report 2025",
   "titleOriginal": "Nabtesco Value Report 2025",
   "publisher": "Nabtesco Corporation",
   "date": "2026",
   "url": "https://www.nabtesco.com/cms/wp-content/uploads/value_report_2025_en.pdf",
   "language": "English",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Important Japanese precision-reducer perspective; distinguishes industrial-robot exposure from humanoids.",
   "summary": "Explains RV reducer production, manufacturing advantages and adjacent physical-AI opportunities. Its advertised share is not reproduced because the relevant unit-versus-revenue basis is unspecified."
  },
  "A016": {
   "id": "A016",
   "title": "Integrated Report 2025: A Review of the 2024 Fiscal Year",
   "titleOriginal": "Integrated Report 2025: A Review of the 2024 Fiscal Year",
   "publisher": "THK Co., Ltd.",
   "date": "2025",
   "url": "https://www.thk.com/in/en/products/catalog/pub/Integrated_Report_2025_en.pdf",
   "language": "English",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Explains Japanese linear-motion capabilities and regional strategy without inventing humanoid contracts.",
   "summary": "An adjacent-component baseline, not a dedicated humanoid shipment report."
  },
  "A017": {
   "id": "A017",
   "title": "HIWIN TECHNOLOGIES CORP. Annual Report 2025",
   "titleOriginal": "HIWIN TECHNOLOGIES CORP. Annual Report 2025",
   "publisher": "HIWIN Technologies; report mirrored by FinancialFilings",
   "date": "2026",
   "url": "https://financialfilings.com/filings/hiwin-2049/annual-report/2026/45723724/",
   "language": "English",
   "type": "company filing",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Detailed precision-motion development and explicitly forecast product volumes.",
   "summary": "Reports miniature ball-screw development and vertically integrated component capabilities; forecasts cover all applications."
  },
  "A018": {
   "id": "A018",
   "title": "Guiding Opinions on the Innovative Development of Humanoid Robots",
   "titleOriginal": "人形机器人创新发展指导意见",
   "publisher": "Ministry of Industry and Information Technology of China",
   "date": "2023-11-02",
   "url": "https://www.miit.gov.cn/cms_files/filemanager/1226211233/attach/20248/50f3ebcf5d4f4cdfab8e753056ff1f09.pdf",
   "language": "Chinese (Simplified)",
   "type": "government report",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Primary national roadmap explicitly addresses components, materials, software and testing.",
   "summary": "Sets 2025 and 2027 development objectives. These are historical policy targets, not evidence that the targets were achieved."
  },
  "A019": {
   "id": "A019",
   "title": "Ramping Figure 03 Production",
   "titleOriginal": "Ramping Figure 03 Production",
   "publisher": "Figure AI",
   "date": "2026-04-29",
   "url": "https://www.figure.ai/news/ramping-figure-03-production",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Unusually concrete manufacturer disclosure on output, actuator production and quality control.",
   "summary": "Company-reported manufacturing progress; delivery totals include internal development/data uses and must not be read as external customer sales."
  },
  "A020": {
   "id": "A020",
   "title": "F.03 Battery Development",
   "titleOriginal": "F.03 Battery Development",
   "publisher": "Figure AI",
   "date": "2025-07-17",
   "url": "https://www.figure.ai/news/f-03-battery-development",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Detailed pack architecture, safety engineering and manufacturing-process choices.",
   "summary": "Explains structural battery integration and thermal-failure containment. Certification language varies within the article; no completed pack-certification claim is inferred."
  },
  "A021": {
   "id": "A021",
   "title": "Hyundai Motor Group Announces AI Robotics Strategy to Lead Human-Centered Robotics Era at CES 2026",
   "titleOriginal": "Hyundai Motor Group Announces AI Robotics Strategy to Lead Human-Centered Robotics Era at CES 2026",
   "publisher": "Hyundai Motor Group",
   "date": "2026-01-05",
   "url": "https://www.hyundai.com/worldwide/en/newsroom/detail/0000001100",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Details a Korean-US component-to-integration chain and explicitly dated capacity plans.",
   "summary": "Links automotive manufacturing, actuator development and Atlas commercialization; planned capacity is not installed output."
  },
  "A022": {
   "id": "A022",
   "title": "PAL Robotics integrates magnetic encoder technology into robots to achieve balance",
   "titleOriginal": "PAL Robotics integrates magnetic encoder technology into robots to achieve balance",
   "publisher": "Renishaw",
   "date": null,
   "url": "https://www.renishaw.com/en/--43036",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 4,
    "data": 4,
    "primary": 5
   },
   "reason": "Specific encoder-to-humanoid integration case with application-level engineering detail.",
   "summary": "Explains joint-feedback selection under space and weight constraints. No publication date is visible in the retrieved page."
  },
  "A023": {
   "id": "A023",
   "title": "NXP Delivers New Innovations for Advanced Physical AI with NVIDIA",
   "titleOriginal": "NXP Delivers New Innovations for Advanced Physical AI with NVIDIA",
   "publisher": "NXP Semiconductors",
   "date": "2026-03-16",
   "url": "https://www.nxp.com/company/about-nxp/newsroom/NW-NXP-DELIVERS-NEW-INNOVATIONS-AI-NVIDIA",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Explains real-time robot-body networking rather than only headline AI compute.",
   "summary": "Details controller-side integration for synchronized sensing and actuation."
  },
  "A024": {
   "id": "A024",
   "title": "Infineon accelerates deployment of robots with improved safety and security features using digital twins in collaboration with NVIDIA",
   "titleOriginal": "Infineon accelerates deployment of robots with improved safety and security features using digital twins in collaboration with NVIDIA",
   "publisher": "Infineon Technologies",
   "date": "2026-03-16",
   "url": "https://www.infineon.com/press-release/2026/infxx202603-073",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Identifies the actuator-control semiconductor stack and simulation relationship.",
   "summary": "Connects motor-control electronics, power management and security with pre-hardware validation."
  },
  "A025": {
   "id": "A025",
   "title": "NVIDIA Blackwell-Powered Jetson Thor Now Available, Accelerating the Age of General Robotics",
   "titleOriginal": "NVIDIA Blackwell-Powered Jetson Thor Now Available, Accelerating the Age of General Robotics",
   "publisher": "NVIDIA",
   "date": "2025-08-25",
   "url": "https://nvidianews.nvidia.com/news/nvidia-blackwell-powered-jetson-thor-now-available-accelerating-the-age-of-general-robotics",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Primary product-availability announcement with robot-developer adoption evidence.",
   "summary": "Explains the embedded AI-compute layer and its relationship to robotics development tools."
  },
  "A026": {
   "id": "A026",
   "title": "NVIDIA Announces NVIDIA Isaac GR00T Reference Humanoid Robot for Academic Research",
   "titleOriginal": "NVIDIA Announces NVIDIA Isaac GR00T Reference Humanoid Robot for Academic Research",
   "publisher": "NVIDIA",
   "date": "2026-05-31",
   "url": "https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "A concrete cross-border bill-of-system relationship, not a speculative supplier list.",
   "summary": "Combines Chinese robot hardware, tactile hands, US compute and an open development workflow; availability is prospective."
  },
  "A027": {
   "id": "A027",
   "title": "NVIDIA Announces Halos for Robotics, the Industry’s First Full-Stack Safety System for Physical AI",
   "titleOriginal": "NVIDIA Announces Halos for Robotics, the Industry’s First Full-Stack Safety System for Physical AI",
   "publisher": "NVIDIA",
   "date": "2026-06-22",
   "url": "https://nvidianews.nvidia.com/news/nvidia-announces-halos-for-robotics-the-industrys-first-full-stack-safety-system-for-physical-ai",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Clarifies the distinction between safety integration and completed third-party certification.",
   "summary": "Describes compute, sensor transport, safety software and inspection as a combined validation architecture."
  },
  "A028": {
   "id": "A028",
   "title": "SAMSUNG SDI Unveils All-Solid-State Battery for Physical AI",
   "titleOriginal": "SAMSUNG SDI Unveils All-Solid-State Battery for Physical AI",
   "publisher": "Samsung SDI",
   "date": "2026-03-09",
   "url": "https://www.samsungsdi.com/sdi-now/sdi-news/4782.html",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Explains robot-specific battery form factors while separating samples from production targets.",
   "summary": "Announces physical-AI battery development; prospective solid-state production is not current humanoid supply."
  },
  "A029": {
   "id": "A029",
   "title": "SKF and Leaderdrive form a venture for precision components in humanoids",
   "titleOriginal": "SKF and Leaderdrive form a venture for precision components in humanoids",
   "publisher": "SKF; distributed by Cision",
   "date": "2026-07-02",
   "url": "https://news.cision.com/skf/r/skf-and-leaderdrive-form-a-venture-for-precision-components-in-humanoids,c4370057",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Explicit Swedish-Chinese manufacturing partnership, with ownership distinguished from market share.",
   "summary": "Announces a China-based venture for humanoid precision components; operation by end-2026 is prospective."
  },
  "A030": {
   "id": "A030",
   "title": "DEX-EE Overview: The most robust dexterous robot hand on the market",
   "titleOriginal": "DEX-EE Overview: The most robust dexterous robot hand on the market",
   "publisher": "Shadow Robot",
   "date": "2024-06-06",
   "url": "https://shadowrobot.com/shadow-hand-overview-the-most-robust-dexterous-robot-hand-on-the-market/",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Component-level sensing and maintainability details plus a named development partner.",
   "summary": "Describes a research end-effector engineered for repeated learning trials; the title's superlative is a vendor claim."
  },
  "A031": {
   "id": "A031",
   "title": "Apptronik and Jabil Collaborate to Scale Production of Apollo Humanoid Robots and Deploy in Manufacturing Operations",
   "titleOriginal": "Apptronik and Jabil Collaborate to Scale Production of Apollo Humanoid Robots and Deploy in Manufacturing Operations",
   "publisher": "Jabil",
   "date": "2025-02-25",
   "url": "https://investors.jabil.com/news/news-details/2025/Apptronik-and-Jabil-Collaborate-to-Scale-Production-of-Apollo-Humanoid-Robots-and-Deploy-in-Manufacturing-Operations/default.aspx",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Clear contract-manufacturing relationship and factory-validation workflow.",
   "summary": "Documents a production partnership and pilot, without claiming completed global scale-up."
  },
  "A032": {
   "id": "A032",
   "title": "Sanctuary AI Expands General Purpose Robot Footprint in Automotive Manufacturing Industry",
   "titleOriginal": "Sanctuary AI Expands General Purpose Robot Footprint in Automotive Manufacturing Industry",
   "publisher": "Sanctuary AI; distributed by PR Newswire",
   "date": "2024-04-11",
   "url": "https://www.prnewswire.com/news-releases/sanctuary-ai-expands-general-purpose-robot-footprint-in-automotive-manufacturing-industry-302114793.html",
   "language": "English",
   "type": "other",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 5
   },
   "reason": "Primary Canadian partnership disclosure connecting automotive manufacturing with humanoid development.",
   "summary": "Separates investment, manufacturing assessment and intended deployment from established production volumes."
  },
  "A033": {
   "id": "A033",
   "title": "HIWIN Debuts at COMPUTEX Taipei, Unveiling an AI-Enabled Dual-Arm Eight-Axis Robot",
   "titleOriginal": "上銀首度參加台北國際電腦展 具有AI功能的雙臂八軸機器人在台首次正式亮相",
   "publisher": "Commercial Times; reproduced by HIWIN",
   "date": "2026-06-02",
   "url": "https://www.hiwin.tw/news_content.aspx?newsID=25582",
   "language": "Chinese (Traditional)",
   "type": "specialist media",
   "scores": {
    "depth": 3,
    "data": 4,
    "primary": 4
   },
   "reason": "Names a Taiwanese precision-motion supplier and distinguishes humanoid modules from logistics robots.",
   "summary": "Reports new roller screws and in-house actuator integration; adjacent logistics and semiconductor applications are not conflated with humanoid shipments."
  },
  "A034": {
   "id": "A034",
   "title": "SAG: Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in 1H 2026; AGIBOT Overtook Unitree for No. 1 Position",
   "titleOriginal": "SAG: Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in 1H 2026; AGIBOT Overtook Unitree for No. 1 Position",
   "publisher": "Smart Analytics Global",
   "date": "2026-08-10",
   "url": "https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/",
   "language": "English",
   "type": "industry report",
   "scores": {
    "depth": 3,
    "data": 3,
    "primary": 4
   },
   "reason": "Original analyst shipment estimates with named vendors and a defined reporting period.",
   "summary": "Estimates 19,100 global shipments in H1 2026. Coverage includes wheeled and bipedal designs, so totals are not a biped-only denominator. Public methodology remains limited."
  }
 },
 "players": [
  {
   "id": "maxon",
   "name": "maxon",
   "aliases": [
    "Maxon"
   ],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Switzerland"
   },
   "type": "company",
   "segments": [
    "motors"
   ],
   "entries": [
    {
     "seg": "motors",
     "source": "A001",
     "components": [
      "coreless-motors"
     ],
     "role": "Coreless precision motors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section 3.2, Table 6, printed p.20",
     "tech": [
      "Listed for coreless motors suitable for compact, precise actuation; power-density and durability trade-offs matter."
     ]
    },
    {
     "seg": "motors",
     "source": "A002",
     "components": [
      "coreless-motors"
     ],
     "role": "High-end robotics motors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "medium",
     "evidence": "Supply-chain bottlenecks discussion, paragraph naming Maxon and Kollmorgen",
     "tech": [
      "The authors identify precision-motor capacity as a scaling constraint for industrial-focused suppliers."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "wittenstein",
   "name": "WITTENSTEIN",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Germany"
   },
   "type": "company",
   "segments": [
    "precision_reducers"
   ],
   "entries": [
    {
     "seg": "precision_reducers",
     "source": "A001",
     "components": [
      "harmonic-reducers",
      "rv-reducers"
     ],
     "role": "Planetary reducers",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section 3.3, Table 7, printed p.22",
     "tech": [
      "Listed among planetary-transmission suppliers. Architecture selection trades load capability against packaging and precision."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "bonsystems",
   "name": "Bonsystems",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "South Korea"
   },
   "type": "company",
   "segments": [
    "precision_reducers"
   ],
   "entries": [
    {
     "seg": "precision_reducers",
     "source": "A001",
     "components": [
      "harmonic-reducers",
      "rv-reducers"
     ],
     "role": "Cycloidal reducers",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section 3.3, Table 7, printed p.22",
     "tech": [
      "Listed among cycloidal-reducer suppliers; inclusion does not establish humanoid production volumes."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "catl",
   "name": "CATL",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "batteries_and_power"
   ],
   "entries": [
    {
     "seg": "batteries_and_power",
     "source": "A001",
     "components": [
      "batteries"
     ],
     "role": "Lithium-ion battery technology",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section 3.4, Table 8, printed p.24",
     "tech": [
      "Identified as a relevant battery supplier; not a disclosed humanoid supply contract."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "kollmorgen",
   "name": "Kollmorgen",
   "aliases": [
    "Kollmorgen"
   ],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "motors"
   ],
   "entries": [
    {
     "seg": "motors",
     "source": "A002",
     "components": [
      "frameless-torque-motors"
     ],
     "role": "High-end robotics motors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "medium",
     "evidence": "Same paragraph; hybrid rotary/linear actuation discussion",
     "tech": [
      "Higher payload and dynamic-performance requirements increase exposure to precision linear-motion components."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "tesla",
   "name": "Tesla",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "dexterous_hands"
   ],
   "entries": [
    {
     "seg": "dexterous_hands",
     "source": "A002",
     "components": [
      "dexterous-hands"
     ],
     "role": "Vertically integrated humanoid manipulation",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "medium",
     "evidence": "Sidebar: Why hands are critical",
     "tech": [
      "Used to illustrate miniaturized actuation, tactile-feedback and low-latency-control integration challenges; no supplier contract inferred."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "schaeffler",
   "name": "Schaeffler",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Germany"
   },
   "type": "company",
   "segments": [
    "actuators",
    "machine_tools"
   ],
   "entries": [
    {
     "seg": "actuators",
     "source": "A003",
     "components": [
      "actuators"
     ],
     "role": "Integrated linear and rotary actuators",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Slides 8 and 11",
     "tech": [
      "Linear modules combine a motor, screw transmission, bearings, encoder, force sensing and servo electronics."
     ]
    },
    {
     "seg": "machine_tools",
     "source": "A003",
     "components": [
      "machine-tools"
     ],
     "role": "In-house precision-production processes",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Slide 9",
     "tech": [
      "Identifies turning, grinding and honing capabilities relevant to industrializing component production."
     ]
    }
   ],
   "events": [],
   "shares": [
    {
     "value": "32 sample orders and 1 serial-production order; company reported",
     "metric": "other",
     "market_definition": "Company humanoid-component order pipeline as of February; not customers, robots shipped or market share",
     "geography": "Global order pipeline",
     "year": "2026",
     "source_wording": "32 sample orders",
     "seg": "actuators",
     "source": "A003",
     "components": [
      "actuators"
     ],
     "kinds": [
      "company-reported",
      "orders",
      "sample"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "agibot",
   "name": "AgiBot",
   "aliases": [
    "AgiBot / Zhiyuan",
    "Zhiyuan"
   ],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "software_and_ai",
    "testing_simulation_and_data",
    "full_robot_integration"
   ],
   "entries": [
    {
     "seg": "software_and_ai",
     "source": "A004",
     "components": [
      "physical-ai-software"
     ],
     "role": "Genie Operator-1 generalist manipulation policy",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Abstract; GO-1 architecture and experiments",
     "tech": [
      "Uses latent action representations to improve utilization of heterogeneous robot data; benchmark results are not industrial uptime evidence."
     ]
    },
    {
     "seg": "testing_simulation_and_data",
     "source": "A004",
     "components": [
      "robotics-data"
     ],
     "role": "Robot demonstration-data collection and verification",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Abstract; Section III, AgiBot World dataset",
     "tech": [
      "Standardized collection incorporates human verification and supports diverse manipulation settings."
     ]
    },
    {
     "seg": "full_robot_integration",
     "source": "A034",
     "components": [
      "humanoid-oems"
     ],
     "role": "Humanoid and wheeled embodied-robot integration",
     "position": "First in SAG's H1 2026 shipment ranking.",
     "confidence": "medium",
     "evidence": "Key Takeaways; AGIBOT Takes the Lead",
     "tech": [
      "Estimated shipments: approximately 8,400 units in H1 2026."
     ]
    }
   ],
   "events": [],
   "shares": [
    {
     "value": "More than 1 million trajectories across 217 tasks",
     "metric": "other",
     "market_definition": "AgiBot World research dataset; data volume, not robot shipments or market share",
     "geography": "China-based collection; global research release",
     "year": "2025",
     "source_wording": "over 1 million trajectories",
     "seg": "testing_simulation_and_data",
     "source": "A004",
     "components": [
      "robotics-data"
     ],
     "kinds": []
    },
    {
     "value": "44%; SAG estimate",
     "metric": "unit share",
     "market_definition": "Share of SAG-tracked global humanoid shipments, including wheeled and bipedal designs",
     "geography": "Global",
     "year": "2026 H1",
     "source_wording": "44% global shipment share",
     "seg": "full_robot_integration",
     "source": "A034",
     "components": [
      "humanoid-oems"
     ],
     "kinds": [
      "estimate"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "google-deepmind",
   "name": "Google DeepMind",
   "aliases": [
    "Google DeepMind"
   ],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United Kingdom"
   },
   "type": "company",
   "segments": [
    "software_and_ai"
   ],
   "entries": [
    {
     "seg": "software_and_ai",
     "source": "A005",
     "components": [
      "physical-ai-software"
     ],
     "role": "Vision-language-action and embodied-reasoning models",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Abstract; Section 3 and Appendix B, including Apollo evaluation",
     "tech": [
      "Motion Transfer learns from heterogeneous robot embodiments.",
      "Combines action generation with natural-language reasoning and spatial/task-progress understanding.",
      "Classification follows the UK-based organization, not its US parent.",
      "Section 3 notes that some baseline comparisons use different training-data volumes."
     ]
    }
   ],
   "events": [
    {
     "date": "2025-10-02",
     "event": "Published the Gemini Robotics 1.5 technical report.",
     "significance": "Documents the model family and evaluation approach.",
     "seg": "software_and_ai",
     "source": "A005",
     "components": [
      "physical-ai-software"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Evaluates models on Apptronik's Apollo humanoid; evaluation is not a supply contract.",
     "seg": "software_and_ai",
     "source": "A005",
     "components": [
      "physical-ai-software"
     ]
    }
   ]
  },
  {
   "id": "gac",
   "name": "GAC",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "batteries_and_power"
   ],
   "entries": [
    {
     "seg": "batteries_and_power",
     "source": "A006",
     "components": [
      "batteries"
     ],
     "role": "EV-to-humanoid battery-system adaptation",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "medium",
     "evidence": "Section on developing smart robots; paragraph discussing GoMate",
     "tech": [
      "Uses GoMate as an example of transferring electric-vehicle battery capabilities into robotics; no cell supplier inferred."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "galbot",
   "name": "Galbot",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "testing_simulation_and_data"
   ],
   "entries": [
    {
     "seg": "testing_simulation_and_data",
     "source": "A006",
     "components": [
      "robotics-data"
     ],
     "role": "Synthetic robot-manipulation data",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "medium",
     "evidence": "Discussion of synthetic data, DexGraspNet and NVIDIA tools",
     "tech": [
      "Synthetic data and simulation complement real-world robot data; the report highlights dependency on foreign computing ecosystems."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "hengli-hydraulic",
   "name": "Hengli Hydraulic",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "ball_and_roller_screws"
   ],
   "entries": [
    {
     "seg": "ball_and_roller_screws",
     "source": "A007",
     "components": [
      "screws"
     ],
     "role": "Precision ball screws and planetary roller screws",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section III, management discussion, linear-drive project paragraph",
     "tech": [
      "The same project also manufactures precision linear guides; robot-customer identities are not disclosed in the cited passage."
     ]
    }
   ],
   "events": [
    {
     "date": "2025",
     "event": "Planetary roller screws progressed through sample delivery and initial production.",
     "significance": "Commercialization milestone, not evidence of mature high-volume output.",
     "seg": "ball_and_roller_screws",
     "source": "A007",
     "components": [
      "screws"
     ]
    }
   ],
   "shares": [
    {
     "value": "70,000 sets/year; company-reported capacity",
     "metric": "production capacity",
     "market_definition": "Precision ground ball screws, all applications; not planetary roller screws or humanoid-only output",
     "geography": "China",
     "year": "2025",
     "source_wording": "年产精密磨削滚珠丝杠7万套",
     "seg": "ball_and_roller_screws",
     "source": "A007",
     "components": [
      "screws"
     ],
     "kinds": [
      "capacity",
      "company-reported"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "jl-mag-rare-earth",
   "name": "JL MAG Rare-Earth",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "motors",
    "other"
   ],
   "entries": [
    {
     "seg": "motors",
     "source": "A008",
     "components": [
      "coreless-motors",
      "frameless-torque-motors"
     ],
     "role": "Embodied-robot motor rotors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Printed p.10, principal business",
     "tech": []
    },
    {
     "seg": "other",
     "source": "A008",
     "components": [
      "materials"
     ],
     "role": "Raw and specialty materials: high-performance rare-earth permanent magnets",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Printed pp.10 and 20; principal business and supply-security sections",
     "tech": [
      "Customer qualification and reliable raw-material sourcing are important delivery constraints."
     ]
    }
   ],
   "events": [
    {
     "date": "2025",
     "event": "Reported small-batch robot motor-rotor deliveries.",
     "significance": "Documents actual early deliveries rather than only a capacity proposal.",
     "seg": "motors",
     "source": "A008",
     "components": [
      "coreless-motors",
      "frameless-torque-motors"
     ]
    }
   ],
   "shares": [
    {
     "value": "40,000 tonnes/year; company-reported capacity",
     "metric": "production capacity",
     "market_definition": "High-performance rare-earth permanent magnets across all end markets, not humanoid-specific capacity",
     "geography": "China",
     "year": "2025",
     "source_wording": "高性能稀土永磁产能达到4万吨/年",
     "seg": "other",
     "source": "A008",
     "components": [
      "materials"
     ],
     "kinds": [
      "capacity",
      "company-reported"
     ]
    }
   ],
   "rels": [
    {
     "text": "Technology-company development partner is unnamed; no identity inferred.",
     "seg": "motors",
     "source": "A008",
     "components": [
      "coreless-motors",
      "frameless-torque-motors"
     ]
    },
    {
     "text": "Names China Northern Rare Earth Group and China Rare Earth Group as raw-material suppliers.",
     "seg": "other",
     "source": "A008",
     "components": [
      "materials"
     ]
    }
   ]
  },
  {
   "id": "orbbec",
   "name": "Orbbec",
   "aliases": [
    "Orbbec"
   ],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "sensors"
   ],
   "entries": [
    {
     "seg": "sensors",
     "source": "A009",
     "components": [
      "sensing-control"
     ],
     "role": "Stereo and depth cameras for robot perception",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Printed pp.23, 26–27; international ecosystem and product sections",
     "tech": [
      "Gemini 305 targets wrist vision; the report distinguishes depth/color stream configuration and durable high-motion connectivity."
     ]
    }
   ],
   "events": [
    {
     "date": "2025",
     "event": "Gemini 330-series cameras completed Jetson Thor adaptation and validation.",
     "significance": "Platform compatibility, not evidence that NVIDIA purchases cameras.",
     "seg": "sensors",
     "source": "A009",
     "components": [
      "sensing-control"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Pollen Robotics' Reachy 2 uses Gemini 330-series/Gemini 336 cameras.",
     "seg": "sensors",
     "source": "A009",
     "components": [
      "sensing-control"
     ]
    },
    {
     "text": "NVIDIA Jetson/Isaac ecosystem integration is explicitly described.",
     "seg": "sensors",
     "source": "A009",
     "components": [
      "sensing-control"
     ]
    }
   ]
  },
  {
   "id": "moons-electric",
   "name": "MOONS' Electric",
   "aliases": [
    "MOONS’",
    "MOONS'"
   ],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "motors"
   ],
   "entries": [
    {
     "seg": "motors",
     "source": "A010",
     "components": [
      "coreless-motors"
     ],
     "role": "Precision motors and motor-drive systems",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section III, control motors and drive systems in robotics",
     "tech": [
      "Describes high-power-density brushless slotless motors and hand/joint applications.",
      "Customers in the cited robotics discussion are not individually identified."
     ]
    }
   ],
   "events": [
    {
     "date": "2026",
     "event": "Vietnam slotless-motor capacity expected to enter operation in Q4 2026.",
     "significance": "Forward-looking capacity expansion; not verified operational output.",
     "seg": "motors",
     "source": "A010",
     "components": [
      "coreless-motors"
     ]
    }
   ],
   "shares": [
    {
     "value": "Approximately 22% year-on-year revenue growth; company reported",
     "metric": "other",
     "market_definition": "Company sales into robotics applications, including industrial, service, humanoid and mobile robots; not market share",
     "geography": "Global company sales",
     "year": "2025",
     "source_wording": "营业收入同比增长约22%",
     "seg": "motors",
     "source": "A010",
     "components": [
      "coreless-motors"
     ],
     "kinds": [
      "company-reported"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "keli-sensing",
   "name": "Keli Sensing",
   "aliases": [
    "Keli Sensing (柯力传感)",
    "柯力传感"
   ],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "sensors"
   ],
   "entries": [
    {
     "seg": "sensors",
     "source": "A011",
     "components": [
      "force-torque",
      "tactile"
     ],
     "role": "Six-axis force/torque, joint-torque and tactile sensing",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section III, subsection （三）机器人相关业务持续推进，产品、客户与制造能力同步提升",
     "tech": [
      "Describes mechanical design, decoupling algorithms, high-speed acquisition, communications and automated calibration.",
      "Reported sampling and investment relationships do not by themselves establish production supply contracts."
     ]
    }
   ],
   "events": [],
   "shares": [
    {
     "value": "More than 1,500 units sold; company reported",
     "metric": "shipments",
     "market_definition": "Robot mechanical/force-sensing products; not robots and not sensor-market share",
     "geography": "Company sales; destination split undisclosed",
     "year": "2025",
     "source_wording": "机器人力学传感器销售量超过1500只",
     "seg": "sensors",
     "source": "A011",
     "components": [
      "force-torque",
      "tactile"
     ],
     "kinds": [
      "company-reported",
      "shipments"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "qinchuan-hanjiang-machine-tool",
   "name": "Qinchuan / Hanjiang Machine Tool",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "machine_tools"
   ],
   "entries": [
    {
     "seg": "machine_tools",
     "source": "A012",
     "components": [
      "machine-tools"
     ],
     "role": "Internal and external thread-grinding equipment",
     "position": "Named domestic equipment developer; no comparable humanoid-equipment market share disclosed.",
     "confidence": "high",
     "evidence": "Section III, Hanjiang Machine Tool and product-development discussion",
     "tech": [
      "The report planned market promotion at an April 2026 exhibition; this is not proof of subsequent sales.",
      "Thread geometry and precision grinding are enabling processes for screw transmission components."
     ]
    }
   ],
   "events": [
    {
     "date": "2025",
     "event": "Completed HJ109 internal and HJ110 external thread-grinder development and experimental validation.",
     "significance": "Equipment-development milestone supporting planetary roller-screw machining.",
     "seg": "machine_tools",
     "source": "A012",
     "components": [
      "machine-tools"
     ]
    }
   ],
   "shares": [],
   "rels": []
  },
  {
   "id": "leaderdrive",
   "name": "Leaderdrive",
   "aliases": [
    "Leaderdrive"
   ],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "precision_reducers"
   ],
   "entries": [
    {
     "seg": "precision_reducers",
     "source": "A013",
     "components": [
      "harmonic-reducers"
     ],
     "role": "Harmonic reducers and integrated joint transmissions",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section III, product descriptions and core-technology table",
     "tech": [
      "Flexspline material/geometry optimization targets wear, stiffness and service life.",
      "Compact harmonic transmissions and impact-resistant processes support robot-joint packaging.",
      "The cited technology descriptions do not establish humanoid-specific shipment shares."
     ]
    },
    {
     "seg": "precision_reducers",
     "source": "A029",
     "components": [
      "harmonic-reducers"
     ],
     "role": "Precision-transmission expertise for humanoid joints",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Partnership rationale",
     "tech": [
      "The announcement does not establish realized venture production or specific OEM sales."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "Partners with SKF in the announced venture.",
     "seg": "precision_reducers",
     "source": "A029",
     "components": [
      "harmonic-reducers"
     ]
    }
   ]
  },
  {
   "id": "sanhua-intelligent-controls",
   "name": "Sanhua Intelligent Controls",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "actuators"
   ],
   "entries": [
    {
     "seg": "actuators",
     "source": "A014",
     "components": [
      "actuators"
     ],
     "role": "Humanoid electromechanical actuators",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Section III, subsection 4(3), emerging businesses",
     "tech": [
      "Named customer relationships, humanoid revenue and humanoid market share are not established in this passage."
     ]
    }
   ],
   "events": [
    {
     "date": "2025",
     "event": "Continued actuator engineering, prototype iteration and customer sample deliveries.",
     "significance": "Demonstrates development activity, not verified high-volume production.",
     "seg": "actuators",
     "source": "A014",
     "components": [
      "actuators"
     ]
    }
   ],
   "shares": [],
   "rels": []
  },
  {
   "id": "nabtesco",
   "name": "Nabtesco",
   "aliases": [
    "Nabtesco"
   ],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Japan"
   },
   "type": "company",
   "segments": [
    "precision_reducers"
   ],
   "entries": [
    {
     "seg": "precision_reducers",
     "source": "A015",
     "components": [
      "rv-reducers"
     ],
     "role": "RV precision reduction gears",
     "position": "Established industrial precision-reducer supplier; humanoid-specific leadership not quantified.",
     "confidence": "high",
     "evidence": "Printed pp.19–20, Component Solutions; physical-AI discussion p.16",
     "tech": [
      "Describes production in Japan and China and sales across Asia, Europe and North America.",
      "High rigidity, low vibration and precision manufacturing support robot-joint control; industrial-robot strength is not a demonstrated humanoid-market share."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "thk",
   "name": "THK",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Japan"
   },
   "type": "company",
   "segments": [
    "bearings",
    "ball_and_roller_screws"
   ],
   "entries": [
    {
     "seg": "bearings",
     "source": "A016",
     "components": [
      "bearings"
     ],
     "role": "Cross-roller rings",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "PDF p.2, product overview",
     "tech": [
      "Cross-roller bearings handle multidirectional loads in robot joints and rotating elements."
     ]
    },
    {
     "seg": "ball_and_roller_screws",
     "source": "A016",
     "components": [
      "screws"
     ],
     "role": "Precision ball screws and linear-motion components",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "PDF p.2, product overview; PDF p.25, regional strategy",
     "tech": [
      "Ball screws convert rotary to linear motion for precision positioning.",
      "The Americas strategy explicitly identifies humanoid demand as an opportunity; no named humanoid customer is established."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "hiwin-technologies",
   "name": "HIWIN Technologies",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Taiwan"
   },
   "type": "company",
   "segments": [
    "ball_and_roller_screws",
    "actuators",
    "dexterous_hands"
   ],
   "entries": [
    {
     "seg": "ball_and_roller_screws",
     "source": "A017",
     "components": [
      "screws"
     ],
     "role": "Miniature and precision ball screws",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "2025 R&D achievements; 2026 business plan II(I–II); operations/R&D discussion",
     "tech": [
      "Table units are thousands of pieces.",
      "Miniaturization must preserve lead accuracy, load capacity and fatigue life."
     ]
    },
    {
     "seg": "actuators",
     "source": "A033",
     "components": [
      "actuators"
     ],
     "role": "Integrated linear and rotary actuator modules",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Paragraph beginning 上銀表示，上銀展示核心技術驅動的人形機器人",
     "tech": [
      "Combines self-made screws, harmonic reducers, motors, drivers and controls."
     ]
    },
    {
     "seg": "ball_and_roller_screws",
     "source": "A033",
     "components": [
      "screws"
     ],
     "role": "Planetary roller screws for robots",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Opening paragraph; roller-screw photograph caption",
     "tech": []
    },
    {
     "seg": "dexterous_hands",
     "source": "A033",
     "components": [
      "dexterous-hands"
     ],
     "role": "AI-enabled grippers and end-effectors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Paragraph discussing 工研院 collaboration",
     "tech": [
      "An end-effector collaboration, not a named humanoid production-order disclosure."
     ]
    }
   ],
   "events": [
    {
     "date": "2025",
     "event": "Developed the MBS miniature ball-screw series and a wireless screw-sensing prototype.",
     "significance": "Addresses compact packaging and condition monitoring.",
     "seg": "ball_and_roller_screws",
     "source": "A017",
     "components": [
      "screws"
     ]
    },
    {
     "date": "2026-06-02",
     "event": "Displayed newly developed robot planetary roller screws at COMPUTEX.",
     "significance": "Product introduction, not proof of mass-production volume.",
     "seg": "ball_and_roller_screws",
     "source": "A033",
     "components": [
      "screws"
     ]
    }
   ],
   "shares": [
    {
     "value": "2.8–3.0 million pieces; company forecast, not actual sales",
     "metric": "shipments",
     "market_definition": "HIWIN ball-screw sales across all applications, not humanoid screws or market share",
     "geography": "Global company sales",
     "year": "2026",
     "source_wording": "Ball screw | 2,800~3,000",
     "seg": "ball_and_roller_screws",
     "source": "A017",
     "components": [
      "screws"
     ],
     "kinds": [
      "forecast",
      "shipments"
     ]
    }
   ],
   "rels": [
    {
     "text": "Co-developed an intelligent gripper with Taiwan's Industrial Technology Research Institute.",
     "seg": "dexterous_hands",
     "source": "A033",
     "components": [
      "dexterous-hands"
     ]
    }
   ]
  },
  {
   "id": "ministry-of-industry-and-information-technology",
   "name": "Ministry of Industry and Information Technology",
   "aliases": [],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "government entity",
   "segments": [
    "testing_simulation_and_data",
    "other"
   ],
   "entries": [
    {
     "seg": "testing_simulation_and_data",
     "source": "A018",
     "components": [
      "robotics-data"
     ],
     "role": "Standards and validation-policy coordination",
     "position": "Public enabling role; no market share applicable.",
     "confidence": "high",
     "evidence": "Section V, supporting capabilities",
     "tech": [
      "Calls for standards, testing and pilot-validation capabilities."
     ]
    },
    {
     "seg": "other",
     "source": "A018",
     "components": [
      "materials"
     ],
     "role": "Industrial policy; structural materials and component-ecosystem development",
     "position": "Policy-setting institution, not a commercial supplier.",
     "confidence": "high",
     "evidence": "Sections I–III, printed pp.2–4",
     "tech": [
      "Calls for lightweight skeletons, strong body structures, integrated energy management and coordinated hardware/software development."
     ]
    }
   ],
   "events": [
    {
     "date": "2023-10-20",
     "event": "Issued the humanoid innovation-development guidance, published November 2.",
     "significance": "Formalized component-security and industrialization priorities.",
     "seg": "other",
     "source": "A018",
     "components": [
      "materials"
     ]
    }
   ],
   "shares": [],
   "rels": []
  },
  {
   "id": "figure-ai",
   "name": "Figure AI",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "actuators",
    "manufacturing_and_assembly",
    "batteries_and_power",
    "other"
   ],
   "entries": [
    {
     "seg": "actuators",
     "source": "A019",
     "components": [
      "actuators"
     ],
     "role": "In-house actuator manufacturing",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Actuator production discussion",
     "tech": [
      "Actuator-line output supports internal robot assembly and development."
     ]
    },
    {
     "seg": "manufacturing_and_assembly",
     "source": "A019",
     "components": [
      "manufacturing"
     ],
     "role": "BotQ humanoid production",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Opening paragraphs; production ramp and quality sections",
     "tech": [
      "Reports a one-robot-per-hour production rate and staged quality checks; do not annualize this into proven output."
     ]
    },
    {
     "seg": "batteries_and_power",
     "source": "A020",
     "components": [
      "batteries"
     ],
     "role": "In-house battery pack and management system",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Structural Battery; Active Cooling; Raising the Bar for Robot Battery Safety; manufacturing sections",
     "tech": [
      "Uses stamped steel, die-cast aluminum and adhesives; the enclosure also supports the torso.",
      "Cooling is integrated into the casting; insulation and venting address thermal propagation and external flame.",
      "Custom BMS and fusible interconnects provide layered protection.",
      "Manufacturing shifts toward casting, stamping and molding; cell supplier not identified."
     ]
    },
    {
     "seg": "other",
     "source": "A020",
     "components": [
      "materials"
     ],
     "role": "Structural components: load-bearing battery enclosure",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Structural Battery subsection",
     "tech": [
      "Combining enclosure and torso functions reduces packaging mass and volume."
     ]
    }
   ],
   "events": [],
   "shares": [
    {
     "value": "More than 9,000 actuators manufactured; company reported",
     "metric": "other",
     "market_definition": "Cumulative internal actuator production, not external actuator shipments; as of April 29",
     "geography": "United States",
     "year": "2026",
     "source_wording": "over 9,000 actuators",
     "seg": "actuators",
     "source": "A019",
     "components": [
      "actuators"
     ],
     "kinds": [
      "company-reported"
     ]
    },
    {
     "value": "More than 350 Figure 03 robots delivered; company reported",
     "metric": "shipments",
     "market_definition": "Cumulative Figure 03 deliveries, including internal uses; not external customer sales alone; as of April 29",
     "geography": "United States manufacturing; destinations not fully split",
     "year": "2026",
     "source_wording": "delivering over 350",
     "seg": "manufacturing_and_assembly",
     "source": "A019",
     "components": [
      "manufacturing"
     ],
     "kinds": [
      "company-reported",
      "shipments"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "hyundai-mobis",
   "name": "Hyundai Mobis",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "South Korea"
   },
   "type": "company",
   "segments": [
    "actuators"
   ],
   "entries": [
    {
     "seg": "actuators",
     "source": "A021",
     "components": [
      "actuators"
     ],
     "role": "High-performance robot actuators",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Group Value Network affiliate-contributions list",
     "tech": [
      "Design-for-manufacture and component standardization are explicit priorities."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "Works with Boston Dynamics on actuator development.",
     "seg": "actuators",
     "source": "A021",
     "components": [
      "actuators"
     ]
    }
   ]
  },
  {
   "id": "hyundai-motor-group",
   "name": "Hyundai Motor Group",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "South Korea"
   },
   "type": "company",
   "segments": [
    "manufacturing_and_assembly"
   ],
   "entries": [
    {
     "seg": "manufacturing_and_assembly",
     "source": "A021",
     "components": [
      "manufacturing"
     ],
     "role": "Group-wide robot industrialization",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Accelerating Commercialization; US investment paragraphs",
     "tech": [
      "Uses automotive process expertise, manufacturing data and group logistics capabilities."
     ]
    }
   ],
   "events": [],
   "shares": [
    {
     "value": "30,000 robots/year; target capacity by 2028",
     "metric": "production capacity",
     "market_definition": "Planned group robotics facility/system, not actual Atlas shipments",
     "geography": "United States planned facility",
     "year": "2028",
     "source_wording": "30,000 robot units annually",
     "seg": "manufacturing_and_assembly",
     "source": "A021",
     "components": [
      "manufacturing"
     ],
     "kinds": [
      "capacity",
      "target"
     ]
    }
   ],
   "rels": []
  },
  {
   "id": "boston-dynamics",
   "name": "Boston Dynamics",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "full_robot_integration"
   ],
   "entries": [
    {
     "seg": "full_robot_integration",
     "source": "A021",
     "components": [
      "humanoid-oems"
     ],
     "role": "Atlas humanoid integration",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Atlas commercialization and AI-partnership sections",
     "tech": [
      "US headquarters classification is separate from Korean parent ownership."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "Group rollout includes Hyundai manufacturing; announced AI collaboration with Google DeepMind.",
     "seg": "full_robot_integration",
     "source": "A021",
     "components": [
      "humanoid-oems"
     ]
    }
   ]
  },
  {
   "id": "rls",
   "name": "RLS",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Slovenia"
   },
   "type": "company",
   "segments": [
    "encoders"
   ],
   "entries": [
    {
     "seg": "encoders",
     "source": "A022",
     "components": [
      "encoders"
     ],
     "role": "Non-contact magnetic rotary and incremental encoders",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Solution; About RLS",
     "tech": [
      "Encoder feedback supports joint position, velocity and torque control.",
      "Knee, wrist and elbow integration illustrates packaging and interface requirements."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "PAL Robotics uses RLS AksIM, Orbis and RoLin encoders; Renishaw advised selection.",
     "seg": "encoders",
     "source": "A022",
     "components": [
      "encoders"
     ]
    }
   ]
  },
  {
   "id": "pal-robotics",
   "name": "PAL Robotics",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Spain"
   },
   "type": "company",
   "segments": [
    "full_robot_integration"
   ],
   "entries": [
    {
     "seg": "full_robot_integration",
     "source": "A022",
     "components": [
      "humanoid-oems"
     ],
     "role": "REEM-C humanoid integration",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Background; Solution",
     "tech": []
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "Confirmed user of RLS encoders in the case study.",
     "seg": "full_robot_integration",
     "source": "A022",
     "components": [
      "humanoid-oems"
     ]
    }
   ]
  },
  {
   "id": "nxp-semiconductors",
   "name": "NXP Semiconductors",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Netherlands"
   },
   "type": "company",
   "segments": [
    "controllers_and_electronics"
   ],
   "entries": [
    {
     "seg": "controllers_and_electronics",
     "source": "A023",
     "components": [
      "sensing-control"
     ],
     "role": "Real-time processing, networking and motor-control SoCs",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Release opening; integrated robot-body solutions paragraphs",
     "tech": [
      "Targets fewer discrete components, lower latency, reduced board footprint and simpler sensing/actuation integration."
     ]
    }
   ],
   "events": [
    {
     "date": "2026-03-16",
     "event": "Announced robotics solutions integrating Holoscan Sensor Bridge with NXP SoCs.",
     "significance": "Connects distributed body electronics with robot AI compute.",
     "seg": "controllers_and_electronics",
     "source": "A023",
     "components": [
      "sensing-control"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Explicit development collaboration with NVIDIA; not an exclusive supply agreement.",
     "seg": "controllers_and_electronics",
     "source": "A023",
     "components": [
      "sensing-control"
     ]
    }
   ]
  },
  {
   "id": "infineon-technologies",
   "name": "Infineon Technologies",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Germany"
   },
   "type": "company",
   "segments": [
    "semiconductors_and_compute",
    "testing_simulation_and_data"
   ],
   "entries": [
    {
     "seg": "semiconductors_and_compute",
     "source": "A024",
     "components": [
      "semis-compute"
     ],
     "role": "Motor-control, microcontroller, power and security semiconductors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Opening announcement and semiconductor functional-block paragraphs",
     "tech": [
      "The release's semiconductor-content opportunity is an estimate, not booked sales or market share."
     ]
    },
    {
     "seg": "testing_simulation_and_data",
     "source": "A024",
     "components": [
      "robotics-data"
     ],
     "role": "Digital twins of actuators and sensors",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Digital-twin paragraph",
     "tech": [
      "Virtual components in Isaac Sim and Isaac Lab support motion-control and perception testing before hardware integration."
     ]
    }
   ],
   "events": [
    {
     "date": "2026-03-16",
     "event": "Expanded its NVIDIA physical-AI collaboration.",
     "significance": "Links component design to humanoid reference architectures.",
     "seg": "semiconductors_and_compute",
     "source": "A024",
     "components": [
      "semis-compute"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Collaboration combines Infineon components with NVIDIA Jetson Thor and simulation tools.",
     "seg": "semiconductors_and_compute",
     "source": "A024",
     "components": [
      "semis-compute"
     ]
    }
   ]
  },
  {
   "id": "nvidia",
   "name": "NVIDIA",
   "aliases": [
    "Nvidia"
   ],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "semiconductors_and_compute",
    "software_and_ai",
    "testing_simulation_and_data"
   ],
   "entries": [
    {
     "seg": "semiconductors_and_compute",
     "source": "A025",
     "components": [
      "semis-compute"
     ],
     "role": "Jetson Thor embedded robot compute",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Product announcement; Figure quotation; technical specifications",
     "tech": [
      "Combines Blackwell compute with unified memory and the Isaac software ecosystem.",
      "Performance and power specifications are vendor claims, not market-share measurements."
     ]
    },
    {
     "seg": "software_and_ai",
     "source": "A026",
     "components": [
      "physical-ai-software"
     ],
     "role": "Isaac GR00T development stack",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "NVIDIA Isaac GR00T Provides a Full-Stack Platform",
     "tech": [
      "Workflow covers teleoperation, foundation models, simulation, policy evaluation and deployment."
     ]
    },
    {
     "seg": "testing_simulation_and_data",
     "source": "A027",
     "components": [
      "robotics-data"
     ],
     "role": "Robotics safety stack and inspection ecosystem",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "News Summary; safety architecture and inspection discussion",
     "tech": [
      "The inspection lab helps partners prepare for third-party certification; participation does not certify a finished robot."
     ]
    }
   ],
   "events": [
    {
     "date": "2025-08-25",
     "event": "Announced Jetson Thor availability.",
     "significance": "Commercial platform milestone, not robot-shipment evidence.",
     "seg": "semiconductors_and_compute",
     "source": "A025",
     "components": [
      "semis-compute"
     ]
    },
    {
     "date": "2026-06-22",
     "event": "Announced Halos for Robotics.",
     "significance": "Adds an explicit safety/inspection layer to the physical-AI ecosystem.",
     "seg": "testing_simulation_and_data",
     "source": "A027",
     "components": [
      "robotics-data"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Figure explicitly discusses adopting Jetson Thor in the release.",
     "seg": "semiconductors_and_compute",
     "source": "A025",
     "components": [
      "semis-compute"
     ]
    },
    {
     "text": "Agility Robotics is identified as the first integration partner.",
     "seg": "testing_simulation_and_data",
     "source": "A027",
     "components": [
      "robotics-data"
     ]
    }
   ]
  },
  {
   "id": "unitree",
   "name": "Unitree",
   "aliases": [
    "Unitree"
   ],
   "origin": {
    "classification": "Chinese",
    "country": "China"
   },
   "type": "company",
   "segments": [
    "full_robot_integration"
   ],
   "entries": [
    {
     "seg": "full_robot_integration",
     "source": "A026",
     "components": [
      "humanoid-oems"
     ],
     "role": "H2 Plus humanoid hardware for a research reference design",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "News Summary; reference-design hardware section",
     "tech": [
      "Hardware specification separates body articulation, hand articulation, sensing and compute."
     ]
    },
    {
     "seg": "full_robot_integration",
     "source": "A034",
     "components": [
      "humanoid-oems"
     ],
     "role": "Humanoid integration",
     "position": "Second in the same ranking.",
     "confidence": "medium",
     "evidence": "AGIBOT Takes the Lead, Unitree paragraph",
     "tech": [
      "Estimated shipments: approximately 5,900 units in H1 2026."
     ]
    }
   ],
   "events": [
    {
     "date": "2026-05-31",
     "event": "Named as the robot-body provider for NVIDIA's research reference design.",
     "significance": "Explicit integration relationship; late-2026 availability remains a plan.",
     "seg": "full_robot_integration",
     "source": "A026",
     "components": [
      "humanoid-oems"
     ]
    }
   ],
   "shares": [
    {
     "value": "31%; SAG estimate",
     "metric": "unit share",
     "market_definition": "Share of SAG-tracked global humanoid shipments, including wheeled and bipedal designs",
     "geography": "Global",
     "year": "2026 H1",
     "source_wording": "31% global share",
     "seg": "full_robot_integration",
     "source": "A034",
     "components": [
      "humanoid-oems"
     ],
     "kinds": [
      "estimate"
     ]
    }
   ],
   "rels": [
    {
     "text": "Reference design combines Unitree H2 Plus, Sharpa Wave hands and NVIDIA Jetson Thor.",
     "seg": "full_robot_integration",
     "source": "A026",
     "components": [
      "humanoid-oems"
     ]
    }
   ]
  },
  {
   "id": "agility-robotics",
   "name": "Agility Robotics",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "controllers_and_electronics"
   ],
   "entries": [
    {
     "seg": "controllers_and_electronics",
     "source": "A027",
     "components": [
      "sensing-control"
     ],
     "role": "Humanoid safety-system integration",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Agility integration paragraphs",
     "tech": [
      "Integration status must be distinguished from system-wide certification."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "Integrates elements of NVIDIA Halos into its proprietary safety system.",
     "seg": "controllers_and_electronics",
     "source": "A027",
     "components": [
      "sensing-control"
     ]
    }
   ]
  },
  {
   "id": "samsung-sdi",
   "name": "Samsung SDI",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "South Korea"
   },
   "type": "company",
   "segments": [
    "batteries_and_power"
   ],
   "entries": [
    {
     "seg": "batteries_and_power",
     "source": "A028",
     "components": [
      "batteries"
     ],
     "role": "Solid-state and pouch batteries for physical AI",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Physical-AI battery and InterBattery 2026 sections",
     "tech": [
      "Targets compact, lightweight packaging and robot power requirements.",
      "The company targets second-half 2027 solid-state mass production; this is not a disclosed robot-specific customer delivery commitment."
     ]
    }
   ],
   "events": [
    {
     "date": "2026-03-09",
     "event": "Announced physical-AI solid-state battery samples for InterBattery.",
     "significance": "Development/exhibition milestone, not commercial robot deliveries.",
     "seg": "batteries_and_power",
     "source": "A028",
     "components": [
      "batteries"
     ]
    }
   ],
   "shares": [],
   "rels": []
  },
  {
   "id": "skf",
   "name": "SKF",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Sweden"
   },
   "type": "company",
   "segments": [
    "bearings"
   ],
   "entries": [
    {
     "seg": "bearings",
     "source": "A029",
     "components": [
      "bearings"
     ],
     "role": "Precision bearing and manufacturing capabilities",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Opening announcement and venture-structure paragraphs",
     "tech": [
      "Contributes precision-component expertise and global industrial access."
     ]
    }
   ],
   "events": [
    {
     "date": "2026-07-02",
     "event": "Announced a venture with Leaderdrive; SKF to hold 60%.",
     "significance": "Equity ownership, not a 60% component-market share.",
     "seg": "bearings",
     "source": "A029",
     "components": [
      "bearings"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Leaderdrive is the announced joint-venture partner.",
     "seg": "bearings",
     "source": "A029",
     "components": [
      "bearings"
     ]
    }
   ]
  },
  {
   "id": "shadow-robot",
   "name": "Shadow Robot",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United Kingdom"
   },
   "type": "company",
   "segments": [
    "sensors",
    "dexterous_hands"
   ],
   "entries": [
    {
     "seg": "sensors",
     "source": "A030",
     "components": [
      "tactile"
     ],
     "role": "Integrated fingertip and phalange tactile sensing",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Breaking down The Shadow Hand, sensor bullets",
     "tech": [
      "Stereo-camera fingertip sensing and multi-taxel sensors capture contact interactions."
     ]
    },
    {
     "seg": "dexterous_hands",
     "source": "A030",
     "components": [
      "dexterous-hands"
     ],
     "role": "DEX-EE dexterous research end-effector",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Developed with the world's leading AI researchers; Breaking down The Shadow Hand",
     "tech": [
      "Combines force/position control, tactile feedback and ROS integration; not evidence of humanoid mass-production orders."
     ]
    }
   ],
   "events": [
    {
     "date": "2024-06-06",
     "event": "Presented DEX-EE following iterative development with Google DeepMind.",
     "significance": "Targets long-running learning experiments and maintainability.",
     "seg": "dexterous_hands",
     "source": "A030",
     "components": [
      "dexterous-hands"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Explicit development collaboration with Google DeepMind.",
     "seg": "dexterous_hands",
     "source": "A030",
     "components": [
      "dexterous-hands"
     ]
    }
   ]
  },
  {
   "id": "apptronik",
   "name": "Apptronik",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "actuators"
   ],
   "entries": [
    {
     "seg": "actuators",
     "source": "A031",
     "components": [
      "actuators"
     ],
     "role": "Actuators designed for manufacturability",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Prioritizing Humanoid Scalability",
     "tech": [
      "States that its newer actuator design reduces parts, manufacturing time and cost; no numerical saving or external supplier is disclosed."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": []
  },
  {
   "id": "jabil",
   "name": "Jabil",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "United States"
   },
   "type": "company",
   "segments": [
    "manufacturing_and_assembly"
   ],
   "entries": [
    {
     "seg": "manufacturing_and_assembly",
     "source": "A031",
     "components": [
      "manufacturing"
     ],
     "role": "Worldwide Apollo manufacturing partner",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Opening announcement; worldwide manufacturing partner paragraph",
     "tech": [
      "Factory trials include inspection, sorting, kitting and sub-assembly before broader deployment."
     ]
    }
   ],
   "events": [
    {
     "date": "2025-02-25",
     "event": "Announced Apollo production and factory-pilot collaboration.",
     "significance": "Connects robot design to procurement, inventory and scalable manufacturing.",
     "seg": "manufacturing_and_assembly",
     "source": "A031",
     "components": [
      "manufacturing"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Apptronik is the named Apollo partner.",
     "seg": "manufacturing_and_assembly",
     "source": "A031",
     "components": [
      "manufacturing"
     ]
    }
   ]
  },
  {
   "id": "magna-international",
   "name": "Magna International",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Canada"
   },
   "type": "company",
   "segments": [
    "manufacturing_and_assembly"
   ],
   "entries": [
    {
     "seg": "manufacturing_and_assembly",
     "source": "A032",
     "components": [
      "manufacturing"
     ],
     "role": "Manufacturing engineering and prospective robot industrialization",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Opening partnership description; investor-history paragraph",
     "tech": [
      "Assessment uses automotive products, engineering and manufacturing capabilities; not an announced exclusive assembly contract."
     ]
    }
   ],
   "events": [
    {
     "date": "2024-04-11",
     "event": "Announced an expanded Sanctuary AI partnership.",
     "significance": "Includes deployment development, scalability assessment and equity investment.",
     "seg": "manufacturing_and_assembly",
     "source": "A032",
     "components": [
      "manufacturing"
     ]
    }
   ],
   "shares": [],
   "rels": [
    {
     "text": "Sanctuary AI is the named partner; Magna had invested since 2021.",
     "seg": "manufacturing_and_assembly",
     "source": "A032",
     "components": [
      "manufacturing"
     ]
    }
   ]
  },
  {
   "id": "sanctuary-ai",
   "name": "Sanctuary AI",
   "aliases": [],
   "origin": {
    "classification": "Non-Chinese",
    "country": "Canada"
   },
   "type": "company",
   "segments": [
    "full_robot_integration"
   ],
   "entries": [
    {
     "seg": "full_robot_integration",
     "source": "A032",
     "components": [
      "humanoid-oems"
     ],
     "role": "Phoenix humanoid and Carbon control-system integration",
     "position": "No comparable humanoid-specific market share disclosed.",
     "confidence": "high",
     "evidence": "Technology description; About Sanctuary AI",
     "tech": [
      "Combines dexterous hands and its Carbon AI-control system."
     ]
    }
   ],
   "events": [],
   "shares": [],
   "rels": [
    {
     "text": "Developing robots for potential use in Magna manufacturing operations.",
     "seg": "full_robot_integration",
     "source": "A032",
     "components": [
      "humanoid-oems"
     ]
    }
   ]
  }
 ]
};
