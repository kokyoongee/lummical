export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Lummical transformed our operations completely. We've seen a 25x increase in productivity within the first quarter.",
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow Inc.',
    avatar: 'SC',
  },
  {
    id: '2',
    quote: "The AI integration was seamless. Our team now focuses on strategy while automation handles the rest.",
    author: 'Michael Ross',
    role: 'CTO',
    company: 'InnovateLab',
    avatar: 'MR',
  },
  {
    id: '3',
    quote: "Best investment we've made. Customer satisfaction is at an all-time high thanks to Lummical.",
    author: 'Emily Zhang',
    role: 'VP Operations',
    company: 'GlobalTech',
    avatar: 'EZ',
  },
  {
    id: '4',
    quote: "From day one, the impact was immediate. Our workflows are now 10x faster and error-free.",
    author: 'David Kim',
    role: 'Director of Engineering',
    company: 'NextGen Solutions',
    avatar: 'DK',
  },
  {
    id: '5',
    quote: "Lummical's support team is exceptional. They helped us customize everything to our specific needs.",
    author: 'Jessica Martinez',
    role: 'Head of Product',
    company: 'ScaleUp Co.',
    avatar: 'JM',
  },
]
