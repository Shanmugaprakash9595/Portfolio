import { useEffect, useState } from 'react'
import './projects.css'

function Projects() {
  const filters = ['All', 'Website', 'SEO', 'Meta Ads', 'Landing Page']

  const projectList = [
    {
      title: 'Green Mart',
      year: '2024',
      category: 'Website',
      stack: ['React'],
      image: '/project.image.1.png',
      accent: 'accent-blue',
      previewClass: 'preview-devfolio',
      description:
        'An agriculture ecommerce website for browsing farm products and adding items to cart.',
      details:
        'Green Mart is an agriculture-focused ecommerce website built for farmers and buyers to explore products like seeds, fertilizers, plant nutrition, machinery, and equipment. The project includes a clean homepage, product search, category navigation, login access, and cart flow to make product browsing simple and user friendly.',
      codeUrl: 'https://github.com/Shanmugaprakash9595/Green-Mart.git',
      liveUrl: 'https://shanmugaprakash9595.github.io/Green-Mart/',
    },
    {
      title: 'Woodwork',
      year: '2024',
      category: 'Website',
      stack: ['HTML', 'CSS', 'JavaScript'],
      image: '/project.image.2.png',
      accent: 'accent-green',
      previewClass: 'preview-store',
      description:
        'A carpentry service website for showcasing interior woodwork and custom designs.',
      details:
        'Woodwork is a service-based website created for interior design and carpentry businesses. It presents custom woodwork, craftsmanship-focused messaging, service navigation, and a clear contact action so visitors can quickly understand the business and make an enquiry.',
      codeUrl: 'https://github.com/Shanmugaprakash9595/Woodwork.git',
      liveUrl: 'https://shanmugaprakash9595.github.io/Woodwork/',
    },
    // {
    //   title: 'RankBoost Audit',
    //   year: '2024',
    //   category: 'SEO',
    //   stack: ['SEO', 'Analytics', 'Audit'],
    //   accent: 'accent-lime',
    //   previewClass: 'preview-seo-audit',
    //   description:
    //     'A sample SEO optimization project focused on technical fixes and keyword improvements.',
    //   details:
    //     'This SEO project highlights technical site auditing, page optimization planning, and keyword improvement strategy. The work is aimed at increasing search visibility, improving crawl health, and building a stronger content structure for long-term ranking growth.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects',
    // },
    // {
    //   title: 'Organic Reach Plan',
    //   year: '2025',
    //   category: 'SEO',
    //   stack: ['SEO', 'Content', 'SERP'],
    //   accent: 'accent-emerald',
    //   previewClass: 'preview-seo-content',
    //   description:
    //     'An SEO content strategy sample designed to increase rankings and organic engagement.',
    //   details:
    //     'Organic Reach Plan focuses on content clustering, keyword intent mapping, and improved metadata planning. This project demonstrates how a structured content strategy can support higher search rankings and better organic user engagement over time.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects',
    // },
  ]

  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProject])

  const visibleProjects =
    activeFilter === 'All'
      ? projectList.slice(0, 12)
      : projectList.filter((project) => project.category === activeFilter).slice(0, 3)

  const renderProjectVisual = (project, isModal = false) => {
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className={isModal ? 'project-modal-image' : 'project-image'}
        />
      )
    }

    return (
      <div className={`project-preview ${project.previewClass}`}>
        <div className="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-frame">
          <div className={`preview-surface ${project.accent}`}>
            <div className="preview-overlay">
              <div className="preview-chip" />
              <div className="preview-title" />
              <div className="preview-line short" />
              <div className="preview-line" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-head">
        <h2>Projects</h2>
        <p>
          I have worked on a wide range of projects, from web apps to landing
          pages. Here are some of my featured works.
        </p>
      </div>

      <div className="projects-filters" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-pill ${activeFilter === filter ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setSelectedProject(project)
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="project-preview">{renderProjectVisual(project)}</div>

            <div className="project-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-card-footer">
              <small>{project.year}</small>
              {/* <span className="project-card-cta">Open Preview</span> */}
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-preview-title"
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close preview"
            >
              &times;
            </button>

            <div className="project-modal-preview">
              {renderProjectVisual(selectedProject, true)}
            </div>

            <div className="project-modal-body">
              <h3 id="project-preview-title">{selectedProject.title}</h3>
              <p className="project-modal-year">{selectedProject.year}</p>

              <div className="project-tags project-modal-tags">
                {selectedProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <p className="project-modal-text">
                {selectedProject.details || selectedProject.description}
              </p>

              <div className="project-modal-actions">
                <a
                  href={selectedProject.codeUrl}
                  className="project-modal-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  className="project-modal-button project-modal-button-primary"
                >
                  View Live App
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Projects
