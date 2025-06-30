import { BarChart3, FileText, Clock, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Assessment Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your AI ethics assessments and monitor compliance across your organization
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="max-w-4xl mx-auto">
          <Card className="text-center py-12">
            <CardHeader>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <CardTitle className="text-3xl mb-4">Dashboard Coming Soon</CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                We're building a comprehensive dashboard to help you track and manage your AI ethics assessments. 
                This feature will include assessment history, compliance tracking, and organizational insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Assessment History</h3>
                  <p className="text-gray-600 text-sm">View and manage all your completed assessments</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Compliance Tracking</h3>
                  <p className="text-gray-600 text-sm">Monitor ethical compliance across projects</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
                  <p className="text-gray-600 text-sm">Gain insights into your AI ethics practices</p>
                </div>
              </div>
              
              <div className="space-x-4">
                <Link 
                  to="/assessment" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start New Assessment
                </Link>
                <Link 
                  to="/examples" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Examples
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

