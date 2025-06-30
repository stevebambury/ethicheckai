import { useState, useEffect } from 'react'
import { AlertTriangle, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    description: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check if we're on the success page (Netlify adds ?success=true)
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true)
    }
  }, [])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Report Submitted!</CardTitle>
            <CardDescription>
              Thank you for your feedback. We've received your issue report and will review it promptly. 
              You should receive a confirmation email shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-blue-800 text-sm space-y-1 text-left">
                <li>• We'll review your report within 24-48 hours</li>
                <li>• You'll receive an email confirmation shortly</li>
                <li>• If we need more information, we'll contact you</li>
                <li>• We'll keep you updated on any fixes or improvements</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  setShowSuccess(false)
                  setFormData({name: '', email: '', issueType: '', description: ''})
                  window.history.replaceState({}, '', '/report-issue')
                }}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Report Another Issue
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                className="w-full sm:w-auto"
              >
                Return to Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report an Issue</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help improve EthiCheck by reporting bugs, suggesting features, or sharing feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How It Works</h4>
                  <p className="text-gray-600 text-sm mb-2">Fill out the form and submit it directly. We'll receive your report immediately and respond as soon as possible.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Issue Types</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Technical bugs or errors</li>
                    <li>• Feature requests</li>
                    <li>• Assessment accuracy concerns</li>
                    <li>• General feedback</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600 text-sm">We typically respond to issue reports within 24-48 hours during business days.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Report an Issue</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us address your concern
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  name="issue-report" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  action="/report-issue?success=true"
                  className="space-y-6"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="issue-report" />
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Type *
                    </label>
                    <select
                      name="issue-type"
                      value={formData.issueType}
                      onChange={(e) => handleInputChange('issueType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select an issue type</option>
                      <option value="bug">Technical Bug</option>
                      <option value="feature">Feature Request</option>
                      <option value="assessment">Assessment Accuracy</option>
                      <option value="feedback">General Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Please describe the issue in detail. Include steps to reproduce if it's a bug, or specific suggestions if it's a feature request."
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Hidden fields for additional context */}
                  <input type="hidden" name="submitted-from" value={typeof window !== 'undefined' ? window.location.href : ''} />
                  <input type="hidden" name="submission-date" value={new Date().toLocaleString()} />
                  <input type="hidden" name="browser-info" value={typeof navigator !== 'undefined' ? navigator.userAgent : ''} />

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Issue Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Before Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Common Issues</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Assessment not loading: Try refreshing the page</li>
                    <li>• PDF download issues: Check your browser's download settings</li>
                    <li>• Form not submitting: Ensure all required fields are filled</li>
                    <li>• Unexpected results: Review the methodology page for scoring details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Helpful Information</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Include your browser type and version</li>
                    <li>• Describe the steps that led to the issue</li>
                    <li>• Mention any error messages you saw</li>
                    <li>• Include screenshots if relevant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ReportIssue

