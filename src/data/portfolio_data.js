export const PERSONAL_INFO = {
  name: "SHAHANA",
  role: "MERN Stack Developer",
  shortDescription: "I build responsive and scalable web applications and continuously improve my skills in modern web development.",
  aboutText: "I am a MERN Stack Developer skilled in React.js, Node.js, Express, and MongoDB. I have a strong passion for solving complex technical problems and creating seamless user experiences. I thrive in dynamic environments and enjoy learning new technologies to stay ahead of the curve.",
  email: "hello@example.com",
};

export const SOCIAL_LINKS = [
  { id: 1, name: "GitHub", url: "https://github.com/", icon: "github" },
  { id: 2, name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
  { id: 3, name: "Twitter", url: "https://twitter.com/", icon: "twitter" }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Bootstrap 5", "Vite", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"]
  },
  {
    category: "Database & Tools",
    items: ["MongoDB", "Mongoose", "Git & GitHub", "Postman", "VS Code"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce application with a React frontend, Node/Express backend, and MongoDB database. Features include user authentication, product search, shopping cart, and mock payment integration.",
    techStack: ["React", "Express", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A simple, performant Kanban-style task management dashboard. Users can create, update, and organize tasks into custom categories. Includes drag-and-drop functionality built from scratch.",
    techStack: ["React", "Vite", "CSS Modules"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Social Media API",
    description: "A robust RESTful API serving social network features like user profiles, posts, comments, and likes. Structured using the MVC pattern with comprehensive error handling and input validation.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "",
    githubLink: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  }
];
