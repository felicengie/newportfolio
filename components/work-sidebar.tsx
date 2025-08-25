// components/work-sidebar.tsx
"use client"

import { cn } from "@/lib/utils"

interface WorkSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  projects?: Array<{ title: string; id: string }>
}

const workTabs = [
  {
    id: "projects",
    label: "Projects",
    icon: "💻"
  },
  {
    id: "clinical-ai-msk",
    label: "Clinical AI at MSK",
    icon: "🧠"
  },
  {
    id: "applied-ai-nature",
    label: "Applied AI for Nature",
    icon: "🌱"
  },
  {
    id: "tech-education",
    label: "Tech Education",
    icon: "👩‍🏫"
  }
]

export function WorkSidebar({ activeTab, onTabChange, projects = [] }: WorkSidebarProps) {
  const showProjectsList = activeTab === "projects" || activeTab.startsWith("project-")

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Felice Chandra</h1>
        <p className="text-gray-600 text-lg">a technical thinker with a creative mind</p>
      </div>
      
      <nav className="space-y-1">
        {workTabs.map((tab) => (
          <div key={tab.id}>
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-colors duration-200",
                (activeTab === tab.id || (tab.id === "projects" && showProjectsList))
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              <span className="text-xl mr-3">{tab.icon}</span>
              {tab.label}
            </button>
            
            {/* Show projects list when Projects tab is active */}
            {tab.id === "projects" && showProjectsList && (
              <div className="ml-6 mt-2 space-y-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => onTabChange(`project-${project.id}`)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200",
                      activeTab === `project-${project.id}`
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}