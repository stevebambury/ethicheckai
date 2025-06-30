import { Link } from 'react-router-dom'
import { FileText, Shield, AlertTriangle, Mail, ExternalLink } from 'lucide-react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Legal terms and conditions for using the EthiCheck platform
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: June 26, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              Acceptance of Terms
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                By accessing and using EthiCheck ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                EthiCheck is provided as a free educational and professional tool to help organizations assess the ethical implications of AI implementations. The Service is operated by Steve Bambury and is designed to support responsible AI adoption worldwide.
              </p>
            </div>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily access and use EthiCheck for personal, educational, and professional purposes. This is the grant of a license, not a transfer of title, and under this license you may:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Conduct AI ethics assessments for your organization</li>
                <li>Download and retain assessment reports for your records</li>
                <li>Share assessment results within your organization</li>
                <li>Use the platform for educational and training purposes</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by EthiCheck at any time.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                Important Disclaimer
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed font-medium">
                  EthiCheck provides educational and informational content only and is not intended as legal advice. While every effort is made to ensure accuracy, the assessments should not be relied upon exclusively to justify AI deployment decisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Organizations must consider their specific policies, governance systems, legal requirements, and regulatory environment alongside external guidance. Always consult with qualified legal and compliance professionals for specific implementation decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Handling</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                EthiCheck operates on a strict no-data-storage principle. We do not collect, store, or retain any assessment data you provide. All processing occurs in temporary memory and is automatically cleared when your session ends.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For complete details about our data practices, please review our <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                In no event shall EthiCheck or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use EthiCheck, even if EthiCheck or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Service is provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>
          </section>

          {/* Accuracy of Materials */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Materials</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on EthiCheck could include technical, typographical, or photographic errors. EthiCheck does not warrant that any of the materials on its platform are accurate, complete, or current. EthiCheck may make changes to the materials contained on its platform at any time without notice.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                EthiCheck may revise these terms of service at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service. Changes will be posted on this page with an updated "Last updated" date.
              </p>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About EthiCheck</Link>
            <Link to="/methodology" className="hover:text-blue-600 transition-colors">Methodology</Link>
            <Link to="/report-issue" className="hover:text-blue-600 transition-colors">Report Issue</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

