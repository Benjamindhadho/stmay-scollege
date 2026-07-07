import Carousel from './Carousel'
import { heroSlides } from '../data/heroSlides'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:pt-12">
      <Carousel slides={heroSlides} />

      <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/10 pt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft dark:border-mist/10 dark:text-mist/70">
        <span>Est. 1988</span>
        <span>6 departments</span>
        <span>12 courses</span>
        <span>12:1 student–faculty ratio</span>
      </div>
    </section>
  )
}
