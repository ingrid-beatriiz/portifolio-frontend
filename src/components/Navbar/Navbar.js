"use client"

import { useContext, useState } from 'react'
import { SunDim, Moon, X, MenuIcon } from 'lucide-react'
import { ThemeContext } from '@/contexts/theme'
import { projects, experience, stack } from '@/app/portfolio'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <Link
              href='/projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projetos
            </Link>
          </li>
        ) : null}

        {experience.education.length  ? (
          <li className='nav__list-item'>
            <Link
              href='/education'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Experiência Acadêmica
            </Link>
          </li>
        ) : null}

        {experience.job.length ? (
          <li className='nav__list-item'>
            <Link
              href='/job'
              onClick={toggleNavList}
              className='link link--nav'
            >
               Experiência Profissional
            </Link>
          </li>
        ) : null}

        {stack.length ? (
          <li className='nav__list-item'>
            <Link
              href='/stack'
              onClick={toggleNavList}
              className='link link--nav'
            >
               <p>Sobre o portfolio</p>
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <SunDim /> : <Moon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <X /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
