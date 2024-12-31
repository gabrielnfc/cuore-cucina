'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

type MenuItem = {
  id: number
  nameKey: string
  descriptionKey: string
  price: string
  category: string
  image: string
  dietary?: string[]
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    nameKey: 'menu.items.carbonara.name',
    descriptionKey: 'menu.items.carbonara.description',
    price: 'R$ 68',
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
  },
  {
    id: 2,
    nameKey: 'menu.items.margherita.name',
    descriptionKey: 'menu.items.margherita.description',
    price: 'R$ 55',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    dietary: ['vegetarian'],
  },
  {
    id: 3,
    nameKey: 'menu.items.bruschetta.name',
    descriptionKey: 'menu.items.bruschetta.description',
    price: 'R$ 32',
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
    dietary: ['vegetarian'],
  },
  {
    id: 4,
    nameKey: 'menu.items.lasagna.name',
    descriptionKey: 'menu.items.lasagna.description',
    price: 'R$ 72',
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3',
  },
  {
    id: 5,
    nameKey: 'menu.items.ossobuco.name',
    descriptionKey: 'menu.items.ossobuco.description',
    price: 'R$ 98',
    category: 'secondi',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
  },
  {
    id: 6,
    nameKey: 'menu.items.tiramisu.name',
    descriptionKey: 'menu.items.tiramisu.description',
    price: 'R$ 28',
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
  },
  {
    id: 7,
    nameKey: 'menu.items.pannacotta.name',
    descriptionKey: 'menu.items.pannacotta.description',
    price: 'R$ 24',
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc',
  },
  {
    id: 8,
    nameKey: 'menu.items.caprese.name',
    descriptionKey: 'menu.items.caprese.description',
    price: 'R$ 42',
    category: 'antipasti',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
    dietary: ['vegetarian'],
  }
]

export default function MenuSection() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: t('menu.categories.all') },
    { id: 'antipasti', name: t('menu.categories.antipasti') },
    { id: 'pasta', name: t('menu.categories.pasta') },
    { id: 'pizza', name: t('menu.categories.pizza') },
    { id: 'secondi', name: t('menu.categories.secondi') },
    { id: 'dolci', name: t('menu.categories.dolci') },
  ]

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          {t('menu.title')}
        </motion.h2>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-italian-red text-white scale-105'
                  : 'bg-italian-white text-gray-700 hover:bg-italian-green hover:text-white hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Lista de Pratos */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(item.nameKey)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-italian-green group-hover:text-italian-red transition-colors">
                      {t(item.nameKey)}
                    </h3>
                    <span className="font-bold text-italian-red bg-italian-red/10 px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {t(item.descriptionKey)}
                  </p>
                  {item.dietary && (
                    <div className="flex gap-2">
                      {item.dietary.map(diet => (
                        <span
                          key={diet}
                          className="px-3 py-1 text-sm bg-italian-white text-gray-700 rounded-full"
                        >
                          {t(`menu.dietary.${diet}`)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 