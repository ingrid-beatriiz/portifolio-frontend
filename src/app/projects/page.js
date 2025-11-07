import { projects } from '@/app/portfolio'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import Layout from '@/components/Layout/Layout'

import './page.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <Layout>
      <section id='projects' className='section projects'>
        <h2 className='section__title'>Projetos</h2>

        <div className='projects__grid'>
          {projects.map((project, i) => (
            <ProjectContainer key={i} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
