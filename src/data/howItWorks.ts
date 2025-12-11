export interface Step {
  id: string
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current workflows and identify automation opportunities.',
  },
  {
    id: 'design',
    number: '02',
    title: 'Custom Solution Design',
    description: 'Our team designs tailored solutions that fit your specific needs.',
  },
  {
    id: 'implementation',
    number: '03',
    title: 'Implementation',
    description: 'Seamless integration with your existing tools and systems.',
  },
  {
    id: 'optimization',
    number: '04',
    title: 'Ongoing Optimization',
    description: 'Continuous monitoring and improvement to maximize ROI.',
  },
]
