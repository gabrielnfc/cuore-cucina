import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ToastProvider } from '@/components/Toast'
import '../i18n'

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </LanguageProvider>
  )
}

export default appWithTranslation(App) 