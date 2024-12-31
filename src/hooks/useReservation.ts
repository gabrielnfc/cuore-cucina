import { useState } from 'react'
import { useToast } from '@/components/Toast'

interface ReservationData {
  date: string
  time: string
  guests: string
  name: string
  email: string
  phone: string
  occasion: string
  specialRequests: string
}

interface ValidationErrors {
  [key: string]: string
}

export function useReservation() {
  const { showToast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ReservationData>({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    occasion: '',
    specialRequests: '',
  })
  const [errors, setErrors] = useState<ValidationErrors>({})

  const validateStep1 = () => {
    const newErrors: ValidationErrors = {}
    const today = new Date().toISOString().split('T')[0]

    if (!formData.date) {
      newErrors.date = 'Por favor, selecione uma data'
    } else if (formData.date < today) {
      newErrors.date = 'A data não pode ser anterior a hoje'
    }

    if (!formData.time) {
      newErrors.time = 'Por favor, selecione um horário'
    }

    if (!formData.guests) {
      newErrors.guests = 'Por favor, selecione o número de pessoas'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: ValidationErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome'
    }

    if (!formData.email) {
      newErrors.email = 'Por favor, informe seu e-mail'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, informe um e-mail válido'
    }

    if (!formData.phone) {
      newErrors.phone = 'Por favor, informe seu telefone'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Formato: (99) 99999-9999'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof ReservationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
    return value
  }

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    }
  }

  const prevStep = () => {
    setStep(1)
  }

  const handleSubmit = async () => {
    if (validateStep2()) {
      try {
        // Aqui você adicionaria a chamada à API para salvar a reserva
        showToast('Reserva realizada com sucesso! Entraremos em contato em breve.', 'success')
        return true
      } catch (error) {
        showToast('Erro ao realizar a reserva. Por favor, tente novamente.', 'error')
        return false
      }
    }
    return false
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      date: '',
      time: '',
      guests: '2',
      name: '',
      email: '',
      phone: '',
      occasion: '',
      specialRequests: '',
    })
    setErrors({})
  }

  return {
    step,
    formData,
    errors,
    handleInputChange,
    formatPhone,
    nextStep,
    prevStep,
    handleSubmit,
    resetForm,
  }
} 