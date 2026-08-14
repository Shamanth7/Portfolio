import Reveal from './Reveal'

// TODO: replace with your real projects. Duplicate the object shape to add more.
const PROJECTS = [
  {
    name: 'FinGenie – AI-Powered Financial Literacy Platform',
    desc: 'Architected an end-to-end educational platform designed to teach financial literacy to children through interactive, AI-driven guidance and personalized learning paths. Implemented Gamification Modules (Progress tracking, achievements,and rewards) to increase student engagement and retention, translating dry financial concepts into interactive challenges. Engineered a Secure Backend API using FastAPI to manage user data, progress logs, and seamless integration with Small Language Models (SLMs) for real-time tutoring. Designed a Simplified UI/UX specifically for younger demographics, focusing on visual cues and intuitive navigation to make complex topics like budgeting and saving accessible.',
    tags: ['React', 'Node.js' , 'FastAPI' , 'SLMs' , 'UI/UX' , 'Gamification' ,'FastAPI' , 'Python' , 'HTML' , 'CSS'],
    live: 'https://your-live-link.com',
    code: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Project Two',
    desc: 'Add a short description: what it does, the problem it solves, and your role in it.',
    tags: ['Next.js', 'PostgreSQL'],
    live: 'https://your-live-link.com',
    code: 'https://github.com/yourusername/project-two',
  },
  {
    name: 'Project Three',
    desc: 'Add a short description: what it does, the problem it solves, and your role in it.',
    tags: ['Python', 'API'],
    live: 'https://your-live-link.com',
    code: 'https://github.com/yourusername/project-three',
  },
]

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
            <Reveal key={project.name} delay={i * 90} className="project-card">
              <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
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
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live ↗
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  Code ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
