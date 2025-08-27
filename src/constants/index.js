import {
  csharp,
  dotnet,
  jenkins,
  nodejs,
  redux,
  pytorch,
  aws,
  sqlserver,
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  docker,
  git,
  javascript,
  mongodb,
  reactjs,
  typescript,
  threejs,
  deltaX,
  atlanticus,
  redprint,
  ubuffalo,
  carresale,
  shop,
  tripguide,
  MovieInfoGuide,
  f1,
  f2,
  f3,
  Villain_3
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "products",
      title: "Products",
    },
    {
      id: "academia",
      title: "Academia",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Software Developer",
      icon: web,
    },
    {
      title: "Full-stack Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Product Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: csharp,
    },
    {
      name: "Spring Boot",
      icon: dotnet,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: pytorch,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Kafka",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: sqlserver,
    },
  ];
  
  const experiences = [
    {
      "title": "ACH - Software Developer",
      "company_name": "Atlanticus",
      "icon": atlanticus,
      "iconBg": "#7F7F7F",
      "date": "February 2025 - Present",
      "points": [
        "Developing Spring applications, flow tasks and schedules for various payment processing components, improving performance of ACH delegates.",
        "Redesigning 10+ SSIS control flow tasks using AWS serverless computing, enhancing scalability and efficiency while integrating with various payment modes.",
        "Developed NACHA file generator and optimized the process streamlining by 47% and eliminated enterprise costs of Treasury Software.",
        "Redesigning various microservices like customer communication, payment returns and account center for performance increment resulting in ~28% code reduction and ~19% reduction in average latency.",
        "Developed AI Agentic bot for classification of correspondence files into categories – utilized FAISS index, similarity indices, LLM integration and LangChain to achieve automatic segregation of 1.2 Million files/yr with 94% accuracy."
      ],
      "skills": ["Spring Boot", "AWS Lambda", "SSIS", "NACHA", "Microservices", "FAISS", "LangChain", "LLM Integration"]
    },
    {
      "title": "Senior Software Developer (Internship)",
      "company_name": "Redprint",
      "icon": redprint,
      "iconBg": "#7F7F7F",
      "date": "June 2024 - August 2024",
      "points": [
        "Developed a Payment CRM, migrated Firebase data, and integrated systems to improve performance and reduce costs by 11%.",
        "Resolved dual write issues between Firebase and MySQL, reducing the read-write cycle by 13%, and redeveloped the gym equipment usage dashboard, decreasing server usage by 8%.",
        "Created migrations project for the database transfer, improvising the fetch and update process by 36%.",
        "Led a team of 3 to develop a gateway and API to interact with various client applications involving RedprintFit client suite."
      ],
      "skills": ["Firebase", "MySQL", "React", "Node.js", "API Development", "Database Migration", "Team Leadership"]
    },
    {
      "title": "Product Manager and Senior Developer",
      "company_name": "Department of Engineering Education, University at Buffalo",
      "icon": ubuffalo,
      "iconBg": "#7F7F7F",
      "date": "May 2024 - August 2024",
      "points": [
        "Led a team of 4 for development of a mobile time-tracking app with React Native, Apache server, MariaDB, and PHP REST API.",
        "Reduced project setup time by 20% with React Native and improved database performance by 35% with MariaDB-Apache integration and indexing.",
        "Enhanced API response time by 40%."
      ],
      "skills": ["React Native", "Apache", "MariaDB", "PHP", "REST API", "Mobile Development", "Project Management"]
    },
    {
      "title": "Software Product Engineer",
      "company_name": "DeltaX",
      "icon": deltaX,
      "iconBg": "#7F7F7F",
      "date": "January 2020 - July 2023",
      "points": [
        "Specialized in .NET ecosystem with expertise in frontend technologies like Vue.js, ReactJS and API development.",
        "Boosted data retrieval by 24% using .NET Core and Framework, and built microservices for data summaries with a 2.3% error rate, scaled using Docker.",
        "Optimized 32 RESTful API endpoints with performance analyzer, improving data integration by 30%, and designed a campaign comparison tool with 137 metrics.",
        "Enhanced ad-hoc query development for report generation in 37 categories across multiple ad server engines involving Google Ads, Facebook Ads, etc."
      ],
      "skills": [".NET Core", "Vue.js", "ReactJS", "Docker", "REST API", "Microservices", "Google Ads API", "Facebook Ads API"]
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chaitanya's exceptional dedication and capabilities as a full-time Product Engineer in our Engineering Department have earned him well-deserved recognition. His contributions have consistently surpassed expectations, unveiling a deep-seated passion for system design and applied machine learning that adds a uniquely personal touch to our team's success.",
      name: "Akshay Surve",
      designation: "CTO",
      company: "DeltaX",
      image: f1,
    },
    {
      testimonial:
        "Leading the budget center and campaign management team, I can attest to Chaitanya's exceptional skills as a Product Engineer at DeltaX. Their dedication in creating a seamless interface and enhancing data integration showcases not just technical prowess but a commitment to excellence that truly elevates our team.",
      name: "Avi Dawra",
      designation: "Principal product engineer",
      company: "DeltaX",
      image: f2,
    },
    {
      testimonial:
        "Chaitanya is an outstanding software developer with expertise in wireless communications and Bayesian estimation. His deep understanding of advanced statistical concepts, coupled with a meticulous approach to research and strong problem-solving skills, sets him apart.",
      name: "Amrita Mishra",
      designation: "Assistant Professor",
      company: "IIIT Bangalore",
      image: f3,
    },
  ];
  
  const projects = [
    {
      name: "TrackThemOut - Advanced System Monitor",
      description:
        "Advanced Windows system monitor tracking 8+ metrics including CPU, memory, battery health, disk performance, network usage, GPU stats, and temperature sensors. Features real-time charts, customizable alerts, and data logging with 100-point history retention.",
      tags: [
        {
          name: "system-monitoring",
          color: "blue-text-gradient",
        },
        {
          name: "real-time-analytics",
          color: "green-text-gradient",
        },
        {
          name: "windows-development",
          color: "pink-text-gradient",
        },
      ],
      image: backend,
      source_code_link: "https://github.com/chaitanyayendru/TrackThemOut",
    },
    {
      name: "RazorVine - Advanced Customer Analytics",
      description:
        "Cutting-edge platform combining causal inference, deep learning, and real-time optimization for customer targeting. Features 4+ ML algorithms, 3 causal methodologies, multi-armed bandits, and FastAPI-powered analytics serving 10,000+ simulated customers, improving treatment prediction accuracy by 17%.",
      tags: [
        {
          name: "causal-inference",
          color: "blue-text-gradient",
        },
        {
          name: "machine-learning",
          color: "green-text-gradient",
        },
        {
          name: "fastapi",
          color: "pink-text-gradient",
        },
      ],
      image: Villain_3,
      source_code_link: "https://github.com/chaitanyayendru/RazorVine",
    },
    {
      name: "ShopYourWish - Microservices Platform",
      description:
        "Designed ShopYourWish, a cutting-edge microservices project built on Spring Boot, leveraging an event-driven architecture, Spring Cloud Gateway for API Gateway, CQRS for scalable operations, and Docker for containerization.",
      tags: [
        {
          name: "spring-boot",
          color: "blue-text-gradient",
        },
        {
          name: "microservices",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
      ],
      image: mobile,
      source_code_link: "https://github.com/chaitanyayendru/ShopYourWish",
    },
    {
      name: "ShockDart - Notification Hub",
      description:
        "ShockDart is a scalable notification service built with Go, featuring Kafka message queuing, Firebase integration, and PostgreSQL persistence. Supports 3+ notification channels with OAuth authentication and Docker deployment.",
      tags: [
        {
          name: "go",
          color: "blue-text-gradient",
        },
        {
          name: "kafka",
          color: "green-text-gradient",
        },
        {
          name: "microservices",
          color: "pink-text-gradient",
        },
      ],
      image: mobile,
      source_code_link: "https://github.com/chaitanyayendru/ShockDart",
    },
  ];

  const products = [
    {
      name: "SageOrb - Financial Analytics & Liquidity Optimization Platform",
      description: "SageOrb is a comprehensive financial analytics platform featuring 4 projection methods, 3 optimization strategies, ML-powered insights, and real-time dashboards. Built with React frontend, Flask backend, PostgreSQL database, and Docker deployment for seamless financial decision-making.",
      category: "Financial Technology",
      status: "Live",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "https://github.com/chaitanyayendru/SageOrb"
    },
    {
      name: "AgentBreach - Advanced Agentic AI Finance Platform",
      description: "Six AI agents handle financial analysis, payment processing, fraud detection, portfolio management, risk assessment, and compliance with 25+ dependencies, 3 payment providers, real-time market data, and automated trading capabilities.",
      category: "AI & Finance",
      status: "Live",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://github.com/chaitanyayendru/AgentBreach"
    },
    {
      name: "ScannerAI - Intelligent Document Scanning and Processing System",
      description: "Uses AWS Lambda functions with Bedrock AI for OCR and text extraction, processing 10,000+ documents/hour with 99.5% accuracy across 3 environments. The system provides automated OCR processing with support for 15+ document formats and batch processing of up to 1,000 documents simultaneously, with integration to AWS Bedrock for intelligent text extraction achieving 95%+ accuracy. Built on a scalable serverless architecture with S3 storage, auto-scaling from 0 to 10,000 concurrent executions, and sub-second response times.",
      category: "AI & Automation",
      status: "Live",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      link: "https://github.com/chaitanyayendru/ScannerAI"
    },
    {
      name: "FinCache - High-performance Redis-compatible Cache for Financial Applications",
      description: "Ultra-fast in-memory cache handling 100k+ ops/sec with sub-millisecond latency. Supports dual protocols (Redis + HTTP), real-time monitoring, and financial-specific features like fraud detection and market data caching. Built in Go with Docker deployment.",
      category: "Infrastructure",
      status: "Live",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      link: "https://github.com/chaitanyayendru/FinCache"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects, products };