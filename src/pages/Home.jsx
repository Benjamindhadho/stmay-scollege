import Hero from '../components/Hero'
import CoursesSection from '../components/Courses/CoursesSection'
import EventsSection from '../components/Events/EventsSection'
import GallerySection from '../components/Gallery/GallerySection'
import ContactSection from '../components/Contact/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
    </>
  )
}
