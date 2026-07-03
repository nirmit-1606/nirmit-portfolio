import intuitHero from "../../assets/intuit_enterprise_suite.png";
import deccanHouseHero from "../../assets/deccan_house_mockup.png";
import deccanCafeHero from "../../assets/deccan_cafe_mockup.png";
import trademindHero from "../../assets/trademind/hero.png";

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
    subtitle: "Built to a deadline, then improved by necessity — the site that finally forced the admin tool into existence.",
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
    subtitle: "Joined a startup of 20 after launch to improve the UX of a live trading journal — redesigning core surfaces, rebuilding the journal from scratch, and shipping every change in code myself.",
    role: "UI/UX Designer & Frontend Engineer",
    tools: ["React", "TypeScript", "TipTap", "Figma", "CSS"],
    timeline: "8 months",
    featured: false,
    images: {
      hero: trademindHero,
      heroBg: "#100820",
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
