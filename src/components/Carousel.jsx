import { useCallback, useEffect, useRef, useState } from 'react'

export default function Carousel({ slides, interval = 6000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback(
    (i) => {
      setIndex((prev) => {
        const total = slides.length
        return (i + total) % total
      })
    },
    [slides.length]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined
    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => window.clearTimeout(timerRef.current)
  }, [index, paused, interval, slides.length])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured stories"
    >
      <div className="relative aspect-[16/11] w-full sm:aspect-[16/9]">
        {slides.map((slide, i) => (
          <figure
            key={slide.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-10">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-brass-bright">
                {slide.eyebrow}
              </span>
              <h2 className="max-w-xl font-display text-3xl font-medium leading-tight text-mist sm:text-4xl md:text-5xl">
                {slide.heading}
              </h2>
              <p className="max-w-lg text-sm text-mist/85 sm:text-base">{slide.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-mist/30 bg-night/30 p-2 text-mist backdrop-blur transition hover:border-brass-bright hover:text-brass-bright"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-mist/30 bg-night/30 p-2 text-mist backdrop-blur transition hover:border-brass-bright hover:text-brass-bright"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-4 right-6 flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-brass-bright' : 'w-1.5 bg-mist/50 hover:bg-mist/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
