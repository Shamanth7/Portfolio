import { useEffect, useState } from 'react'

const TABS = [
  { id: 'hero', label: 'intro', ext: '.tsx' },
  { id: 'about', label: 'about', ext: '.tsx' },
  { id: 'skills', label: 'skills', ext: '.json' },
  { id: 'experience', label: 'experience', ext: '.log' },
  { id: 'projects', label: 'projects', ext: '.tsx' },
  { id: 'education', label: 'education', ext: '.md' },
  { id: 'certifications', label: 'certifications', ext: '.json' },
  { id: 'contact', label: 'contact', ext: '.tsx' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="tabbar">
      <div className="tabbar-inner">
        <div className="tab-dots">
          <span className="tab-dot red" />
          <span className="tab-dot yellow" />
          <span className="tab-dot green" />
        </div>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab${active === tab.id ? ' active' : ''}`}
            onClick={() => goTo(tab.id)}
          >
            {tab.label}
            <span className="dim">{tab.ext}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
