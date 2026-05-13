import './skill.css'
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact
} from 'react-icons/fa'
import { SiGoogleads, SiMeta, SiNetlify, SiNpm, SiSemrush, SiVite } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

function Skill() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: FaHtml5, tone: 'html' },
        { name: 'CSS', icon: FaCss3Alt, tone: 'css' },
        { name: 'JavaScript', icon: FaJsSquare, tone: 'js' },
        { name: 'React Js', icon: FaReact, tone: 'react' },
        // { name: 'Vite', icon: SiVite, tone: 'vite' },
        // { name: 'Node Basics', icon: FaNodeJs, tone: 'node' }
      ]
    },
    {
      title: 'Digital Marketing',
      skills: [
        { name: 'SEO', icon: SiSemrush, tone: 'seo' },
        // { name: 'SEM', icon: SiGoogleads, tone: 'google' },
        // { name: 'SMM', icon: SiMeta, tone: 'meta' },
        { name: 'Google Ads', icon: SiGoogleads, tone: 'google' },
        { name: 'Meta Ads', icon: SiMeta, tone: 'meta' },
        // { name: 'Netlify', icon: SiNetlify, tone: 'netlify' }
      ]
    },
    {
      title: 'Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, tone: 'git' },
        { name: 'GitHub', icon: FaGithub, tone: 'github' },
        { name: 'VS Code', icon: VscVscode, tone: 'vscode' },
        // { name: 'NPM', icon: SiNpm, tone: 'npm' },
        // { name: 'Netlify', icon: SiNetlify, tone: 'netlify' }
      ]
    }
  ]

  return (
    <section id="skill" className="skill-section">
      <h2>Skills</h2>
      <p>Here are some of my skills on which I have learnt.</p>

      <div className="cards">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-content">
              {group.skills.map((skill) => {
                const Icon = skill.icon

                return (
                  <span className={`skill-badge tone-${skill.tone}`} key={skill.name}>
                    <Icon className="skill-icon" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </span>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skill
