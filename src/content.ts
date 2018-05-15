export interface NavItem {
  label: string;
  href: string;
}

export interface HeroHighlight {
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroHighlights: HeroHighlight[] = [
  { text: 'React, TypeScript, and Node.js' },
  { text: 'Clean APIs and dependable architecture' },
  { text: 'Modern UI with strong product thinking' },
];

export const stats: StatItem[] = [
  { value: '3+', label: 'Years' },
  { value: '25+', label: 'Projects' },
  { value: '15+', label: 'Clients' },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Full-stack delivery',
    description: 'Built and shipped web apps with modern frontend and backend stacks.',
  },
  {
    title: 'Collaborative engineering',
    description: 'Worked closely with designers, founders, and product teams.',
  },
  {
    title: 'Continuous growth',
    description: 'Always refining my skills around TypeScript, architecture, and UX.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'fa-layer-group',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind'],
  },
  {
    title: 'Backend',
    icon: 'fa-server',
    items: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    title: 'Data',
    icon: 'fa-database',
    items: ['MongoDB', 'PostgreSQL', 'SQL', 'Authentication'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Real-Time Collaboration App',
    description: 'Built a chat platform with live messaging, user awareness, and secure accounts.',
    icon: 'fa-comments',
    tags: ['React', 'Socket.io', 'Node.js'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Designed a dashboard experience that turns data into clear, usable insight.',
    icon: 'fa-chart-line',
    tags: ['TypeScript', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Product Platform',
    description: 'Created a content and operations platform that supports team workflows at scale.',
    icon: 'fa-box-open',
    tags: ['Express', 'MongoDB', 'Tailwind'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    subtitle: 'Clarify goals and users',
    description: 'I start every project by understanding user needs, technical constraints, and business outcomes to make sure the work solves the right problem.',
    icon: 'fa-search',
  },
  {
    title: 'Strategy',
    subtitle: 'Plan architecture with confidence',
    description: 'I map the data flow, API shape, and UI interactions so the product is robust, scalable, and easy to maintain as it grows.',
    icon: 'fa-sitemap',
  },
  {
    title: 'Build',
    subtitle: 'Ship clean and reliable code',
    description: 'My implementation balances performance, accessibility, and developer clarity, with strong testing and deployment practices built in.',
    icon: 'fa-code',
  },
  {
    title: 'Launch',
    subtitle: 'Iterate after release',
    description: 'I support a smooth handoff, monitor performance, and help teams refine features quickly once users are live.',
    icon: 'fa-rocket',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Dominique delivered our platform redesign with great technical leadership and a product mindset that helped us move quickly without sacrificing quality.',
    name: 'Ava Martinez',
    role: 'Product Lead, FinTech startup',
  },
  {
    quote: 'The architecture and system clarity he introduced made our backend easier to iterate on, and the interface felt polished from day one.',
    name: 'Rohan Patel',
    role: 'Engineering Manager, SaaS company',
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'dominiquedaniels453@gmail.com',
    href: 'mailto:dominiquedaniels453@gmail.com',
    icon: 'fa-envelope',
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'fa-github',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: 'fa-linkedin',
    external: true,
  },
];
