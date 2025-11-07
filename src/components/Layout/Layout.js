"use client"

import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme'
import Header from '@/components/Header/Header'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import Footer from '@/components/Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top' className={`${themeName} app`}>
            <Header />

            <main>
                {children}
            </main>

            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Layout
