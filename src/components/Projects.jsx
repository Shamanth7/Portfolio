import { useState } from 'react'
import Reveal from './Reveal'

// TODO: replace with your real projects. Duplicate the object shape to add more.
// - image: add a screenshot/photo of the project to public/projects/ and
//   reference it here as "/projects/your-file.png". Leave as null if you
//   don't have one yet — a placeholder will show instead.
// - caseStudy: link to a write-up (Notion, Medium, PDF, etc). Optional —
//   delete the line if you don't have one.
// - code: your GitHub repo link.
const PROJECTS = [
  {
    name: 'FinGenie – AI-Powered Financial Literacy Platform',
    desc: 'Architected an end-to-end educational platform designed to teach financial literacy to children through interactive, AI-driven guidance and personalized learning paths. Implemented Gamification Modules (Progress tracking, achievements,and rewards) to increase student engagement and retention, translating dry financial concepts into interactive challenges. Engineered a Secure Backend API using FastAPI to manage user data, progress logs, and seamless integration with Small Language Models (SLMs) for real-time tutoring. Designed a Simplified UI/UX specifically for younger demographics, focusing on visual cues and intuitive navigation to make complex topics like budgeting and saving accessible.',
    tags: ['React', 'Node.js' , 'FastAPI' , 'SLMs' , 'UI/UX' , 'Gamification' ,'FastAPI' , 'Python' , 'HTML' , 'CSS' ],
    image: '/projects/Pasted image.png',
    caseStudy: 'https://docs.google.com/document/d/1QCacW7s5c9-mKbo6_6NAhFZtaglTQR4h/edit',
    code: 'https://github.com/Shamanth7/fingenie',
  },
  {
    name: 'Project Two',
    desc: 'Add a short description: what it does, the problem it solves, and your role in it.',
    tags: ['Next.js', 'PostgreSQL'],
    image: '/projects/project-2.png',
    caseStudy: 'https://your-case-study-link.com',
    code: 'https://github.com/GanaviDGowda/IUCEE-culling-game.git',
  },
  {
    name: 'Project Three',
    desc: 'Add a short description: what it does, the problem it solves, and your role in it.',
    tags: ['Python', 'API'],
    image: '/projects/project-3.png',
    caseStudy: 'https://your-case-study-link.com',
    code: 'https://github.com/yourusername/project-three',
  },
]

function ProjectCard({ project, index, delay }) {
  const [failed, setFailed] = useState(false)
  const showImage = project.image && !failed

  return (
    <Reveal delay={delay} className="project-card">
      <div className="project-image-wrap">
        {showImage ? (
          <img
            className="project-image"
            src={project.image}
            alt={project.name}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="project-image-fallback mono">add image</div>
        )}
      </div>

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
