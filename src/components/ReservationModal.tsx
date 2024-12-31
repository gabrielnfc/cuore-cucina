'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CalendarIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'next-i18next'
import { useReservation } from '@/hooks/useReservation'
import Button from './Button'
import Input from './Input'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { t } = useTranslation('common')
  const {
    step,
    formData,
    errors,
    handleInputChange,
    formatPhone,
    nextStep,
    prevStep,
    handleSubmit,
    resetForm,
  } = useReservation()

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (await handleSubmit()) {
      resetForm()
      onClose()
    }
  }

  const occasions = [
    'Jantar casual',
    'Aniversário',
    'Encontro romântico',
    'Reunião de negócios',
    'Celebração especial',
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl bg-white rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="relative h-40 bg-gradient-to-r from-italian-red to-italian-green">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                aria-label="Fechar modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-serif text-white">Faça sua Reserva</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full ${
                        step >= i ? 'bg-italian-red' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {step === 1 ? (
                  <div className="space-y-4">
                    <Input
                      label="Data"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      error={errors.date}
                      icon={<CalendarIcon className="w-5 h-5" />}
                    />

                    <Input
                      as="select"
                      label="Horário"
                      required
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      error={errors.time}
                      icon={<ClockIcon className="w-5 h-5" />}
                    >
                      <option value="">Selecione um horário</option>
                      {['12:00', '13:00', '19:00', '20:00', '21:00'].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Input>

                    <Input
                      as="select"
                      label="Número de pessoas"
                      required
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      error={errors.guests}
                      icon={<UsersIcon className="w-5 h-5" />}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'pessoa' : 'pessoas'}
                        </option>
                      ))}
                    </Input>

                    <Button
                      type="button"
                      variant="primary"
                      className="w-full"
                      onClick={nextStep}
                    >
                      Continuar
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Input
                      label="Nome completo"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      placeholder="Seu nome completo"
                    />

                    <Input
                      label="E-mail"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="seu@email.com"
                    />

                    <Input
                      label="Telefone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                      error={errors.phone}
                      placeholder="(99) 99999-9999"
                    />

                    <Input
                      as="select"
                      label="Ocasião"
                      value={formData.occasion}
                      onChange={(e) => handleInputChange('occasion', e.target.value)}
                    >
                      <option value="">Selecione uma ocasião (opcional)</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </Input>

                    <Input
                      as="textarea"
                      label="Pedidos especiais"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Alergias, preferências dietéticas, ocasiões especiais..."
                      rows={3}
                    />

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={prevStep}
                      >
                        Voltar
                      </Button>
                      <Button type="submit" variant="primary" className="flex-1">
                        Confirmar Reserva
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 