export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container footer-inner">
        <span>© {year} Your Name</span>
        <span>built with React · deployed on Vercel</span>
      </div>
    </footer>
  )
}
