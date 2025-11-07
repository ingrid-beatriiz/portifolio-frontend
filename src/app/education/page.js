import Layout from '@/components/Layout/Layout'
import { experience } from '@/app/portfolio'

import './page.css'
import Card from '@/app/education/components/EducationCard/EducationCard'

const Education = () => {
  if (!experience.education.length) return null

  return (
    <Layout>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Experiencia academica</h2>
        <ul className='skills__list'>
          {experience.education.map((education, i) => (
            <li key={i} className='skills__list-item btn btn--plain'>
              {<Card education={education}></Card>}
            </li>
          ))}
        </ul>
      </section>
    </Layout>

  )
}

export default Education