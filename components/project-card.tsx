import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  summary: string
  what: string
  how: string
  impact: string
  role: string
  techStack: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  figmaUrl?: string
}

export function ProjectCard({
  title,
  summary,
  what,
  how,
  impact,
  role,
  techStack,
  image,
  githubUrl,
  figmaUrl,
}: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/images/placeholder.svg"}
          alt={`${title} project screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground font-medium">{summary}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">What</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{what}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">How</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{how}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Impact</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{impact}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">My Role</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{role}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            {githubUrl && (
              <Button asChild size="sm" variant="outline">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            )}
            {figmaUrl && (
              <Button asChild size="sm" variant="outline">
                <Link href={figmaUrl} target="_blank" rel="noopener noreferrer">
                  Design
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
