// src/data/experience.js

const experience = [
  {
  id: "exp1",
  role: "Frontend Developer Intern",
  company: "Nexus Devops",
  logo: "/assets/nexus-logo.jpeg", // Optional
  location: "Remote",
  dates: "Sep 2024 - Dec 2024",
  type: "internship", // "fulltime", "internship", "freelance"
  featured: true, // Optional, for featured experiences
  details: "As a frontend developer intern at Nexus Devops, I contributed to building responsive web applications using React.js and Tailwind CSS. I collaborated with the design team to implement user-friendly interfaces and ensured cross-browser compatibility. Additionally, I participated in code reviews and learned best practices for frontend development in a professional setting.",
  bullets: [
    "Developed responsive web pages using React.js and Tailwind CSS using Figma designs",
    "Improved UX/UI scores by 25% and task speed by 15%"
  ],
  techStack: ["React", "Tailwind CSS", "Figma"],
  links: {
    website: "https://nexusdevops.com",
    //github: "https://github.com/repo" // Optional
  }
},
{
  id: "exp2",
  role: "Web Developer",
  company: "Truly Yogurt",
  logo: "/assets/truly-yogurt-logo.jpeg", // Optional
  location: "Remote",
  dates: "Jul 2025",
  type: "freelance", // "fulltime", "internship", "freelance"
  featured: true, // Optional, for featured experiences
  details: "I built and deployed a responsive business website for a local frozen yogurt shop using React.js and Tailwind CSS.",
  bullets: [
    "Developed a clean, modern UI aligned with the brand’s color palette and logo",
    "Implemented reusable React components for header, home, news, about, menu, gallery, reviews, contact, and footer sections.",
    "Ensured mobile responsiveness and accessibility across devices",
    "Deployed using Netlify with GitHub for version control",
    "Collaborated with the business owner to refine layout, content, and customer flow"
  ],
  techStack: ["React", "Tailwind CSS", "Figma"],
  links: {
    website: "https://trulyyogurtnb.com",
    github: "https://github.com/adil-w-khan/Truly-Yogurt-Website" // Optional
  }
},
{
  id: "exp3",
  role: "Barista",
  company: "Truly Yogurt",
  logo: "/assets/truly-yogurt-logo.jpeg", // Optional
  location: "New Brunswick, NJ",
  dates: "Jun 2023 - Aug 2023",
  type: "nontech", // "fulltime", "internship", "freelance"
  featured: false, // Optional, for featured experiences
  details: "I was a barista at Truly Yogurt, a local frozen yogurt shop in New Brunswick, NJ. I provided excellent customer service, prepared and served a variety of frozen yogurt flavors and toppings, and maintained a clean and organized work environment. I also handled cash transactions and assisted with inventory management.",
  bullets: [
    "Provided exceptional customer service in a challenging environment, ensuring a positive experience for customers.",
    "Coordinated roles and responsibilities with co-workers to maintain efficiency and ensuring smooth collaboration and problem-solving.",
    "Collaborated with team members to efficiently manage peak periods and meet customer demands.",
    
  ],
  techStack: ["Customer Service", "Cash Handling", "Teamwork"],
  links: {
    //website: "https://trulyyogurtnb.com",
    //github: "https://github.com/adil-w-khan/Truly-Yogurt-Website" // Optional
  }
},
];

export default experience;
