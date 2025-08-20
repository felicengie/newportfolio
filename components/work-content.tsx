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

const projects = [
  {
    title: "☕ From Coffee Machine to Machine Learning",
    summary: "Location Intelligence | Customer Analytics | NLP",
    what: "Accenture challenged our team to harness data science in solving a real business question: \"Where should the next great NYC coffee shop be opened?\" We approached this with a blend of geospatial analysis, customer sentiment mining, and ML classification.",
    how: "Data Collection & Feature Engineering: We gathered census data and Yelp reviews to identify key features (foot traffic, income levels, review ratings, etc.) influencing coffee shop success.\nModel Training: I trained a Random Forest classifier that achieved 84% accuracy in predicting optimal neighborhoods based on location and sentiment indicators.\nNLP-Driven Insights: I used NLP tools like Hugging Face Transformers and NLTK to extract common themes from Yelp reviews (ambience, drink quality, customer service) and translated that into actionable recommendations.",
    impact: "Provided data-backed location strategy recommendations to Accenture stakeholders.\nDemonstrated the power of combining machine learning and qualitative review mining to inform business decisions.\nStrengthened our team's presentation skills through stakeholder-facing demos and Q&A.",
    role: "Company: Accenture x Break Through Tech AI Sprint\nTech Used: Python, Pandas, Scikit-learn, Hugging Face, NLTK",
    techStack: ["Python", "Pandas", "Scikit-learn", "Hugging Face", "NLTK"],
    image: "/coffeemachine/impact1.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "💰 Lifetime Financial Planner (LFP)",
    summary: "Fullstack Development | Fintech | UX Design",
    what: "The challenge: Young adults often lack the tools or knowledge to make informed long-term financial decisions. Our team built LFP, a responsive financial planning web app designed to demystify budgeting, retirement planning, and life-event forecasting.",
    how: "Frontend & UI: I led frontend development using React, translating wireframes into clean, responsive UI components. I also designed in Figma to ensure alignment between the design and engineering team.\nBackend & Database: I collaborated on the backend API using Node.js and Express, setting up user data flow and integrating with MongoDB for persistent user scenarios.\nTeam Coordination: I facilitated weekly stand-ups, managed sprint boards, and contributed to feature prioritization — ensuring the app launched ahead of schedule.",
    impact: "Delivered an MVP that was well-received by users for its clarity and usability.\nAccelerated financial awareness for non-technical users through intuitive simulations.\nDeveloped critical skills in fullstack collaboration and user-centered design.",
    role: "Company: Break Through Tech Product Studio\nTech Used: JavaScript, React, Node.js, MongoDB, Figma",
    techStack: ["JavaScript", "React", "Node.js", "MongoDB", "Figma"],
    image: "/financialplanner/ui.png",
    githubUrl: "#",
    demoUrl: "#",
  }
]

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

export function WorkContent({ activeTab }: WorkContentProps) {
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">The What:</h2>
          <p className="text-gray-700 leading-relaxed">{work.what}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The How:</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{work.how}</div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Impact:</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{work.impact}</div>
        </div>

        {work.images && (
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.images.map((image: string, index: number) => (
                <div key={index} className="relative overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={image}
                    alt={`${work.title} documentation ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-contain w-full h-auto"
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
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

  if (activeTab === "projects") {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === "clinical-ai-msk") {
    return (
      <div className="flex-1 p-8">
        {renderWorkSection(clinicalAIMSK)}
      </div>
    )
  }

  if (activeTab === "applied-ai-nature") {
    return (
      <div className="flex-1 p-8">
        {renderWorkSection(appliedAINature)}
      </div>
    )
  }

  if (activeTab === "tech-education") {
    return (
      <div className="flex-1 p-8">
        {renderWorkSection(techEducation)}
      </div>
    )
  }

  return null
}
