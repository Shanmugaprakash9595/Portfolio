import './education.css'

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-head">
        <h2>Education</h2>
        <p>Academic and practical learning path that built my development foundation.</p>
      </div>

      <div className="timeline">
        <article>
          <h3>M.COM-(Master of Commerce) <small>(2024-2026)</small></h3>
          <p>P.S.R  Arts and Science College Sivakasi,Virudhunagar District.</p>
          <p>Madurai Kamaraj University.</p>
          <p>CGPA- 8.93</p>
        </article>
        
        <article>
          <h3>B.CPM(PA)-(Bachelor of Commerce in Professional Accounting) <small>(2020-2023)</small></h3>
          <p>SRI S.Ramasamy Naidu Memorial College Sattur,Virudhunagar District.</p>
          <p>Madurai Kamaraj University.</p>
          <p>CGPA- 7.31</p>
        </article>

      </div>
    </section>
  )
}

export default Education
