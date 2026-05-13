import './about.css'

function About() {
  return (
    <section id="about" className="hero">
      <div className="hero-text">
        <h1>
          Hi, I am <span>Prakash</span>
        </h1>
        <p className="role">Frontend and Digital Marketer</p>
        <p>
          Frontend Developer & Digital Marketer passionate about creating responsive and engaging websites.Skilled in building modern, user-friendly web experiences with creative design.Focused on helping brands grow through effective digital marketing strategies and online campaigns.
        </p>
        <div className="hero-actions">
          <a
            className="btn primary"
            href="/Prakash.Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Check Resume
          </a>
          <a className="btn secondary" href="#contact">Contact Me</a>
        </div>
      </div>


      <div className="hero-img">
        <img src="/smile.jpg" alt="Prakash portrait" />
      </div>
    </section>
  )
}

export default About
