import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import '../styles/projects.css'

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="projects-list">
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          tech={p.tech}
          url={p.url}
          isActive={activeId === p.id}
          onToggle={() => setActiveId(activeId === p.id ? null : p.id)}
        />
      ))}
    </div>
  )
}
