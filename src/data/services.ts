export interface Service {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'automation',
    title: 'Task Automation',
    description: 'Automate repetitive tasks and workflows to free up your team for high-value work.',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Leverage cutting-edge AI to make smarter decisions and predict business outcomes.',
  },
  {
    id: 'workflow',
    title: 'Workflow Optimization',
    description: 'Streamline your processes with intelligent workflow design and optimization.',
  },
  {
    id: 'customer',
    title: 'Customer Success',
    description: 'Enhance customer satisfaction with automated support and personalized experiences.',
  },
]
