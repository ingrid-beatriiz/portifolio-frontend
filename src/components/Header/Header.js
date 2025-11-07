import { header } from '@/app/portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import Link from 'next/link'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <Link href={homepage} className='link'>
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
