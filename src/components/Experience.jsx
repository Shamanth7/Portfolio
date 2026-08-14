import Reveal from './Reveal'

// TODO: replace with your real work experience, most recent first.
const EXPERIENCE = [
  {
    date: '2026',
    role: 'Gen AI and Agentic AI Engineer',
    org: 'AnalogData.ai',
    desc: 'Researching and implementing Small Language Models (SLMs) and Agentic AI frameworks to optimize local AI deployments, achieving high-performance inference on edge devices with limited compute. Developing multi-agentautonomous workflows to automate complex data extraction and processing tasks, significantly reducing manual intervention and operational latency. Architecting Retrieval-Augmented Generation (RAG) pipelines tailored for SLMs to improve factual accuracy and reduce hallucinations in domain-specific applications. Optimizing local model execution using tools like Ollama and Qdrant techniques, chrmadb to ensure privacy-first, offline AI capabilities for enterprise use cases. Evaluating and benchmarking model performance across various Agentic frameworks (like Langchain,LangGraph, llamaindex, etc) to determine the most stable architectures for production-level agents.',
    tags: ['RAG' , 'Ollama' , 'Qdrant' , 'ChromaDB' , 'Langchain' , 'LangGraph' ,'Llamaindex'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">03</span>
            <h2 className="section-title">Experience</h2>
          </div>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.role + i} delay={i * 90} className="timeline-item">
              <div className="timeline-rail">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.role}</h3>
                <div className="timeline-org">{item.org}</div>
                <p className="timeline-desc">{item.desc}</p>
                {item.tags && (
                  <div className="project-tags">
                    {item.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
