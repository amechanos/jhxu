import '../styles/education.css'

export default function Education() {
  const items = [
    { 
      id: 'edu-1', 
      title: 'Trinity Grammar School', 
      subtitle: 'High school', 
      year: '2020-2025', 
      desc: 'Graduated with ATAR of 93.20 and VCE Media Studies Prize.' 
    },
    { 
      id: 'edu-2', 
      title: 'Monash University', 
      subtitle: 'Bachelor of IT (Games & Immersive Media)', 
      year: '2026-2029', 
      desc: 'Majoring in Games & Immersive Media, Minoring in Writing and Narrative Design. Currently in my first year of study.' 
    },
  ]

  return (
    <div className="education-list">
      {items.map((it) => (
        <article key={it.id} className="education-card">
          <div className="education-body">
            <h3>{it.title}</h3>
            <p className="education-meta">{it.subtitle} • {it.year}</p>
            <p className="education-desc">{it.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
