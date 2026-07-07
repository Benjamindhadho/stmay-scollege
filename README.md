# Ashcombe College — Website

A React + Vite + Tailwind CSS site with a hero carousel, a dynamically-rendered
course catalogue (with detail pages for requirements/duration), an events list,
a photo gallery, a contact form, and a footer. Includes light/dark theme
support persisted to localStorage.

## Getting started

npm install
npm run dev

Then open the printed local URL (usually http://localhost:5173).

To build for production:

npm run build
npm run preview

## Project structure

src/
  main.jsx                    Entry point, wraps app in Router + ThemeProvider
  App.jsx                     Layout shell: Navbar, routed pages, Footer
  index.css                   Tailwind import + design tokens (@theme) + dark mode variant
  context/ThemeContext.jsx    Light/dark theme state, persisted to localStorage
  data/
    courses.js                Course catalogue data + getCourseById()
    events.js                 Events list data
    gallery.js                Gallery image data
    heroSlides.js              Hero carousel slide data
  components/
    Navbar.jsx                 Sticky nav, theme toggle, mobile menu
    Carousel.jsx                Generic auto-advancing carousel (used by Hero)
    Hero.jsx                     Hero section
    Footer.jsx                    Site footer
    Courses/CoursesSection.jsx, CourseCard.jsx
    Events/EventsSection.jsx, EventCard.jsx
    Gallery/GallerySection.jsx
    Contact/ContactSection.jsx
  pages/
    Home.jsx                    Assembles homepage sections
    CourseDetail.jsx             /courses/:courseId — requirements & duration
    NotFound.jsx                  404 fallback

## Notes

- Course, event, and gallery content lives in src/data/*.js. Swap these for
  real API calls — CoursesSection.jsx's fetchCourses() is already written
  as an async call you can point at a real endpoint.
- The theme toggle lives in the Navbar and applies a "dark" class to <html>,
  matching Tailwind's class-based dark mode strategy (wired up via
  @custom-variant dark in src/index.css, since this project uses Tailwind CSS v4).
- Images are placeholder photos from picsum.photos — replace the URLs in
  src/data/*.js with real campus photography.
