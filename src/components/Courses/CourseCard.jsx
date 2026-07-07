import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-ink/12 bg-paper shadow-[0_1px_0_rgba(16,49,43,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(16,49,43,0.35)] dark:border-mist/12 dark:bg-night-surface dark:hover:shadow-[0_18px_30px_-18px_rgba(0,0,0,0.6)]"
    >
      {/* perforation strip, catalogue-card motif */}
      <div
        className="absolute inset-x-0 top-0 h-3 bg-repeat-x opacity-40 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '10px 10px',
          backgroundPosition: 'center top',
        }}
      />

      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={course.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-ink/85 px-2 py-1 font-mono text-[11px] tracking-wide text-brass-bright dark:bg-night/90">
          {course.code}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brass dark:text-brass-bright">
          {course.department}
        </span>
        <h3 className="font-display text-xl font-medium leading-snug text-ink dark:text-mist">
          {course.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft dark:text-mist/75">{course.summary}</p>

        <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-3 font-mono text-xs text-ink-soft dark:border-mist/10 dark:text-mist/70">
          <span>{course.duration}</span>
          <span className="inline-flex items-center gap-1 text-brass transition-colors group-hover:text-clay dark:text-brass-bright">
            Requirements
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
