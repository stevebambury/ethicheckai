import { Shield, Eye, Lock, FileText, Users, Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            How EthiCheck protects your data and respects your privacy
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: June 8, 2025</p>
        </div>

        {/* No Data Storage Policy */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">No Data Storage Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              EthiCheck operates on a strict no-data-storage principle. We do not collect, store, or retain any 
              assessment data you provide. All ethical assessments are processed in real-time and immediately 
              discarded after generating your report.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">What this means for you:</h4>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Your project descriptions are never saved
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Assessment responses are immediately deleted
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  No user accounts or profiles are created
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Complete anonymity is maintained
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Temporary Processing */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Temporary Processing</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              During your assessment session, we temporarily process your information to:
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Analyze AI technology types and educational contexts
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Generate personalized ethical recommendations
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Calculate comprehensive ethics scores
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Create your downloadable PDF report
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              All processing occurs in temporary memory and is automatically cleared when your session ends.
            </p>
          </CardContent>
        </Card>

        {/* Technical Safeguards */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Technical Safeguards</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Data Protection</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    HTTPS encryption for all communications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    No server-side data persistence
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Stateless architecture design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    No cookies or tracking mechanisms
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Third-Party Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    No third-party analytics or tracking services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    No social media integrations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    No advertising networks or cookies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Minimal external dependencies
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Your Rights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Since we don't store any personal data, you automatically have:
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Automatic Rights</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Right to erasure (automatic)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Right to data portability (your downloaded reports)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Right to rectification (through new assessments)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Right to restrict processing (by not using the service)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Right to object to processing (by discontinuing use)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Right to access personal data (none stored to access)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Basis for Processing */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-2xl">Legal Basis for Processing</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our processing of any temporary data is based on your explicit consent when you choose to use our assessment service. 
              By completing an assessment, you consent to the temporary processing necessary to generate your ethical evaluation and recommendations.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">Legitimate Interests:</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Providing accurate ethical assessments for AI implementations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Supporting responsible AI adoption in educational and professional settings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Improving AI ethics awareness and best practices
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Data Retention</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              EthiCheck operates with a zero-retention policy. No assessment data, personal information, or usage patterns 
              are stored beyond the duration of your active session.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Session Data</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Automatically cleared when you close the browser
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    No server-side storage or databases
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    Temporary memory only during processing
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Generated Reports</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Downloaded directly to your device
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Under your complete control
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    No copies retained by EthiCheck
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
              legal requirements, or other factors. When we make changes, we will:
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                Update the "Last updated" date at the top of this policy
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                Notify users of significant changes through the website
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                Maintain our commitment to data minimization and privacy
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                Continue operating under our no-data-storage principle
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Your continued use of EthiCheck after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PrivacyPolicy

