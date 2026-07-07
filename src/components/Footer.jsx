const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-10 dark:border-mist/10 dark:bg-night">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg font-semibold text-ink dark:text-mist">
            St.Mary <span className="text-brass">College</span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft dark:text-mist/70">
            Teaching since 1988 — six departments, one campus, small classes throughout.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-wide sm:gap-16">
          <div className="flex flex-col gap-2 text-ink-soft dark:text-mist/70">
            <span className="text-brass dark:text-brass-bright">Explore</span>
            <a href="/#courses" className="hover:text-brass dark:hover:text-brass-bright">Courses</a>
            <a href="/#events" className="hover:text-brass dark:hover:text-brass-bright">Events</a>
            <a href="/#gallery" className="hover:text-brass dark:hover:text-brass-bright">Gallery</a>
          </div>
          <div className="flex flex-col gap-2 text-ink-soft dark:text-mist/70">
            <span className="text-brass dark:text-brass-bright">Contact</span>
            <a href="/#contact" className="hover:text-brass dark:hover:text-brass-bright">Admissions</a>
            <a href="mailto:admissions@ashcombe.edu" className="hover:text-brass dark:hover:text-brass-bright">
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-ink/10 px-6 pt-6 font-mono text-[11px] text-ink-soft/70 dark:border-mist/10 dark:text-mist/50">
        © {year} St.Mary's College - Bura. All rights reserved.
      </div>
    </footer>
  )
}
