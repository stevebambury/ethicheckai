import { Shield, BookOpen, Users, Target, Award, FileText, CheckCircle, Eye, Lightbulb, TrendingUp, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'

const WhyEthiCheck = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify potential ethical risks before implementation, protecting users and organizations from unintended consequences."
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Decisions", 
      description: "Make informed choices backed by established ethical frameworks and professional research standards."
    },
    {
      icon: Users,
      title: "Stakeholder Confidence",
      description: "Build trust with stakeholders, management, and regulators through transparent ethical assessment."
    },
    {
      icon: Target,
      title: "Compliance Assurance",
      description: "Ensure alignment with legal requirements like FERPA, COPPA, and emerging AI regulations."
    },
    {
      icon: Award,
      title: "Best Practice Implementation",
      description: "Follow proven methodologies used by leading organizations worldwide."
    },
    {
      icon: FileText,
      title: "Documentation & Reporting",
      description: "Generate professional reports for governance, audit trails, and continuous improvement."
    }
  ]

  const methodology = [
    {
      number: "1",
      title: "Multi-Framework Analysis",
      description: "Our assessment draws from 6+ internationally recognized ethical frameworks, ensuring comprehensive coverage of ethical considerations."
    },
    {
      number: "2", 
      title: "Context-Aware Evaluation",
      description: "Assessment criteria adapt based on user groups, data sensitivity, and implementation scope for relevant recommendations."
    },
    {
      number: "3",
      title: "Risk-Weighted Scoring", 
      description: "Different ethical dimensions receive appropriate weighting based on the specific professional context and potential impact."
    },
    {
      number: "4",
      title: "Actionable Recommendations",
      description: "Each assessment provides specific, implementable steps rather than abstract ethical guidelines."
    }
  ]

  const frameworks = [
    {
      title: "UNESCO AI Ethics Framework",
      description: "Global standards for ethical AI in education",
      badge: "UNESCO Recommendation on the Ethics of AI (2021)",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "IEEE Standards for Ethical AI", 
      description: "Technical standards for transparent and accountable AI systems",
      badge: "IEEE 2857-2021 Standard for Privacy Engineering",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "EU AI Act Guidelines",
      description: "European regulatory framework for AI in high-risk applications", 
      badge: "EU AI Act Article 52 - Educational AI Applications",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "European Commission's Ethical Guidelines on AI in Education",
      description: "Specific guidance for AI and data use in teaching and learning",
      badge: "EC Ethical Guidelines on AI in Education (2022)",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "OECD AI Principles",
      description: "International standards for responsible AI stewardship",
      badge: "OECD Recommendation on AI (2019)",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "FERPA & COPPA Compliance",
      description: "US federal standards for student data protection and privacy",
      badge: "20 U.S.C. § 1232g; 15 U.S.C. §§ 6501–6506",
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Partnership on AI Guidelines",
      description: "Industry best practices for responsible AI development",
      badge: "Partnership on AI: Educational AI Framework (2023)",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "CoSN Trusted Learning Environment",
      description: "Cybersecurity and digital citizenship standards for schools",
      badge: "Consortium for School Networking Framework",
      color: "bg-teal-100 text-teal-800"
    }
  ]

  const challenges = [
    {
      title: "Regulatory Landscape",
      description: "New AI regulations like the EU AI Act specifically target educational applications as high-risk use cases requiring ethical oversight."
    },
    {
      title: "Student Safety", 
      description: "AI systems can perpetuate bias, compromise privacy, or reduce student agency if not properly evaluated before implementation."
    },
    {
      title: "Institutional Liability",
      description: "Organizations face increasing legal and reputational risks from AI implementations that lack proper ethical consideration."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Why Professionals Trust EthiCheck</h1>
            <p className="text-xl text-gray-600 mb-8">
              The most comprehensive, research-backed ethical AI assessment platform designed for organizations implementing AI solutions.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Research-Backed Ethical AI Assessment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The EthiCheck Assessment Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EthiCheck uses a rigorous, multi-step evaluation process based on established ethical frameworks and professional research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodology.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built on Established Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our assessments are grounded in internationally recognized ethical frameworks, ensuring credibility and compliance. 
              Our framework list is regularly reviewed and updated to incorporate emerging standards and evolving best practices in AI ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <CardTitle className="text-lg">{framework.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 mb-3">
                    {framework.description}
                  </CardDescription>
                  <Badge className={framework.color}>
                    {framework.badge}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Ethical AI Assessment Matters Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium">
              EthiCheck helps you stay ahead of these challenges with proactive, comprehensive ethical assessment.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Ensure Ethical AI Implementation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals using EthiCheck to implement AI responsibly and confidently.
          </p>
          <div className="space-x-4">
            <Link 
              to="/assessment" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Start Your Assessment
            </Link>
            <Link 
              to="/examples" 
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-lg"
            >
              View Examples
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyEthiCheck

