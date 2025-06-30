import { useState } from 'react'
import { AlertTriangle, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react'
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
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with pre-filled content
      const subject = `EthiCheck Issue Report - ${formData.issueType || 'General'}`
      const body = `
Issue Report from EthiCheck Beta

Name: ${formData.name}
Email: ${formData.email}
Issue Type: ${formData.issueType}

Description:
${formData.description}

---
Submitted from: ${window.location.href}
Date: ${new Date().toLocaleString()}
Browser: ${navigator.userAgent}
      `.trim()

      // Create mailto URL
      const mailtoUrl = `mailto:stevebambury@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open email client
      window.location.href = mailtoUrl
      
      // Show success message after a brief delay
      setTimeout(() => {
        setSubmitted(true)
        setIsSubmitting(false)
      }, 1000)
      
    } catch (error) {
      console.error('Error opening email client:', error)
      alert('There was an error opening your email client. Please try again or email stevebambury@outlook.com directly.')
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Email Client Opened!</CardTitle>
            <CardDescription>
              Your email client should have opened with a pre-filled issue report. Please send the email to complete your report submission.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => {setSubmitted(false); setFormData({name: '', email: '', issueType: '', description: ''})}}
              variant="outline"
              className="w-full"
            >
              Report Another Issue
            </Button>
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
                  <p className="text-gray-600 text-sm mb-2">Fill out the form and click submit to open your email client with a pre-filled message to our support team</p>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Type
                    </label>
                    <select
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
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Please describe the issue in detail. Include steps to reproduce if it's a bug, or specific suggestions if it's a feature request."
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Issue Report'}
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

