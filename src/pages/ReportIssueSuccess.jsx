import { CheckCircle, ArrowLeft, Home } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ReportIssueSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl text-gray-900 mb-4">
              Report Submitted Successfully!
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Thank you for taking the time to help improve EthiCheck. We've received your issue report and will review it promptly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-blue-800 text-sm space-y-1 text-left">
                <li>• We'll review your report within 24-48 hours</li>
                <li>• You'll receive an email confirmation shortly</li>
                <li>• If we need more information, we'll contact you</li>
                <li>• We'll keep you updated on any fixes or improvements</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/report-issue">
                <Button variant="outline" className="w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Report Another Issue
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ReportIssueSuccess

