export const HERO_CONTENT = `
I’m an aspiring full-stack developer with a strong foundation in building web applications using modern technologies like React, Node.js, Express.js, and Tailwind CSS. I am passionate about learning and creating clean, efficient, and responsive user experiences. With experience in databases like MongoDB and PostgreSQL, I aim to contribute to building scalable, high-performance web solutions. Eager to grow and take on new challenges, I am committed to continuous learning and developing impactful, innovative applications.
`;

// export const ABOUT_TEXT = `I’m a passionate and versatile aspiring full-stack developer with a strong interest in creating efficient, user-friendly web applications. I have hands-on experience working with technologies like React, Tailwind CSS, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began out of curiosity for how things work and has grown into a dedication to learning and building impactful solutions. I thrive in collaborative environments, enjoy solving complex challenges, and am always eager to adapt to new technologies. Outside of coding, I stay active, explore new tools and frameworks, and contribute to open-source projects whenever I can.`;
export const ABOUT_TEXT = `I’m a motivated Software Developer with a strong foundation in full-stack web development and a deep interest in building reliable, scalable solutions. I’ve worked on real-world projects that involved everything from designing clean user interfaces to integrating APIs and deploying to the cloud.

I enjoy writing maintainable code, collaborating with teams, and continuously improving both the product and myself. While I’ve worked with modern tools like React, Node.js, and AWS, I believe my ability to learn quickly, solve problems, and stay curious is what adds the most value.`;

// export const hero_Text = `I’m a Software Developer with a solid foundation in full-stack development and a focus on building scalable, user-centered solutions.
// I’ve contributed to real-world projects from UI design to API integration and cloud deployment.
// I value clean code, collaboration, and continuous learning more than any single tool or technology.`;
export const hero_Text = `I’m a Software Developer with a strong foundation in full-stack development and a focus on building scalable, real-world solutions. I work across the stack — from building responsive frontend interfaces to designing backend logic and deploying to the cloud. I prioritize clean code, collaboration, and continuous learning over any single framework or tool.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - May 2025",
    role: "Software Engineer Intern",
    company: "Smisha Share Market",
    companyUrl: "https://smishasharemarket.com/",
    logo: "https://smishasharemarket.com/wp-content/uploads/2025/04/SMISHA-1-1536x315.png",
    description: [
      "Built and scaled a full Course Management System (CMS) used by 500+ users.",
      "Developed secure video streaming with Cloudflare, reducing buffering by 40%.",
      "Implemented Razorpay payments with auto-access on purchase.",
      "Added affiliate and partner tracking with real-time CRM dashboards.",
      "Published the official Android app via Trusted Web Activity (TWA).",
      "Integrated RESTful APIs for live market data, improving response time by 40%.",
      "Collaborated on scalable Node.js services and deployed infrastructure on AWS with monitoring and security.",
    ],
    appLink:
      "https://play.google.com/store/apps/details?id=com.gsmtradinginstitute.twa",
    technologies: [
      "React.js",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "AWS",
      "Cloudflare",
      "Razorpay",
      "S3",
      "PWA",
    ],
  },
  {
    year: "May 2024 - Jun 2024",
    role: "Full-Stack Developer Intern",
    company: "Capabl India",
    companyUrl: "https://capabl.in", // Replace with actual URL
    logo: "https://cdn.prod.website-files.com/66af61f906e2326d3e3183a1/67c9910c4b0d2fa80c43bdf4_Capabl%20TM%20logo-p-500.png", // Replace with actual logo URL
    description: [
      `Built full-stack modules for a skill assessment platform`,
      ` Designed responsive UIs with Tailwind CSS and implemented real-time updates using React state management.`,
    ],
    technologies: ["React.js", "Tailwind CSS", "Javascript"],
  },
];

export const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const githubUserName = "Sangam5756";

export const PROJECTS = [

  {
    title: "ImageCompress",
    description:
      "A simple web tool to compress and resize images. Upload, adjust, and download optimized images in seconds. Control compression percentage for better results. Reduces file size with no quality compromise. Fast, lightweight, and easy to use.",
    image:
      "https://raw.githubusercontent.com/Sangam5756/imageCompressor/main/preview.png",
    link: "https://compressit.sangammundhe.tech",
    technologies: ["NextJs", "Javascript", "Tailwind CSS"],
    githubrepo: "https://github.com/Sangam5756/imagecompressor",
  },

    {
    title: "ShopVerse",
    image:
      "https://img.atom.com/story_images/visual_images/1658305987-shopverse.png",
    description:
      "Developed a full-stack eCommerce application using the MERN stack. Integrated features like product browsing, shopping cart, and secure payment processing.",
    technologies: [
      "MongoDB",
      "Node.js",
      "React.Js",
      "TailwindCss",
      "React-Redux",
    ],
    link: "https://shopverse.sangammundhe.tech",
    githubrepo: "https://github.com/Sangam5756/fullstack-eccomerce",
  },

    {
    title: "MovieMind",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnet9BQkqlD0lq-VAZ0yPUmp16Ze5yCUySqQ&s", // Replace with actual image
    description:
      "Created a responsive web app for AI-powered movie recommendations using React and Cohere GPT API. Integrated TMDB API for fetching detailed movie information and deployed the app on Firebase for scalable access.",
    technologies: [
      "React.js",
      "React-Redux",
      "TailwindCSS",
      "Cohere-GPT",
      "Firebase",
    ],
    link: "https://netflixgpt-174a5.web.app",
    githubrepo: "https://github.com/Sangam5756/NamasteReactJs",
  },

   {
    title: "Chatify",
    description:
      "Chatify is a real-time messaging platform where users can join custom chat rooms and exchange messages instantly. Built with WebSocket technology, it allows seamless communication and supports multiple rooms. Users can send messages, receive real-time updates, and enjoy an intuitive chat interface.",
    image:
      "https://play-lh.googleusercontent.com/8xSX7C0edYgitTGwdbqgoB9jt5lp4nO7VY_jkE3jWUCypcugn5aRHSn9Y8-qQA53GSo",
    link: "https://chatify.sangammundhe.tech",
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "React.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    githubrepo: "https://github.com/Sangam5756/chatify",
  },

  
  {
    title: "DevMeet",
    description:
      "DevMeet allows users to create accounts, manage profiles, and explore other profiles.Users can send, accept, reject, or ignore connection requests.View all received requests, connections, and matches in one place.Built with RESTful APIs for efficient authentication, profile, and connection management.Emphasizes secure, tested, and smooth user interactions from signup to connection..",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8y5Q-o9m3sbt0tjPhMr6cxjKsecMaBBR4LA&s",
    link: "https://devmeet.sangammundhe.tech",
    technologies: [
      "MongoDB",
      "Express-js",
      "Node-js",
      "JWT",
      "React-js",
      "Typescript",
      "TailwindCss",
      "DaisyUi",
      "Redux-ToolKit",
    ],
    githubrepo: "https://github.com/Sangam5756/dev-meet",
  },

  {
    title: "AI-GPT",
    description:
      "AI-Code is a platform that leverages  AI to generate code based on natural language input. The system allows users to input programming requirements, and the AI generates the corresponding code in various programming languages. It simplifies coding tasks and helps developers by providing code suggestions, automating repetitive tasks, and enhancing productivity.",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/885/882/non_2x/ai-artificial-intelligence-logo-in-hands-artificial-intelligence-and-machine-learning-concept-sphere-grid-wave-with-binary-code-big-data-innovation-technology-neural-networks-illustration-vector.jpg",
    link: "https://aicode.sangammundhe.tech",
    technologies: ["python", "Flask", "OPEN AI", "React.js"],
    githubrepo: "https://github.com/Sangam5756/AI-CODER",
  },


    {
    title: "GitCode",
    description:
      "Build and deploy a Github-like app using React, MongoDB, Express.js, Passport.js.",
    image:
      "https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
    link: "https://gitcode.sangammundhe.tech",
    technologies: [
      "React",
      "MongoDB",
      "Express-js",
      "Node-js",
      "TailwindCss",
      "Passport.js",
    ],
    githubrepo: "https://github.com/Sangam5756/Github.git",
  },
 

  {
    title: "Online Bookstore and Course Platform",
    description:
      "An interactive web application offering users a platform to browse and purchase books and courses. Built with React.js and MERN stack.",
    image:
      "https://github.com/Sangam5756/BookStore/blob/master/frontend/public/banner.png?raw=true",
    link: "https://bookstore.sangammundhe.tech",
    technologies: [
      "React.js",
      "MongoDB",
      "Express-js",
      "Node.js",
      "TailwindCSS",
    ],
    githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  },

  {
    title: "Dev-Blog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWeZvHHli46VHOaGBwJH-9ChgbJ8uxGMHKA&s", // Replace with actual image
    description:
      "Developed a secure backend API for a blog platform with user authentication and full CRUD functionality for blog posts. Implemented JWT-based authentication to protect routes, ensuring only authorized users can manage posts. Utilized Prisma ORM for efficient database interactions and input validation to maintain data integrity. The API is scalable, secure, and optimized for real-world applications",
    technologies: [
      "React.js",
      "Prisma",
      "Typescript",
      "Hono.js",
      "TailwindCss",
      "PostgreSql",
    ],
    link: "https://devblog.sangammundhe.tech",
    githubrepo: "https://github.com/Sangam5756/Medium-Blog",
  },



  {
    title: "Pawdoption",
    image:
      "https://jacobeddings.com/wp-content/uploads/2023/11/Pawdoption-Splash-Screen-1024x512.png", // Replace with actual image
    description:
      "Built a full-stack pet adoption website with MERN stack, allowing users to browse, adopt, and manage pets. Implemented user authentication and session management for enhanced security.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCss"],
    link: "https://petadop5756.onrender.com/",
    githubrepo: "https://github.com/Sangam5756/Pet-Adoption",
  },

  // {
  //   title: "FuncTube",
  //   image:
  //     "https://i.pinimg.com/736x/2b/23/74/2b237448b0ecda112ebafc89b7e06c05.jpg", // Replace with actual image
  //   description:
  //     "Developed VidVault using React and Redux, enhancing user engagement by 30% and reducing page load time by 25%. Implemented efficient search functionality and caching mechanism, achieving O(1) lookup times and optimizing performance by 40%.",
  //   technologies: [
  //     "React.js",
  //     "React-Redux",
  //     "JavaScript",
  //     "Node.js",
  //     "TailwindCss",
  //   ],
  //   link: "https://vidvault5756.vercel.app",
  //   githubrepo: "https://github.com/Sangam5756/vidVault",
  // },

  {
    title: "Wanderlust (AirbnbClone)",
    description:
      "Welcome to the TravelSite_Web project! This web application aims to provide users with a visually appealing and user-friendly platform to explore and plan their travels.",
    image:
      "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
    link: "https://sangam-project.onrender.com/listing",
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "JavaScript",
      "TailwindCss",
      "BootStrap",
    ],
    githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  },

  {
    title: "TicTacToe Game",
    description:
      "A simple, interactive web-based game built with React.js allowing two players to compete in a 3x3 grid.",
    image:
      "https://img.poki.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66.png",
    link: "https://tictactoe-game-react.onrender.com/",
    technologies: ["React.js", "TailwindCss", "JavaScript"],
    githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  },
  // {
  //   title: "Joke Generator in React",
  //   description:
  //     "Fetches and displays random programming jokes using an external API. Built with React.js and demonstrates the use of Fetch API and React hooks.",
  //   image:
  //     "https://viralcoder.in/wp-content/uploads/2024/01/jokeGenerate-1024x536.png",
  //   link: "https://joke-generator-react.onrender.com/",
  //   technologies: ["React-js", "TailwindCss", "JavaScript", "API"],
  //   githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  // },
  {
    title: "Weather Detection",
    description:
      "A React-based weather app that allows users to search for weather information by city. Data is retrieved from the OpenWeatherMap API.",
    image:
      "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png",
    link: "https://weather-app-d00u.onrender.com/",
    technologies: [
      "React-js",
      "JavaScript",
      "Material-UI",
      "OpenWeatherMap API",
    ],
    githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  },

  // {
  //   title: "Bookshelf",
  //   description:
  //     "A React application allowing users to search for books using the Open Library API and maintain a personal bookshelf using localStorage.",
  //   image:
  //     "https://t3.ftcdn.net/jpg/06/50/58/74/360_F_650587420_iqiG7NXrBaVmU2OtYcMtQhv7zjqdq84E.jpg",
  //   link: "https://bookshelf-k0iy.onrender.com/",
  //   technologies: ["React.js", "LocalStorage", "TailwindCss"],
  //   githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  // },
  // {
  //   title: "Bidding Platform",
  //   description:
  //     "A real-time bidding platform with comprehensive RESTful API support, including user authentication and role-based access control.",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSREn075BYjyiDlcbdy7HTKl83FbXQgA-6kC_4hvq3RuKHIYQNNtvVQ4k2uD_uZdhEY8&usqp=CAU",
  //   technologies: ["MongoDB", "Node-js", "Express.js", "Rest-Api"],
  //   githubrepo: "https://github.com/Sangam5756/PROJECTS.git",
  // },
];

export const CONTACT = {
  address: "Pune, Maharastra , India",
  email: "sangammunde3@gmail.com",
};

export const Resume =
  "https://drive.google.com/file/d/1m1nCLJQ5BVW6uq9xLypHHsr3Ta4KxboF";
export const GitAPi = process.env.NEXT_PUBLIC_GIT_TOKEN;
