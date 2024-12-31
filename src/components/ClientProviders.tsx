'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ToastProvider } from '@/components/Toast'
import { useI18n } from '@/hooks/useI18n'

export default function ClientProviders({ children }: { children: ReactNode }) {
  const isI18nInitialized = useI18n()

  if (!isI18nInitialized) {
    return null
  }

  return (
    <LanguageProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </LanguageProvider>
  )
} 