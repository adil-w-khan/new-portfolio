const projectsData = [
    {
    id: 18,
    title: "House Price Prediction ML Model",
    description: "Built multiple ML models to predict house prices.",
    longDescription: "Built a comprehensive machine learning pipeline to predict house prices by comparing multiple algorithms and selecting the optimal model for real estate valuation. This end-to-end project demonstrates proficiency in data science workflows, from raw data processing to model deployment.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "XGBoost"],
    category: "Algorithm Simulation",
    status: "completed",
    featured: true,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/House-Price-Prediction",
    hasPreview: false,
    image: "/assets/projects/tic-tac-toe.png",
    keyFeatures: [
      "91.77% Prediction Accuracy",
      "Advanced Data Engineering",
      "Model Performance Analysis",
      "Technical Implementation"
    ]
  },
  {
    id: 1,
    title: "Truly Yogurt Website",
    description: "Built and deployed a responsive business website for a local frozen yogurt shop using React.js and Tailwind CSS.",
    longDescription: "A complete business website solution featuring responsive design, interactive menu displays, location information, and contact forms. Implemented modern React patterns and optimized for SEO and performance.",
    technologies: ["react", "javascript"],
    category: "Web Application",
    status: "live",
    featured: true,
    previewUrl: "https://trulyyogurtnb.com/",
    githubUrl: "https://github.com/adil-w-khan/Truly-Yogurt-Website",
    hasPreview: true,
    image: "/assets/projects/truly-yogurt.png", // Add project screenshots
    keyFeatures: [
      "Responsive design across all devices",
      "Interactive menu and pricing",
      "Contact form integration",
      "SEO optimized"
    ]
  },
  {
    id: 2,
    title: "AppTrack By Adil",
    description: "Fullstack application made with Springboot, React.js, MySql, and JWT Authentication. Track your internship applications with ease",
    longDescription: "A comprehensive job application tracking system with user authentication, application status management, and analytics dashboard. Features secure JWT authentication and real-time updates.",
    technologies: ["java", "react", "javascript"],
    category: "Full-Stack Application",
    status: "live",
    featured: true,
    previewUrl: "https://apptrackbyadil.com/",
    githubUrl: "https://github.com/adil-w-khan/Internship-Application-Tracker",
    hasPreview: true,
    image: "/assets/projects/apptrack.png",
    keyFeatures: [
      "JWT Authentication system",
      "Application status tracking",
      "Dashboard analytics",
      "MySQL database integration"
    ]
  },
  {
    id: 3,
    title: "Product Store",
    description: "This project was created using Node.js, Express.js, React.js, and MongoDB to replicate an e-commerce store.",
    longDescription: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and order management. Built with MERN stack architecture.",
    technologies: ["javascript", "react"],
    category: "E-commerce",
    status: "live",
    featured: false,
    previewUrl: "https://product-store-r4u4.onrender.com/",
    githubUrl: "https://github.com/adil-w-khan/product-store",
    hasPreview: true,
    image: "/assets/projects/product-store.png",
    keyFeatures: [
      "Product catalog management",
      "Shopping cart functionality",
      "User authentication",
      "Order processing system"
    ]
  },
  {
    id: 4,
    title: "Employee Management",
    description: "This project was created using Springboot and React.js to replicate a management systems for employees.",
    longDescription: "A comprehensive employee management system with CRUD operations, department management, and employee analytics. Features RESTful API design and responsive frontend.",
    technologies: ["java", "react"],
    category: "Management System",
    status: "completed",
    featured: false,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/Employee-Management-System",
    hasPreview: false,
    image: "/assets/projects/employee-mgmt.png",
    keyFeatures: [
      "Employee CRUD operations",
      "Department management",
      "Role-based access control",
      "Analytics dashboard"
    ]
  },
  {
    id: 5,
    title: "AirQuality Data Manager",
    description: "Developed in Java to manage 250+ data entries using a hashtable of linked lists to store information about U.S. States and Counties.",
    longDescription: "A sophisticated data structure implementation using hashtables and linked lists to efficiently manage and query large datasets. Demonstrates advanced Java programming and data structure optimization.",
    technologies: ["java"],
    category: "Data Structures",
    status: "completed",
    featured: true,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/AirQuality",
    hasPreview: false,
    image: "/assets/projects/airquality.png",
    keyFeatures: [
      "Hashtable with linked lists implementation",
      "Efficient data retrieval algorithms",
      "Large dataset management",
      "Optimized memory usage"
    ]
  },
  {
    id: 6,
    title: "Trick-Or-Treat Pathfinding",
    description: "Made a simulation showcasing graph traversal and pathfinding algorithms, including BFS, DFS, and Dijkstra's algorithm in Java.",
    longDescription: "An interactive simulation demonstrating various graph algorithms through a Halloween-themed pathfinding game. Implements multiple search algorithms with visual representations.",
    technologies: ["java"],
    category: "Algorithm Simulation",
    status: "completed",
    featured: true,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/Trick-or-Treat-Simulation",
    hasPreview: false,
    image: "/assets/projects/pathfinding.png",
    keyFeatures: [
      "BFS, DFS, Dijkstra implementations",
      "Interactive graph visualization",
      "Algorithm performance comparison",
      "Custom graph generation"
    ]
  },
  {
    id: 7,
    title: "Quiz Game",
    description: "Built on React.JS, this project uses an open API to create a short and fun trivia game. Also uses HTML and CSS.",
    longDescription: "An engaging trivia game that fetches questions from an external API, featuring multiple categories, scoring system, and responsive design for an optimal gaming experience.",
    technologies: ["react", "javascript"],
    category: "Game",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/quiz-game/",
    githubUrl: "https://github.com/adil-w-khan/quiz-game",
    hasPreview: true,
    image: "/assets/projects/quiz-game.png",
    keyFeatures: [
      "API integration for questions",
      "Multiple quiz categories",
      "Score tracking system",
      "Responsive game interface"
    ]
  },
  {
    id: 8,
    title: "Tenzies Dice Game",
    description: "Get all 10 numbers to be the same to win! This simple Tenzies game was built using React.JS, HTML, and CSS.",
    longDescription: "A digital recreation of the popular dice game Tenzies, featuring smooth animations, score tracking, and an intuitive interface built with modern React patterns.",
    technologies: ["react", "javascript"],
    category: "Game",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/tenzies-project/",
    githubUrl: "https://github.com/adil-w-khan/tenzies-project",
    hasPreview: true,
    image: "/assets/projects/tenzies.png",
    keyFeatures: [
      "Interactive dice mechanics",
      "Win condition detection",
      "Score and time tracking",
      "Smooth CSS animations"
    ]
  },
  {
    id: 9,
    title: "Meme Generator",
    description: "Built on React.JS, this project uses an open API to fetch the Meme images and creates a meme based on user input.",
    longDescription: "A creative meme generation tool that leverages external APIs to fetch popular meme templates and allows users to add custom text, with download functionality.",
    technologies: ["react", "javascript"],
    category: "Creative Tool",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/meme-generator-project/",
    githubUrl: "https://github.com/adil-w-khan/meme-generator-project",
    hasPreview: true,
    image: "/assets/projects/meme-generator.png",
    keyFeatures: [
      "API-driven meme templates",
      "Custom text overlay",
      "Image download functionality",
      "Responsive design"
    ]
  },
  {
    id: 10,
    title: "Travel Journal",
    description: "This Travel Journal is used to showcase my personal vacations. Built using React.JS, HTML, and CSS.",
    longDescription: "A personal travel showcase featuring interactive maps, photo galleries, and travel stories. Demonstrates component-based architecture and responsive design principles.",
    technologies: ["react", "javascript"],
    category: "Personal Project",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/travel-journal/",
    githubUrl: "https://github.com/adil-w-khan/travel-journal",
    hasPreview: true,
    image: "/assets/projects/travel-journal.png",
    keyFeatures: [
      "Interactive travel entries",
      "Photo gallery integration",
      "Responsive card layout",
      "Personal storytelling"
    ]
  },
  {
    id: 11,
    title: "Weather App",
    description: "Created using JavaScript, this app uses an open API to fetch data about a city's weather and displays information about it.",
    longDescription: "A comprehensive weather application featuring current conditions, forecasts, and location-based weather data with an intuitive and visually appealing interface.",
    technologies: ["javascript"],
    category: "Utility App",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/Weather-app-project/",
    githubUrl: "https://github.com/adil-w-khan/Weather-app-project",
    hasPreview: true,
    image: "/assets/projects/weather-app.png",
    keyFeatures: [
      "Real-time weather data",
      "Location-based search",
      "Weather forecasting",
      "Clean, intuitive UI"
    ]
  },
  {
    id: 12,
    title: "To Do List",
    description: "This app was created using JavaScript and uses local storage to keep track of tasks and completed tasks.",
    longDescription: "A feature-rich task management application with local storage persistence, task prioritization, and filtering options for enhanced productivity.",
    technologies: ["javascript"],
    category: "Productivity",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/Todo-list-project/",
    githubUrl: "https://github.com/adil-w-khan/Todo-list-project",
    hasPreview: true,
    image: "/assets/projects/todo-list.png",
    keyFeatures: [
      "Local storage persistence",
      "Task prioritization",
      "Completion tracking",
      "Filter and search functionality"
    ]
  },
  {
    id: 13,
    title: "Calculator",
    description: "This app was created using JavaScript and uses basic JavaScript to calculate user inputs. Also uses HTML and CSS.",
    longDescription: "A fully functional calculator application with advanced mathematical operations, keyboard support, and a clean, modern interface design.",
    technologies: ["javascript"],
    category: "Utility App",
    status: "live",
    featured: false,
    previewUrl: "https://adil-w-khan.github.io/calculator-project/",
    githubUrl: "https://github.com/adil-w-khan/calculator-project",
    hasPreview: true,
    image: "/assets/projects/calculator.png",
    keyFeatures: [
      "Basic and advanced operations",
      "Keyboard input support",
      "Memory functions",
      "Responsive button layout"
    ]
  },
  {
    id: 14,
    title: "Rock Paper Scissors",
    description: "Simple Rock Paper Scissors game against the computer developed in Java using multiple custom methods.",
    longDescription: "A console-based implementation of the classic game featuring AI opponent, score tracking, and game statistics with clean object-oriented design.",
    technologies: ["java"],
    category: "Game",
    status: "completed",
    featured: false,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/RPS-Java",
    hasPreview: false,
    image: "/assets/projects/rps.png",
    keyFeatures: [
      "AI opponent logic",
      "Score tracking system",
      "Game statistics",
      "Object-oriented design"
    ]
  },
  {
    id: 15,
    title: "War Card Game",
    description: "Classic card game, War, played against the computer, designed and developed in Java using multiple classes and methods.",
    longDescription: "A digital recreation of the classic War card game with complete game logic, card deck management, and turn-based gameplay mechanics.",
    technologies: ["java"],
    category: "Game",
    status: "completed",
    featured: false,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/War-Game---Java",
    hasPreview: false,
    image: "/assets/projects/war-game.png",
    keyFeatures: [
      "Complete card deck simulation",
      "Turn-based gameplay",
      "Game state management",
      "Winner determination logic"
    ]
  },
  {
    id: 16,
    title: "21 Card Game (Blackjack)",
    description: "Classic card game, 21, played against the computer designed and developed in Java using multiple classes and methods.",
    longDescription: "A comprehensive Blackjack implementation with dealer AI, betting system, and complete game rules including splits, doubles, and insurance.",
    technologies: ["java"],
    category: "Game",
    status: "completed",
    featured: false,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/21-Card-Game---Java",
    hasPreview: false,
    image: "/assets/projects/blackjack.png",
    keyFeatures: [
      "Complete Blackjack rules",
      "Dealer AI implementation",
      "Betting system",
      "Card counting logic"
    ]
  },
  {
    id: 17,
    title: "Tic Tac Toe",
    description: "Tic Tac Toe played against another player or the computer, developed in Java using multiple methods and visuals",
    longDescription: "An interactive Tic Tac Toe game with both human vs human and human vs AI modes, featuring intelligent AI opponent and visual game board.",
    technologies: ["java"],
    category: "Game",
    status: "completed",
    featured: false,
    previewUrl: "",
    githubUrl: "https://github.com/adil-w-khan/Tic-Tac-Toe-Java",
    hasPreview: false,
    image: "/assets/projects/tic-tac-toe.png",
    keyFeatures: [
      "Two-player and AI modes",
      "Intelligent AI opponent",
      "Visual game board",
      "Win condition detection"
    ]
  },
  
];

export default projectsData;