// import { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'

// export default function PartnerSection() {
//   const formRef = useRef(null)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitState, setSubmitState] = useState({ type: '', message: '' })

//   const handleSubmit = (event) => {
//     event.preventDefault()

//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

//     if (!serviceId || !templateId || !publicKey) {
//       setSubmitState({
//         type: 'error',
//         message: 'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
//       })
//       return
//     }

//     setIsSubmitting(true)
//     setSubmitState({ type: '', message: '' })

//     emailjs
//       .sendForm(serviceId, templateId, formRef.current, publicKey)
//       .then(() => {
//         setSubmitState({
//           type: 'success',
//           message: 'Your enquiry has been submitted successfully. Our team will be in touch shortly.',
//         })
//         formRef.current.reset()
//       })
//       .catch(() => {
//         setSubmitState({
//           type: 'error',
//           message: 'Something went wrong while sending your enquiry. Please email hello@eduscreen.com directly.',
//         })
//       })
//       .finally(() => {
//         setIsSubmitting(false)
//       })
//   }

//   return (
//     <section id="contact" className="bg-[#EFEFEF] py-10 md:py-20">
//       <div className="mx-auto grid max-w-[1360px] gap-8 px-5 lg:grid-cols-[0.9fr_1.6fr] lg:px-8">
//         <div className="relative overflow-hidden rounded-[2rem] border border-[#dfe4ea] bg-white p-7 shadow-[0_18px_40px_rgba(53,61,101,0.08)]">
//           <div className="absolute -right-10 top-5 h-32 w-32 rounded-full bg-[#52D5C4]/10" />
//           <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#5DA854]/10" />
//           <div className="relative flex h-full flex-col justify-center">
//             <h2 className="mb-6 text-4xl font-black leading-tight text-[#353D65]">
//               Let&apos;s Build Better Futures Together
//             </h2>

//             <ul className="space-y-4 text-sm text-[#353D65]/75">
//               <li className="flex items-center gap-3"><span className="text-[#5DA854]">✓</span> Customized solutions for your institution</li>
//               <li className="flex items-center gap-3"><span className="text-[#5DA854]">✓</span> Transparent process and fair evaluation</li>
//               <li className="flex items-center gap-3"><span className="text-[#5DA854]">✓</span> Dedicated partnership and support</li>
//             </ul>
//           </div>
//         </div>

//         <form ref={formRef} onSubmit={handleSubmit} className="rounded-[2rem] border border-[#dfe4ea] bg-white p-6 shadow-[0_18px_40px_rgba(53,61,101,0.08)]">
//           <h3 className="mb-6 text-2xl font-bold text-[#353D65]">Partner With Us</h3>

//           <div className="grid gap-5 md:grid-cols-2">
//             <div>
//               <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#353D65]">Full Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#353D65]">Email Address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
//                 placeholder="Email Address"
//               />
//             </div>
//             <div>
//               <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-[#353D65]">Institution / Organization</label>
//               <input
//                 id="organization"
//                 name="organization"
//                 type="text"
//                 required
//                 className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
//                 placeholder="Institution / Organization"
//               />
//             </div>
//             <div>
//               <label htmlFor="designation" className="mb-2 block text-sm font-semibold text-[#353D65]">Designation</label>
//               <input
//                 id="designation"
//                 name="designation"
//                 type="text"
//                 className="w-full border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
//                 placeholder="Designation"
//               />
//             </div>
//           </div>

//           <div className="mt-5">
//             <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#353D65]">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               required
//               className="w-full resize-none border border-[#dfe4ea] bg-[#EFEFEF] px-4 py-3 text-[#353D65] outline-none transition focus:border-[#52D5C4]"
//               placeholder="Message"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="mt-6 inline-flex items-center justify-center rounded-md bg-[#353D65] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#2b3453] disabled:cursor-not-allowed disabled:opacity-70"
//           >
//             {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <span className="ml-2">→</span>
//           </button>

//           {submitState.message && (
//             <p
//               className={`mt-4 text-sm font-medium ${
//                 submitState.type === 'success' ? 'text-[#5DA854]' : 'text-[#C62828]'
//               }`}
//             >
//               {submitState.message}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   )
// }


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
    <section id="contact" className="bg-[#EFEFEF] py-12 md:py-24 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto grid max-w-[1360px] gap-8 px-5 lg:grid-cols-[0.9fr_1.6fr] lg:px-8 relative z-10">
        
        {/* Left Information Card */}
        <div 
          className="relative overflow-hidden rounded-[20px] bg-white p-8"
          style={{
            border: '3px solid #353D65',
            boxShadow: '6px 6px 0px 0px #353D65',
          }}
        >
          <div className="absolute -right-10 top-5 h-32 w-32 rounded-full bg-[#52D5C4]/20 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#5DA854]/15 blur-2xl pointer-events-none" />
          
          <div className="relative flex h-full flex-col justify-center">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65] w-max">
              Get in Touch
            </span>

            <h2 className="mb-6 text-3xl font-black leading-tight text-[#353D65] md:text-4xl tracking-tight">
              Let&apos;s Build Better Futures Together
            </h2>

            <ul className="space-y-4 text-sm font-bold text-[#353D65]">
              <li className="flex items-center gap-3 bg-[#EFEFEF]/50 p-3 rounded-xl border-2 border-[#353D65]/10">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#5DA854]/20 border border-[#353D65] text-xs font-black text-[#353D65]">✓</span> 
                Customized solutions for your institution
              </li>
              <li className="flex items-center gap-3 bg-[#EFEFEF]/50 p-3 rounded-xl border-2 border-[#353D65]/10">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#5DA854]/20 border border-[#353D65] text-xs font-black text-[#353D65]">✓</span> 
                Transparent process and fair evaluation
              </li>
              <li className="flex items-center gap-3 bg-[#EFEFEF]/50 p-3 rounded-xl border-2 border-[#353D65]/10">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#5DA854]/20 border border-[#353D65] text-xs font-black text-[#353D65]">✓</span> 
                Dedicated partnership and support
              </li>
            </ul>
          </div>
        </div>

        {/* Right Form Card */}
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="rounded-[20px] bg-white p-8 relative"
          style={{
            border: '3px solid #353D65',
            boxShadow: '6px 6px 0px 0px #353D65',
          }}
        >
          <h3 className="mb-6 text-2xl font-black text-[#353D65] tracking-tight">Partner With Us</h3>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-black uppercase tracking-wider text-[#353D65]">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none transition focus:bg-white focus:shadow-[2px_2px_0px_0px_#353D65]"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-black uppercase tracking-wider text-[#353D65]">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none transition focus:bg-white focus:shadow-[2px_2px_0px_0px_#353D65]"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="organization" className="mb-2 block text-xs font-black uppercase tracking-wider text-[#353D65]">Institution / Organization</label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none transition focus:bg-white focus:shadow-[2px_2px_0px_0px_#353D65]"
                placeholder="Institution / Organization"
              />
            </div>
            <div>
              <label htmlFor="designation" className="mb-2 block text-xs font-black uppercase tracking-wider text-[#353D65]">Designation</label>
              <input
                id="designation"
                name="designation"
                type="text"
                className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none transition focus:bg-white focus:shadow-[2px_2px_0px_0px_#353D65]"
                placeholder="Designation"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-xs font-black uppercase tracking-wider text-[#353D65]">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full resize-none rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none transition focus:bg-white focus:shadow-[2px_2px_0px_0px_#353D65]"
              placeholder="Message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] px-7 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#353D65] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#353D65] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <span className="ml-2">→</span>
          </button>

          {submitState.message && (
            <p
              className={`mt-4 text-xs font-black p-3 rounded-lg border-2 ${
                submitState.type === 'success' 
                  ? 'bg-[#5DA854]/10 border-[#5DA854] text-[#5DA854]' 
                  : 'bg-[#FF1744]/10 border-[#FF1744] text-[#FF1744]'
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