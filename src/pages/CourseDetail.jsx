import { Link, useParams } from 'react-router-dom'
import { getCourseById } from '../data/courses'

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = getCourseById(courseId)

  if (!course) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-6 py-24">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-clay">Not found</span>
        <h1 className="font-display text-3xl font-medium text-ink dark:text-mist">
          We couldn't find that course.
        </h1>
        <p className="text-ink-soft dark:text-mist/75">
          It may have been retired from the catalogue, or the link may be out of date.
        </p>
        <Link
          to="/#courses"
          className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brass hover:text-clay dark:text-brass-bright"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
          Back to the catalogue
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        to="/#courses"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-brass dark:text-mist/70 dark:hover:text-brass-bright"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
        Back to the catalogue
      </Link>

      <div className="overflow-hidden rounded-2xl">
        <img src={course.image} alt="" className="h-56 w-full object-cover sm:h-72" />
      </div>

      <div className="mt-8 flex flex-col gap-4 border-b border-ink/10 pb-8 dark:border-mist/10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-sm bg-ink px-2 py-1 font-mono text-xs text-brass-bright dark:bg-night-surface-2">
            {course.code}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-brass dark:text-brass-bright">
            {course.department}
          </span>
        </div>
        <h1 className="font-display text-3xl font-medium text-ink dark:text-mist sm:text-4xl">
          {course.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft dark:text-mist/75">
          {course.summary}
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-mist/60">
            Duration
          </dt>
          <dd className="mt-1 font-display text-lg text-ink dark:text-mist">{course.duration}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-mist/60">
            Schedule
          </dt>
          <dd className="mt-1 font-display text-lg text-ink dark:text-mist">{course.schedule}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-mist/60">
            Seats available
          </dt>
          <dd className="mt-1 font-display text-lg text-ink dark:text-mist">{course.seats}</dd>
        </div>
      </dl>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-brass dark:text-brass-bright">
          Requirements
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {course.requirements.map((req) => (
            <li
              key={req}
              className="flex items-start gap-3 rounded-lg border border-ink/10 bg-paper-dim/60 p-4 text-sm leading-relaxed text-ink-soft dark:border-mist/10 dark:bg-night-surface dark:text-mist/80"
            >
              <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass dark:bg-brass-bright" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col items-start gap-3 rounded-lg border border-ink/10 bg-ink p-6 text-paper dark:border-mist/10 dark:bg-night-surface-2 dark:text-mist sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg">Ready to enrol in {course.code}?</p>
        <a
          href="/#contact"
          className="rounded-full bg-brass px-5 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-colors hover:bg-brass-bright"
        >
          Ask admissions
        </a>
      </div>
    </article>
  )
}
