import faceAttendance from "../assets/projects/face-attendance.png";
import portfolio from "../assets/projects/portfolio.png";
import mtew from "../assets/projects/mtew.png";
import project4 from "../assets/projects/project4.png";
import burdenoff from "../assets/projects/Burdenoff.png";

const projects = [
  {
    id: 1,
    title: "Support Ticket & SLA Tracker",
    description:
      "A full-stack support ticket management platform with authentication, ticket lifecycle management, business-hours SLA tracking, GraphQL APIs, PostgreSQL integration, and automated testing.",
    image: burdenoff,
    tech: [
      "React",
      "TypeScript",
      "Bun",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    github: "https://github.com/YUSHAFAIZ/burdenoff-support-sla",
    
  },

  {
    id: 2,
    title: "Face Recognition Attendance System",
    description:
      "A web-based attendance system that automatically marks attendance using facial recognition technology with React and Python Flask.",
    image: faceAttendance,
    tech: ["React", "Python", "Flask", "OpenCV"],
    github: "https://github.com/YUSHAFAIZ",
    
  },

  {
    id: 3,
    title: "Developer Portfolio",
    description:
      "A modern responsive portfolio built with React and Tailwind CSS showcasing projects, skills, and professional experience.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/YUSHAFAIZ",
    live: "#",
  },

  {
    id: 4,
    title: "MTEW Website",
    description:
      "A responsive website designed for MTEW with modern UI, multiple sections, and mobile-friendly layouts.",
    image: mtew,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/YUSHAFAIZ",
    live: "#",
  },

  {
    id: 5,
    title: "React Dashboard",
    description:
      "A responsive admin dashboard with reusable components, charts, tables, and modern UI built using React.",
    image: project4,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/YUSHAFAIZ",
    live: "#",
  },
];

export default projects;
