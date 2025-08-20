"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { WorkSidebar } from "@/components/work-sidebar"
import { WorkContent } from "@/components/work-content"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="flex pt-20">
        <WorkSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <WorkContent activeTab={activeTab} />
      </div>
    </main>
  )
}
