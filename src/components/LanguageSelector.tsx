'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const languageInfo = {
  'pt-BR': { name: 'Português', flag: '🇧🇷' },
  'en': { name: 'English', flag: '🇺🇸' },
  'it': { name: 'Italiano', flag: '🇮🇹' }
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, changeLanguage, languages } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <span>{languageInfo[currentLanguage].flag}</span>
        <span className="inherit">{languageInfo[currentLanguage].name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang)
                  setIsOpen(false)
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
              >
                <span>{languageInfo[lang].flag}</span>
                <span>{languageInfo[lang].name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 