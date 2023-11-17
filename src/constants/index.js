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
  carresale,
  shop,
  MovieInfoGuide,
  f1,
  f2,
  f3
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-stack developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: ".NET Developer",
      icon: backend,
    },
    {
      title: "Applied ML engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "dotnet",
      icon: dotnet,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "sqlserver",
      icon: sqlserver,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      "title": "Product Engineer",
      "company_name": "DeltaX",
      "icon": deltaX, // Placeholder for DeltaX icon
      "iconBg": "#7F7F7F", // Placeholder for DeltaX icon background color
      "date": "July 2020 - August 2023",
      "points": [
        "Collaborated in a team to create a user interface and backend application, providing clients access to marketing reports from various publishers like Facebook, Google, and Bing.",
        "Integrated applications and developed multiple microservices, achieving accurate data summaries with an impressively low error percentage of 2.3%.",
        "Enhanced 32 API endpoints for in-house APIs, resulting in a remarkable 30% improvement in data integration across multiple platforms for publishers and other dependent services."
      ]
    },
    {
      "title": "Software Engineer Intern",
      "company_name": "DeltaX",
      "icon": deltaX, // Placeholder for DeltaX icon
      "iconBg": "#7F7F7F", // Placeholder for DeltaX icon background color
      "date": "January 2020 - June 2020",
      "points": [
        "Designed a functional digital marketing live campaign comparison tool with 137 metrics using EDA tools, interactive reporting, and dashboard elements, utilizing the .NET ecosystem.",
        "Contributed to improved user engagement, resulting in a 3% increase in data-driven decision-making across the organization."
      ]
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
      name: "Car Rent",
      description:
        "This application is designed to provide insights into the factors influencing car resale prices and offers a prediction feature to estimate the resale value of a car based on various attributes.",
      tags: [
        {
          name: "machine-learning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "data analysis",
          color: "pink-text-gradient",
        },
      ],
      image: carresale,
      source_code_link: "https://github.com/chaitanyayendru/Car_Resale_Price_Estimator",
    },
    {
      name: "ShopYourWish",
      description:
        "This project revolves around the world of products, employing a sophisticated event-driven architecture for seamless communication and scalability.",
      tags: [
        {
          name: "dotnet",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "microservices",
          color: "pink-text-gradient",
        },
      ],
      image: shop,
      source_code_link: "https://github.com/chaitanyayendru/ShopYourWishPOC",
    },
    {
      name: "Movie Compass",
      description:
        "The Movie WebApp Guide is a comprehensive platform providing detailed information on a wide range of movies. Seamlessly integrating React.js, Node.js, and MongoDB, it empowers users with an immersive movie exploration experience. From user authentication to advanced features like ratings and reviews.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "recommendation systems",
          color: "green-text-gradient",
        },
        {
          name: "api integration",
          color: "pink-text-gradient",
        },
      ],
      image: MovieInfoGuide,
      source_code_link: "https://github.com/chaitanyayendru/MovieRecommender",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };