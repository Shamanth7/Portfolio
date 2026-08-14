import Reveal from './Reveal'

// TODO: edit these arrays to match your real stack. Add/remove groups as needed.
const SKILL_GROUPS = [
  {
    label: 'Programming Languages',
    items: ['Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'AI / Machine Learning',
    items: [
      'Generative AI',
      'Agentic AI',
      'Small Language Models (SLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'TensorFlow',
      'PyTorch',
    ],
  },
  {
    label: 'AI / LLM Frameworks & Technologies',
    items: [
      'LangChain',
      'LangGraph',
      'LangServe',
      'LangSmith',
      'MCP (Model Context Protocol)',
      'Ollama',
      'n8n (Automation)',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'Plotly',
      'Streamlit',
    ],
  },
  {
    label: 'Backend & Web Development',
    items: ['FastAPI', 'Django', 'HTML', 'CSS', 'React', 'Next.js'],
  },
  {
    label: 'Databases & Vector Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'ChromaDB', 'Qdrant'],
  },
  {
    label: 'DevOps, Cloud & Infrastructure',
    items: ['Docker', 'Kubernetes', 'AWS'],
  },
  {
    label: 'Version Control & Collaboration',
    items: ['Git', 'GitHub'],
  },
  {
    label: 'Operating Systems',
    items: ['Windows', 'Linux (Ubuntu)'],
  },
  {
    label: 'UI/UX & Design',
    items: ['UI/UX', 'Figma', 'Canva'],
  },
  {
    label: 'Video / Content Creation',
    items: ['CapCut'],
  },
  {
    label: 'Soft Skills',
    items: ['Teamwork', 'Leadership', 'Communication'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">02</span>
            <h2 className="section-title">Skills</h2>
          </div>
        </Reveal>

        <div className="skills-groups">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div className="skill-group-label">{group.label}</div>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
