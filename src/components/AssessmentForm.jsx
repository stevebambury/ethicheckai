import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react'

// Assessment scoring logic based on methodology
const SCORING_WEIGHTS = {
  fairness: 0.20,      // 20%
  privacy: 0.20,       // 20%
  transparency: 0.18,  // 18%
  oversight: 0.17,     // 17%
  effectiveness: 0.15, // 15%
  risk: 0.10          // 10%
}

const GRADE_THRESHOLDS = {
  excellent: 8.5,
  good: 7.0,
  satisfactory: 5.5,
  needsImprovement: 4.0,
  inadequate: 0
}

const AssessmentForm = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Project Overview
    projectTitle: '',
    aiTool: '',
    toolUrl: '',
    description: '',
    organizationType: '', // For professional
    educationalLevel: '', // For educational
    userAgeRange: '', // For professional
    studentAgeRange: '', // For educational
    country: '',
    userCount: '', // For professional
    studentCount: '', // For educational
    
    // Step 2: AI System Design
    systemType: '',
    dataTypes: [],
    decisionMaking: '',
    humanInvolvement: '',
    
    // Step 3: Data & Privacy
    dataCollection: '',
    dataStorage: '',
    dataSharing: '',
    consentMechanism: '',
    dataRetention: '',
    
    // Step 4: Bias & Transparency
    biasAudit: '',
    fairnessMetrics: '',
    explanationMechanism: '',
    algorithmTransparency: '',
    
    // Step 5: Human Oversight
    humanOverride: '',
    errorEscalation: '',
    staffTraining: '',
    reviewProcess: '',
    
    // Step 6: Impact Assessment
    performanceMetrics: '',
    userEngagement: '',
    organizationalImpact: '',
    strategicAlignment: '',
    
    // Step 7: Legal Compliance
    regulatoryCompliance: '',
    riskAssessment: '',
    incidentResponse: '',
    vulnerabilityManagement: '',
    
    // Step 8: Review & Submit
    stakeholderReview: '',
    implementationTimeline: '',
    monitoringPlan: ''
  })

  const totalSteps = 8
  const progress = ((currentStep - 1) / totalSteps) * 100

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate score and navigate to results
      const score = calculateScore(formData)
      navigate('/assessment-results', { state: { score, formData, type } })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateScore = (data) => {
    // Initialize dimension scores
    let scores = {
      fairness: 0,
      privacy: 0,
      transparency: 0,
      oversight: 0,
      effectiveness: 0,
      risk: 0
    }

    // Fairness & Bias Mitigation scoring (20%)
    // Bias audit completion and quality
    if (data.biasAudit === 'comprehensive') scores.fairness += 4
    else if (data.biasAudit === 'basic') scores.fairness += 2.5
    else if (data.biasAudit === 'planned') scores.fairness += 1
    else scores.fairness += 0

    // Fairness metrics implementation
    if (data.fairnessMetrics === 'multiple') scores.fairness += 3
    else if (data.fairnessMetrics === 'single') scores.fairness += 2
    else if (data.fairnessMetrics === 'planned') scores.fairness += 1
    else scores.fairness += 0

    // Demographic group testing (inferred from system type)
    if (data.systemType === 'recommendation' || data.systemType === 'classification') {
      scores.fairness += 2 // Higher risk systems get bonus for consideration
    } else {
      scores.fairness += 1
    }

    // Edge case handling (inferred from human involvement)
    if (data.humanInvolvement === 'always') scores.fairness += 1
    else if (data.humanInvolvement === 'critical') scores.fairness += 0.5

    // Privacy & Data Protection scoring (20%)
    // Data minimization practices
    if (data.dataCollection === 'minimal') scores.privacy += 3
    else if (data.dataCollection === 'necessary') scores.privacy += 2
    else if (data.dataCollection === 'extensive') scores.privacy += 0.5
    else if (data.dataCollection === 'unsure') scores.privacy -= 1
    else scores.privacy += 1

    // Storage security measures
    if (data.dataStorage === 'encrypted_local') scores.privacy += 2.5
    else if (data.dataStorage === 'encrypted_cloud') scores.privacy += 2
    else if (data.dataStorage === 'local') scores.privacy += 1.5
    else if (data.dataStorage === 'cloud') scores.privacy += 1
    else if (data.dataStorage === 'unsure') scores.privacy -= 1
    else scores.privacy += 0.5

    // Third-party data sharing
    if (data.dataSharing === 'none') scores.privacy += 2
    else if (data.dataSharing === 'anonymized') scores.privacy += 1.5
    else if (data.dataSharing === 'consent') scores.privacy += 1
    else if (data.dataSharing === 'unsure') scores.privacy -= 1
    else scores.privacy += 0

    // Consent mechanism
    if (data.consentMechanism === 'explicit') scores.privacy += 2
    else if (data.consentMechanism === 'implied') scores.privacy += 1
    else if (data.consentMechanism === 'unsure') scores.privacy -= 1
    else scores.privacy += 0.5

    // Data retention
    if (data.dataRetention === 'minimal') scores.privacy += 0.5
    else if (data.dataRetention === 'policy') scores.privacy += 0.3
    else scores.privacy += 0.1

    // Transparency & Explainability scoring (18%)
    // AI decision explanation mechanisms
    if (data.explanationMechanism === 'detailed') scores.transparency += 4
    else if (data.explanationMechanism === 'basic') scores.transparency += 2.5
    else if (data.explanationMechanism === 'minimal') scores.transparency += 1
    else scores.transparency += 0

    // Algorithm disclosure
    if (data.algorithmTransparency === 'full') scores.transparency += 3
    else if (data.algorithmTransparency === 'partial') scores.transparency += 2
    else if (data.algorithmTransparency === 'limited') scores.transparency += 1
    else scores.transparency += 0

    // Model limitations documentation (inferred from description quality)
    if (data.description && data.description.length > 100) scores.transparency += 1.5
    else if (data.description && data.description.length > 50) scores.transparency += 1
    else scores.transparency += 0.5

    // User-friendly interfaces (inferred from explanation mechanism)
    if (data.explanationMechanism === 'detailed' || data.explanationMechanism === 'basic') {
      scores.transparency += 1.5
    } else {
      scores.transparency += 0.5
    }

    // Human Oversight & Control scoring (17%)
    // Professional override capabilities
    if (data.humanOverride === 'always') scores.oversight += 3
    else if (data.humanOverride === 'critical') scores.oversight += 2
    else if (data.humanOverride === 'limited') scores.oversight += 1
    else if (data.humanOverride === 'not_applicable') scores.oversight += 2 // Neutral score for staff-only use
    else scores.oversight += 0

    // Error escalation procedures
    if (data.errorEscalation === 'automated') scores.oversight += 2.5
    else if (data.errorEscalation === 'manual') scores.oversight += 2
    else if (data.errorEscalation === 'basic') scores.oversight += 1
    else scores.oversight += 0

    // Staff training programs
    if (data.staffTraining === 'comprehensive') scores.oversight += 2.5
    else if (data.staffTraining === 'basic') scores.oversight += 1.5
    else if (data.staffTraining === 'planned') scores.oversight += 0.5
    else scores.oversight += 0

    // Review process
    if (data.reviewProcess === 'regular') scores.oversight += 2
    else if (data.reviewProcess === 'periodic') scores.oversight += 1.5
    else if (data.reviewProcess === 'annual') scores.oversight += 1
    else scores.oversight += 0

    // Organizational Effectiveness scoring (15%)
    // Performance metrics
    if (data.performanceMetrics === 'comprehensive') scores.effectiveness += 3
    else if (data.performanceMetrics === 'basic') scores.effectiveness += 2
    else if (data.performanceMetrics === 'minimal') scores.effectiveness += 1
    else if (data.performanceMetrics === 'not_applicable') scores.effectiveness += 2 // Neutral score for staff-only use
    else scores.effectiveness += 0

    // User engagement
    if (data.userEngagement === 'high') scores.effectiveness += 2.5
    else if (data.userEngagement === 'moderate') scores.effectiveness += 2
    else if (data.userEngagement === 'low') scores.effectiveness += 1
    else if (data.userEngagement === 'not_applicable') scores.effectiveness += 2 // Neutral score for staff-only use
    else scores.effectiveness += 1.5

    // Organizational impact
    if (data.organizationalImpact === 'transformative') scores.effectiveness += 2.5
    else if (data.organizationalImpact === 'significant') scores.effectiveness += 2
    else if (data.organizationalImpact === 'moderate') scores.effectiveness += 1.5
    else if (data.organizationalImpact === 'not_applicable') scores.effectiveness += 2 // Neutral score for staff-only use
    else scores.effectiveness += 1

    // Strategic alignment
    if (data.strategicAlignment === 'strong') scores.effectiveness += 2
    else if (data.strategicAlignment === 'moderate') scores.effectiveness += 1.5
    else if (data.strategicAlignment === 'weak') scores.effectiveness += 0.5
    else scores.effectiveness += 1

    // Risk Management & Safety scoring (10%)
    // Risk assessment completion
    if (data.riskAssessment === 'comprehensive') scores.risk += 3
    else if (data.riskAssessment === 'basic') scores.risk += 2
    else if (data.riskAssessment === 'minimal') scores.risk += 1
    else if (data.riskAssessment === 'unsure') scores.risk -= 1
    else scores.risk += 0

    // Incident response
    if (data.incidentResponse === 'detailed') scores.risk += 2.5
    else if (data.incidentResponse === 'basic') scores.risk += 1.5
    else if (data.incidentResponse === 'planned') scores.risk += 0.5
    else if (data.incidentResponse === 'unsure') scores.risk -= 1
    else scores.risk += 0

    // Vulnerability management
    if (data.vulnerabilityManagement === 'proactive') scores.risk += 2.5
    else if (data.vulnerabilityManagement === 'reactive') scores.risk += 1.5
    else if (data.vulnerabilityManagement === 'basic') scores.risk += 1
    else if (data.vulnerabilityManagement === 'unsure') scores.risk -= 1
    else scores.risk += 0

    // Regulatory compliance
    if (data.regulatoryCompliance === 'full') scores.risk += 2
    else if (data.regulatoryCompliance === 'partial') scores.risk += 1.5
    else if (data.regulatoryCompliance === 'planned') scores.risk += 0.5
    else if (data.regulatoryCompliance === 'unsure') scores.risk -= 1
    else scores.risk += 0

    // Normalize scores to 0-10 scale
    const maxScores = {
      fairness: 10,      // 4 + 3 + 2 + 1 = 10
      privacy: 10,       // 3 + 2.5 + 2 + 2 + 0.5 = 10
      transparency: 10,  // 4 + 3 + 1.5 + 1.5 = 10
      oversight: 10,     // 3 + 2.5 + 2.5 + 2 = 10
      effectiveness: 10, // 3 + 2.5 + 2.5 + 2 = 10
      risk: 10          // 3 + 2.5 + 2.5 + 2 = 10
    }

    const normalizedScores = {
      fairness: Math.max(0, Math.min((scores.fairness / maxScores.fairness) * 10, 10)),
      privacy: Math.max(0, Math.min((scores.privacy / maxScores.privacy) * 10, 10)),
      transparency: Math.max(0, Math.min((scores.transparency / maxScores.transparency) * 10, 10)),
      oversight: Math.max(0, Math.min((scores.oversight / maxScores.oversight) * 10, 10)),
      effectiveness: Math.max(0, Math.min((scores.effectiveness / maxScores.effectiveness) * 10, 10)),
      risk: Math.max(0, Math.min((scores.risk / maxScores.risk) * 10, 10))
    }

    // Calculate weighted final score
    const finalScore = 
      normalizedScores.fairness * SCORING_WEIGHTS.fairness +
      normalizedScores.privacy * SCORING_WEIGHTS.privacy +
      normalizedScores.transparency * SCORING_WEIGHTS.transparency +
      normalizedScores.oversight * SCORING_WEIGHTS.oversight +
      normalizedScores.effectiveness * SCORING_WEIGHTS.effectiveness +
      normalizedScores.risk * SCORING_WEIGHTS.risk

    return {
      overall: Math.round(finalScore * 10) / 10,
      dimensions: normalizedScores
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
            <p className="text-gray-600">Basic project information and context</p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
              <input
                type="text"
                placeholder={type === 'educational' ? "e.g., Reading Comprehension Enhancement Project" : "e.g., Customer Service Automation Project"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.projectTitle}
                onChange={(e) => handleInputChange('projectTitle', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name of AI Tool/Platform *</label>
              <input
                type="text"
                placeholder={type === 'educational' ? "e.g., Khan Academy AI Tutor, Duolingo, ReadingIQ" : "e.g., Zendesk AI Assistant, ChatGPT, Salesforce Einstein"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.aiTool}
                onChange={(e) => handleInputChange('aiTool', e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter the specific name of the AI tool, platform, or software you plan to use.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tool Website URL (Optional)</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.toolUrl}
                onChange={(e) => handleInputChange('toolUrl', e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">
                Provide the official website URL for the AI tool to help us verify privacy policies and compliance information.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
              <textarea
                rows={4}
                placeholder={type === 'educational' ? 
                  "Example: 'We want to use the Mizou AI chatbot app with 8 year old students learning about the Titanic. Students would ask questions and get interactive responses about historical events.'" :
                  "Describe specifically how the AI will be used in your organization. Include the purpose, business objectives, and expected outcomes."
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  "Describe specifically how the AI will be used with your students. Include the purpose and learning objectives." :
                  "Describe specifically how the AI will be used in your organization. Include the purpose, business objectives, and expected outcomes."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {type === 'educational' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Educational Level *</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.educationalLevel}
                    onChange={(e) => handleInputChange('educationalLevel', e.target.value)}
                  >
                    <option value="">Select level...</option>
                    <option value="elementary">Elementary School</option>
                    <option value="middle">Middle School</option>
                    <option value="high">High School</option>
                    <option value="university">University/College</option>
                    <option value="professional">Professional Training</option>
                    <option value="staff">Staff/Administrative Use</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.organizationType}
                    onChange={(e) => handleInputChange('organizationType', e.target.value)}
                  >
                    <option value="">Select organization type...</option>
                    <option value="healthcare">Healthcare Organization</option>
                    <option value="financial">Financial Services</option>
                    <option value="technology">Technology Company</option>
                    <option value="government">Government Agency</option>
                    <option value="nonprofit">Non-Profit Organization</option>
                    <option value="consulting">Consulting Firm</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail/E-commerce</option>
                    <option value="education">Educational Institution</option>
                    <option value="other">Other Professional</option>
                  </select>
                </div>
              )}

              {type === 'educational' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Age Range *</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.studentAgeRange}
                    onChange={(e) => handleInputChange('studentAgeRange', e.target.value)}
                  >
                    <option value="">Select age range...</option>
                    <option value="under-13">Under 13</option>
                    <option value="13-17">13-17</option>
                    <option value="18+">18+</option>
                    <option value="mixed">Mixed ages</option>
                    <option value="not-applicable">Not applicable (staff use)</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary User Age Range *</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.userAgeRange}
                    onChange={(e) => handleInputChange('userAgeRange', e.target.value)}
                  >
                    <option value="">Select age range...</option>
                    <option value="under-13">Under 13 (COPPA applies)</option>
                    <option value="13-17">13-17 (Minors)</option>
                    <option value="18-25">18-25</option>
                    <option value="25-35">25-35</option>
                    <option value="35-50">35-50</option>
                    <option value="50+">50+</option>
                    <option value="mixed">Mixed ages</option>
                    <option value="general">General public</option>
                  </select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country/Region *</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                >
                  <option value="">Select country...</option>
                  <option value="au">Australia</option>
                  <option value="ca">Canada</option>
                  <option value="cn">China</option>
                  <option value="dk">Denmark</option>
                  <option value="fi">Finland</option>
                  <option value="fr">France</option>
                  <option value="de">Germany</option>
                  <option value="hk">Hong Kong</option>
                  <option value="in">India</option>
                  <option value="it">Italy</option>
                  <option value="jp">Japan</option>
                  <option value="nl">Netherlands</option>
                  <option value="nz">New Zealand</option>
                  <option value="no">Norway</option>
                  <option value="sg">Singapore</option>
                  <option value="kr">South Korea</option>
                  <option value="es">Spain</option>
                  <option value="se">Sweden</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {type === 'educational' ? 'Number of Students Impacted *' : 'User Scale *'}
                </label>
                {type === 'educational' ? (
                  <>
                    <input
                      type="number"
                      placeholder="Enter number of students..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.studentCount}
                      onChange={(e) => handleInputChange('studentCount', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Enter 0 if this is for staff/administrative use only
                    </p>
                  </>
                ) : (
                  <>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.userCount}
                      onChange={(e) => handleInputChange('userCount', e.target.value)}
                    >
                      <option value="">Select user scale...</option>
                      <option value="small">Small scale (1-100 users)</option>
                      <option value="medium">Medium scale (100-1,000 users)</option>
                      <option value="large">Large scale (1,000-10,000 users)</option>
                      <option value="enterprise">Enterprise scale (10,000+ users)</option>
                      <option value="public">Public/Customer-facing (unknown scale)</option>
                      <option value="internal-only">Internal staff use only</option>
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Select the scale that best describes your expected user base
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {type === 'educational' ? 'Age & Safety' : 'AI System Design'}
            </h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Age-appropriate design and safety considerations' : 
                'Technical specifications and system architecture'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">AI System Type *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.systemType}
                onChange={(e) => handleInputChange('systemType', e.target.value)}
              >
                <option value="">Select system type...</option>
                <option value="chatbot">Chatbot/Conversational AI</option>
                <option value="recommendation">Recommendation System</option>
                <option value="classification">Classification/Categorization</option>
                <option value="prediction">Predictive Analytics</option>
                <option value="generation">Content Generation</option>
                <option value="automation">Process Automation</option>
                <option value="analysis">Data Analysis</option>
                <option value="other">Other</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                Select the primary type of AI system you are implementing.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data Types Processed *</label>
              <div className="space-y-2">
                {[
                  { value: 'personal', label: type === 'educational' ? 'Student personal information' : 'Personal information' },
                  { value: 'behavioral', label: type === 'educational' ? 'Learning behavior data' : 'Behavioral data' },
                  { value: 'performance', label: type === 'educational' ? 'Academic performance data' : 'Performance metrics' },
                  { value: 'communication', label: 'Communication/Chat logs' },
                  { value: 'biometric', label: 'Biometric data' },
                  { value: 'location', label: 'Location data' },
                  { value: 'financial', label: 'Financial information' },
                  { value: 'health', label: 'Health information' }
                ].map((dataType) => (
                  <label key={dataType.value} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.dataTypes.includes(dataType.value)}
                      onChange={(e) => {
                        const newDataTypes = e.target.checked
                          ? [...formData.dataTypes, dataType.value]
                          : formData.dataTypes.filter(type => type !== dataType.value)
                        handleInputChange('dataTypes', newDataTypes)
                      }}
                    />
                    {dataType.label}
                  </label>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Select all types of data that the AI system will process or analyze.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Decision Making Level *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.decisionMaking}
                onChange={(e) => handleInputChange('decisionMaking', e.target.value)}
              >
                <option value="">Select decision making level...</option>
                <option value="fully-automated">Fully automated decisions</option>
                <option value="human-review">AI recommendations with human review</option>
                <option value="human-final">AI assistance with human final decision</option>
                <option value="advisory">Advisory/informational only</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How much decision-making authority will the AI have regarding students?' :
                  'What level of decision-making authority will the AI system have?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Human Involvement *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.humanInvolvement}
                onChange={(e) => handleInputChange('humanInvolvement', e.target.value)}
              >
                <option value="">Select human involvement level...</option>
                <option value="always">Always in the loop</option>
                <option value="critical">Only for critical decisions</option>
                <option value="periodic">Periodic review</option>
                <option value="minimal">Minimal oversight</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How will teachers/staff be involved in AI-student interactions?' :
                  'How will human professionals be involved in AI operations?'
                }
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Data & Privacy</h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Student data protection and privacy compliance' : 
                'Data collection practices and privacy protection measures'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data Collection Practices *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.dataCollection}
                onChange={(e) => handleInputChange('dataCollection', e.target.value)}
              >
                <option value="">Select data collection approach...</option>
                <option value="minimal">Minimal data collection (only essential)</option>
                <option value="necessary">Necessary data for functionality</option>
                <option value="extensive">Extensive data for optimization</option>
                <option value="comprehensive">Comprehensive data collection</option>
                <option value="unsure">Unsure of data collection practices</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How much student data will be collected? Consider FERPA and COPPA requirements.' :
                  'What is your approach to data collection? Consider data minimization principles.'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data Storage & Security *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.dataStorage}
                onChange={(e) => handleInputChange('dataStorage', e.target.value)}
              >
                <option value="">Select storage approach...</option>
                <option value="encrypted_local">Encrypted local storage</option>
                <option value="encrypted_cloud">Encrypted cloud storage</option>
                <option value="local">Local storage (unencrypted)</option>
                <option value="cloud">Cloud storage (unencrypted)</option>
                <option value="hybrid">Hybrid approach</option>
                <option value="unsure">Unsure of data storage practices</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How will student data be stored and secured? Educational data requires special protection.' :
                  'How will user data be stored and secured? Consider encryption and access controls.'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Third-Party Data Sharing *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.dataSharing}
                onChange={(e) => handleInputChange('dataSharing', e.target.value)}
              >
                <option value="">Select sharing policy...</option>
                <option value="none">No third-party sharing</option>
                <option value="anonymized">Anonymized data only</option>
                <option value="consent">With explicit consent</option>
                <option value="partners">With trusted partners</option>
                <option value="required">As legally required</option>
                <option value="unsure">Unsure of data sharing practices</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Will student data be shared with third parties? FERPA has strict requirements for educational data sharing.' :
                  'Will user data be shared with third parties? Consider privacy regulations and user consent.'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Consent Mechanism *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.consentMechanism}
                onChange={(e) => handleInputChange('consentMechanism', e.target.value)}
              >
                <option value="">Select consent approach...</option>
                <option value="explicit">Explicit opt-in consent</option>
                <option value="implied">Implied consent</option>
                <option value="parental">Parental consent (for minors)</option>
                <option value="institutional">Institutional consent</option>
                <option value="none">No specific consent mechanism</option>
                <option value="unsure">Unsure of consent practices</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How will consent be obtained? For students under 13, parental consent is required under COPPA.' :
                  'How will user consent be obtained for data processing and AI interactions?'
                }
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Bias & Transparency</h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Ensuring fair treatment and age-appropriate transparency for all students' : 
                'Bias mitigation and algorithmic transparency measures'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bias Audit & Testing *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.biasAudit}
                onChange={(e) => handleInputChange('biasAudit', e.target.value)}
              >
                <option value="">Select bias audit level...</option>
                <option value="comprehensive">Comprehensive bias audit completed</option>
                <option value="basic">Basic bias testing completed</option>
                <option value="planned">Bias audit planned</option>
                <option value="none">No bias audit planned</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Have you tested the AI for bias against different student groups (race, gender, learning abilities, etc.)?' :
                  'Have you conducted bias testing across different demographic groups and use cases?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fairness Metrics *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.fairnessMetrics}
                onChange={(e) => handleInputChange('fairnessMetrics', e.target.value)}
              >
                <option value="">Select fairness approach...</option>
                <option value="multiple">Multiple fairness metrics implemented</option>
                <option value="single">Single fairness metric</option>
                <option value="planned">Fairness metrics planned</option>
                <option value="none">No specific fairness metrics</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'What measures ensure fair treatment of all students regardless of background or ability level?' :
                  'What metrics do you use to measure and ensure fairness in AI decisions?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">AI Decision Explanation *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.explanationMechanism}
                onChange={(e) => handleInputChange('explanationMechanism', e.target.value)}
              >
                <option value="">Select explanation level...</option>
                <option value="detailed">Detailed explanations provided</option>
                <option value="basic">Basic explanations available</option>
                <option value="minimal">Minimal explanation features</option>
                <option value="none">No explanation mechanism</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Can students and teachers understand why the AI made specific recommendations or decisions?' :
                  'Can users understand how and why the AI makes specific decisions or recommendations?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Algorithm Transparency *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.algorithmTransparency}
                onChange={(e) => handleInputChange('algorithmTransparency', e.target.value)}
              >
                <option value="">Select transparency level...</option>
                <option value="full">Full algorithm disclosure</option>
                <option value="partial">Partial algorithm information</option>
                <option value="limited">Limited transparency</option>
                <option value="proprietary">Proprietary/no disclosure</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How much information about the AI algorithm is available to educators and administrators?' :
                  'How much information about the AI algorithm is disclosed to stakeholders?'
                }
              </p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Human Oversight</h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Teacher and staff oversight of AI interactions with students' : 
                'Human control and oversight mechanisms'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {type === 'educational' ? 'Teacher Override Capability *' : 'Human Override Capability *'}
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.humanOverride}
                onChange={(e) => handleInputChange('humanOverride', e.target.value)}
              >
                <option value="">Select override level...</option>
                <option value="always">Always available</option>
                <option value="critical">Available for critical decisions</option>
                <option value="limited">Limited override capability</option>
                <option value="none">No override capability</option>
                {type === 'educational' && <option value="not_applicable">Not Applicable (Staff use only)</option>}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Can teachers intervene or override AI decisions affecting students at any time?' :
                  'Can human operators intervene or override AI decisions when necessary?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Error Escalation Process *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.errorEscalation}
                onChange={(e) => handleInputChange('errorEscalation', e.target.value)}
              >
                <option value="">Select escalation approach...</option>
                <option value="automated">Automated escalation system</option>
                <option value="manual">Manual escalation process</option>
                <option value="basic">Basic error reporting</option>
                <option value="none">No formal escalation process</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How are AI errors or inappropriate responses escalated to teachers or administrators?' :
                  'How are AI errors or problematic decisions escalated to human supervisors?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {type === 'educational' ? 'Staff Training Program *' : 'Staff Training Program *'}
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.staffTraining}
                onChange={(e) => handleInputChange('staffTraining', e.target.value)}
              >
                <option value="">Select training level...</option>
                <option value="comprehensive">Comprehensive AI ethics training</option>
                <option value="basic">Basic AI awareness training</option>
                <option value="planned">Training program planned</option>
                <option value="none">No specific training planned</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'What training do teachers and staff receive about AI ethics and appropriate use with students?' :
                  'What training do staff receive about AI ethics, limitations, and appropriate use?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Review Process *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.reviewProcess}
                onChange={(e) => handleInputChange('reviewProcess', e.target.value)}
              >
                <option value="">Select review frequency...</option>
                <option value="regular">Regular ongoing review</option>
                <option value="periodic">Periodic scheduled review</option>
                <option value="annual">Annual review</option>
                <option value="none">No formal review process</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How often is the AI system reviewed for educational effectiveness and student safety?' :
                  'How often is the AI system reviewed for performance, ethics, and compliance?'
                }
              </p>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Impact Assessment</h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Educational effectiveness and learning outcome measurement' : 
                'Organizational effectiveness and business impact evaluation'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Performance Metrics *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.performanceMetrics}
                onChange={(e) => handleInputChange('performanceMetrics', e.target.value)}
              >
                <option value="">Select metrics approach...</option>
                <option value="comprehensive">Comprehensive metrics tracking</option>
                <option value="basic">Basic performance metrics</option>
                <option value="minimal">Minimal metrics collection</option>
                <option value="none">No formal metrics</option>
                {type === 'educational' && <option value="not_applicable">Not Applicable (Staff use only)</option>}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How do you measure the AI\'s impact on student learning outcomes and engagement?' :
                  'How do you measure the AI system\'s performance and business impact?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {type === 'educational' ? 'Student Engagement *' : 'User Engagement *'}
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.userEngagement}
                onChange={(e) => handleInputChange('userEngagement', e.target.value)}
              >
                <option value="">Select engagement level...</option>
                <option value="high">High engagement observed</option>
                <option value="moderate">Moderate engagement</option>
                <option value="low">Low engagement</option>
                <option value="unknown">Engagement not yet measured</option>
                {type === 'educational' && <option value="not_applicable">Not Applicable (Staff use only)</option>}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How engaged are students with the AI system? Does it enhance or detract from learning?' :
                  'How do users respond to and engage with the AI system?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {type === 'educational' ? 'Educational Impact *' : 'Organizational Impact *'}
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.organizationalImpact}
                onChange={(e) => handleInputChange('organizationalImpact', e.target.value)}
              >
                <option value="">Select impact level...</option>
                <option value="transformative">Transformative impact</option>
                <option value="significant">Significant positive impact</option>
                <option value="moderate">Moderate impact</option>
                <option value="minimal">Minimal impact</option>
                <option value="unknown">Impact not yet determined</option>
                {type === 'educational' && <option value="not_applicable">Not Applicable (Staff use only)</option>}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'What is the overall impact on educational outcomes and institutional goals?' :
                  'What is the overall impact on organizational efficiency and goals?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Strategic Alignment *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.strategicAlignment}
                onChange={(e) => handleInputChange('strategicAlignment', e.target.value)}
              >
                <option value="">Select alignment level...</option>
                <option value="strong">Strong strategic alignment</option>
                <option value="moderate">Moderate alignment</option>
                <option value="weak">Weak alignment</option>
                <option value="unclear">Alignment unclear</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How well does the AI implementation align with your educational mission and values?' :
                  'How well does the AI implementation align with organizational strategy and values?'
                }
              </p>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Legal Compliance</h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Educational regulations and child protection compliance' : 
                'Regulatory compliance and risk management'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Regulatory Compliance *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.regulatoryCompliance}
                onChange={(e) => handleInputChange('regulatoryCompliance', e.target.value)}
              >
                <option value="">Select compliance level...</option>
                <option value="full">Full compliance verified</option>
                <option value="partial">Partial compliance</option>
                <option value="planned">Compliance review planned</option>
                <option value="unsure">Unsure of compliance status</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Does the AI system comply with FERPA, COPPA, and other educational privacy regulations?' :
                  'Does the AI system comply with relevant industry regulations (GDPR, CCPA, HIPAA, etc.)?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Risk Assessment *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.riskAssessment}
                onChange={(e) => handleInputChange('riskAssessment', e.target.value)}
              >
                <option value="">Select risk assessment level...</option>
                <option value="comprehensive">Comprehensive risk assessment</option>
                <option value="basic">Basic risk evaluation</option>
                <option value="minimal">Minimal risk consideration</option>
                <option value="none">No formal risk assessment</option>
                <option value="unsure">Unsure of risk assessment practices</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Have you assessed risks to student safety, privacy, and educational outcomes?' :
                  'Have you conducted a comprehensive risk assessment for AI implementation?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Incident Response Plan *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.incidentResponse}
                onChange={(e) => handleInputChange('incidentResponse', e.target.value)}
              >
                <option value="">Select response plan level...</option>
                <option value="detailed">Detailed incident response plan</option>
                <option value="basic">Basic response procedures</option>
                <option value="planned">Response plan in development</option>
                <option value="none">No incident response plan</option>
                <option value="unsure">Unsure of incident response procedures</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'What procedures are in place if the AI causes harm to students or violates privacy?' :
                  'What procedures are in place to respond to AI-related incidents or failures?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vulnerability Management *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.vulnerabilityManagement}
                onChange={(e) => handleInputChange('vulnerabilityManagement', e.target.value)}
              >
                <option value="">Select vulnerability approach...</option>
                <option value="proactive">Proactive vulnerability management</option>
                <option value="reactive">Reactive vulnerability response</option>
                <option value="basic">Basic security measures</option>
                <option value="none">No formal vulnerability management</option>
                <option value="unsure">Unsure of vulnerability management practices</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How do you identify and address security vulnerabilities that could affect students?' :
                  'How do you identify and address security vulnerabilities in the AI system?'
                }
              </p>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>
            <p className="text-gray-600">
              {type === 'educational' ? 
                'Final review and implementation planning for educational AI' : 
                'Final review and implementation planning'
              }
            </p>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stakeholder Review *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.stakeholderReview}
                onChange={(e) => handleInputChange('stakeholderReview', e.target.value)}
              >
                <option value="">Select review status...</option>
                <option value="completed">Stakeholder review completed</option>
                <option value="planned">Review planned</option>
                <option value="partial">Partial stakeholder input</option>
                <option value="none">No stakeholder review</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'Have teachers, administrators, parents, and students been consulted about this AI implementation?' :
                  'Have relevant stakeholders (employees, customers, partners) been consulted about this AI implementation?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Timeline *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.implementationTimeline}
                onChange={(e) => handleInputChange('implementationTimeline', e.target.value)}
              >
                <option value="">Select timeline...</option>
                <option value="immediate">Immediate implementation</option>
                <option value="pilot">Pilot program first</option>
                <option value="phased">Phased rollout</option>
                <option value="delayed">Implementation delayed</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'What is your plan for rolling out this AI system in your educational environment?' :
                  'What is your plan for implementing this AI system in your organization?'
                }
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ongoing Monitoring Plan *</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.monitoringPlan}
                onChange={(e) => handleInputChange('monitoringPlan', e.target.value)}
              >
                <option value="">Select monitoring approach...</option>
                <option value="continuous">Continuous monitoring</option>
                <option value="regular">Regular scheduled monitoring</option>
                <option value="periodic">Periodic review</option>
                <option value="minimal">Minimal monitoring</option>
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'educational' ? 
                  'How will you monitor the AI system\'s impact on students and educational outcomes over time?' :
                  'How will you monitor the AI system\'s performance and ethical compliance over time?'
                }
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Ready to Submit</h3>
              <p className="text-blue-700 mb-4">
                {type === 'educational' ? 
                  'You\'re about to complete your educational AI ethics assessment. The system will generate a comprehensive report with recommendations for safe and effective AI implementation in your educational environment.' :
                  'You\'re about to complete your professional AI ethics assessment. The system will generate a comprehensive report with recommendations for responsible AI implementation in your organization.'
                }
              </p>
              <p className="text-sm text-blue-600">
                Click "Submit Assessment" to generate your personalized ethics report and recommendations.
              </p>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Step {currentStep}</h2>
            <p className="text-gray-600">This step is under development.</p>
          </div>
        )
    }
  }

  const stepTitles = type === 'educational' ? [
    'Project Overview',
    'Age & Safety', 
    'AI System Design',
    'Data & Privacy',
    'Bias & Transparency',
    'Human Oversight',
    'Impact Assessment',
    'Legal Compliance'
  ] : [
    'Project Overview',
    'AI System Design',
    'Data & Privacy', 
    'Bias & Transparency',
    'Human Oversight',
    'Impact Assessment',
    'Legal Compliance',
    'Review & Submit'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {type === 'educational' ? 'Educational AI Ethics Assessment' : 'Professional AI Ethics Assessment'}
          </h1>
          <p className="text-gray-600">
            {type === 'educational' ? 
              'Comprehensive ethics evaluation for educational AI implementations' :
              'Comprehensive ethics evaluation for professional AI implementations'
            }
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

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 overflow-x-auto">
            {stepTitles.map((title, index) => (
              <div
                key={index}
                className={`flex flex-col items-center min-w-0 ${
                  index + 1 === currentStep
                    ? 'text-blue-600'
                    : index + 1 < currentStep
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1 ${
                    index + 1 === currentStep
                      ? 'bg-blue-600 text-white'
                      : index + 1 < currentStep
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-xs text-center">{title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center bg-blue-600 hover:bg-blue-700"
          >
            {currentStep === totalSteps ? 'Submit Assessment' : 'Next Step'}
            {currentStep !== totalSteps && <ChevronRight className="h-4 w-4 ml-1" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AssessmentForm

