'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import LanguageSelector from './LanguageSelector'
import Button from './Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  )
  const textColor = useTransform(
    scrollY,
    [0, 50],
    ['rgb(255, 255, 255)', 'rgb(31, 41, 55)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#menu', label: t('navigation.menu') },
    { href: '#about', label: t('navigation.about') },
    { href: '#contact', label: t('navigation.contact') },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.nav
      style={{ backgroundColor: navBackground }}
      className="fixed w-full z-50 transition-shadow backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="font-serif text-2xl transition-colors relative group"
        >
          <motion.span style={{ color: textColor }}>
            Cuore & Cucina
          </motion.span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-italian-red transition-all group-hover:w-full" />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group"
            >
              <motion.span
                style={{ color: textColor }}
                className="transition-colors hover:text-italian-red"
              >
                {item.label}
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-italian-red transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <div className={!isScrolled ? 'text-white' : ''}>
            <LanguageSelector />
          </div>
          
          <Button
            variant={isScrolled ? 'primary' : 'outline'}
            className={!isScrolled ? 'text-white border-white hover:bg-white hover:text-italian-red' : ''}
          >
            {t('navigation.reserve')}
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.nav>
  )
} 