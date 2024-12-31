'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section (Home) */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Interior do Restaurante Cuore & Cucina"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex gap-4">
                <button className="btn-primary">
                  {t('hero.cta.reserve')}
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-italian-green transition-all duration-300">
                  {t('hero.cta.menu')}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Menu Section */}
        <MenuSection />

        <SectionDivider />

        {/* About Section */}
        <AboutSection />

        <SectionDivider />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </>
  )
} 