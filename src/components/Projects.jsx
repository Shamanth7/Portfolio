import { useState } from 'react'
import Reveal from './Reveal'

// TODO: replace with your real projects. Duplicate the object shape to add more.
// - images: an array of 1+ screenshots. Add them to public/projects/ and
//   list the paths here, e.g. ['/projects/p1-a.png', '/projects/p1-b.png'].
//   One image works fine too — just use a single-item array.
// - caseStudy: link to a write-up (Notion, Medium, PDF, etc). Optional —
//   delete the line if you don't have one.
// - code: your GitHub repo link.
const PROJECTS = [
  {
    name: 'FinGenie – AI-Powered Financial Literacy Platform',
    desc: 'Architected an end-to-end educational platform designed to teach financial literacy to children through interactive, AI-driven guidance and personalized learning paths. Implemented Gamification Modules (Progress tracking, achievements, and rewards) to increase student engagement and retention, translating dry financial concepts into interactive challenges. Engineered a Secure Backend API using FastAPI to manage user data, progress logs, and seamless integration with Small Language Models (SLMs) for real-time tutoring. Designed a Simplified UI/UX specifically for younger demographics, focusing on visual cues and intuitive navigation to make complex topics like budgeting and saving accessible.',
    tags: ['React', 'Node.js', 'FastAPI', 'SLMs', 'UI/UX', 'Gamification', 'Python', 'HTML', 'CSS'],
    images: ['/projects/Pasted image.png'],
    caseStudy: 'https://docs.google.com/document/d/1QCacW7s5c9-mKbo6_6NAhFZtaglTQR4h/edit',
    code: 'https://github.com/Shamanth7/fingenie',
  },
  {
    name: 'Project One',
    desc: '...',
    tags: ['React', 'Node.js'],
    images: ['/projects/project-1-a.png', '/projects/project-1-b.png'],
    caseStudy: 'https://your-case-study-link.com',
    code: 'https://github.com/yourusername/project-one',
  },
]

function ProjectGallery({ images, name }) {
  const [index, setIndex] = useState(0)
  const [failedSet, setFailedSet] = useState(() => new Set())

  const validImages = images || []
  const current = validImages[index]
  const currentFailed = failedSet.has(current)
  const showImage = current && !currentFailed

  const go = (delta) => {
    setIndex((i) => (i + delta + validImages.length) % validImages.length)
  }

  const markFailed = (src) => {
    setFailedSet((prev) => new Set(prev).add(src))
  }

  return (
    <div className="project-image-wrap">
      {showImage ? (
        <img
          className="project-image"
          src={current}
          alt={`${name} screenshot ${index + 1}`}
          onError={() => markFailed(current)}
        />
      ) : (
        <div className="project-image-fallback mono">add image</div>
      )}

      {validImages.length > 1 && (
        <>
          <button
            type="button"
            className="project-image-nav prev"
            aria-label="Previous image"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="project-image-nav next"
            aria-label="Next image"
            onClick={() => go(1)}
          >
            ›
          </button>
          <div className="project-image-dots">
            {validImages.map((img, i) => (
              <button
                key={img + i}
                type="button"
                className={`project-image-dot${i === index ? ' active' : ''}`}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project, index, delay }) {
  return (
    <Reveal delay={delay} className="project-card">
      <ProjectGallery images={project.images} name={project.name} />

      <div className="project-body">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.caseStudy && (
            <a href={project.caseStudy} target="_blank" rel="noreferrer">
              Case Study ↗
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">04</span>
            <h2 className="section-title">Projects</h2>
          </div>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
