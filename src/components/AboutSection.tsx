'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { 
  HeartIcon, 
  SparklesIcon, 
  HomeIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline'

export default function AboutSection() {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const features = [
    {
      key: 'tradition',
      title: t('about.tradition.title'),
      description: t('about.tradition.description'),
      icon: HeartIcon,
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
    },
    {
      key: 'ingredients',
      title: t('about.ingredients.title'),
      description: t('about.ingredients.description'),
      icon: SparklesIcon,
      image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e',
    },
    {
      key: 'ambience',
      title: t('about.ambience.title'),
      description: t('about.ambience.description'),
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    },
    {
      key: 'team',
      title: t('about.team.title'),
      description: t('about.team.description'),
      icon: UserGroupIcon,
      image: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf',
    },
  ]

  return (
    <section id="about" className="py-20 bg-italian-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:translate-y-12' : ''
                }`}
              >
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className="w-6 h-6" />
                      <h3 className="font-serif text-2xl">{feature.title}</h3>
                    </div>
                    <p className="text-white/90">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 