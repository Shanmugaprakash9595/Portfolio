import Head from './assets/header/header.jsx'
import About from './assets/about/about.jsx'
import Contact from './assets/contact/contact.jsx'
import Education from './assets/education/education.jsx'
import Projects from './assets/projects/projects.jsx'
import Skill from './assets/skill/skill.jsx'
import Visionary from './assets/visionary/visionary.jsx'

function App() {
  return (
    <>
      <Head />
      <main>
        <About />
        <Skill />
        <Visionary />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
