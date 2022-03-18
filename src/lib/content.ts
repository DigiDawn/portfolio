import ChatImg from "../assets/chat.png";
import EcommerceImg from "../assets/ecommerce.png";
import PMImg from "../assets/pm.png";
import SaaSImg from "../assets/saas.png";

export const content = {
    navbar: {
        navlinks: ['Home', 'About', 'Skills', 'Projects', 'Contact'] as const
    },
    about: {
        skills: [
            "HTML5",
            "Tailwind CSS",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "FastAPI",
            "GraphQL",
            "Microservices",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "OpenAI API",
            "AI Chatbots",
            "AI Automation",
            "n8n",
            "Shopify",
        ],
        focusAreas: [
            "Customer-facing platforms",
            "Internal business applications",
            "SaaS products",
            "E-commerce solutions",
            "CRM & operations systems",
            "Business automation",
            "Shopify stores & apps",
            "Legacy modernization",
        ],
        workingStyle: ["Accountable for outcomes", "Detail oriented"],
    },
    project : {
        projects : [
            {
                title: "Conversational Chat Platform",
                desc: "Conversational support and collaboration experience with presence, typing indicators, message history, and scalable realtime delivery.",
                tech: ["React", "TypeScript", "Node.js", "Socket.IO", "Redis", "Tailwind CSS"],
                image: ChatImg,
                alt: "Conversational Chat Platform screenshot",
            },
            {
                title: "AI E-commerce Catalog",
                desc: "Conversational product search and catalog automation with intelligent tagging, checkout workflow, and conversion-focused storefront tools.",
                tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "OpenAI API", "Vercel"],
                image: EcommerceImg,
                alt: "AI E-commerce Catalog screenshot",
            },
            {
                title: "Automation Management Tool",
                desc: "Workflow automation for task boards, real-time collaboration, notifications, and role-based access that streamlines operations and reduces manual work.",
                tech: ["React", "NestJS", "PostgreSQL", "Docker", "CI/CD", "n8n"],
                image: PMImg,
                alt: "Automation Management Tool screenshot",
            },
            {
                title: "SaaS Analytics Platform",
                desc: "Operational analytics dashboard with usage tracking, KPI visualization, automated reporting, and actionable insights for product teams.",
                tech: ["React", "Node.js", "Chart.js", "PostgreSQL", "Docker", "AWS"],
                image: SaaSImg,
                alt: "SaaS Analytics Platform screenshot",
            },
        ]
    },
    skill: {
        frontEnd : [
            { name: "React", level: "Advanced", value: 90 },
            { name: "TypeScript", level: "Advanced", value: 85 },
            { name: "Next.js", level: "Advanced", value: 82 },
            { name: "Tailwind CSS", level: "Advanced", value: 88 },
            { name: "HTML", level: "Expert", value: 95 },
            { name: "CSS", level: "Expert", value: 92 },
        ],
        backEnd : [
            { name: "Node.js", level: "Advanced", value: 88 },
            { name: "Express", level: "Advanced", value: 84 },
            { name: "FastAPI", level: "Advanced", value: 82 },
            { name: "GraphQL", level: "Advanced", value: 80 },
            { name: "NestJS", level: "Intermediate", value: 75 },
            { name: "PostgreSQL", level: "Advanced", value: 80 },
            { name: "MongoDB", level: "Advanced", value: 78 },
        ],
        cloud : [
            { name: "AWS (Lambda, S3, RDS)", level: "Intermediate", value: 76 },
            { name: "Vercel", level: "Advanced", value: 85 },
            { name: "Docker", level: "Advanced", value: 82 },
            { name: "Redis", level: "Advanced", value: 78 },
            { name: "Shopify", level: "Intermediate", value: 74 },
        ],
        tools : [
            { name: "Git", level: "Expert", value: 93 },
            { name: "Jest", level: "Advanced", value: 80 },
            { name: "ESLint", level: "Advanced", value: 86 },
            { name: "Prettier", level: "Advanced", value: 88 },
            { name: "CI/CD", level: "Intermediate", value: 72 },
            { name: "n8n", level: "Intermediate", value: 70 },
        ],
    },
    contact : {
        contactItems : [
            {
            label: "Email",
            value: "dominiquedaniels234@gmail.com",
            href: "mailto:dominiquedaniels234@gmail.com",
            },
            {
            label: "GitHub",
            value: "github.com/Knight-Lancer",
            href: "https://github.com/Knight-Lancer",
            },
        ]
    }
    ,
    footer: {
        name: "Dominique Daniels",
        tagline: "Full‑Stack Engineer building scalable web applications and AI‑enhanced products.",
        copyright: "© 2026 Dominique Daniels. Built with modern web technologies.",
    }
}