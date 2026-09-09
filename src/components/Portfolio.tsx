import { useState } from 'react'
import Projects from './Projects'
import Education from './Education'
import Awards from './Awards'
import '../styles/portfolio.css'

type View = 'projects' | 'education' | 'awards'

export default function Portfolio() {
  const [view, setView] = useState<View>('projects')

  const tabs: { id: View; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'awards', label: 'Awards' },
  ]

  return (
    <section id="projects" className="container portfolio-root">
      <div className="portfolio-switcher" role="tablist" aria-label="Portfolio views">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            className={`switch-btn ${view === tab.id ? 'active' : ''}`}
            onClick={() => setView(tab.id)}
            aria-selected={view === tab.id}
            aria-controls="portfolio-panel"
            role="tab"
            type="button"
          >
            <span className="switch-index">0{tabs.indexOf(tab) + 1}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="view-content"
        id="portfolio-panel"
        role="tabpanel"
        aria-labelledby={`tab-${view}`}
        tabIndex={0}
      >
        {view === 'projects' && <Projects />}
        {view === 'education' && <Education />}
        {view === 'awards' && <Awards />}
      </div>
    </section>
  )
}
