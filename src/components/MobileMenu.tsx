'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

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
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className={`p-2 rounded-lg transition-colors ${
          isScrolled 
            ? 'text-gray-800 hover:bg-gray-100/10' 
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Abrir menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl z-50 flex flex-col"
            >
              <div className="bg-italian-red p-6">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      scrollToTop()
                      setIsOpen(false)
                    }}
                    className="font-serif text-xl text-white hover:text-white/90 transition-colors"
                  >
                    Cuore & Cucina
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Fechar menu"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6 bg-gray-900">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 text-lg text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="my-6 border-t border-gray-700" />

                <div className="px-4 mb-6">
                  <p className="text-sm font-medium text-gray-400 mb-2">
                    Selecione o idioma
                  </p>
                  <div className="text-white">
                    <LanguageSelector />
                  </div>
                </div>

                <div className="px-4">
                  <button
                    className="w-full px-6 py-3 bg-italian-red text-white rounded-lg hover:bg-italian-red/90 transition-colors text-lg font-medium shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('navigation.reserve')}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 