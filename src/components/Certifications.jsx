import { useState } from 'react'
import Reveal from './Reveal'

// TODO: replace with your real certifications. For "image", add your certificate
// image/badge to public/certs/ and reference it as "/certs/your-file.png".
// If you don't have an image for one yet, just leave image as null.
const CERTIFICATIONS = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    image: '/certs/a1.png',
  },
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2023',
    image: '/certs/cert-2.png',
  },
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2023',
    image: '/certs/cert-3.png',
  },
]

function CertCard({ cert, delay }) {
  const [failed, setFailed] = useState(false)
  const showImage = cert.image && !failed

  return (
    <Reveal delay={delay} className="cert-card">
      <div className="cert-image-wrap">
        {showImage ? (
          <img
            className="cert-image"
            src={cert.image}
            alt={cert.name}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="cert-image-fallback mono">add image</div>
        )}
      </div>
      <span className="cert-name">{cert.name}</span>
      <span className="cert-issuer">{cert.issuer}</span>
      <span className="cert-date">{cert.date}</span>
    </Reveal>
  )
}

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-tag">06</span>
            <h2 className="section-title">Certifications</h2>
          </div>
        </Reveal>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.name + i} cert={cert} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
