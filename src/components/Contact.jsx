import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">07</span>
            <h2 className="section-title">Contact</h2>
          </div>
        </Reveal>

        <Reveal className="contact-block">
          <div className="contact-prompt">$ open mailto</div>
          {/* TODO: replace with your real email */}
          <a className="contact-email" href="mailto:your.brshamanth007@gmail.com">
            brshamanth007@gmail.com
          </a>
          <div className="contact-socials">
            {/* TODO: replace with your real links, remove any you don't use */}
            <a className="btn" href="https://www.instagram.com/b.r.shamanth?igsh=NGdsMHZ2eXQ3ZHZ0" target="_blank" rel="noreferrer">
              Instgram
            </a>
            <a className="btn" href="hhttps://www.linkedin.com/in/b-r-shamanth/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href="https://github.com/Shamanth7" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
