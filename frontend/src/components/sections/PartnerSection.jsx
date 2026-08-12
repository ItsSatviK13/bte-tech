import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function PartnerSection() {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        type: 'error',
        message: 'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
      })
      return
    }

    setIsSubmitting(true)
    setSubmitState({ type: '', message: '' })

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSubmitState({
          type: 'success',
          message: 'Your enquiry has been submitted successfully. Our team will be in touch shortly.',
        })
        formRef.current.reset()
      })
      .catch(() => {
        setSubmitState({
          type: 'error',
          message: 'Something went wrong while sending your enquiry. Please email hello@eduscreen.com directly.',
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="bg-[#EFEFEF] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-8 px-5 lg:grid-cols-[0.9fr_1.6fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#dfe4ea] bg-white p-7 shadow-[0_18px_40px_rgba(53,61,101,0.08)]">
          <div className="absolute -right-10 top-5 h-32 w-32 rounded-full bg-[#52D5C4]/10" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#5DA854]/10" />
          <div className="relative flex h-full flex-col justify-center">
            <h2 className="mb-6 text-4xl font-black leading-tight text-[#353D65]">
              Let&apos;s Build Better Futures Together
            </h2>

            <ul className="space-y-4 text-sm text-[#353D65]/75">
              <li className="flex items-center gap-3"><span className="text-[#5DA854]">✓</span> Customized solutions for your institution</li>
              <li className="flex items-center gap-3"><span className="text-[#5DA854]">✓</span> Transparent process and fair evaluation</li>
              <li className="flex items-center gap-3"><span className="text-[#5DA854]">✓</span> Dedicated partnership and support</li>
            </ul>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="rounded-[2rem] border border-[#dfe4ea] bg-white p-6 shadow-[0_18px_40px_rgba(53,61,101,0.08)]">
          <h3 className="mb-6 text-2xl font-bold text-[#353D65]">Partner With Us</h3>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#353D65]">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#353D65]">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-[#353D65]">Institution / Organization</label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
                placeholder="Institution / Organization"
              />
            </div>
            <div>
              <label htmlFor="designation" className="mb-2 block text-sm font-semibold text-[#353D65]">Designation</label>
              <input
                id="designation"
                name="designation"
                type="text"
                className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
                placeholder="Designation"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#353D65]">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full resize-none border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
              placeholder="Message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[#353D65] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#2b3453] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <span className="ml-2">→</span>
          </button>

          {submitState.message && (
            <p
              className={`mt-4 text-sm font-medium ${
                submitState.type === 'success' ? 'text-[#5DA854]' : 'text-[#C62828]'
              }`}
            >
              {submitState.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
