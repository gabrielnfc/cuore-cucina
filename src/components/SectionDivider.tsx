'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 flex justify-center"
    >
      <div className="flex items-center gap-6">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-italian-red to-transparent" />
        <div className="w-3 h-3 border-2 border-italian-red transform rotate-45" />
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-italian-red to-transparent" />
      </div>
    </motion.div>
  )
} 