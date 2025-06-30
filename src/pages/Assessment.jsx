import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { GraduationCap, Building2, CheckCircle, Shield } from 'lucide-react'

const Assessment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Ethics Assessment
          </h1>
          <p className="text-xl text-gray-600">
            Select the assessment framework that best matches your AI implementation context
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-800">Privacy Protected</h3>
          </div>
          <p className="text-green-700">
            <strong>Your data stays private.</strong> All assessment information is processed locally in your browser. 
            We do not collect, store, or share any of your responses or institutional information.
          </p>
        </div>

        {/* Assessment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Educational Assessment */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Educational Assessment</h2>
                <p className="text-gray-600">For AI implementations in schools, universities and anywhere AI apps will be used with children.</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Age-appropriate design evaluation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Student privacy protection (FERPA, COPPA)
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Parental consent considerations
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Educational effectiveness metrics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Child safety protocols
                </li>
              </ul>
            </div>

            <Link to="/assessment/educational">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                Start Assessment
              </Button>
            </Link>
          </div>

          {/* Professional Assessment */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Professional Assessment</h2>
                <p className="text-gray-600">For AI implementations in business, corporate, and other professional working environments.</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Workplace ethics evaluation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Commercial data protection
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Professional compliance standards
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Business impact assessment
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Organizational risk management
                </li>
              </ul>
            </div>

            <Link to="/assessment/professional">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                Start Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            <strong>Need help choosing?</strong> Educational assessments focus on student safety and learning outcomes, 
            while professional assessments emphasize business ethics and organizational compliance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Assessment

