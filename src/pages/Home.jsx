import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Scale, Shield, Eye, User, TrendingUp, AlertTriangle, CheckCircle, FileText, Search, BarChart3, BookOpen, Users, Globe, Gavel, Award, Lightbulb, ClipboardList, DollarSign } from 'lucide-react'
import heroImage from '../assets/homepageimage.png'

const Home = () => {
  const dimensions = [
    {
      icon: Scale,
      title: "Fairness & Bias",
      description: "Evaluate potential biases and ensure equitable treatment of all users and stakeholders.",
      features: [
        "Algorithmic bias detection",
        "Demographic parity analysis", 
        "Equal opportunity assessment"
      ],
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Privacy & Data Protection",
      description: "Assess data collection practices and user privacy protection measures.",
      features: [
        "GDPR/FERPA compliance check",
        "Data minimization principles",
        "Consent mechanisms"
      ],
      color: "text-blue-600"
    },
    {
      icon: Eye,
      title: "Transparency & Explainability", 
      description: "Ensure AI decisions are understandable and can be explained to stakeholders.",
      features: [
        "Decision transparency",
        "Algorithm interpretability",
        "Stakeholder communication"
      ],
      color: "text-purple-600"
    },
    {
      icon: User,
      title: "User Agency & Autonomy",
      description: "Preserve user choice and control in their AI-assisted workflows.",
      features: [
        "Opt-out mechanisms",
        "User control systems", 
        "Human oversight requirements"
      ],
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Organizational Effectiveness",
      description: "Validate that AI implementation genuinely improves outcomes and productivity.",
      features: [
        "Performance outcome metrics",
        "Comparative effectiveness",
        "Long-term impact assessment"
      ],
      color: "text-emerald-600"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Identify and mitigate potential risks and unintended consequences.",
      features: [
        "Risk identification matrix",
        "Mitigation strategies",
        "Monitoring protocols"
      ],
      color: "text-red-600"
    }
  ]

  const processSteps = [
    {
      icon: FileText,
      number: "1",
      title: "Describe Your AI Use Case",
      description: "Tell us about your AI implementation, educational context, and goals."
    },
    {
      icon: Search,
      number: "2", 
      title: "Complete Ethics Assessment",
      description: "Answer guided questions about privacy, fairness, transparency, and more."
    },
    {
      icon: BarChart3,
      number: "3",
      title: "Get Your Results",
      description: "Receive detailed scoring, recommendations, and a comprehensive report."
    }
  ]

  const frameworks = [
    {
      icon: Globe,
      title: "UNESCO AI Ethics Guidelines",
      description: "International framework for ethical AI implementation, focusing on human rights and dignity."
    },
    {
      icon: Shield,
      title: "FERPA & COPPA Compliance", 
      description: "US federal laws protecting educational records and children's online privacy."
    },
    {
      icon: Gavel,
      title: "GDPR Article 22",
      description: "European regulations on automated decision-making and algorithmic transparency."
    },
    {
      icon: Award,
      title: "IEEE AI Ethics Standards",
      description: "Technical standards for ethical AI design and risk management frameworks."
    },
    {
      icon: Users,
      title: "Partnership on AI Guidelines",
      description: "Industry consortium recommendations for responsible AI deployment."
    }
  ]

  const assessmentFactors = [
    "User demographics and stakeholder considerations",
    "Regional data protection laws and requirements", 
    "Scale and scope of implementation",
    "Data collection types and sensitivity levels",
    "Algorithmic transparency and explainability"
  ]

  const whyChooseFeatures = [
    {
      icon: BookOpen,
      title: "Evidence-Based Framework",
      description: "Built on established AI ethics principles and educational best practices."
    },
    {
      icon: Lightbulb,
      title: "Actionable Recommendations", 
      description: "Get specific, practical guidance tailored to your implementation."
    },
    {
      icon: ClipboardList,
      title: "Comprehensive Reports",
      description: "Detailed documentation for stakeholders and compliance requirements."
    },
    {
      icon: DollarSign,
      title: "Completely Free",
      description: "100% free-to-use with no hidden costs, subscriptions, or premium features."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI Ethics Assessment Tool for{' '}
                <span className="text-blue-600">Professionals</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Free comprehensive AI ethics framework covering GDPR, EU AI Act, and UNESCO guidelines. Get detailed compliance reports and actionable implementation guidance for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assessment">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                    Start Assessment
                  </Button>
                </Link>
                <Link to="/examples">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 cursor-pointer">
                    View Examples
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional team working with AI technology" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Ethical Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The EthiCheck assessment covers six critical dimensions of AI ethics to help ensure compliance across both professional and educational contexts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => {
              const IconComponent = dimension.icon
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${dimension.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">
                      {dimension.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {dimension.description}
                  </p>
                  <ul className="space-y-2">
                    {dimension.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get Results in Minutes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get Results in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our simple process to assess your AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Evidence-Based Assessment Framework Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Evidence-Based Assessment Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our scoring methodology is grounded in established research, legal frameworks, and industry best practices from leading organizations in AI ethics and education.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Research-Backed Methodology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework, index) => {
                const IconComponent = framework.icon
                return (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 ml-3">
                        {framework.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {framework.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Key Assessment Factors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assessmentFactors.map((factor, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Scores are calculated using weighted algorithms that prioritize user safety, privacy protection, and organizational benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose EthiCheck Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EthiCheck?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools for responsible AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

