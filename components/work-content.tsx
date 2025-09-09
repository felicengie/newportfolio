// components/work-content.tsx
import { ProjectCard } from "@/components/project-card"
import Image from "next/image"

interface WorkContentProps {
  activeTab: string
}

interface WorkData {
  title: string
  company: string
  area: string
  techUsed: string
  what: string
  how: string
  impact: string
  images?: string[]
  logo?: string
  documentationLink?: string
}

interface ProjectData {
  id: string
  title: string
  summary: string
  what: string
  how: string
  impact: string
  role: string
  techStack: string[]
  image: string[]
  githubUrl: string
}

// --------- Projects Data ---------
const projects: ProjectData[] = [
  {
    id: "coffee-machine",
    title: "From Coffee Machine to Machine Learning",
    summary: "Location Intelligence | Customer Analytics | NLP",
    what: "Accenture challenged our team to harness data science in solving a real business question: \"Where should the next great NYC coffee shop be opened?\" We approached this with a blend of geospatial analysis, customer sentiment mining, and ML classification.",
    how: "Data Collection & Feature Engineering: We gathered census data and Yelp reviews to identify key features (foot traffic, income levels, review ratings, etc.) influencing coffee shop success.\nModel Training: I trained a Random Forest classifier that achieved 84% accuracy in predicting optimal neighborhoods based on location and sentiment indicators.\nNLP-Driven Insights: I used NLP tools like Hugging Face Transformers and NLTK to extract common themes from Yelp reviews (ambience, drink quality, customer service) and translated that into actionable recommendations.",
    impact: "Provided data-backed location strategy recommendations to Accenture stakeholders.\nDemonstrated the power of combining machine learning and qualitative review mining to inform business decisions.\nStrengthened our team's presentation skills through stakeholder-facing demos and Q&A.",
    role: "Accenture Machine Learning Challenge",
    techStack: ["Python", "Pandas", "Scikit-learn", "Hugging Face", "NLTK"],
    image: ["/coffeemachine/impact1.png", "/coffeemachine/impact2.png", "/coffeemachine/impact3.png", "/coffeemachine/impact4.png", "/coffeemachine/impact5.png", "/coffeemachine/impact6.png"],
    githubUrl: "https://github.com/felicengie/coffeshops",
  },
  {
    id: "financial-planner",
    title: "Lifetime Financial Planner (LFP)",
    summary: "Fullstack Development | Fintech | UX Design",
    what: "The challenge: Young adults often lack the tools or knowledge to make informed long-term financial decisions. Our team built LFP, a responsive financial planning web app designed to demystify budgeting, retirement planning, and life-event forecasting.",
    how: "Frontend & UI: I led frontend development using React, translating wireframes into clean, responsive UI components. I also designed in Figma to ensure alignment between the design and engineering team.\nBackend & Database: I collaborated on the backend API using Node.js and Express, setting up user data flow and integrating with MongoDB for persistent user scenarios.\nTeam Coordination: I facilitated weekly stand-ups, managed sprint boards, and contributed to feature prioritization — ensuring the app launched ahead of schedule.",
    impact: "Delivered an MVP that was well-received by users for its clarity and usability.\nAccelerated financial awareness for non-technical users through intuitive simulations.\nDeveloped critical skills in fullstack collaboration and user-centered design.",
    role: "Software Engineering Project",
    techStack: ["JavaScript", "React", "Node.js", "MongoDB", "Figma"],
    image: ["/financialplanner/ui.png", "/financialplanner/uitwo.png"],
    githubUrl: "https://github.com/felicengie/StollerFanClub-LFP",
  },
  {
    id: "buzzmania",
    title: "BuzzMania",
    summary: "Fullstack Web Application | Game Design",
    what: "BuzzMania is a web application inspired by Cookie Clicker, challenging users to click and accumulate resources in a fun and addictive gameplay loop.",
    how: "Frontend Development: Built interactive game components with React and styled UI using CSS and HTML.\nGame Logic: Implemented click-based scoring system, dynamic level-ups, and resource management.\nState Management: Used JavaScript to handle state persistence and real-time user interactions.",
    impact: "Created a fully functional, responsive web game demonstrating fullstack development skills.\nUsers can engage in addictive gameplay while exploring React and JavaScript capabilities.",
    role: "SBUHacks Project",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    image: ["/buzzmania/impact1.jpg"],
    githubUrl: "https://github.com/kaitchau/buzzmania",
  },
  {
    id: "enigma-machine",
    title: "Enigma Machine",
    summary: "Python | Simulation | Cryptography",
    what: "A Python program simulating the historic Enigma Machine, featuring rotors, a plugboard, and a reflector to encode and decode messages securely.",
    how: "Algorithm Implementation: Developed rotor and plugboard mechanisms following Enigma encryption logic.\nSimulation: Built interactive CLI allowing users to encode and decode messages.\nTesting: Verified correctness of encryption by comparing input/output across multiple scenarios.",
    impact: "Replicated a historically significant encryption machine.\nEnhanced understanding of cryptography concepts and Python programming.",
    role: "Software Security Project",
    techStack: ["Python"],
    image: [],
    githubUrl: "https://github.com/felicengie/engimaMachine",
  },
  {
    id: "phreddit",
    title: "Phreddit - Web Application",
    summary: "Fullstack Web Application | Social Platform",
    what: "Phreddit is a fullstack web application inspired by Reddit, enabling users to create communities, post content, and engage with other users.",
    how: "Frontend Development: Used React to build dynamic, responsive user interfaces.\nBackend Development: Developed RESTful APIs with Node.js and Express for posts, comments, and user authentication.\nDatabase: Managed user data and posts using MongoDB, ensuring persistent storage and fast queries.",
    impact: "Delivered a working social platform demonstrating fullstack development capabilities.\nEnabled user-generated content and community interaction with authentication and moderation features.",
    role: "Software Development Project",
    techStack: ["React", "Node.js", "JavaScript"],
    image: [],
    githubUrl: "https://github.com/felicengie/Phreddit",
  },
  {
    id: "bigbackvoyage",
    title: "Big Back Voyage - Wolfie Edition",
    summary: "Fullstack Web Application | Recommendation System",
    what: "Big Back Voyage is a fun web app like Akinator for food, helping users discover the perfect nearby cuisine by answering a few playful questions.",
    how: "Frontend Development: Built UI with React and styled with CSS to create an engaging, user-friendly experience.\nLogic & Recommendation: Implemented question-answer logic to narrow down food preferences and suggest nearby restaurants.\nData Handling: Integrated external APIs for location and cuisine data.",
    impact: "Provided a playful, interactive food recommendation experience.\nDemonstrated integration of frontend, backend logic, and external APIs in a fullstack project.",
    role: "Hopper Hacks Project",
    techStack: ["React", "CSS", "JavaScript"],
    image: [],
    githubUrl: "https://github.com/jkyc38/hopperhacksv2",
  },
  {
    id: "tcp-chat",
    title: "Custom TCP Chat Protocol",
    summary: "Python | Networking | UDP & TCP",
    what: "A chat application allowing users to send messages with a custom reliable transport protocol built on top of UDP.",
    how: "Protocol Implementation: Designed a custom reliable transport protocol on top of UDP.\nMessage Handling: Developed Python-based client-server communication with TCP-like reliability.\nTesting: Conducted extensive message transfer tests to ensure reliability and error handling.",
    impact: "Demonstrated understanding of networking concepts, TCP/UDP protocols, and Python implementation.\nBuilt a fully functioning chat system with message reliability.",
    role: "Computer Networks Project",
    techStack: ["Python"],
    image: [],
    githubUrl: "https://github.com/felicengie/chat-application-tcp-udp",
  },
  {
    id: "real-estate-ai-chatbot",
    title: "Real Estate AI Chatbot",
    summary: "Conversational AI | Next.js | Flask | RAG | Multi-Agent System",
    what: "A multi-agent conversational AI built for Okada & Company, transforming NYC commercial property recommendations into a cinematic AI crime-syndicate style experience.",
    how: "Frontend: Built a responsive Next.js UI for chat interaction.\nBackend: Developed Flask APIs to handle RAG-based queries and maintain conversation state.\nAgent Personas: Created multiple mafia-style AI agents with distinct personalities for engaging, informative conversations.\nData Analysis: Integrated financial, spatial, and QoL metrics to generate property recommendations.",
    impact: "Delivered a unique AI-powered property recommendation system.\nDemonstrated fullstack development, AI integration, and multi-agent conversational design.\nEnhanced user engagement through entertaining and informative agent personas.",
    role: "Okada & Company Hackathon",
    techStack: ["Next.js", "Flask", "Tailwind", "Python", "OpenAI"],
    image: [],
    githubUrl: "https://github.com/jkyc38/hackathonv2/tree/main",
  },
  {
    id: "matcha-bell",
    title: "Matcha Bell: Real-Time Matcha Stock Alerts",
    summary: "Web Scraping | Discord Bot | Automation",
    what: "Matcha Bell is a Discord bot designed to monitor popular matcha vendors and send real-time alerts when products are back in stock. With ceremonial-grade matcha selling out quickly, this bot helps matcha enthusiasts secure their favorite products without constantly refreshing multiple websites.",
    how: "Web Scraping & Data Monitoring: I implemented scraping routines using Axios and Playwright to detect stock status and price changes across multiple vendor sites, including Japanese and US-based sellers.\nDiscord Integration: Built the bot using Discord.js to send alerts to dedicated channels and allow users to subscribe/unsubscribe to vendor-specific notifications.\nAutomated Scheduling & Reliability: Used cron jobs for scheduled stock checks and added error handling with retries and delays to minimize request failures and prevent server overload.\nInteractive Features: Enabled role-based subscriptions, ephemeral replies, and interactive buttons so users can easily manage alerts within Discord.",
    impact: "Reduced the time users spend monitoring matcha vendors manually.\nDelivered timely, actionable notifications to Discord communities.\nDemonstrated automation of web scraping, data monitoring, and real-time alerting in a community-driven platform.",
    role: "Personal Project caused by my obsession with matcha",
    techStack: ["Node.js", "Discord.js", "Axios", "Playwright", "Cron", "JavaScript"],
    image: ["/matchabot/impact1.png", "/matchabot/impact2.png"],
    githubUrl: "https://github.com/felicengie/matcha-ringer-bot"
  }
]

// --------- Work Data ---------
const clinicalAIMSK: WorkData = {
  title: "Clinical AI at MSK",
  company: "Memorial Sloan Kettering Cancer Center",
  area: "ML Inference | Medical Imaging | Data Infrastructure",
  techUsed: "Snowflake, SQL, Snowpark Container Services, Python",
  what: "Memorial Sloan Kettering's Data and Analytics team was focused on scaling machine learning solutions across clinical workflows, particularly for image-heavy pipelines like chest X-ray segmentation. The challenge was to build a secure, fast, and reproducible pipeline to accelerate model iterations and prepare the system for real-time integration with clinical tools like Epic.",
  how: "Inference Pipeline Optimization: I developed and deployed an ML inference pipeline in Snowflake using SQL and Snowpark container services, enabling the processing of over 2,000 chest X-ray images. By leveraging GPU-accelerated compute pools and container-based execution, we achieved a 25× speedup over traditional Python-based pipelines.\n\nSecure Integration Testing: I worked with MSK's data scientist and product lead to validate and document secure access pathways for 20+ privacy-focused use cases. This included preparing the infrastructure for real-time model calls within Epic.\n\nHackathon Conceptualization: As part of MSK's intern challenge, I co-led the winning team that conceptualized an AI-powered skin cancer detection app designed for at-home use. Our idea focused on accessibility, using image classification to detect skin abnormalities and generate alerts for follow-up care.",
  impact: "The pipeline significantly reduced image processing time, enabling quicker testing and deployment of medical AI models.\n\nOur work laid the groundwork for future integration of machine learning into MSK's live clinical tools.\n\nThe SkinMonitor prototype earned 1st place and is being evaluated for future pilot testing within MSK's digital health ecosystem.",
  images: [
    "/mskcc/impact1.png",
    "/mskcc/impact2.png",
    "/mskcc/impact3.png",
    "/mskcc/impact4.png"
  ],
  logo: "/mskcc/mskcc-logo.webp"
}
const appliedAINature: WorkData = {
  title: "Applied AI for Nature",
  company: "Break Through Tech AI (Cornell Tech)",
  area: "Computer Vision | Deep Learning | Botanical Image Classification",
  techUsed: "Python, TensorFlow, Scikit-learn, CNNs",
  what: "As part of a year-long AI fellowship, I worked with the New York Botanical Garden to tackle a major image classification challenge: distinguishing high-quality vs. non-standard specimen images from a vast dataset of over 7.8 million botanical photos.",
  how: "Model Development: I built a Convolutional Neural Network (CNN) to automate the classification of botanical images. After experimenting with several architectures, I fine-tuned a model that could handle common inconsistencies in specimen imagery (e.g., lighting, angles, missing parts).\n\nTraining & Evaluation: I applied image augmentation and model evaluation techniques to prevent overfitting and ensure robust performance. The final model achieved 89.78% accuracy in test scenarios.\n\nCross-functional Collaboration: I worked within a 4-person team, presenting our results to research stakeholders and contributing to documentation that could guide further refinement by domain experts.",
  impact: "Helped NYBG streamline digital archiving by reducing manual image sorting.\n\nDelivered a scalable, reproducible pipeline for future ML efforts in natural sciences.\n\nStrengthened my understanding of deep learning workflows applied to real-world scientific data.",
  images: [
    "/btt/intro.png",
    "/btt/impact1.png",
    "/btt/impact2.png"
  ],
  documentationLink: "https://www.breakthroughtech.org/what-we-do/stories-insights/climate-science-x-artificial-intelligence/",
  logo: "/btt/Break-Through-Tech-logo.png"
}
const techEducation: WorkData = {
  title: "Tech Education with Generation Girl",
  company: "Generation Girl",
  area: "Curriculum Design | Teaching & Mentorship | Inclusive Tech Education",
  techUsed: "Swift, Data Structures & Algorithms, Visual Design Tools",
  what: "Generation Girl is a nonprofit focused on introducing high school girls in Indonesia to the world of technology. As a Teaching Assistant, I joined the effort to make STEM accessible, fun, and empowering for young women, many of whom were coding for the very first time.",
  how: "Curriculum Development: I partnered with mentors to design a beginner-friendly mobile development curriculum using Swift, focusing on fundamental programming concepts like data types, loops, and functions. We integrated real-world examples to keep the sessions engaging and relevant.\n\nMentorship & Support: I led small group sessions, offering 1:1 mentorship to ensure each student understood core programming logic and completed their capstone project — their first-ever mobile app. I tailored my teaching style to support different learning paces and used visual tools to break down abstract concepts.\n\nCommunity Building: Beyond teaching, I helped foster a safe and inclusive learning environment, encouraging questions, experimentation, and creative exploration. I also contributed to daily check-ins and feedback loops to help continuously improve the learning experience.",
  impact: "Empowered 20+ high school students to go from zero coding experience to launching their own mobile apps.\n\nHelped students build confidence in presenting their tech projects during a virtual showcase.\n\nSupported Generation Girl's mission to close the gender gap in tech — one learner at a time.",
  images: [
    "/generationgirl/backstory.png",
    "/generationgirl/goals.png",
    "/generationgirl/vision.png",
    "/generationgirl/impact1.png",
    "/generationgirl/impact2.png",
    "/generationgirl/impact3.png"
  ],
  documentationLink: "https://www.instagram.com/reel/CX3aPdcqAfT/?utm_source=ig_web_copy_link",
  logo: "/generationgirl/GG-Logo.png"
}


// --------- Section Component ---------
const Section = ({ title, content }: { title: string, content: React.ReactNode }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</div>
  </div>
)

// --------- Render Functions ---------
const renderProjectSection = (project: ProjectData) => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <p className="text-sm text-gray-500 mb-2">{project.summary}</p>
      <p className="text-lg text-gray-600 mb-4">{project.role}</p>
      <h1 className="text-3xl font-bold text-gray-900 bg-gray-100 px-6 py-4 rounded-lg">
        {project.title}
      </h1>
    </div>

    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Section title="The What" content={project.what} />
      <Section title="The How" content={project.how} />
      <Section title="The Impact" content={project.impact} />

      {project.image && project.image.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Project Screenshots:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.image.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Code →
          </a>
        )}
      </div>
    </div>
  </div>
)

const renderWorkSection = (work: WorkData) => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <p className="text-sm text-gray-500 mb-2">{work.area}</p>
      <p className="text-lg text-gray-600 mb-4">
        Company: <span className="font-bold text-red-600">{work.company}</span>
      </p>

      {work.logo && (
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-24">
            <Image
              src={work.logo}
              alt={`${work.company} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900 bg-gray-100 px-6 py-4 rounded-lg">
        {work.title}
      </h1>
    </div>

    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Tech Stack:</h2>
        <p className="text-gray-700 leading-relaxed font-medium bg-blue-50 px-4 py-2 rounded-lg">
          {work.techUsed}
        </p>
      </div>

      <Section title="The What" content={work.what} />
      <Section title="The How" content={work.how} />
      <Section title="The Impact" content={work.impact} />

      {work.images && work.images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Project Screenshots:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {work.images.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <Image
                  src={img}
                  alt={`${work.title} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {work.documentationLink && (
            <div className="mt-6">
              <a
                href={work.documentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium underline"
              >
                {work.title === "Applied AI for Nature" ? "Read More →" : "View Full Documentation →"}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
)

// --------- Main Component ---------
export function WorkContent({ activeTab }: WorkContentProps) {
  if (activeTab.startsWith("project-")) {
    const projectId = activeTab.replace("project-", "")
    const selectedProject = projects.find(p => p.id === projectId)
    if (selectedProject) {
      return <div className="flex-1 p-8">{renderProjectSection(selectedProject)}</div>
    }
  }

  if (activeTab === "projects") {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-gray-600 text-lg">
              Click on any project in the sidebar to view detailed information, or browse the overview cards below.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                image={project.image[0]} // Use first image for the card
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === "clinical-ai-msk") return <div className="flex-1 p-8">{renderWorkSection(clinicalAIMSK)}</div>
  if (activeTab === "applied-ai-nature") return <div className="flex-1 p-8">{renderWorkSection(appliedAINature)}</div>
  if (activeTab === "tech-education") return <div className="flex-1 p-8">{renderWorkSection(techEducation)}</div>

  return null
}

// Export projects data for sidebar
export { projects }