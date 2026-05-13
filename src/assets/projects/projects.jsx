import { useState } from 'react'
import './projects.css'

function Projects() {
  const filters = ["All",'Website', 'SEO', 'Meta Ads', 'Landing Page']

  const projectList = [
    {
      title: 'Ecommerce Website',
      year: '2024',
      category: 'Website',
      stack: ['React'],
      image: '/project.image.1.png',
      accent: 'accent-blue',
      previewClass: 'preview-devfolio',
      description: 'This project is a professionally developed Carpenter Services Web Application built using HTML, CSS, and JavaScript. The application is designed to provide a structured and user-friendly platform for showcasing carpentry services, managing customer inquiries, and enabling seamless service booking interactions.',
      details:
        'This website project focuses on presenting carpentry services in a clean and professional format. It includes clear service sections, enquiry flow, and strong visual layout decisions that help users understand the offer quickly. The goal of the project is to build trust, improve usability, and make customer interaction simple on both desktop and mobile devices.',
      codeUrl: '#projects',
      liveUrl: '#projects'
    },
    {
      title: 'FreshCart Store',
      year: '2024',
      category: 'Website',
      stack: ['HTML', 'CSS', 'JavaScript'],
      image: '/project.image.2.png',
      accent: 'accent-green',
      previewClass: 'preview-store',
      description: 'A product-based shopping interface designed to highlight featured items, offers, and user-friendly browsing.',
      details:
        'FreshCart Store is a sample ecommerce interface created to show category browsing, featured products, and offer-focused layouts. The structure is designed to keep the shopping experience simple, with attention given to product visibility, clean spacing, and conversion-focused call-to-action areas.',
      codeUrl: '#projects',
      liveUrl: '#projects'
    },
    {
      title: 'RankBoost Audit',
      year: '2024',
      category: 'SEO',
      stack: ['SEO', 'Analytics', 'Audit'],
      accent: 'accent-lime',
      previewClass: 'preview-seo-audit',
      description: 'A sample SEO optimization project focused on technical fixes and keyword improvements.',
      details:
        'This SEO project highlights technical site auditing, page optimization planning, and keyword improvement strategy. The work is aimed at increasing search visibility, improving crawl health, and building a stronger content structure for long-term ranking growth.',
      codeUrl: '#projects',
      liveUrl: '#projects'
    },
    {
      title: 'Organic Reach Plan',
      year: '2025',
      category: 'SEO',
      stack: ['SEO', 'Content', 'SERP'],
      accent: 'accent-emerald',
      previewClass: 'preview-seo-content',
      description: 'An SEO content strategy sample designed to increase rankings and organic engagement.',
      details:
        'Organic Reach Plan focuses on content clustering, keyword intent mapping, and improved metadata planning. This project demonstrates how a structured content strategy can support higher search rankings and better organic user engagement over time.',
      codeUrl: '#projects',
      liveUrl: '#projects'
    },
    // {
    //   title: 'Local Search Growth',
    //   year: '2025',
    //   category: 'SEO',
    //   stack: ['SEO', 'GMB', 'Local'],
    //   accent: 'accent-teal',
    //   previewClass: 'preview-seo-local',
    //   description: 'A local SEO concept for improving visibility, trust signals, and nearby traffic.',
    //   details:
    //     'This local SEO concept is built around business listing quality, map visibility, local keyword targeting, and trust-focused optimization. It is designed to help location-based businesses gain more nearby traffic and stronger presence in local search results.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    // {
    //   title: 'Fashion Meta Campaign',
    //   year: '2024',
    //   category: 'Meta Ads',
    //   stack: ['Meta Ads', 'Creative', 'Leads'],
    //   accent: 'accent-pink',
    //   previewClass: 'preview-meta-fashion',
    //   description: 'A Meta Ads campaign concept built to increase reach and conversions for fashion products.',
    //   details:
    //     'This campaign concept was designed around high-visual creatives, audience targeting ideas, and conversion-focused messaging for fashion products. The objective is to improve campaign reach, generate clicks, and support product sales through social traffic.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    // {
    //   title: 'Course Launch Ads',
    //   year: '2025',
    //   category: 'Meta Ads',
    //   stack: ['Meta Ads', 'Funnels', 'CTR'],
    //   accent: 'accent-violet',
    //   previewClass: 'preview-meta-course',
    //   description: 'A lead generation ad funnel for an online course launch using compelling creatives.',
    //   details:
    //     'Course Launch Ads is a sample paid campaign structure created to support online course promotion. It focuses on attention-grabbing copy, lead capture, and ad funnel planning that can turn interest into signups or enquiries.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    // {
    //   title: 'Food Brand Promotion',
    //   year: '2025',
    //   category: 'Meta Ads',
    //   stack: ['Meta Ads', 'Branding', 'Sales'],
    //   accent: 'accent-rose',
    //   previewClass: 'preview-meta-food',
    //   description: 'A promotional social ad project tailored for food brand awareness and offer campaigns.',
    //   details:
    //     'This project presents a paid social campaign concept for a food brand, built with offer-driven visuals and branding consistency. The approach is aimed at increasing awareness, improving engagement, and driving purchase interest through attractive creatives.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    // {
    //   title: 'SaaS Launch Page',
    //   year: '2024',
    //   category: 'Landing Page',
    //   stack: ['HTML', 'CSS', 'Copywriting'],
    //   accent: 'accent-indigo',
    //   previewClass: 'preview-landing-saas',
    //   description: 'A focused landing page concept crafted to explain a product quickly and drive signups.',
    //   details:
    //     'This landing page is designed for product launch campaigns where clarity and conversion are important. The layout highlights strong messaging, benefit-led sections, and clear actions that guide users toward signup or demo interest.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    // {
    //   title: 'Fitness Promo Page',
    //   year: '2025',
    //   category: 'Landing Page',
    //   stack: ['HTML', 'CSS', 'CTA'],
    //   accent: 'accent-orange',
    //   previewClass: 'preview-landing-fitness',
    //   description: 'A high-energy landing page designed for fitness campaigns and trial conversions.',
    //   details:
    //     'Fitness Promo Page is structured to support trial signups and promotional campaigns. It uses a bold visual style, clear call-to-action flow, and short persuasive sections that keep visitors focused on the main conversion goal.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    // {
    //   title: 'Event Registration Page',
    //   year: '2025',
    //   category: 'Landing Page',
    //   stack: ['React', 'UI', 'Forms'],
    //   accent: 'accent-yellow',
    //   previewClass: 'preview-landing-event',
    //   description: 'A registration-focused event page with strong visual hierarchy and clear form flow.',
    //   details:
    //     'This event landing page is designed around registration flow, event highlights, and a simple action path. The goal is to reduce friction for users while keeping the design engaging enough to support interest and attendee conversion.',
    //   codeUrl: '#projects',
    //   liveUrl: '#projects'
    // },
    
  ]

  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects =
    activeFilter === 'All'
      ? projectList.slice(0, 12)
      : projectList.filter((project) => project.category === activeFilter).slice(0, 3)

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
          >
            {project.image ? (
              <div className="project-preview">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            ) : (
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
            )}

            <div className="project-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.year}</small>
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
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            <div className="project-modal-preview">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-modal-image"
                />
              ) : (
                <div className={`project-preview ${selectedProject.previewClass}`}>
                  <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="browser-frame">
                    <div className={`preview-surface ${selectedProject.accent}`}>
                      <div className="preview-overlay">
                        <div className="preview-chip" />
                        <div className="preview-title" />
                        <div className="preview-line short" />
                        <div className="preview-line" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="project-modal-body">
              <h3>{selectedProject.title}</h3>
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
                <a href={selectedProject.codeUrl} className="project-modal-button">
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
