// app/projects/page.tsx
"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { WorkSidebar } from "@/components/work-sidebar"
import { WorkContent, projects } from "@/components/work-content"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects")

  // Transform projects data for sidebar
  const projectsForSidebar = projects.map(project => ({
    title: project.title,
    id: project.id
  }))

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="flex pt-20">
        <WorkSidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          projects={projectsForSidebar}
        />
        <WorkContent activeTab={activeTab} />
      </div>
    </main>
  )
}