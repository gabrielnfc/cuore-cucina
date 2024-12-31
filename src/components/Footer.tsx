'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl text-italian-red">
              Cuore & Cucina
            </Link>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-serif text-xl mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#menu" className="text-gray-400 hover:text-italian-red transition-colors">
                  {t('footer.quickLinks.menu')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-italian-red transition-colors">
                  {t('footer.quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-italian-red transition-colors">
                  {t('footer.quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="font-serif text-xl mb-4">{t('footer.hours.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.hours.weekdays')}</li>
              <li>{t('footer.hours.weekend')}</li>
              <li>{t('footer.hours.sunday')}</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-xl mb-4">{t('footer.contact.title')}</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>{t('footer.contact.address.street')}</p>
              <p>{t('footer.contact.address.neighborhood')}</p>
              <p>{t('footer.contact.address.city')}</p>
              <p>{t('footer.contact.address.phone')}</p>
            </address>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  )
} 