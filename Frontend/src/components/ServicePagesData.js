import RoofLeakRepair from "../assets/RoofLeakRepair.jpeg";
import TileReplacement from "../assets/TileReplacement.jpeg";
import RoofWaterproofing from "../assets/RoofWaterproofing.jpg";
import StormDamageRestoration from "../assets/StormDamageRestoration.jpeg";
import RoofStructuralReinforcement from "../assets/RoofStructuralReinforcement.jpeg";
import RegularRoofMaintenance from "../assets/RegularRoofMaintenance.jpeg";
import CondensationAndMoistureTreatment from "../assets/CondensationAndMoistureTreatment.jpeg";
import NewTileRoofInstallation from "../assets/NewTileRoofInstallation.jpeg";

const servicePagesData = [
  {
    slug: "roof-leak-repair",
    title: "Roof Leak Repair",
    description:
      "Fix water leaks caused by cracks, broken tiles, or old sealing. We detect the source and provide a watertight solution.",
    details: [
      {
        title: "Professional Inspection",
        description:
          "Our experts perform detailed visual and infrared inspections to locate hidden leaks.",
        icon: "search",
      },
      {
        title: "Advanced Repair Materials",
        description:
          "We use high-quality sealants and membranes built for long-lasting performance.",
        icon: "build",
      },
      {
        title: "Guaranteed Work",
        description:
          "All repairs come with our service warranty so you can rest assured your roof stays dry.",
        icon: "verified",
      },
    ],
    image: RoofLeakRepair,
  },
  {
    slug: "cracked-or-broken-tile-replacement",
    title: "Cracked or Broken Tile Replacement",
    description:
      "Replace damaged or missing roof tiles quickly and safely to prevent water damage and maintain roof integrity.",
    details: [
      {
        title: "Tile Matching",
        description:
          "We match existing tile style and color for a seamless look.",
        icon: "palette",
      },
      {
        title: "Expert Installation",
        description:
          "Skilled craftsperson carefully replaces tiles without damaging surrounding areas.",
        icon: "build",
      },
      {
        title: "Post‑Service Cleanup",
        description:
          "We leave your property clean and safe after completing the job.",
        icon: "cleaning_services",
      },
    ],
    image: TileReplacement,
  },
  {
    slug: "roof-waterproofing",
    title: "Roof Waterproofing",
    description:
      "Apply waterproof coatings or membranes that prevent rain and moisture from penetrating your roof structure.",
    details: [
      {
        title: "Surface Prep",
        description:
          "Thorough cleaning and priming ensure proper adhesion of waterproof layers.",
        icon: "brush",
      },
      {
        title: "Durable Coatings",
        description:
          "Reflective and UV‑resistant waterproof materials boost energy efficiency.",
        icon: "shield",
      },
      {
        title: "Maintenance Options",
        description:
          "Optional annual check‑ups to extend waterproof performance.",
        icon: "construction",
      },
    ],
    image: RoofWaterproofing,
  },
  {
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration",
    description:
      "Repair roofs damaged by storms, wind, hail, or debris. Includes emergency response and insurance support.",
    details: [
      {
        title: "Emergency Tarping",
        description:
          "Temporary coverings deployed to prevent further damage immediately.",
        icon: "emergency",
      },
      {
        title: "Insurance Assistance",
        description:
          "We document damage and liaise with adjusters to smooth claims.",
        icon: "accessibility",
      },
      {
        title: "Complete Restoration",
        description:
          "Replacement of damaged areas, sealing, and finishing to restore full function.",
        icon: "done",
      },
    ],
    image: StormDamageRestoration,
  },
  {
    slug: "roof-structural-reinforcement",
    title: "Roof Structural Reinforcement",
    description:
      "Reinforce aging or unstable roof framing to improve safety, support heavier materials or solar installations.",
    details: [
      {
        title: "Structural Assessment",
        description: "We evaluate frame integrity and load capacity.",
        icon: "assessment",
      },
      {
        title: "Quality Reinforcements",
        description:
          "Installation of engineered supports and up-to-code materials.",
        icon: "build",
      },
      {
        title: "Safety Compliance",
        description:
          "Structure upgrades meet current building codes and safety standards.",
        icon: "verified",
      },
    ],
    image: RoofStructuralReinforcement,
  },
  {
    slug: "regular-roof-maintenance",
    title: "Regular Roof Maintenance",
    description:
      "Routine inspections, gutter cleaning, debris removal and minor repairs to avoid costly problems.",
    details: [
      {
        title: "Thorough Inspection",
        description:
          "We check flashing, seals, tiles and fascia for early signs of wear.",
        icon: "search",
      },
      {
        title: "Seasonal Cleaning",
        description:
          "Clearing debris and cleaning gutters to prevent water buildup.",
        icon: "cleaning_services",
      },
      {
        title: "Preventive Repairs",
        description:
          "Small fixes handled proactively to maintain longevity.",
        icon: "healing",
      },
    ],
    image: RegularRoofMaintenance,
  },
  {
    slug: "condensation-moisture-treatment",
    title: "Condensation & Moisture Treatment",
    description:
      "Improve ventilation and insulation to prevent mold, rot and humidity damage.",
    details: [
      {
        title: "Moisture Assessment",
        description:
          "Identify condensation hotspots in attic or underside of roof deck.",
        icon: "search",
      },
      {
        title: "Ventilation Solutions",
        description:
          "Install vents or fans that balance airflow and minimize condensation.",
        icon: "emoji_objects",
      },
      {
        title: "Insulation Upgrades",
        description:
          "Added insulation to reduce thermal bridging and humidity buildup.",
        icon: "arrow_upward",
      },
    ],
    image: CondensationAndMoistureTreatment,
  },
  {
    slug: "new-tile-roof-installation",
    title: "New Tile Roof Installation",
    description:
      "Install high-quality clay or concrete tile roofs in a range of colors and styles—durable and visually appealing.",
    details: [
      {
        title: "Material Selection",
        description:
          "Choose tile color, profile and finish to match design and climate.",
        icon: "palette",
      },
      {
        title: "Precision Installation",
        description:
          "Expert layout and fastening for optimal performance and aesthetics.",
        icon: "build",
      },
      {
        title: "Weather Sealing",
        description:
          "Proper underlayment and flashing used to prevent leaks at valleys and ridges.",
        icon: "shield",
      },
    ],
    image: NewTileRoofInstallation,
  },
];

export default servicePagesData;
