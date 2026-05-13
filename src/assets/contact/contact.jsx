import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp
} from 'react-icons/fa'
import './contact.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const footerLinks = [
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skill' },
  { label: 'Education', target: '#education' }
]

const socialLinks = [
  { label: 'Call', href: 'tel:+919360468334', icon: FaPhoneAlt },
  // { label: 'Email', href: 'mailto:shanmugaprakash7575@gmail.com', icon: FaEnvelope },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/919360468334', icon: FaWhatsapp }
]

function Contact() {
  const form = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const sendEmail = async (e) => {
    e.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Add your EmailJS values in the .env file.'
      })
      return
    }

    setIsSending(true)
    setStatus({
      type: '',
      message: ''
    })

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY
        }
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully.'
      })
      e.target.reset()

    } catch (error) {
      console.log(error)
      setStatus({
        type: 'error',
        message: error?.text || 'Message could not be sent. Please verify your EmailJS service, template, and public key.'
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-head contact-head">
        <h2>Contact</h2>
        <p>Have a project in mind or want to work together? Send me a message here.</p>
      </div>

      <div className="contact-shell">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3>Send a Message</h3>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            required
          />

          {status.message ? (
            <p className={`contact-status ${status.type}`} role="status">
              {status.message}
            </p>
          ) : null}

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      <div className="contact-footer">
        <div className="contact-footer-glow" aria-hidden="true" />
        <h3>Shanmugaprakash</h3>

        <nav className="contact-footer-nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.target}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="contact-socials">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {icon({ 'aria-hidden': 'true' })}
            </a>
          ))}
        </div>

        {/* <p>Elevating the Digital Experience !</p> */}
      </div>
    </section>
  )
}

export default Contact
