import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AccessibilityControls() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const adjustFontSize = (increment: number) => {
    setFontSize(prev => Math.min(Math.max(prev + increment, 90), 130))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-4 top-24 z-50 bg-white rounded-lg shadow-lg p-4 space-y-4"
    >
      <div className="space-y-2">
        <p className="font-medium text-gray-700">Tamanho do Texto</p>
        <div className="flex gap-2">
          <button
            onClick={() => adjustFontSize(-10)}
            className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            aria-label="Diminuir tamanho do texto"
          >
            A-
          </button>
          <button
            onClick={() => adjustFontSize(10)}
            className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            aria-label="Aumentar tamanho do texto"
          >
            A+
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-medium text-gray-700">Contraste</p>
        <button
          onClick={() => setHighContrast(prev => !prev)}
          className={`w-full p-2 rounded transition-colors ${
            highContrast
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
          aria-label="Alternar alto contraste"
        >
          {highContrast ? 'Alto Contraste: Ativado' : 'Alto Contraste: Desativado'}
        </button>
      </div>

      <style jsx global>{`
        :root {
          --font-size-multiplier: ${fontSize}%;
          --high-contrast: ${highContrast ? '1' : '0'};
        }

        html {
          font-size: calc(16px * var(--font-size-multiplier) / 100);
        }

        body {
          ${highContrast
            ? `
            background-color: black !important;
            color: white !important;
            `
            : ''}
        }

        ${highContrast
          ? `
          .text-gray-600, .text-gray-400 {
            color: #ffffff !important;
          }
          
          .bg-white {
            background-color: #000000 !important;
            color: #ffffff !important;
          }
          `
          : ''}
      `}</style>
    </motion.div>
  )
} 