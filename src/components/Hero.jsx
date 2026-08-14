const LINES = [
  <>
    <span className="kw">const</span> <span className="prop">developer</span> <span className="punc">=</span>{' '}
    <span className="punc">{'{'}</span>
  </>,
  <>
    &nbsp;&nbsp;name<span className="punc">:</span> <span className="str">"b r shamanth"</span>
    <span className="punc">,</span>
  </>,
  <>
    &nbsp;&nbsp;title<span className="punc">:</span> <span className="str">"gen ai and agentic ai engineer, cloud engineer"</span>
    <span className="punc">,</span>
  </>,
  <>
    &nbsp;&nbsp;location<span className="punc">:</span> <span className="str">"hassan, karanataka, india"</span>
    <span className="punc">,</span>
  </>,
  <>
    &nbsp;&nbsp;bio<span className="punc">:</span>{' '}
    <span className="str">"Gen AI Intern and engineering student building intelligent agentic workflows, SLMs, and RAG systems."</span>
    <span className="punc">,</span>
  </>,
  <>
    &nbsp;&nbsp;openTo<span className="punc">:</span> <span className="punc">[</span>
    <span className="str">"opportunities"</span>
   <span className="punc">,</span> <span className="str">"collaborations"</span>
   <span className="punc">,</span> <span className="str">"research collaborations"</span>
   <span className="punc">,</span> <span className="str">"cloud engineering"</span>
   <span className="punc">,</span> <span className="str">"ai agentic workflows"</span>
    <span className="punc">],</span> 
  </>,
  <>
    <span className="punc">{'}'}</span>
    <span className="punc">;</span>
  </>,
]

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container">
        <div className="editor-frame">
          <div className="gutter">
            {LINES.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="code-pane">
            {LINES.map((line, i) => (
              <div
                key={i}
                className="code-line"
                style={{ animationDelay: `${i * 0.12 + 0.1}s` }}
              >
                {line}
                {i === LINES.length - 1 && <span className="cursor" />}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-links">
          {/* TODO: point these at your real resume, GitHub, and email */}
          <a className="btn primary" href="/public/Shamanth_B_R.pdf" target="_blank" rel="noreferrer">
            ↓ Resume
          </a>
          <a className="btn" href="https://github.com/Shamanth7" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/b-r-shamanth/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn" href="mailto:your.brshamanth007@gmail.com">
            Email
          </a>
        </div>
      </div>
    </header>
  )
}
