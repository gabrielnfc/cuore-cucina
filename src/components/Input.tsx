import { InputHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label: string
  error?: string
  icon?: ReactNode
  as?: 'input' | 'select' | 'textarea'
  children?: ReactNode
  rows?: number
}

export default function Input({
  label,
  error,
  icon,
  as = 'input',
  className = '',
  children,
  ...props
}: InputProps) {
  const baseInputStyles = `
    w-full px-4 py-2 border rounded-lg transition-all duration-200
    focus:ring-2 focus:ring-italian-red focus:border-transparent
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${error ? 'border-red-500' : 'border-gray-300'}
    ${icon ? 'pl-10' : ''}
    ${className}
  `

  const renderInput = () => {
    switch (as) {
      case 'select':
        return (
          <select className={baseInputStyles} aria-label={label} {...props}>
            {children}
          </select>
        )
      case 'textarea':
        return (
          <textarea
            className={baseInputStyles}
            aria-label={label}
            {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
          />
        )
      default:
        return (
          <input
            className={baseInputStyles}
            aria-label={label}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )
    }
  }

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {props.required && <span className="text-italian-red ml-1">*</span>}
      </label>
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        {renderInput()}

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute text-sm text-red-500 mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </div>
  )
} 