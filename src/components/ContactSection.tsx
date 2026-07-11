import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { contactSchema, type ContactFormData } from '../schemas/contactSchema';

export default function ContactSection() {
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value ?? '');
    });

    files.forEach((file) => {
      formData.append('images', file);
    });

    /*
      Connect your backend here:

      await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
    */

    console.log('Contact request:', data);
    console.log('Files:', files);

    reset();
    setFiles([]);
  };

  return (
    <section
      aria-labelledby='contact-title'
      className='
        py-24
        px-6
        bg-chocolate/5
      '
    >
      <div className='max-w-5xl mx-auto'>
        <header className='text-center mb-14'>
          <span
            className='
              text-soft-tan
              uppercase
              tracking-[0.3em]
              text-xs
            '
          >
            Kontakt
          </span>

          <h2
            id='contact-title'
            className='
              mt-4
              font-serif
              text-4xl
              md:text-5xl
              text-chocolate
            '
          >
            Bestill din drømmekake
          </h2>

          <p
            className='
              mt-5
              max-w-xl
              mx-auto
              text-warm-brown
              leading-relaxed
            '
          >
            Fortell oss om ønskene dine, så hjelper vi deg med å skape en unik
            kake.
          </p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='
            bg-white
            rounded-[2rem]
            p-8
            md:p-12
            shadow-xl
            space-y-6
          '
        >
          {/* Name */}

          <div>
            <label
              htmlFor='name'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              Navn *
            </label>

            <input
              id='name'
              type='text'
              {...register('name')}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className='
                w-full
                rounded-xl
                border
                border-beige
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-chocolate
              '
            />

            {errors.name && (
              <p
                id='name-error'
                role='alert'
                className='text-red-600 text-sm mt-2'
              >
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor='email'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              E-post *
            </label>

            <input
              id='email'
              type='email'
              {...register('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className='
                w-full
                rounded-xl
                border
                border-beige
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-chocolate
              '
            />

            {errors.email && (
              <p
                id='email-error'
                role='alert'
                className='text-red-600 text-sm mt-2'
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}

          <div>
            <label
              htmlFor='phone'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              Telefon
            </label>

            <input
              id='phone'
              type='tel'
              {...register('phone')}
              className='
                w-full
                rounded-xl
                border
                border-beige
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-chocolate
              '
            />
          </div>

          {/* Date */}

          <div>
            <label
              htmlFor='date'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              Ønsket dato
            </label>

            <input
              id='date'
              type='date'
              {...register('date')}
              className='
                w-full
                rounded-xl
                border
                border-beige
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-chocolate
              '
            />
          </div>

          {/* Cake Type */}

          <div>
            <label
              htmlFor='cakeType'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              Type kake *
            </label>

            <input
              id='cakeType'
              type='text'
              placeholder='Bryllupskake, bursdagskake...'
              {...register('cakeType')}
              className='
                w-full
                rounded-xl
                border
                border-beige
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-chocolate
              '
            />

            {errors.cakeType && (
              <p role='alert' className='text-red-600 text-sm mt-2'>
                {errors.cakeType.message}
              </p>
            )}
          </div>

          {/* Message */}

          <div>
            <label
              htmlFor='message'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              Fortell om ditt kakeønske (smak, design, størrelse og dato for
              henting/levering) *
            </label>

            <textarea
              id='message'
              rows={5}
              {...register('message')}
              className='
                w-full
                rounded-xl
                border
                border-beige
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-chocolate
              '
            />

            {errors.message && (
              <p role='alert' className='text-red-600 text-sm mt-2'>
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Communication */}

          <fieldset
            className='
              border
              border-beige
              rounded-xl
              p-5
            '
          >
            <legend
              className='
                px-2
                text-chocolate
                font-medium
              '
            >
              Kommunikasjonsalternativ *
            </legend>

            <div className='space-y-3 mt-3'>
              <label
                className='
                  flex
                  items-center
                  gap-3
                  cursor-pointer
                  text-warm-brown
                '
              >
                <input
                  type='radio'
                  value='email'
                  {...register('communication')}
                  className='
                    h-4
                    w-4
                    accent-chocolate
                  '
                />

                <span>Ønsker å bli kontaktet på e-post (engelsk)</span>
              </label>

              <label
                className='
                  flex
                  items-center
                  gap-3
                  cursor-pointer
                  text-warm-brown
                '
              >
                <input
                  type='radio'
                  value='phone'
                  {...register('communication')}
                  className='
                    h-4
                    w-4
                    accent-chocolate
                  '
                />

                <span>Ønsker å bli kontaktet på telefon (engelsk)</span>
              </label>
            </div>

            {errors.communication && (
              <p
                role='alert'
                className='
                  text-red-600
                  text-sm
                  mt-3
                '
              >
                {errors.communication.message}
              </p>
            )}
          </fieldset>

          {/* Upload */}

          <div>
            <label
              htmlFor='images'
              className='
                block
                text-chocolate
                font-medium
                mb-2
              '
            >
              Last opp inspirasjonsbilder
            </label>

            <input
              id='images'
              type='file'
              accept='image/*'
              multiple
              onChange={(event) => {
                if (event.target.files) {
                  setFiles(Array.from(event.target.files));
                }
              }}
              className='
                block
                w-full
                text-sm
                file:mr-4
                file:px-5
                file:py-2
                file:rounded-full
                file:border-0
                file:bg-chocolate
                file:text-white
              '
            />

            {files.length > 0 && (
              <p
                className='
                  mt-2
                  text-sm
                  text-warm-brown
                '
              >
                {files.length} bilde(r) valgt
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='
              w-full
              rounded-full
              bg-chocolate
              text-cream
              py-4
              font-medium
              transition
              hover:bg-chocolate/90
              focus:outline-none
              focus:ring-2
              focus:ring-chocolate
              disabled:opacity-50
            '
          >
            {isSubmitting ? 'Sender...' : 'Send forespørsel'}
          </button>
        </form>
      </div>
    </section>
  );
}
