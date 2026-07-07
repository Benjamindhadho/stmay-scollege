import EventCard from './EventCard'
import { events } from '../../data/events'

export default function EventsSection() {
  return (
    <section
      id="events"
      className="scroll-mt-20 bg-paper-dim/50 py-16 dark:bg-night-surface/40 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-brass dark:text-brass-bright">
            What's on
          </span>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-mist sm:text-4xl">
            Upcoming events
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft dark:text-mist/75">
            Talks, showcases, and open days across the term. Everything on this list is open to
            prospective students and family.
          </p>
        </div>

        <ul className="flex flex-col">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </section>
  )
}
