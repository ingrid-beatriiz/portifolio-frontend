import Layout from '@/components/Layout/Layout'
import { stack } from '@/app/portfolio'

import './page.css'

const Stack = () => {
  if (!stack.length) return null

  return (
    <Layout>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Stack do portifolio</h2>
        <ul className='skills__list'>
          {stack.map((skill, i) => (
            <li key={i} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </Layout>

  )
}

export default Stack