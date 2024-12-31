'use client'

import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  EnvelopeIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: t('contact.address.title'),
      content: (
        <div className="space-y-1">
          <p className="font-medium text-gray-800">{t('contact.address.street')}</p>
          <p className="text-gray-600">{t('contact.address.neighborhood')}</p>
          <p className="text-gray-600">{t('contact.address.city')}</p>
          <p className="text-gray-600">{t('contact.address.country')}</p>
        </div>
      ),
      action: {
        label: 'Ver no Google Maps',
        href: 'https://goo.gl/maps/your-restaurant-location',
        icon: '→'
      }
    },
    {
      icon: PhoneIcon,
      title: t('contact.phone.title'),
      content: (
        <div className="space-y-1">
          <p className="font-medium text-gray-800">{t('contact.phone.main')}</p>
          <p className="text-gray-600">{t('contact.phone.mobile')}</p>
        </div>
      ),
      action: {
        label: 'Ligar agora',
        href: `tel:${t('contact.phone.main')}`,
        icon: '→'
      }
    },
    {
      icon: ClockIcon,
      title: t('contact.hours.title'),
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-800">{t('contact.hours.weekdays.title')}</p>
            <p className="text-gray-600">{t('contact.hours.weekdays.hours')}</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">{t('contact.hours.weekend.title')}</p>
            <p className="text-gray-600">{t('contact.hours.weekend.hours')}</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">{t('contact.hours.sunday.title')}</p>
            <p className="text-gray-600">{t('contact.hours.sunday.hours')}</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="contact" className="relative py-20 bg-italian-white overflow-hidden">
      {/* Decoração de Fundo Moderna */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-italian-red/10 to-transparent transform rotate-45" />
        </div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96">
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-italian-green/10 to-transparent transform -rotate-45" />
        </div>
        <div className="absolute top-1/4 left-0 w-24 h-[1px] bg-gradient-to-r from-italian-red/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-24 h-[1px] bg-gradient-to-l from-italian-green/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-24 h-[1px] bg-gradient-to-r from-italian-red/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-24 h-[1px] bg-gradient-to-l from-italian-green/20 to-transparent" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-italian-red mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-italian-red/10 text-italian-red rounded-lg group-hover:bg-italian-red group-hover:text-white transition-all duration-300">
                        <info.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold mb-3 text-gray-900 group-hover:text-italian-red transition-colors">
                        {info.title}
                      </h3>
                      <div className="text-base">
                        {info.content}
                      </div>
                      {info.action && (
                        <a
                          href={info.action.href}
                          className="inline-flex items-center gap-2 mt-4 text-italian-red hover:text-italian-red/80 font-medium transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.action.label}
                          <span className="transform group-hover:translate-x-1 transition-transform">
                            {info.action.icon}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-full flex items-stretch"
            >
              <div className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.1234567890123!2d-40.2890123!3d-20.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIwJzQ0LjQiUyA0MMKwMTcnMjAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '600px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-italian-red text-white rounded-xl hover:bg-italian-red/90 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <CalendarIcon className="w-5 h-5" />
              {t('contact.cta')}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 