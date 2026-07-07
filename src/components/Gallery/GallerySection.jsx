import { useState } from 'react'
import { galleryImages } from '../../data/gallery'

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24">
      <div className="mb-10 flex flex-col gap-4 border-b border-ink/10 pb-8 dark:border-mist/10">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-brass dark:text-brass-bright">
          Around campus
        </span>
        <h2 className="font-display text-3xl font-medium text-ink dark:text-mist sm:text-4xl">
          Gallery
        </h2>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveImage(image)}
            className="block w-full overflow-hidden rounded-lg border border-ink/10 dark:border-mist/10"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/90 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
            className="absolute right-6 top-6 rounded-full border border-mist/30 p-2 text-mist hover:border-brass-bright hover:text-brass-bright"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
