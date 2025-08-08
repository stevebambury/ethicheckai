import { CheckCircle, Scale, Shield, Eye, User, TrendingUp, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import guidesBanner from '../assets/guides-banner.png'
import guidesBannerMobile from '../assets/guides-banner-mobile.png'

const Methodology = () => {
  const frameworks = [
    {
      title: "UNESCO AI Ethics Recommendation",
      type: "International",
      description: "Global framework ensuring human rights, dignity, and sustainable development in AI deployment",
      principles: ["Human Rights", "Inclusivity", "Flourishing", "Transparency"],
      implementation: "Integrated into fairness scoring and human oversight requirements",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "EU AI Act (2024)",
      type: "Legal", 
      description: "Comprehensive legal framework classifying AI systems by risk level with specific obligations",
      principles: ["Risk Assessment", "Transparency", "Human Oversight", "Accuracy"],
      implementation: "Forms basis for risk categorization and compliance requirements",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "GDPR Article 22",
      type: "Privacy",
      description: "Right not to be subject to automated decision-making with legal or significant effects",
      principles: ["Meaningful Explanation", "Human Review", "Data Protection", "Consent"],
      implementation: "Drives transparency scoring and data protection requirements",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "FERPA (US)",
      type: "Educational",
      description: "Federal law protecting student educational records and directory information",
      principles: ["Educational Purpose", "Parental Rights", "Record Security", "Access Control"],
      implementation: "Influences data handling and parental consent mechanisms",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "COPPA (US)",
      type: "Child Protection",
      description: "Children's Online Privacy Protection Act governing data collection from children under 13",
      principles: ["Parental Consent", "Data Minimization", "Safe Harbors", "Transparency"],
      implementation: "Mandatory compliance checks for under-13 age groups",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "IEEE Ethical Design Standards",
      type: "Technical",
      description: "Industry standards for incorporating ethical considerations into AI system design",
      principles: ["Value-Sensitive Design", "Stakeholder Analysis", "Impact Assessment", "Iterative Testing"],
      implementation: "Guides technical assessment criteria and bias testing requirements",
      color: "bg-indigo-50 border-indigo-200"
    }
  ]

  const dimensions = [
    {
      icon: Scale,
      title: "Fairness & Bias Mitigation",
      weight: "20%",
      description: "Evaluates algorithmic fairness, demographic bias testing, and equity impact",
      factors: [
        "Bias audit completion and quality",
        "Demographic group testing coverage", 
        "Edge case handling strategies",
        "Equity impact on different user populations",
        "Fairness metrics implementation"
      ],
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Privacy & Data Protection",
      weight: "20%",
      description: "Assesses data handling practices, storage security, and regulatory compliance",
      factors: [
        "Data minimization practices",
        "Storage location and security measures",
        "Third-party data sharing policies", 
        "GDPR/FERPA/COPPA compliance verification",
        "Data retention and deletion procedures"
      ],
      color: "text-blue-600"
    },
    {
      icon: Eye,
      title: "Transparency & Explainability",
      weight: "18%",
      description: "Measures AI decision explanation capability and user understanding",
      factors: [
        "AI decision explanation mechanisms",
        "Model limitations documentation",
        "User-friendly explanation interfaces",
        "Right to explanation implementation",
        "Algorithm disclosure to stakeholders"
      ],
      color: "text-purple-600"
    },
    {
      icon: User,
      title: "Human Oversight & Control",
      weight: "17%",
      description: "Evaluates human agency preservation and professional empowerment",
      factors: [
        "Professional override capabilities",
        "Error escalation procedures",
        "Decision authority frameworks",
        "Staff AI literacy training programs",
        "Human review requirements"
      ],
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Organizational Effectiveness",
      weight: "15%",
      description: "Assesses business outcome improvements and strategic alignment",
      factors: [
        "Performance outcome measurement",
        "User engagement metrics",
        "Long-term organizational impact",
        "Strategic alignment verification",
        "Adaptive system effectiveness"
      ],
      color: "text-emerald-600"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management & Safety",
      weight: "10%",
      description: "Evaluates risk mitigation strategies and safety protocols",
      factors: [
        "Risk assessment completion",
        "Safety monitoring systems",
        "Compliance verification processes",
        "Incident response procedures",
        "Vulnerability management"
      ],
      color: "text-red-600"
    }
  ]

  const assessmentPhases = [
    {
      phase: 1,
      title: "Data Collection",
      duration: "10-15 minutes",
      description: "Comprehensive assessment across 10 detailed sections",
      activities: [
        "Project context and scope definition",
        "AI system architecture assessment",
        "Bias testing and fairness analysis",
        "Human oversight capability assessment",
        "Legal compliance verification",
        "Age-appropriate design evaluation",
        "Data handling practice review",
        "Transparency mechanism evaluation",
        "Impact and consequence analysis",
        "Stakeholder review and validation"
      ]
    },
    {
      phase: 2,
      title: "AI-Powered Analysis",
      duration: "30-60 seconds",
      description: "OpenAI GPT-4o processes assessment data against ethical frameworks",
      activities: [
        "Contextual risk assessment",
        "Bias pattern identification",
        "Best practice recommendation generation",
        "Framework compliance checking",
        "Regulatory requirement mapping",
        "Scoring calibration across dimensions"
      ]
    },
    {
      phase: 3,
      title: "Report Generation",
      duration: "5-10 seconds",
      description: "Comprehensive PDF report with actionable recommendations",
      activities: [
        "Executive summary creation",
        "Evidence-based recommendations",
        "Implementation roadmap development",
        "Detailed scoring breakdown",
        "Compliance gap identification",
        "Risk mitigation strategies"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Ethics Assessment Methodology
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our evidence-based AI ethics framework combines international standards (UNESCO, EU AI Act), legal requirements (GDPR, FERPA), and professional best practices to provide comprehensive artificial intelligence ethics assessment for organizations.
          </p>
        </div>
      </section>

      {/* Foundational Frameworks */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Foundational Frameworks</h2>
            <p className="text-lg text-gray-600">EthiCheck integrates established frameworks from leading organizations worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div key={index} className={`border rounded-lg p-6 ${framework.color} hover:shadow-lg transition-shadow`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{framework.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-white rounded-full text-gray-600">
                    {framework.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{framework.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Principles:</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.principles.map((principle, pIndex) => (
                      <span key={pIndex} className="text-xs bg-white px-2 py-1 rounded text-gray-700">
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation:</h4>
                  <p className="text-xs text-gray-700">{framework.implementation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Dimensions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scoring Dimensions</h2>
            <p className="text-lg text-gray-600">Six weighted dimensions provide comprehensive ethical evaluation</p>
          </div>

          <div className="space-y-8">
            {dimensions.map((dimension, index) => {
              const IconComponent = dimension.icon
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gray-50 ${dimension.color} mr-4`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{dimension.title}</h3>
                        <p className="text-gray-600">{dimension.description}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{dimension.weight}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Assessment Factors:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {dimension.factors.map((factor, factorIndex) => (
                        <div key={factorIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {factor}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Process</h2>
            <p className="text-lg text-gray-600">Three-phase evaluation ensuring thorough analysis and actionable results</p>
          </div>

          <div className="space-y-8">
            {assessmentPhases.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                      {phase.phase}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {phase.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-12">
                  {phase.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance & Validation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Methodology Validation:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Research-based framework development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expert review and validation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Continuous improvement process
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Reliability:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Consistent scoring across similar implementations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regular calibration and testing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transparent scoring methodology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Banner */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
          <a href="https://store.ethicheck.ai/" className="block">
            <picture>
              <source media="(max-width: 768px)" srcSet={guidesBannerMobile} />
              <img 
                src={guidesBanner} 
                alt="Access Our Expert Guides - Detailed implementation guides, Actionable frameworks, Close compliance gaps - Get Implementation Ready" 
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </picture>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Methodology

