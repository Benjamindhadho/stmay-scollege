export const courses = [
  {
    id: 'cs-201',
    code: 'CS 201',
    title: 'Diploma in Teacher Education',
    department: 'Education',
    summary:
      'A comprehensive program designed to equip future educators with the necessary skills and knowledge.',
    duration: '3 years',
    schedule: 'Mon / Wed, 10:00–11:30',
    seats: 32,
    image: 'https://picsum.photos/seed/cs201/900/700',
    requirements: [
      'C plain KCSE or equivalent',
    ],
  },
  {
    id: 'des-114',
    code: 'DES 114',
    title: 'ICT',
    department: 'Computer studies',
    summary:
      'Fundamentals of information and communication technology, including computer hardware, software, networking, and digital literacy.',
    duration: '1 year',
    schedule: 'Tue / Thu, 13:00–14:30',
    seats: 24,
    image: 'https://picsum.photos/seed/des114/900/700',
    requirements: [
      'D plus KCSE or equivalent',
    ],
  },
  {
    id: 'bio-220',
    code: 'BIO 220',
    title: 'Agriculture',
    department: 'Agricultural Sciences',
    summary:
      'An in-depth study of agricultural practices, crop management, and sustainable farming techniques.',
    duration: '2 years',
    schedule: 'Mon / Wed / Fri, 09:00–10:00',
    seats: 28,
    image: 'https://picsum.photos/seed/bio220/900/700',
    requirements: [
      'D plain KCSE or equivalent',
    ],
  },
  {
    id: 'econ-150',
    code: 'ECON 150',
    title: 'Hairdressing and Beauty Therapy',
    department: 'Vocational Studies',
    summary:
      'A practical course covering hairdressing techniques, beauty therapy practices, and salon management.',
    duration: '1 year',
    schedule: 'Tue / Thu, 09:30–11:00',
    seats: 40,
    image: 'https://picsum.photos/seed/econ150/900/700',
    requirements: [
      'D plain KCSE or equivalent',
    ],
  },
  {
    id: 'phi-205',
    code: 'PHI 205',
    title: 'Plumbing and Electrical Installation',
    department: 'Vocational Studies',
    summary:
      'A practical course covering plumbing and electrical installation techniques, safety practices, and building codes.',
    duration: '1 year',
    schedule: 'Wed, 15:00–17:30',
    seats: 20,
    image: 'https://picsum.photos/seed/phi205/900/700',
    requirements: [
      'D plain KCSE or equivalent',
    ],
  },
  {
    id: 'mus-130',
    code: 'MUS 130',
    title: 'Office Administration and Management',
    department: 'Vocational Studies',
    summary:
      'A comprehensive course covering office administration, management principles, and organizational skills.',
    duration: '1 year',
    schedule: 'Mon / Wed, 14:00–15:30',
    seats: 18,
    image: 'https://picsum.photos/seed/mus130/900/700',
    requirements: [
      'D plain KCSE or equivalent',
    ],
  },
]

export function getCourseById(id) {
  return courses.find((course) => course.id === id)
}
