import { useLocation, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Scale, Shield, Eye, User, TrendingUp, AlertTriangle, Download, Printer, CheckCircle, AlertCircle, XCircle } from 'lucide-react'
import { downloadPDF, printPDF } from '../utils/pdfGenerator'
import AdSense from '@/components/AdSense'
import guidesBanner from '../assets/guides-banner.png'
import guidesBannerMobile from '../assets/guides-banner-mobile.png'

const AssessmentResults = () => {
  const location = useLocation()
  
  // Try to get data from location.state first, then from URL parameters
  let { score, formData, type } = location.state || {}
  
  // If no state data, try to parse from URL parameters
  if (!score) {
    const urlParams = new URLSearchParams(location.search)
    const scoresParam = urlParams.get('scores')
    const typeParam = urlParams.get('type')
    
    if (scoresParam && typeParam) {
      try {
        const parsedScores = JSON.parse(decodeURIComponent(scoresParam))
        score = parsedScores
        type = typeParam
        formData = { projectTitle: 'Test Assessment', aiTool: 'Test Tool' } // Mock data for testing
      } catch (e) {
        console.error('Error parsing URL parameters:', e)
      }
    }
  }

  if (!score) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Assessment Data</h1>
          <p className="text-gray-600 mb-8">Please complete an assessment first.</p>
          <Link to="/assessment">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Start New Assessment
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const getGradeDescription = (score) => {
    if (score >= 8.5) return { 
      grade: 'Excellent', 
      description: 'Outstanding ethical implementation with comprehensive safeguards and best practices', 
      color: 'text-green-600', 
      bgColor: 'bg-green-50', 
      borderColor: 'border-green-200',
      icon: CheckCircle
    }
    if (score >= 7.0) return { 
      grade: 'Good', 
      description: 'Strong ethical foundation with minor areas for improvement', 
      color: 'text-green-600', 
      bgColor: 'bg-green-50', 
      borderColor: 'border-green-200',
      icon: CheckCircle
    }
    if (score >= 5.5) return { 
      grade: 'Satisfactory', 
      description: 'Adequate ethical measures with several areas needing attention', 
      color: 'text-yellow-600', 
      bgColor: 'bg-yellow-50', 
      borderColor: 'border-yellow-200',
      icon: AlertCircle
    }
    if (score >= 4.0) return { 
      grade: 'Needs Improvement', 
      description: 'Significant ethical concerns requiring immediate attention', 
      color: 'text-orange-600', 
      bgColor: 'bg-orange-50', 
      borderColor: 'border-orange-200',
      icon: AlertCircle
    }
    return { 
      grade: 'Inadequate', 
      description: 'Critical ethical deficiencies requiring comprehensive review and remediation', 
      color: 'text-red-600', 
      bgColor: 'bg-red-50', 
      borderColor: 'border-red-200',
      icon: XCircle
    }
  }

  const getDimensionFeedback = (dimensionScore, dimensionName) => {
    if (dimensionScore >= 8.5) {
      return {
        status: 'Excellent',
        feedback: `Your ${dimensionName.toLowerCase()} implementation demonstrates best practices with comprehensive measures in place.`,
        color: 'text-green-600'
      }
    }
    if (dimensionScore >= 7.0) {
      return {
        status: 'Good',
        feedback: `Your ${dimensionName.toLowerCase()} approach is strong with minor areas for enhancement.`,
        color: 'text-green-600'
      }
    }
    if (dimensionScore >= 5.5) {
      return {
        status: 'Satisfactory',
        feedback: `Your ${dimensionName.toLowerCase()} measures are adequate but would benefit from strengthening.`,
        color: 'text-yellow-600'
      }
    }
    if (dimensionScore >= 4.0) {
      return {
        status: 'Needs Improvement',
        feedback: `Your ${dimensionName.toLowerCase()} implementation has significant gaps that require attention.`,
        color: 'text-orange-600'
      }
    }
    return {
      status: 'Inadequate',
      feedback: `Your ${dimensionName.toLowerCase()} approach has critical deficiencies requiring immediate remediation.`,
      color: 'text-red-600'
    }
  }

  const gradeInfo = getGradeDescription(score.overall)

  const dimensions = [
    {
      icon: Scale,
      title: "Fairness & Bias Mitigation",
      weight: "20%",
      score: score.dimensions.fairness,
      description: "Algorithmic fairness and bias testing",
      feedback: getDimensionFeedback(score.dimensions.fairness, "Fairness & Bias Mitigation")
    },
    {
      icon: Shield,
      title: "Privacy & Data Protection",
      weight: "20%",
      score: score.dimensions.privacy,
      description: "Data handling and regulatory compliance",
      feedback: getDimensionFeedback(score.dimensions.privacy, "Privacy & Data Protection")
    },
    {
      icon: Eye,
      title: "Transparency & Explainability",
      weight: "18%",
      score: score.dimensions.transparency,
      description: "AI decision explanation capability",
      feedback: getDimensionFeedback(score.dimensions.transparency, "Transparency & Explainability")
    },
    {
      icon: User,
      title: "Human Oversight & Control",
      weight: "17%",
      score: score.dimensions.oversight,
      description: "Human agency and professional empowerment",
      feedback: getDimensionFeedback(score.dimensions.oversight, "Human Oversight & Control")
    },
    {
      icon: TrendingUp,
      title: "Organizational Effectiveness",
      weight: "15%",
      score: score.dimensions.effectiveness,
      description: "Business outcome improvements",
      feedback: getDimensionFeedback(score.dimensions.effectiveness, "Organizational Effectiveness")
    },
    {
      icon: AlertTriangle,
      title: "Risk Management & Safety",
      weight: "10%",
      score: score.dimensions.risk,
      description: "Risk mitigation and safety protocols",
      feedback: getDimensionFeedback(score.dimensions.risk, "Risk Management & Safety")
    }
  ]

  const getDetailedRecommendations = () => {
    const recommendations = []
    
    // Fairness & Bias recommendations
    if (score.dimensions.fairness < 7) {
      const priority = score.dimensions.fairness < 5 ? 'High' : 'Medium'
      let recommendation = ''
      
      if (formData.biasAudit === 'none' || formData.biasAudit === 'planned') {
        recommendation = 'Conduct a comprehensive bias audit across all demographic groups and use cases. Implement systematic testing for edge cases and underrepresented populations.'
      } else if (formData.fairnessMetrics === 'none' || formData.fairnessMetrics === 'planned') {
        recommendation = 'Implement multiple fairness metrics (demographic parity, equalized odds, calibration) to ensure comprehensive bias detection and mitigation.'
      } else {
        recommendation = 'Enhance existing bias testing with more comprehensive demographic coverage and regular re-evaluation of fairness metrics.'
      }
      
      recommendations.push({
        priority,
        area: 'Fairness & Bias Mitigation',
        recommendation,
        score: score.dimensions.fairness
      })
    }
    
    // Privacy & Data Protection recommendations
    if (score.dimensions.privacy < 7) {
      const priority = score.dimensions.privacy < 5 ? 'High' : 'Medium'
      let recommendation = ''
      
      if (formData.dataCollection === 'extensive' || formData.dataCollection === 'comprehensive') {
        recommendation = 'Implement data minimization principles. Collect only essential data required for core functionality and establish clear data retention policies.'
      } else if (formData.dataSharing !== 'none' && formData.dataSharing !== 'anonymized') {
        recommendation = 'Review third-party data sharing practices. Implement explicit consent mechanisms and consider anonymization techniques.'
      } else if (formData.dataStorage === 'cloud' || formData.dataStorage === 'local') {
        recommendation = 'Enhance data security with encryption at rest and in transit. Consider implementing zero-knowledge architectures where possible.'
      } else {
        recommendation = 'Strengthen privacy protection measures and ensure full compliance with applicable regulations (GDPR, FERPA, COPPA).'
      }
      
      recommendations.push({
        priority,
        area: 'Privacy & Data Protection',
        recommendation,
        score: score.dimensions.privacy
      })
    }
    
    // Transparency recommendations
    if (score.dimensions.transparency < 6) {
      const priority = score.dimensions.transparency < 4 ? 'High' : 'Medium'
      let recommendation = ''
      
      if (formData.explanationMechanism === 'none' || formData.explanationMechanism === 'minimal') {
        recommendation = 'Implement comprehensive explanation mechanisms that provide clear, user-friendly explanations for AI decisions. Consider LIME, SHAP, or similar explainability tools.'
      } else if (formData.algorithmTransparency === 'none' || formData.algorithmTransparency === 'limited') {
        recommendation = 'Increase algorithm transparency by documenting model limitations, decision boundaries, and providing stakeholder-appropriate disclosure of AI system capabilities.'
      } else {
        recommendation = 'Enhance existing explanation systems with more detailed, context-aware explanations and user-friendly interfaces.'
      }
      
      recommendations.push({
        priority,
        area: 'Transparency & Explainability',
        recommendation,
        score: score.dimensions.transparency
      })
    }
    
    // Human Oversight recommendations
    if (score.dimensions.oversight < 6) {
      const priority = score.dimensions.oversight < 4 ? 'High' : 'Medium'
      let recommendation = ''
      
      if (formData.humanOverride === 'none' || formData.humanOverride === 'limited') {
        recommendation = 'Implement robust human override capabilities for all critical decisions. Ensure humans can meaningfully intervene in AI decision-making processes.'
      } else if (formData.staffTraining === 'none' || formData.staffTraining === 'planned') {
        recommendation = 'Develop comprehensive AI literacy training programs for all staff interacting with AI systems. Include bias recognition and ethical decision-making components.'
      } else {
        recommendation = 'Strengthen human oversight mechanisms with better error escalation procedures and regular review processes.'
      }
      
      recommendations.push({
        priority,
        area: 'Human Oversight & Control',
        recommendation,
        score: score.dimensions.oversight
      })
    }

    // Effectiveness recommendations
    if (score.dimensions.effectiveness < 6) {
      const priority = 'Medium'
      let recommendation = ''
      
      if (formData.performanceMetrics === 'none' || formData.performanceMetrics === 'minimal') {
        recommendation = 'Implement comprehensive performance metrics that track both technical performance and ethical outcomes. Include user satisfaction and organizational impact measures.'
      } else if (formData.strategicAlignment === 'weak' || formData.strategicAlignment === 'unclear') {
        recommendation = 'Clarify strategic alignment by documenting how AI implementation supports organizational goals and measuring relevant success metrics.'
      } else {
        recommendation = 'Enhance performance monitoring with more granular metrics and regular assessment of organizational impact.'
      }
      
      recommendations.push({
        priority,
        area: 'Organizational Effectiveness',
        recommendation,
        score: score.dimensions.effectiveness
      })
    }

    // Risk Management recommendations
    if (score.dimensions.risk < 6) {
      const priority = score.dimensions.risk < 4 ? 'High' : 'Medium'
      let recommendation = ''
      
      if (formData.riskAssessment === 'none' || formData.riskAssessment === 'minimal') {
        recommendation = 'Conduct comprehensive risk assessment covering technical, ethical, legal, and operational risks. Develop detailed mitigation strategies for identified risks.'
      } else if (formData.incidentResponse === 'none' || formData.incidentResponse === 'planned') {
        recommendation = 'Develop detailed incident response procedures including escalation paths, stakeholder communication, and remediation protocols.'
      } else {
        recommendation = 'Strengthen risk management with proactive vulnerability scanning and enhanced incident response capabilities.'
      }
      
      recommendations.push({
        priority,
        area: 'Risk Management & Safety',
        recommendation,
        score: score.dimensions.risk
      })
    }

    // Sort by priority and score (lowest scores first within each priority)
    return recommendations.sort((a, b) => {
      if (a.priority === 'High' && b.priority !== 'High') return -1
      if (b.priority === 'High' && a.priority !== 'High') return 1
      return a.score - b.score
    })
  }

  const recommendations = getDetailedRecommendations()

  const handleDownloadPDF = () => {
    const assessmentData = {
      overallScore: score.overall,
      grade: getGradeDescription(score.overall).grade,
      projectTitle: formData.projectTitle,
      aiTool: formData.aiTool,
      organizationType: formData.organizationType || formData.educationalLevel,
      userCount: formData.userCount || formData.studentCount,
      country: formData.country,
      description: formData.description,
      scores: {
        fairness: {
          score: score.dimensions.fairness,
          grade: getGradeDescription(score.dimensions.fairness).grade,
          riskLevel: score.dimensions.fairness >= 7.0 ? 'Low' : score.dimensions.fairness >= 5.5 ? 'Medium' : 'High'
        },
        privacy: {
          score: score.dimensions.privacy,
          grade: getGradeDescription(score.dimensions.privacy).grade,
          riskLevel: score.dimensions.privacy >= 7.0 ? 'Low' : score.dimensions.privacy >= 5.5 ? 'Medium' : 'High'
        },
        transparency: {
          score: score.dimensions.transparency,
          grade: getGradeDescription(score.dimensions.transparency).grade,
          riskLevel: score.dimensions.transparency >= 7.0 ? 'Low' : score.dimensions.transparency >= 5.5 ? 'Medium' : 'High'
        },
        autonomy: {
          score: score.dimensions.oversight,
          grade: getGradeDescription(score.dimensions.oversight).grade,
          riskLevel: score.dimensions.oversight >= 7.0 ? 'Low' : score.dimensions.oversight >= 5.5 ? 'Medium' : 'High'
        },
        effectiveness: {
          score: score.dimensions.effectiveness,
          grade: getGradeDescription(score.dimensions.effectiveness).grade,
          riskLevel: score.dimensions.effectiveness >= 7.0 ? 'Low' : score.dimensions.effectiveness >= 5.5 ? 'Medium' : 'High'
        },
        safety: {
          score: score.dimensions.risk,
          grade: getGradeDescription(score.dimensions.risk).grade,
          riskLevel: score.dimensions.risk >= 7.0 ? 'Low' : score.dimensions.risk >= 5.5 ? 'Medium' : 'High'
        }
      },
      recommendations: getDetailedRecommendations()
    }
    downloadPDF(assessmentData)
  }

  const handlePrint = () => {
    const assessmentData = {
      overallScore: score.overall,
      grade: getGradeDescription(score.overall).grade,
      projectTitle: formData.projectTitle,
      aiTool: formData.aiTool,
      organizationType: formData.organizationType || formData.educationalLevel,
      userCount: formData.userCount || formData.studentCount,
      country: formData.country,
      description: formData.description,
      scores: {
        fairness: {
          score: score.dimensions.fairness,
          grade: getGradeDescription(score.dimensions.fairness).grade,
          riskLevel: score.dimensions.fairness >= 7.0 ? 'Low' : score.dimensions.fairness >= 5.5 ? 'Medium' : 'High'
        },
        privacy: {
          score: score.dimensions.privacy,
          grade: getGradeDescription(score.dimensions.privacy).grade,
          riskLevel: score.dimensions.privacy >= 7.0 ? 'Low' : score.dimensions.privacy >= 5.5 ? 'Medium' : 'High'
        },
        transparency: {
          score: score.dimensions.transparency,
          grade: getGradeDescription(score.dimensions.transparency).grade,
          riskLevel: score.dimensions.transparency >= 7.0 ? 'Low' : score.dimensions.transparency >= 5.5 ? 'Medium' : 'High'
        },
        autonomy: {
          score: score.dimensions.oversight,
          grade: getGradeDescription(score.dimensions.oversight).grade,
          riskLevel: score.dimensions.oversight >= 7.0 ? 'Low' : score.dimensions.oversight >= 5.5 ? 'Medium' : 'High'
        },
        effectiveness: {
          score: score.dimensions.effectiveness,
          grade: getGradeDescription(score.dimensions.effectiveness).grade,
          riskLevel: score.dimensions.effectiveness >= 7.0 ? 'Low' : score.dimensions.effectiveness >= 5.5 ? 'Medium' : 'High'
        },
        safety: {
          score: score.dimensions.risk,
          grade: getGradeDescription(score.dimensions.risk).grade,
          riskLevel: score.dimensions.risk >= 7.0 ? 'Low' : score.dimensions.risk >= 5.5 ? 'Medium' : 'High'
        }
      },
      recommendations: getDetailedRecommendations()
    }
    printPDF(assessmentData)
  }

  const GradeIcon = gradeInfo.icon

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strategic Ad Placement - Top of Results */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <AdSense
              slot="4567890123"
              format="horizontal"
              className="mx-auto"
              style={{ minHeight: '90px', maxWidth: '728px' }}
            />
          </div>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Results</h1>
              <p className="text-gray-600">{formData?.projectTitle || 'AI Ethics Assessment'}</p>
              <p className="text-sm text-gray-500 mt-1">
                {type === 'professional' ? 'Professional' : 'Educational'} Assessment • {formData?.aiTool || 'AI System'}
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={handlePrint} className="flex items-center cursor-pointer">
                <Printer className="h-4 w-4 mr-2" />
                Print Report
              </Button>
              <Button onClick={handleDownloadPDF} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Overall Score */}
          <div className={`${gradeInfo.bgColor} ${gradeInfo.borderColor} border rounded-lg p-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Ethics Score</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-900">{score.overall}/10</span>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <GradeIcon className={`h-5 w-5 ${gradeInfo.color}`} />
                      <span className={`text-xl font-semibold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
                    </div>
                    <p className="text-gray-600">{gradeInfo.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end">
                <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex-shrink-0">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={score.overall >= 8.5 ? '#059669' : score.overall >= 7.0 ? '#2563eb' : score.overall >= 5.5 ? '#d97706' : score.overall >= 4.0 ? '#ea580c' : '#dc2626'}
                      strokeWidth="2"
                      strokeDasharray={`${score.overall * 10}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">{Math.round(score.overall * 10)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dimension Scores */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Scoring by Dimension</h2>
          <div className="space-y-6">
            {dimensions.map((dimension, index) => {
              const IconComponent = dimension.icon
              const dimensionGrade = getGradeDescription(dimension.score)
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-50 p-3 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{dimension.title}</h3>
                        <p className="text-gray-600 text-sm">{dimension.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-gray-900">{dimension.score.toFixed(1)}/10</span>
                        <span className="text-sm text-gray-500">({dimension.weight})</span>
                      </div>
                      <span className={`text-sm font-medium ${dimension.feedback.color}`}>
                        {dimension.feedback.status}
                      </span>
                    </div>
                  </div>
                  <Progress value={dimension.score * 10} className="w-full mb-3 [&>div]:bg-blue-600" />
                  <p className="text-sm text-gray-600">{dimension.feedback.feedback}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Prioritized Recommendations</h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg mr-4 ${rec.priority === 'High' ? 'bg-red-100' : 'bg-yellow-100'}`}>
                      {rec.priority === 'High' ? (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-yellow-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                            rec.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {rec.priority} Priority
                          </span>
                          <span className="text-sm font-medium text-gray-900">{rec.area}</span>
                        </div>
                        <span className="text-sm text-gray-500">Score: {rec.score.toFixed(1)}/10</span>
                      </div>
                      <p className="text-gray-600">{rec.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Immediate Actions</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Review and prioritize recommendations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Share results with key stakeholders
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Develop implementation timeline
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Long-term Planning</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Schedule regular re-assessments
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Monitor implementation progress
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Update policies and procedures
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guides Banner */}
        <div className="mb-8">
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

        {/* Actions */}
        <div className="text-center">
          <Link to="/assessment">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
              Start New Assessment
            </Button>
          </Link>
          <a href="https://store.ethicheck.ai/">
            <Button variant="outline" className="mr-4">
              Professional Guides
            </Button>
          </a>
          <Link to="/examples">
            <Button variant="outline" className="mr-4">
              View Examples
            </Button>
          </Link>
          <Link to="/methodology">
            <Button variant="outline">
              Learn About Methodology
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AssessmentResults

