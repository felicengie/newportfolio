import { Navigation } from "@/components/navigation"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Student Performance Analytics Dashboard",
    summary: "ML-powered dashboard predicting student success and identifying at-risk students",
    what: "Built a comprehensive analytics platform that helps educators identify students who might need additional support by analyzing academic performance patterns, attendance data, and engagement metrics.",
    how: "Developed using Python for data processing and machine learning (scikit-learn, pandas), React for the frontend dashboard, and Flask for the API. Implemented multiple ML models including Random Forest and Gradient Boosting to predict student outcomes.",
    impact:
      "Deployed at SBU's tutoring center, helping identify 85% of at-risk students early in the semester, leading to a 23% improvement in course completion rates.",
    role: "Individual project - Handled full-stack development, data preprocessing, model training, and UI/UX design.",
    techStack: ["Python", "scikit-learn", "React", "Flask", "PostgreSQL", "Chart.js", "Pandas"],
    image: "/student-analytics-dashboard.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Recipe Recommendation System",
    summary: "AI-powered app that suggests personalized recipes based on dietary preferences and ingredients",
    what: "Created an intelligent recipe recommendation system that learns user preferences and suggests meals based on available ingredients, dietary restrictions, and nutritional goals.",
    how: "Built using collaborative filtering and content-based recommendation algorithms with TensorFlow. The frontend uses Next.js with a clean, intuitive interface for recipe browsing and meal planning.",
    impact:
      "Gained 500+ active users in beta testing, with 78% user retention rate and average session time of 12 minutes.",
    role: "Team of 3 - Led backend development and ML implementation, collaborated on API design and database architecture.",
    techStack: ["Python", "TensorFlow", "Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: "/recipe-app-interface.png",
    githubUrl: "#",
    demoUrl: "#",
    figmaUrl: "#",
  },
  {
    title: "Campus Event Management Platform",
    summary: "Full-stack web application streamlining event organization and attendance tracking",
    what: "Developed a comprehensive platform for managing campus events, allowing organizations to create events, track RSVPs, and analyze attendance patterns while providing students with a centralized event discovery system.",
    how: "Built with React frontend, Node.js/Express backend, and PostgreSQL database. Implemented real-time notifications using Socket.io and integrated with Google Calendar API for seamless scheduling.",
    impact:
      "Adopted by 15+ student organizations at SBU, managing 200+ events with 5,000+ total attendees in the first semester.",
    role: "Team of 4 - Focused on frontend development, user experience design, and database optimization.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Google Calendar API"],
    image: "/event-platform-calendar.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Climate Data Visualization Tool",
    summary: "Interactive web tool for exploring and analyzing climate change data trends",
    what: "Created an interactive visualization platform that makes climate data accessible to the general public, featuring dynamic charts, geographic heat maps, and trend analysis tools for temperature, precipitation, and CO2 data.",
    how: "Utilized D3.js for custom data visualizations, Python for data processing and API development, and React for the interactive frontend. Integrated multiple climate datasets from NOAA and NASA APIs.",
    impact:
      "Featured in SBU's Environmental Science department and used by 200+ students for research projects. Received recognition at the university's sustainability showcase.",
    role: "Individual project - Handled data analysis, visualization design, and full-stack development.",
    techStack: ["Python", "D3.js", "React", "FastAPI", "NumPy", "Pandas", "NOAA API"],
    image: "/climate-data-visualization.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Personal Finance Tracker",
    summary: "Mobile-responsive app helping students manage budgets and track spending habits",
    what: "Designed and built a personal finance application specifically for college students, featuring expense categorization, budget planning, and financial goal tracking with educational resources about financial literacy.",
    how: "Developed using React Native for cross-platform mobile support, with Firebase for real-time data synchronization and user authentication. Implemented data visualization using Chart.js for spending insights.",
    impact:
      "Used by 100+ fellow students, helping users reduce unnecessary spending by an average of 30% and improve financial awareness.",
    role: "Individual project - Responsible for UI/UX design, mobile development, and backend integration.",
    techStack: ["React Native", "Firebase", "Chart.js", "Expo", "JavaScript", "CSS"],
    image: "/mobile-finance-app.png",
    githubUrl: "#",
    demoUrl: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectsHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
