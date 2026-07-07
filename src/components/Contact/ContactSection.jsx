import { useState } from 'react'

const initialState = { name: '', email: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-ink/10 bg-paper-dim/50 py-16 dark:border-mist/10 dark:bg-night-surface/40 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-brass dark:text-brass-bright">
            Get in touch
          </span>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-mist sm:text-4xl">
            Contact admissions
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft dark:text-mist/75">
            Questions about a course, a deadline, or a campus visit? Send a note and the
            admissions office will reply within two working days.
          </p>

          <dl className="mt-4 flex flex-col gap-3 font-mono text-sm text-ink-soft dark:text-mist/70">
            <div className="flex gap-3">
              <dt className="text-brass dark:text-brass-bright">Email</dt>
              <dd>stmary'scollegebura@gmail.com</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-brass dark:text-brass-bright">Phone</dt>
              <dd>+254 700 000 000</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-brass dark:text-brass-bright">Office</dt>
              <dd>Bura mission, Mwatete sub-county, Taita taveta county</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-paper p-6 dark:border-mist/10 dark:bg-night-surface sm:p-8"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-mist/70">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brass dark:border-mist/20 dark:text-mist dark:focus:border-brass-bright"
              placeholder="Jane Doe"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-mist/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brass dark:border-mist/20 dark:text-mist dark:focus:border-brass-bright"
              placeholder="jane@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-mist/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="resize-none rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brass dark:border-mist/20 dark:text-mist dark:focus:border-brass-bright"
              placeholder="What would you like to know?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 self-start rounded-full bg-ink px-6 py-2.5 font-mono text-xs uppercase tracking-wide text-paper transition-colors hover:bg-clay dark:bg-mist dark:text-night dark:hover:bg-brass-bright"
          >
            Send message
          </button>

          {status === 'sent' && (
            <p role="status" className="font-mono text-xs text-brass dark:text-brass-bright">
              Thanks — your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
