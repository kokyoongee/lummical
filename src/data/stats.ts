export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  {
    id: 'productivity',
    value: 20,
    suffix: 'x',
    label: 'Productivity Boost',
  },
  {
    id: 'companies',
    value: 500,
    suffix: '+',
    label: 'Companies Served',
  },
  {
    id: 'satisfaction',
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    id: 'support',
    value: 24,
    suffix: '/7',
    label: 'Support Available',
  },
]
