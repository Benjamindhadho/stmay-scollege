export default function EventCard({ event }) {
  return (
    <li className="flex gap-5 border-b border-ink/10 py-6 last:border-b-0 dark:border-mist/10">
      <div className="flex w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg border border-ink/15 bg-paper py-2 dark:border-mist/15 dark:bg-night-surface">
        <span className="font-display text-2xl font-medium leading-none text-ink dark:text-mist">
          {event.date.day}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-brass dark:text-brass-bright">
          {event.date.month}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-lg font-medium text-ink dark:text-mist">{event.title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft dark:text-mist/75">{event.description}</p>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-soft/80 dark:text-mist/60">
          <span>{event.location}</span>
          <span>{event.time}</span>
        </div>
      </div>
    </li>
  )
}
