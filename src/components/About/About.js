/* eslint-disable @next/next/no-img-element */
import { GithubIcon, Linkedin } from 'lucide-react'
import { about } from '@/app/portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

        <div className='about__intro'>
          {name && (
            <h1>
              Oi, me chamo <b className='about__name'>{name}.</b>
            </h1>
          )}

          {role && <h3 className='about__role'>{role}.</h3>}
          <p className='about__desc'>{description && description}</p>
        </div>
      </div>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GithubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <Linkedin />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
