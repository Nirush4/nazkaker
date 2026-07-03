import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput, Textarea, Button } from '@mantine/core'

type ContactFormData = {
  fullName: string
  email: string
  message: string
}

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSuccess(true)
    reset()
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <p className="text-soft-tan text-sm tracking-[0.2em] uppercase mb-3">Ta kontakt</p>
          <h1 className="font-serif text-4xl text-chocolate mb-3">Kontakt oss</h1>
          <p className="text-warm-brown">
            Har du en spesiell bestilling i tankene? Vi hører gjerne fra deg.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg border border-beige/60 shadow-sm space-y-5"
          noValidate
        >
          <TextInput
            label="Fullt navn"
            placeholder="Ditt navn"
            {...register('fullName', { required: 'Fullt navn er påkrevd' })}
            error={errors.fullName?.message}
            withAsterisk
          />

          <TextInput
            label="E-post"
            type="email"
            placeholder="deg@eksempel.no"
            {...register('email', {
              required: 'E-post er påkrevd',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Vennligst oppgi en gyldig e-postadresse',
              },
            })}
            error={errors.email?.message}
            withAsterisk
          />

          <Textarea
            label="Melding"
            placeholder="Fortell oss om bestillingen eller spørsmålet ditt..."
            minRows={4}
            {...register('message', {
              required: 'Melding er påkrevd',
              minLength: {
                value: 10,
                message: 'Meldingen må være minst 10 tegn',
              },
            })}
            error={errors.message?.message}
            withAsterisk
          />

          <Button
            type="submit"
            fullWidth
            radius="xl"
            color="brown.5"
            loading={isSubmitting}
            disabled={isSubmitting}
            mt="sm"
          >
            Send melding
          </Button>

          {success && (
            <p className="text-center text-green-700 text-sm mt-2">
              Meldingen ble sendt 🎉
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
