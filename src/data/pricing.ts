export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: PricingFeature[]
  isPopular?: boolean
  cta: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started with automation.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      { text: 'Up to 5 team members', included: true },
      { text: '10 automated workflows', included: true },
      { text: 'Basic AI features', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Custom integrations', included: false },
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need more power.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      { text: 'Up to 25 team members', included: true },
      { text: 'Unlimited workflows', included: true },
      { text: 'Advanced AI features', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: false },
    ],
    isPopular: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full power for large organizations.',
    monthlyPrice: 249,
    yearlyPrice: 199,
    features: [
      { text: 'Unlimited team members', included: true },
      { text: 'Unlimited workflows', included: true },
      { text: 'Full AI suite', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: true },
    ],
    cta: 'Contact Sales',
  },
]
