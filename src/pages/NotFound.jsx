import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-6 py-24">
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-clay">404</span>
      <h1 className="font-display text-3xl font-medium text-ink dark:text-mist">
        This page doesn't exist.
      </h1>
      <Link
        to="/"
        className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brass hover:text-clay dark:text-brass-bright"
      >
        Back to the homepage
      </Link>
    </div>
  )
}
