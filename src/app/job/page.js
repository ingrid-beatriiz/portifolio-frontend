import Layout from '@/components/Layout/Layout'
import { experience } from '@/app/portfolio'

import './page.css'
import Card from '@/app/job/components/JobCard/JobCard'

const Job = () => {
  if (!experience.job.length) return null

  return (
    <Layout>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Experiencia academica</h2>
        <ul className='skills__list'>
          {experience.job.map((job, i) => (
            <li key={i} className='skills__list-item btn btn--plain'>
              {<Card job={job}></Card>}
            </li>
          ))}
        </ul>
      </section>
    </Layout>

  )
}

export default Job