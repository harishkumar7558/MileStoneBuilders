// Single source of truth for company content used across pages.
// All copy below is carried over from the existing pages — do not add claims here
// that the business has not provided.

import {
  BadgeCheck, Building2, Cable, Car, Compass, Crosshair, Drone, FileCheck2, FlaskConical, Hammer, Landmark, Layers,
  MapPin, PenTool, Pickaxe, Plane, Radar, Radio, RadioTower, Ruler, Satellite, ScanLine, ShieldCheck, Target, Train,
  Waves, Wind, Zap,
} from "lucide-react"

import allcivil from "@/assets/allcivil.jpg"
import builderconstructure from "@/assets/builderconstructure.jpg"
import chandrasekarImg from "@/assets/chandrasekar.png"
import chandrasekarReportImg from "@/assets/chandrasekarReport.jpeg"
import planningImg from "@/assets/planing.jpg"
import mukeshImg from "@/assets/portrait-mukesh.jpg"
import muthuRajaImg from "@/assets/portrait-muthuraja.jpg"
import soilInvestigation1Img from "@/assets/soil-investigation-1.jpg"
import soilTestingImg from "@/assets/soil-testing.jpg"
import soliInvestigationImg from "@/assets/soli-investigation.jpg"
import structuralImg from "@/assets/structural.jpg"
import landSurveyImg from "@/assets/hero-survey.jpg"

export const CONTACT = {
  whatsappNumber: "916369051199",
  phones: [
    { display: "+91 63690 51199", href: "tel:+916369051199" },
    { display: "+91 75503 40861", href: "tel:+917550340861" },
  ],
  emails: ["milestonegeo@gmail.com", "milestonegeoservice@gmail.com"],
  instagram: { handle: "@milestonebuilders1", href: "https://www.instagram.com/milestonebuilders1" },
  address: "3/328 Victoria Nagar, Ittery Road, Puthukulam, Reddiyarpatti, Tirunelveli - 627007, India",
  serviceAreas: ["Tirunelveli", "Chennai", "Puducherry", "Thoothukudi", "Across Tamil Nadu"],
  defaultWhatsappMessage: "Hi, I came from your website! I need some information about your services.",
}

export const whatsappLink = (text) =>
  `https://wa.me/${CONTACT.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`

export const NAV_LINKS = [
  { label: "Geo Services", href: "/" },
  { label: "Survey", href: "/survey" },
  { label: "Builders", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// The three service divisions — drives the Services dropdown, mobile menu and footer.
export const DIVISIONS = [
  {
    label: "Geo Services",
    href: "/",
    icon: Layers,
    description: "Geotechnical soil investigation, laboratory testing and major-project support.",
    highlights: ["Geotechnical investigation", "Soil laboratory testing", "Major infrastructure projects"],
  },
  {
    label: "Survey",
    href: "/survey",
    icon: Compass,
    description: "Drone, DGPS, GPR and total-station surveys for planning and infrastructure.",
    highlights: ["Aerial & drone survey", "Railway & roadways survey", "GPR & utility mapping"],
  },
  {
    label: "Builders",
    href: "/home",
    icon: Building2,
    description: "Civil engineering works, structural design and architectural planning.",
    highlights: ["Complete civil works", "Structural design & detailing", "Planning & estimation"],
  },
]

// Primary navigation. "children" renders as the Services dropdown.
export const PRIMARY_NAV = [
  { label: "Services", children: DIVISIONS },
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// Engineering capabilities shared by the Geo Services and Builders pages.
const SERVICE_LIBRARY = {
  majorProjects: {
    icon: Layers,
    title: "Soil Investigation Major Projects",
    img: soilInvestigation1Img,
    subtitle: "Trusted by India’s Top Infrastructure Giants",
    content: [
      "L & T Limited",
      "Shapoorji Pallonji & Co. Ltd",
      "Gammon India Limited",
      "Southern Railway",
      "Chennai Metro Rail Limited (CMRL)",
      "Dholera International Airport - Gujarat",
      "Highway Projects (NH45 & NH47)",
      "Chennai Elevated Highway Bridge Project",
      "72+ Major & Minor Bridges across Tamil Nadu",
      "150+ Telecommunication Towers across Tamil Nadu",
    ],
  },
  labTesting: {
    icon: FlaskConical,
    title: "Advanced Soil Laboratory Testing",
    img: soilTestingImg,
    subtitle: "SPT, plate load, triaxial & chemical analysis",
    content: [
      "SPT, SCPT & DCPT Testing",
      "Plate Load & Cyclic Plate Load Test",
      "Electrical & Thermal Resistivity",
      "Triaxial, Direct Shear & Vane Shear",
      "Consolidation, Permeability & CBR",
      "Chemical analysis of soil & groundwater",
    ],
  },
  geotech: {
    icon: ShieldCheck,
    title: "Geotechnical Soil Investigation",
    img: soliInvestigationImg,
    subtitle: "ASTM & IS Compliant Site Characterization",
    content: [
      "Comprehensive site characterization using ASTM-standard methodologies.",
      "Seismic refraction & MASW surveys",
      "Bearing capacity assessment & settlement prediction",
      "Liquefaction analysis and slope stability studies",
      "Deep soil exploration up to 60m depth",
    ],
  },
  civil: {
    icon: Hammer,
    title: "Complete Civil Engineering Works",
    img: allcivil,
    subtitle: "Turnkey Construction Solutions",
    content: [
      "Piling, foundation & RCC works",
      "Roads, bridges & corridors",
      "Industrial flooring & waterproofing",
      "Renovation & rebuilding",
      "Third-party quality testing",
    ],
  },
  builders: {
    icon: Building2,
    title: "Builders & Government Contractors",
    img: builderconstructure,
    subtitle: "Empaneled with CPWD, RITES, NBCC, MES",
    content: [
      "Tamil Nadu Electricity Board (TNEB)",
      "Tamil Nadu Housing & Police Housing",
      "SIDCO & Slum Clearance Board",
      "Multiple private developers",
    ],
  },
  planning: {
    icon: PenTool,
    title: "Architectural Planning & Estimation",
    img: planningImg,
    subtitle: "From Concept to Costing",
    content: [
      "Detailed architectural & structural drawings",
      "BOQ preparation & rate analysis",
      "3D modeling & walkthroughs",
      "Tender documentation",
      "Value engineering & cost optimization",
    ],
  },
  structural: {
    icon: Ruler,
    title: "Structural Design & Detailing",
    img: structuralImg,
    subtitle: "Earthquake & Wind Resistant Designs",
    content: [
      "High-rise buildings & industrial structures",
      "Steel plants, power plants & ETP",
      "Water tanks (IS 3370 compliant)",
      "Heavy machinery foundation design",
      "Structural audit & retrofitting",
    ],
  },
  surveying: {
    icon: MapPin,
    title: "Surveying",
    img: landSurveyImg,
    subtitle: "Boundary mapping, contouring, and GIS documentation.",
    content: [
      "Total stations and DGPS",
      "Underground and overhead asset mapping.",
      "Railway alignment, clearance, and asset mapping.",
      "Highway and smart mobility infrastructure surveying.",
      "Boundary mapping, contouring, and GIS documentation.",
    ],
  },
}

const pick = (...keys) => keys.map((key) => ({ id: key, ...SERVICE_LIBRARY[key] }))

// Page-specific ordering, kept as it was on each page.
export const GEO_SERVICES = pick("majorProjects", "labTesting", "geotech", "civil", "builders", "planning", "structural", "surveying")
export const BUILDER_SERVICES = pick("civil", "builders", "planning", "structural", "surveying", "labTesting", "geotech", "majorProjects")

// Soil-investigation track record, shown as a bento showcase.
// kind: "image" (photo tile) · "stat" (animated figure) · "info" (icon tile). Descriptions restate the existing copy only.
export const PROJECTS = [
  {
    id: "cmrl",
    kind: "image",
    size: "feature",
    category: "Metro Rail",
    title: "Chennai Metro Rail Limited (CMRL)",
    location: "Chennai, Tamil Nadu",
    description: "Soil investigation for one of India’s top infrastructure programmes.",
    img: soilInvestigation1Img,
    imgAlt: "Soil investigation rig at work beside an elevated metro viaduct",
  },
  { id: "bridges", kind: "stat", value: 72, suffix: "+", category: "Bridges", title: "Major & minor bridges", location: "Across Tamil Nadu", schematic: "bridge" },
  { id: "towers", kind: "stat", value: 150, suffix: "+", category: "Telecom", title: "Telecommunication towers", location: "Across Tamil Nadu", schematic: "tower" },
  { id: "dholera", kind: "info", icon: Plane, category: "Aviation", title: "Dholera International Airport", location: "Gujarat" },
  { id: "highways", kind: "info", icon: Car, category: "Highways", title: "Highway Projects (NH45 & NH47)", location: "National highways" },
  { id: "railway", kind: "info", icon: Train, category: "Railway", title: "Southern Railway", location: "Rail infrastructure" },
  {
    id: "majors",
    kind: "image",
    size: "wide",
    category: "Infrastructure",
    title: "L & T · Shapoorji Pallonji · Gammon India",
    location: "Pan-India contractors",
    description: "Trusted by India’s top infrastructure giants for soil investigation.",
    img: structuralImg,
    imgAlt: "Rendering of an industrial process plant with steel structures",
  },
  { id: "elevated", kind: "info", icon: Landmark, category: "Bridges", title: "Chennai Elevated Highway Bridge Project", location: "Chennai" },
]

// Names shown in the Geo hero trust row.
export const TRUSTED_BY = ["L & T", "Southern Railway", "CMRL", "Gammon India", "Shapoorji Pallonji"]

// Government bodies from the "Builders & Government Contractors" service.
export const GOVERNMENT_CLIENTS = ["TNEB", "TN Housing", "Police Housing", "SIDCO", "Slum Clearance Board"]

// Figures stated in the existing service content. The soft hyphen (­) gives a clean break on narrow screens.
export const KEY_FIGURES = [
  { value: 72, suffix: "+", label: "Major & minor bridges", detail: "Soil investigation across Tamil Nadu", icon: Landmark },
  { value: 150, suffix: "+", label: "Tele­communication towers", detail: "Investigated across Tamil Nadu", icon: Radio },
  { value: 60, suffix: " m", label: "Exploration depth", detail: "Deep soil exploration capability", icon: Layers },
  { value: 13, suffix: "+", label: "Years in surveying", detail: "Field leadership experience", icon: Compass },
]

export const BUILDER_FIGURES = [
  { value: 13, suffix: "+", label: "Years of engineering leadership", detail: "Structural design & surveying", icon: Ruler },
  { value: 4, suffix: "", label: "Central agency empanelments", detail: "CPWD · RITES · NBCC · MES", icon: BadgeCheck },
  { value: 72, suffix: "+", label: "Major & minor bridges", detail: "Soil investigation across Tamil Nadu", icon: Landmark },
  { value: 150, suffix: "+", label: "Tele­communication towers", detail: "Investigated across Tamil Nadu", icon: Radio },
]

// Standards, compliance and empanelment — each line restates existing site copy.
export const CREDENTIALS = [
  { icon: ShieldCheck, title: "ISO/IEC 17025:2017", desc: "Compliance testing services for all types of soil, water and rock." },
  { icon: FileCheck2, title: "ASTM & IS compliant", desc: "Comprehensive site characterisation using ASTM-standard methodologies." },
  { icon: Landmark, title: "CPWD · RITES · NBCC · MES", desc: "Empaneled builders and government contractors." },
  { icon: BadgeCheck, title: "Reports accepted by authorities", desc: "Compliant with CPWD, TNHB, RERA and court standards; empaneled with 12+ state departments." },
  { icon: Building2, title: "IS 3370 water tanks", desc: "Water-retaining structures designed to IS 3370." },
  { icon: Wind, title: "Earthquake & wind resistant", desc: "Structural designs for high-rise, industrial and heavy-machinery foundations." },
]

// Key personnel. Wording carried over from the existing personnel cards and About story.
export const PEOPLE = {
  chandrasekar: {
    name: "Dr. N. Chandrasekar",
    role: "Sr. Geologist",
    credential: "ISO/IEC 17025:2017 Compliance Testing Services",
    photo: chandrasekarImg,
    expertise: ["Soil testing", "Water testing", "Rock testing"],
    summary: "Accurate, reliable & professional geological field and lab testing.",
    // Wording taken from the BIS / NITS training certificate itself.
    certificate: {
      image: chandrasekarReportImg,
      title: "Laboratory Quality Management System & Internal Audit",
      standard: "IS/ISO/IEC 17025:2017",
      duration: "4 days",
      held: "06–09 June 2022",
      issuer: "National Institute of Training for Standardization",
      authority: "Bureau of Indian Standards",
      reference: "NITS/TRG/03/2022-23/07/08",
    },
  },
  muthuraja: {
    name: "Mr. M. MuthuRaja Thivakar",
    role: "Geotechnical Engineer",
    credential: "M.E (GeoTech)",
    experience: "4 Years of Experience",
    photo: muthuRajaImg,
    expertise: ["Soil investigation", "Geotechnical testing"],
    summary: "Geo-Technical expertise in soil investigation and testing.",
  },
  jebastin: {
    name: "Mr. Jebastin Daniel",
    role: "Structural Designer",
    credential: "M.E (Structural)",
    experience: "13 Years of Experience",
    expertise: ["Structural design"],
  },
  mukesh: {
    name: "Mr. M. Mukesh",
    role: "Surveyor",
    credential: "B.E (Civil)",
    experience: "13 Years of Experience",
    photo: mukeshImg,
    expertise: ["Boundary", "Topographic", "Infrastructure surveys"],
    summary: "13+ years of field surveying across boundary, topographic and infrastructure work.",
  },
}

export const SURVEY_SERVICES = [
  { id: 1, title: "DPR Services", badge: "Planning", highlight: "Detailed project reporting and feasibility analysis.", icon: MapPin },
  { id: 2, title: "Aerial Survey", badge: "Drone", highlight: "High resolution drone mapping and LiDAR scanning.", icon: Plane },
  { id: 3, title: "Hydrology", badge: "Water", highlight: "Hydrological studies and water flow analysis.", icon: Waves },
  { id: 4, title: "Mining", badge: "Survey", highlight: "Mine planning, volume calculation, and compliance survey.", icon: Pickaxe },
  { id: 5, title: "Power Line Survey", badge: "Utility", highlight: "Transmission corridor mapping and analysis.", icon: Zap },
  { id: 6, title: "Railway Survey", badge: "Rail", highlight: "Railway alignment, clearance, and asset mapping.", icon: Train },
  { id: 7, title: "Roadways Survey", badge: "Infra", highlight: "Highway and smart mobility infrastructure surveying.", icon: Car },
  { id: 8, title: "Utility Mapping", badge: "GIS", highlight: "Underground and overhead asset mapping.", icon: Cable },
  { id: 9, title: "Land Survey", badge: "Topo", highlight: "Boundary mapping, contouring, and GIS documentation.", icon: Landmark },
  { id: 10, title: "Airport Survey", badge: "Aviation", highlight: "Obstacle limitation and runway design surveys.", icon: Plane },
  { id: 11, title: "Control Point Survey", badge: "GNSS", highlight: "Permanent reference station setup and calibration.", icon: Target },
  { id: 12, title: "GPR Survey", badge: "Ground Scan", highlight: "Ground Penetrating Radar scanning and analysis.", icon: Radio },
]

export const SURVEY_TECHNOLOGY = ["Drones", "GPR", "LiDAR", "DGPS", "Total Stations", "GNSS Reference Stations"]

// Same instrument list, with icons for the Survey technology band.
export const SURVEY_FLEET = [
  { label: "Drones", detail: "Aerial mapping", icon: Drone },
  { label: "LiDAR", detail: "Terrain scanning", icon: ScanLine },
  { label: "GPR", detail: "Subsurface radar", icon: Radar },
  { label: "DGPS", detail: "Differential positioning", icon: Satellite },
  { label: "Total Stations", detail: "Angles & distances", icon: Crosshair },
  { label: "GNSS Reference", detail: "Permanent control", icon: RadioTower },
]

// Delivery chain described in "End-to-End Ownership".
export const DELIVERY_PROCESS = [
  { title: "Site Investigation", desc: "Boreholes, in-situ tests and geophysical surveys to characterise the ground." },
  { title: "Lab Testing", desc: "Soil, water and rock samples tested for strength, consolidation and chemistry." },
  { title: "Design Validation", desc: "Bearing capacity, settlement and stability checks feed the structural design." },
  { title: "Construction QC", desc: "Third-party quality testing through execution. One team, zero handoff risks." },
]

export const FAQS = [
  {
    question: "How soon can I get a soil report?",
    answer: "Preliminary report in 48 hours. Full report with analysis in 5–7 working days. Emergency 24-hr service available.",
  },
  {
    question: "Do you work on small residential projects?",
    answer: "Yes! We offer scaled packages for homes, villas, and farmhouses — starting at ₹8,999 (incl. 3 boreholes & basic analysis).",
  },
  {
    question: "Are your reports accepted by government authorities?",
    answer: "100%. Our reports comply with CPWD, TNHB, RERA, and court standards. We’re empaneled with 12+ state departments.",
  },
  {
    question: "What makes your lab different?",
    points: ["On-site lab vans for real-time testing", "AI-powered anomaly detection", "Free retesting if dispute arises"],
  },
]
