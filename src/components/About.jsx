import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">01</span>
            <h2 className="section-title">About</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {/* TODO: replace with your real bio, 2-4 short paragraphs */}
            <p>
              <span className="placeholder">[I am an Information Science and Engineering student at Malnad College of Engineering, passionate about building intelligent systems. My development journey is driven by a desire to solve real-world problems, leading to milestones like winning a hackathon with my EcoSort AI assistant and presenting AI research at ICAIES 2025.]</span>
            </p>
            <p>
              <span className="placeholder">[Having recently completed a Generative AI Internship at AnalogData.ai, my technical focus lies in Agentic AI, Small Language Models (SLMs), and RAG pipelines. I thrive on designing robust automation workflows using n8n and developing practical, impact-driven applications like FinGeniedd a paragraph about what kind of work you enjoy,
              your focus areas, or what you're currently learning.]</span>
            </p>
            <p>
              <span className="placeholder">[Outside of coding, I explore my creative side through photography and graphic design, and I actively mentor juniors within our college's IUCEE EWB chapter. I am currently looking for new opportunities, hackathons, and collaborations that push the boundaries of artificial intelligence.]</span>
            </p>
          </Reveal>

          <Reveal className="about-card" delay={100}>
            <dl>
              <dt>role</dt>
              <dd className="mono">Generative AI Engineer</dd>

              <dt>based_in</dt>
              <dd className="mono">Hassan, Karnataka, India</dd>

              <dt>experience</dt>
              <dd className="mono">Student / Entry-level</dd>

              <dt>currently</dt>
              <dd className="mono">Open to new AI opportunities</dd>

              <dt>focus</dt>
              <dd className="mono">WAgentic AI, n8n Automation, cloud & Python </dd>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
