'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

type Language = 'pt-BR' | 'en' | 'it'

interface LanguageContextType {
  currentLanguage: Language
  changeLanguage: (lang: Language) => void
  languages: Language[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(i18n.language as Language || 'pt-BR')
  const languages: Language[] = ['pt-BR', 'en', 'it']

  const changeLanguage = async (lang: Language) => {
    await i18n.changeLanguage(lang)
    setCurrentLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && languages.includes(savedLanguage)) {
        changeLanguage(savedLanguage)
      }
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 