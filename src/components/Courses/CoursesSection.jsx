import { useEffect, useMemo, useState } from 'react'
import CourseCard from './CourseCard'
import { courses as courseCatalog } from '../../data/courses'

// Simulates fetching the course catalogue from a backend so the section
// stays data-driven rather than hard-coded markup.
function fetchCourses() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(courseCatalog), 250)
  })
}

export default function CoursesSection() {
  const [courses, setCourses] = useState([])
  const [status, setStatus] = useState('loading')
  const [activeDept, setActiveDept] = useState('All')

  useEffect(() => {
    let cancelled = false
    fetchCourses().then((data) => {
      if (!cancelled) {
        setCourses(data)
        setStatus('ready')
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  const departments = useMemo(
    () => ['All', ...new Set(courses.map((c) => c.department))],
    [courses]
  )

  const visibleCourses = useMemo(
    () => (activeDept === 'All' ? courses : courses.filter((c) => c.department === activeDept)),
    [courses, activeDept]
  )

  return (
    <section id="courses" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24">
      <div className="flex flex-col gap-4 border-b border-ink/10 pb-8 dark:border-mist/10">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-brass dark:text-brass-bright">
          Catalogue
        </span>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-medium text-ink dark:text-mist sm:text-4xl">
            Courses on offer
          </h2>

          {status === 'ready' && (
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveDept(dept)}
                  className={`rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                    activeDept === dept
                      ? 'border-ink bg-ink text-paper dark:border-mist dark:bg-mist dark:text-night'
                      : 'border-ink/20 text-ink-soft hover:border-brass hover:text-brass dark:border-mist/20 dark:text-mist/70 dark:hover:border-brass-bright dark:hover:text-brass-bright'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {status === 'loading' ? (
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-80 animate-pulse rounded-lg border border-ink/10 bg-ink/5 dark:border-mist/10 dark:bg-mist/5"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  )
}
