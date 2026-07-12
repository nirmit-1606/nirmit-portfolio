import intuitHero from "../../assets/intuit_enterprise_suite.png";
import deccanHouseHero from "../../assets/deccan_house_mockup.png";
import deccanCafeHero from "../../assets/deccan_cafe_mockup.png";
import trademindHero from "../../assets/trademind/hero.png";
import tutorReserveHero from "../../assets/tutor_reserve/hero.png";
import smartplateHero from "../../assets/smartplate/hero.png";
import campingSuppliesHero from "../../assets/camping_supplies/hero.png";

/** Listing metadata — used by Work page, Homepage cards, and the sidebar. */
export interface CaseStudyMeta {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  tools: string[];
  timeline: string;
  featured?: boolean;
  images: {
    hero: string;
    /** Optional background color for images that should not be cropped (e.g. mockups on transparent bg). */
    heroBg?: string;
  };
}

const caseStudies: Record<string, CaseStudyMeta> = {
  "1": {
    id: "1",
    title: "Intuit Enterprise Suite",
    subtitle: "Designing and building the first-run onboarding experience for a cloud ERP platform serving mid-market and multi-entity businesses",
    role: "Frontend Engineer",
    tools: ["React", "TypeScript", "Zustand", "GraphQL"],
    timeline: "Dec 2024 – Present",
    featured: true,
    images: {
      hero: intuitHero,
    },
  },
  "2": {
    id: "2",
    title: "Deccan House",
    subtitle: "Migrating a restaurant off WordPress, designing a faster site from scratch, and cutting hosting costs to almost nothing.",
    role: "Designer & Developer",
    tools: ["Figma", "Eleventy", "Supabase", "JavaScript", "Netlify"],
    timeline: "12 weeks",
    featured: true,
    images: {
      hero: deccanHouseHero,
      heroBg: "#5e671d",
    },
  },
  "3": {
    id: "3",
    title: "Deccan Cafe",
    subtitle: "Built to a deadline, then improved by necessity: the site that finally forced the admin tool into existence.",
    role: "Designer & Developer",
    tools: ["Figma", "Eleventy", "Supabase", "JavaScript", "Netlify"],
    timeline: "4 weeks",
    featured: false,
    images: {
      hero: deccanCafeHero,
      heroBg: "#1a5a8ade",
    },
  },
  "4": {
    id: "4",
    title: "TradeMind",
    subtitle: "Joined a startup of 25 after launch to improve the UX of a live trading journal, redesigning core surfaces, rebuilding the journal from scratch, and shipping every change in code myself.",
    role: "UI/UX Designer & Frontend Engineer",
    tools: ["React", "TypeScript", "TipTap", "Figma", "CSS"],
    timeline: "8 months",
    featured: true,
    images: {
      hero: trademindHero,
      heroBg: "#100820",
    },
  },
  "5": {
    id: "5",
    title: "TutorReserve",
    subtitle: "Designing a mobile booking app that helps parents find, vet, and schedule sessions with trusted local tutors. A Google UX Design Certificate project.",
    role: "UX Designer",
    tools: ["Figma"],
    timeline: "4 weeks · Aug–Sep 2024",
    featured: true,
    images: {
      hero: tutorReserveHero,
      heroBg: "#f5ede8",
    },
  },
  "6": {
    id: "6",
    title: "Camping Supplies",
    subtitle: "Designing a beginner-friendly e-commerce site for camping gear, grounded in user interviews, competitive analysis, and iterative mockups. A Google UX Design Certificate project.",
    role: "UX Designer",
    tools: ["Figma"],
    timeline: "Course project · 2024",
    featured: false,
    images: {
      hero: campingSuppliesHero,
      heroBg: "#e8edd8",
    },
  },
  "7": {
    id: "7",
    title: "SmartPlate",
    subtitle: "A grocery management app for tracking expiration dates and surfacing recipes. I designed it to solve a real problem I ran into after living away from home for the first time.",
    role: "UX Designer",
    tools: ["Figma"],
    timeline: "Course project · 2024",
    featured: false,
    images: {
      hero: smartplateHero,
      heroBg: "#d4ead4",
    },
  },
};

export const getAllCaseStudies = (): CaseStudyMeta[] => Object.values(caseStudies);

export const getFeaturedCaseStudies = (): CaseStudyMeta[] =>
  Object.values(caseStudies).filter((cs) => cs.featured);

export const getNonFeaturedCaseStudies = (): CaseStudyMeta[] =>
  Object.values(caseStudies).filter((cs) => !cs.featured);

export const getCaseStudyById = (id: string): CaseStudyMeta | null =>
  caseStudies[id] ?? null;
