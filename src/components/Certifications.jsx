import { useState } from 'react'
import Reveal from './Reveal'

// TODO: replace with your real certifications. For "image", add your certificate
// image/badge to public/certs/ and reference it as "/certs/your-file.png".
// If you don't have an image for one yet, just leave image as null.
const CERTIFICATIONS = [
  {
    name: 'ICAIES',
    issuer: 'RIT, HASSAN in collab with Springer',
    date: '2025',
    image: '/certs/Screenshot from 2026-08-14 21-59-11.png',
  },
  {
    name: 'ICDSIS',
    issuer: 'MCE, HASSAN in collab with IEEE',
    date: '2025',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.55 PM.jpeg',
  },
  {
    name: 'AI Agents intensive course',
    issuer: 'Kaggle in collab with google',
    date: '2026',
    image: '/certs/Screenshot from 2026-08-14 21-59-47.png',
  },
  {
    name: 'AWS Cloud Architecting',
    issuer: 'AWS Academy',
    date: '2025',
    image: '/certs/Screenshot from 2026-08-14 22-04-22.png',
  },
  {
    name: '1st place in techathon',
    issuer: 'SRIT, Coimbatore,Chennai ',
    date: '2024',
    image: '/certs/Screenshot from 2026-08-14 22-00-21.png',
  },
  {
    name: '1st place Ideation Workshop',
    issuer: 'MCE, HASSAN in collab with AICTE Idea Lab',
    date: '2022',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.54 PM (2).jpeg',
  },
  {
    name: '2nd place in Paper 2 Perspective in InnoFesta',
    issuer: 'HITAM, hyderabad ',
    date: '2024',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.52 PM.jpeg',
  },
  {
    name: 'Best Presentation Format in InnoFesta',
    issuer: 'HITAM, hyderabad ',
    date: '2024',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.51 PM.jpeg',
  },
  {
    name: 'Special mention in Public Administration',
    issuer: 'Anurag University, hyderabad',
    date: '2023',
    image: '/certs/Screenshot from 2026-08-14 22-00-08.png',
  },
  {
    name: 'Machine Learning workshop',
    issuer: 'IIT Bombay in collab with AWS ',
    date: '2024',
    image: '/certs/Screenshot from 2026-08-14 22-02-29.png',
  },
  {
    name: 'Cloud Computing workshop',
    issuer: 'IIT Madras ',
    date: '2024',
    image: '/certs/Screenshot from 2026-08-14 22-03-10.png',
  },
  {
    name: 'Fullstack Development',
    issuer: 'IIT Madras',
    date: '2024',
    image: '/certs/Screenshot from 2026-08-14 22-03-25.png',
  },
  {
    name: 'Internal Trainer in UI/UX using Figma',
    issuer: 'IUCEE MCE, HASSAN',
    date: '2024',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.49 PM.jpeg',
  },
  {
    name: 'IASF',
    issuer: 'VVCE, Mysore',
    date: '2023',
    image: '/certs/Screenshot from 2026-08-14 22-01-47.png',
  },
  {
    name: 'IGNITING YOUNG MINDS 3.0',
    issuer: 'MCE, HASSAN in collab with Unnat Bharat Abhiyan',
    date: '2023',
    image: '/certs/Screenshot from 2026-08-14 22-03-43.png',
  },
  {
    name: 'Hackathon condected by ISE Dept',
    issuer: 'AIT, Chikkamagaluru ',
    date: '2024',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.50 PM.jpeg',
  },
  {
    name: 'The Big Bull',
    issuer: 'ME-RIISE MCE, hassan ',
    date: '2023',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.54 PM (3).jpeg',
  },
  {
    name: 'INNOFESTA 2023',
    issuer: 'HITAM, hyderabad',
    date: '2023',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.53 PM (1).jpeg',
  },
  {
    name: 'INNOFESTA 2024',
    issuer: 'HITAM, hyderabad',
    date: '2024',
    image: '/certs/WhatsApp Image 2026-08-18 at 1.40.53 PM.jpeg',
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
