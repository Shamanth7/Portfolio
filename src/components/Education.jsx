import Reveal from './Reveal'

// TODO: replace with your real education history, most recent first.
const EDUCATION = [
  {
    date: '2023 — 2026',
    role: 'B.Tech in Computer Science',
    org: 'Malnad College Of Engineering',
    desc: 'Relevant Coursework: Artificial Intelligence, Machine Learning, and Systems Development. Notable Achievements: First-prize winner in an E-waste management hackathon, presented AI research at the ICAIES 2025 international conference, and served in a senior leadership role for the IUCEE EWB student chapter. Key Projects: Developed "EcoSort AI Assistant" (Kaggle capstone) and "FinGenie". Additional Credentials: Completed the Kaggle x Google AI Agents Intensive Course.',
  },
  {
    date: '2021 — 2022',
    role: 'PU in CS',
    org: 'Brilliant PU College',
    desc: 'Focused on foundational coursework in Computer Science, Mathematics, and core sciences. Built a strong base in programming fundamentals, algorithmic thinking, and analytical problem-solving.',
  },
  {
    date: '2010 — 2020',
    role: 'CBSE Student',
    org: 'kendriya vidyalaya',
    desc: 'Completed comprehensive secondary education under the CBSE board. Cultivated a strong competitive drive and collaborative spirit as a regional-level school cricket player, developing strong teamwork, discipline, and competitive sportsmanship.',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">05</span>
            <h2 className="section-title">Education</h2>
          </div>
        </Reveal>

        <div className="timeline">
          {EDUCATION.map((item, i) => (
            <Reveal key={item.role + i} delay={i * 90} className="timeline-item">
              <div className="timeline-rail">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.role}</h3>
                <div className="timeline-org">{item.org}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
