"use client"

import { cn } from "@/lib/utils"

interface WorkSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
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

export function WorkSidebar({ activeTab, onTabChange }: WorkSidebarProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Felice</h1>
        <p className="text-gray-600 text-lg">a technical thinker with a creative mind</p>
      </div>
      
      <nav className="space-y-1">
        {workTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg transition-colors duration-200",
              activeTab === tab.id
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            )}
          >
            <span className="text-xl mr-3">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
