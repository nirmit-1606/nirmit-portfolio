import intuitHero from "../../assets/intuit_enterprise_suite.png";
import deccanHouseHero from "../../assets/deccan_house_mockup.png";
import deccanCafeHero from "../../assets/deccan_cafe_mockup.png";

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
  "6": {
    id: "6",
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
  "3": {
    id: "3",
    title: "Trademind",
    subtitle: "Enhancing the user experience of a startup trading platform for investors and financial advisors",
    role: "UI/UX Designer & Frontend Developer",
    tools: ["Figma", "React", "Tailwind CSS", "GraphQL"],
    timeline: "24 weeks",
    featured: false,
    images: {
      hero: "https://images.unsplash.com/photo-1504812533430-d76f0058aff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzAxODgwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  },
  "4": {
    id: "4",
    title: "Pantry Smart",
    subtitle: "Design and development of a resource management dashboard for an efficient food usage and waste reduction startup",
    role: "Product Designer",
    tools: ["Figma", "React", "D3.js", "Recharts"],
    timeline: "14 weeks",
    featured: false,
    images: {
      hero: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMTg4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  },
  "5": {
    id: "5",
    title: "Tutor Reserve",
    subtitle: "Design of a scheduling platform for a tutoring service that connects students with qualified tutors in their area",
    role: "UX Designer",
    tools: ["Figma", "UserTesting"],
    timeline: "4 weeks",
    featured: false,
    images: {
      hero: "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
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
