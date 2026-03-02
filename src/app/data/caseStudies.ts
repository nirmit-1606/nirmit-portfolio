export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  tools: string[];
  timeline: string;
  featured?: boolean;
  problem: {
    title: string;
    content: string;
  };
  approach: {
    title: string;
    content: string;
    highlights: string[];
  };
  outcome: {
    title: string;
    content: string;
    metrics: { label: string; value: string }[];
  };
  images: {
    hero: string;
    screenshots: string[];
  };
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  "1": {
    id: "1",
    title: "Intuit Enterprise Suite",
    subtitle:
      "Enhancing the onboarding user experience for a complex financial software platform",
    role: "Frontend Researcher & Developer",
    tools: ["React", "Tailwind CSS", "GraphQL", "Jest"],
    timeline: "10 weeks",
    featured: true,
    problem: {
      title: "The challenge",
      content:
        "Harvest & Hearth, a family-owned farm-to-table restaurant, needed a digital presence that reflected their commitment to fresh, local ingredients. Their existing website was outdated, difficult to navigate, and lacked online ordering capabilities—resulting in lost revenue and poor customer experience.",
    },
    approach: {
      title: "The approach",
      content:
        "I started with stakeholder interviews and competitive analysis to understand the restaurant industry landscape. The design system was built around warm, earthy tones and large food photography to showcase their seasonal menu. User flows were optimized for quick browsing and seamless checkout.",
      highlights: [
        "Conducted user interviews with 12 regular customers",
        "Created a modular design system for seasonal menu updates",
        "Integrated online ordering with kitchen display system",
        "Optimized for mobile-first ordering experience",
      ],
    },
    outcome: {
      title: "The outcome",
      content:
        "The new website launched to positive customer feedback and immediate business impact. The online ordering system now accounts for a significant portion of revenue, and the restaurant has seen improved brand perception among younger demographics.",
      metrics: [
        { label: "Increase in online orders", value: "185%" },
        { label: "Mobile conversion rate", value: "42%" },
        { label: "Average order value", value: "+$18" },
      ],
    },
    images: {
      hero: "https://images.unsplash.com/photo-1613274554329-70f997f5789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzcwMTU4NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAxODgwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzcwMDk0NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  },
  "2": {
    id: "2",
    title: "Deccan House",
    subtitle:
      "Rebranding and website redesign for a new Indian restaurant in the heart of the city",
    role: "UX/UI Designer & Developer",
    tools: ["Figma", "JavaScript", "Eleventy", "Netlify"],
    timeline: "12 weeks",
    featured: true,
    problem: {
      title: "The challenge",
      content:
        "Momentum Labs, an early-stage analytics startup, was experiencing high churn during their onboarding process. New users found the platform overwhelming and abandoned before experiencing the core value proposition. The founders needed a complete UX overhaul to improve retention.",
    },
    approach: {
      title: "The approach",
      content:
        "Through user research and analytics review, I identified key friction points in the onboarding flow. I designed a progressive disclosure system that introduced features gradually, created contextual tooltips, and restructured the dashboard to highlight actionable insights rather than raw data.",
      highlights: [
        "Analyzed 200+ user session recordings to identify pain points",
        "Prototyped and tested 3 different onboarding approaches",
        "Created an interactive component library in Figma",
        "Collaborated with engineering on incremental rollout strategy",
      ],
    },
    outcome: {
      title: "The outcome",
      content:
        "The redesigned onboarding experience dramatically improved user activation and retention. The startup successfully closed their Series A funding round, citing improved product metrics as a key factor in investor confidence.",
      metrics: [
        { label: "Onboarding completion", value: "+68%" },
        { label: "Day-7 retention", value: "+52%" },
        { label: "Time to first value", value: "-73%" },
      ],
    },
    images: {
      hero: "https://images.unsplash.com/photo-1649442746245-f51f4b76963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NzAxODgwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMTg4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1659673494761-980fdb5fe683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzcwMTg4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  },
  "3": {
    id: "3",
    title: "Trademind",
    subtitle:
      "Enhancing the user experience of a startup trading platform for investors and financial advisors",
    role: "UI/UX Designer & Frontend Developer",
    tools: ["Figma", "React", "Tailwind CSS", "GraphQL"],
    timeline: "24 weeks",
    featured: true,
    problem: {
      title: "The challenge",
      content:
        "Roast & Co., a new specialty coffee roaster, needed a complete brand identity and e-commerce platform to launch their business. They wanted to differentiate themselves in a crowded market by emphasizing transparency in their sourcing and roasting process.",
    },
    approach: {
      title: "The approach",
      content:
        "I developed a visual identity system centered around the journey from bean to cup, using earthy tones and clean typography. The e-commerce experience was designed to educate customers about coffee origins, roast profiles, and brewing methods while maintaining a streamlined checkout process.",
      highlights: [
        "Created complete brand identity including logo, color system, and typography",
        "Designed custom product pages with educational content",
        "Built subscription system for recurring coffee deliveries",
        "Integrated with local roastery inventory management",
      ],
    },
    outcome: {
      title: "The outcome",
      content:
        "Roast & Co. successfully launched with strong initial sales and positive brand reception. Their subscription model gained traction quickly, providing predictable recurring revenue. The clean, educational approach resonated with their target demographic of coffee enthusiasts.",
      metrics: [
        { label: "First month revenue", value: "$12.4K" },
        { label: "Subscription sign-ups", value: "127" },
        { label: "Average order value", value: "$42" },
      ],
    },
    images: {
      hero: "https://images.unsplash.com/photo-1504812533430-d76f0058aff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzAxODgwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAxODgwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1659841064804-5f507b1b488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzAxODgwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  },
  "4": {
    id: "4",
    title: "Pantry Smart",
    subtitle:
      "Design and development of a resource management dashboard for an efficient food usage and waste reduction startup",
    role: "Product Designer",
    tools: ["Figma", "React", "D3.js", "Recharts"],
    timeline: "14 weeks",
    featured: false,
    problem: {
      title: "The challenge",
      content:
        "Stellar Analytics, a fintech startup, needed to transform complex financial data into actionable insights for small business owners. Their initial MVP focused on features rather than clarity, resulting in a product that was powerful but difficult to use.",
    },
    approach: {
      title: "The approach",
      content:
        "I led a complete redesign of the dashboard interface, prioritizing information hierarchy and progressive disclosure. Working closely with the data science team, I designed custom visualizations that surfaced trends and anomalies without overwhelming users with raw numbers.",
      highlights: [
        "Conducted competitive analysis of 15 fintech dashboards",
        "Designed custom chart components optimized for financial data",
        "Created responsive layouts that work on desktop and tablet",
        "Implemented dark mode for extended usage sessions",
      ],
    },
    outcome: {
      title: "The outcome",
      content:
        "The redesigned dashboard significantly improved user engagement and product stickiness. Users reported feeling more confident in their financial decision-making, and the startup saw increased customer referrals and positive app store reviews.",
      metrics: [
        { label: "Daily active users", value: "+94%" },
        { label: "Session duration", value: "+3.2min" },
        { label: "Feature adoption", value: "+76%" },
      ],
    },
    images: {
      hero: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMTg4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1659673494761-980fdb5fe683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzcwMTg4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1649442746245-f51f4b76963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NzAxODgwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  },
  "5": {
    id: "5",
    title: "Tutor Reserve",
    subtitle:
      "Design of a scheduling platform for a tutoring service that connects students with qualified tutors in their area",
    role: "UX Designer",
    tools: ["Figma", "UserTesting"],
    timeline: "4 weeks",
    featured: false,
    problem: {
      title: "The challenge",
      content: "Learn UX designing and Figma product design tool in 4 weeks",
    },
    approach: {
      title: "The approach",
      content: "Learn UX designing and Figma product design tool in 4 weeks",
      highlights: [
        "Learn UX designing and Figma product design tool in 4 weeks",
        "Learn UX designing and Figma product design tool in 4 weeks",
        "Learn UX designing and Figma product design tool in 4 weeks",
        "Learn UX designing and Figma product design tool in 4 weeks",
      ],
    },
    outcome: {
      title: "The outcome",
      content: "Learn UX designing and Figma product design tool in 4 weeks",
      metrics: [
        {
          label: "Learn UX designing and Figma product design tool in 4 weeks",
          value: "Learn UX designing and Figma product design tool in 4 weeks",
        },
        {
          label: "Learn UX designing and Figma product design tool in 4 weeks",
          value: "Learn UX designing and Figma product design tool in 4 weeks",
        },
        {
          label: "Learn UX designing and Figma product design tool in 4 weeks",
          value: "Learn UX designing and Figma product design tool in 4 weeks",
        },
      ],
    },
    images: {
      hero: "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAxODgwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1659673494761-980fdb5fe683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzcwMTg4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MDE4NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  },
};

// Helper functions
export const getAllCaseStudies = (): CaseStudyData[] => {
  return Object.values(caseStudiesData);
};

export const getFeaturedCaseStudies = (): CaseStudyData[] => {
  return Object.values(caseStudiesData).filter((cs) => cs.featured);
};

export const getNonFeaturedCaseStudies = (): CaseStudyData[] => {
  return Object.values(caseStudiesData).filter((cs) => !cs.featured);
};

export const getCaseStudyById = (id: string): CaseStudyData | null => {
  return caseStudiesData[id] || null;
};
