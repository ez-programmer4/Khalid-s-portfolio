import image1 from "./images/Landscape F.jpg";
import image2 from "./images/Residential F.jpg";
import image3 from "./images/Mixed USe F.jpg";
import image4 from "./images/Hospital F.jpg";
import image8 from "./images/FAST travel AGENCY F.jpg";
import image11 from "./images/Binder F.png";
import image12 from "./images/I on I LOGO F.png";
import image14 from "./images/Thsirt F.jpg";
import profilePhoto1 from "./images/images (4).jpeg"; // Adjust the path as necessary
import profilePhoto2 from "./images/Sample mockup 2.png"; // Adjust the path as necessary
import profilePhoto3 from "./images/IMG_20241015_152602_908.jpg"; // Adjust the path as necessary
import profilePhoto4 from "./images/logokjumj.jpg";
import profilePhoto5 from "./images/LOGO.png";
// import profilePhoto4 from "./images/profile4.jpg"; // Adjust the path as necessary
// import profilePhoto5 from "./images/profile5.jpg";
import Revit from "./images/images (2).png";
import SketchUp from "./images/images (7).png";
import AutoCAD from "./images/images (6).png";
import lumion from "./images/download.png";
import Adobe from "./images/download (4).png";
import Adobe2 from "./images/download (3).png";
import microsoftoffice from "./images/download (1).png";
import capcut from "./images/images (8).jpeg";
import {
  faDesktop,
  faFileAlt,
  faTools,
  faDraftingCompass,
  faPaintBrush,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTasks,
  faLightbulb,
  faHandshake,
  faComments,
  faBullhorn,
  faHeart,
  faPeopleArrows,
  faCrown,
} from "@fortawesome/free-solid-svg-icons"; // Ensure this line is included

export const projects = [
  {
    title: "G+2 Terrace Modern House Residential Design",
    subtitle:
      "A contemporary residential design featuring a spacious terrace and modern aesthetics.",
    image: image2,
    link: "https://drive.google.com/file/d/1tX4TDdsP3aDsimcmf9_U5p-PiEyxVW_5/view?usp=sharing",
  },
  {
    title: "2B+G+12 Mixed Use Apartment",
    subtitle:
      "A multifaceted apartment design integrating residential and commercial spaces for vibrant urban living.",
    image: image3,
    link: "https://drive.google.com/file/d/1cUQTu7ocXiUlqTveh2M18IQXp9ph7dLj/view?usp=sharing",
  },
  {
    title: "Age-Friendly Landscape Design",
    subtitle:
      "A landscape design that caters to all ages while incorporating cultural elements for a rich community experience.",
    image: image1,
    link: "https://drive.google.com/file/d/1WvrSgiECuOhmpChBBVwuWI6qXCfbp_-h/view?usp=sharing",
  },
  {
    title: "General Hospital Design with HVAC System",
    subtitle:
      "An integrated design for a general hospital that prioritizes patient comfort and operational efficiency.",
    image: image4,
    link: "https://drive.google.com/file/d/1lXWcFW7q0qUU2BGIaDHaA7nzPNF-BAeW/view?usp=sharing",
  },
  {
    title: "Logo Design for I on I Construction",
    subtitle:
      "A tailored logo design that reflects the client's vision and preferences in the construction industry.",
    image: image12, // Adjust image as needed
    link: "https://drive.google.com/file/d/1BUURmmGPJnOh4kRnMSp8xTQ6AjGapKNS/view?usp=sharing",
  },
  {
    title: "Logo Design for Fast Travel Agency",
    subtitle:
      "A modern logo design that aligns with current trends while capturing the essence of fast travel.",
    image: image8, // Adjust image as needed
    link: "https://drive.google.com/file/d/1ICIxY8lLwNR-lb3tjN13Yr4dHkyGtRQQ/view?usp=sharing",
  },
  {
    title: "Artistic Binder Design for KJUMJ Graduate Students",
    subtitle:
      "A creative and simple binder design tailored for KJUMJ graduate students, combining functionality and aesthetics.",
    image: image11, // Adjust image as needed
    link: "https://drive.google.com/file/d/19MAPWltiPmjSgGMprDJaERhNYuYrRemm/view?usp=sharing",
  },
  {
    title: "Memorable T-Shirt Design for KJUMJ Students",
    subtitle:
      "A unique t-shirt design that resonates with KJUMJ students, combining style and school spirit.",
    image: image14, // Adjust image as needed
    link: "https://drive.google.com/file/d/1HLIhSkiOg0i9kqRCmcF8kBNGzCSYvupq/view?usp=sharing",
  },
];

export const testimonials = [
  {
    quote:
      "Khalid is trained at putting together designs that connect with target groups. The t-shirt design well merges simplicity and style, showing his graphic design skills. It is visually attractive and successfully represents the student's aim merging simplicity with decorative expression.",
    name: "Mr. Muaz Fati Abadura",
    company: "Manager of Aba Jifar Printing House",
    profilePhoto: profilePhoto3,
  },
  {
    quote:
      "Khalid's creative binder design earned appreciation from GC students, demonstrating his commitment to meeting their needs. The project establishes a good balance between creativity and simplicity, which is in line with student preferences. Khalid's ability to bring these elements together has resulted in an outstanding design that meets students' expectations and stands out due to its uniqueness.",
    name: "Abdurahman Sheikh Anwar",
    company: "Software Engineer and Former President of KJUMJ",
    profilePhoto: profilePhoto4,
  },
  {
    quote:
      "The medium of the strategic placement of shapes and colors that are in line with current trends effectively expresses the essence of the brand and creates a stylish remark that successfully connects with the target market in a competitive marketplace.",
    name: "Abdurahman Ahmed",
    company: "General Manager of Fast Travel Agency",
    profilePhoto: profilePhoto2,
  },
  {
    quote:
      "Your attention to detail and innovative design showcase a remarkable understanding of architectural principles. Keep pushing boundaries.",
    name: "Architect Fasika",
    company: "Respect Architects and Consulting PLC",
    profilePhoto: profilePhoto5,
  },
  {
    quote:
      "Your dedication and commitment to meet deadlines is truly inspiring.",
    name: "Architect Haylegeorgies G.",
    company: "Founder and CEO of Zevord Designs",
    profilePhoto: profilePhoto1,
  },
];

export const skills = [
  {
    name: "Adobe photoshop",
    icon: faPaintBrush,
    percentage: 90,
    image: Adobe,
  },
  {
    name: "Adobe illustrator",
    icon: faPaintBrush,
    percentage: 90,
    image: Adobe2,
  },
  {
    name: "Microsoft Office",
    icon: faFileAlt,
    percentage: 85,
    image: microsoftoffice,
  },
  { name: "Revit", icon: Revit, percentage: 80, image: Revit },
  { name: "AutoCAD", icon: faDraftingCompass, percentage: 88, image: AutoCAD },
  { name: "SketchUp", icon: faDesktop, percentage: 85, image: SketchUp },
  { name: "Lumion", icon: faVideo, percentage: 87, image: lumion },
  { name: "CapCut", icon: faVideo, percentage: 89, image: capcut },
];

export const softSkills = [
  {
    name: "Management Skill",
    description:
      "The ability to effectively organize and coordinate tasks and resources to achieve goals.",
    icon: faTasks, // Use the imported icon directly
  },
  {
    name: "Creativity and Critical Thinking",
    description:
      "Combining innovative thinking with analytical skills to solve problems and generate new ideas.",
    icon: faLightbulb,
  },
  {
    name: "Negotiation",
    description:
      "The ability to reach mutually beneficial agreements through discussion and compromise.",
    icon: faHandshake,
  },
  {
    name: "Communication",
    description:
      "The ability to convey information clearly and effectively, both verbally and in writing.",
    icon: faComments,
  },
  {
    name: "Public Speaking",
    description:
      "The skill of delivering presentations effectively to an audience, engaging and informing them.",
    icon: faBullhorn,
  },
  {
    name: "Emotional Intelligence",
    description:
      "Understanding and managing your own emotions and the emotions of others.",
    icon: faHeart,
  },
  {
    name: "Teamwork",
    description:
      "Collaborating effectively with others to achieve shared objectives.",
    icon: faPeopleArrows,
  },
  {
    name: "Multi-tasking",
    description:
      "The ability to handle multiple tasks simultaneously while maintaining efficiency and quality.",
    icon: faTasks,
  },
  {
    name: "Leadership",
    description:
      "The ability to inspire and guide individuals or teams toward achieving goals and objectives.",
    icon: faCrown,
  },
];
export const additionalSkills = [
  {
    name: "Public 1 Car Driving License",
    description:
      "Licensed to drive cars, ensuring compliance with road safety regulations.",
  },
];

// Languages Section
export const languages = [
  {
    language: "English",
    proficiency: "Proffesional",
  },
  {
    language: "Arabic",
    proficiency: "Fluent",
  },
  {
    language: "Amharic",
    proficiency: "Native",
  },
];
