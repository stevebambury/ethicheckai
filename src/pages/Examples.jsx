import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

// Educational subject-themed images
import booksEducation from '../assets/books-education.jpg'
import chemistryLab from '../assets/chemistry-lab.jpg'
import mathEquations from '../assets/math-equations.jpg'
import writingEssay from '../assets/writing-essay.jpg'
import spanishLearning from '../assets/spanish-learning.jpg'
import teachingClassroom from '../assets/teaching-classroom.jpg'
import homeworkStudy from '../assets/homework-study.jpg'
import scienceBeakers from '../assets/science-beakers.jpg'
import curriculumPlanningDesk from '../assets/curriculum-planning.jpg'
import scienceLabEquipment from '../assets/science-lab-equipment.jpg'
import mathClassroom from '../assets/math-classroom.jpg'
import languageMaterials from '../assets/language-materials.jpg'
import writingTools from '../assets/writing-tools.jpg'

// Professional business images
import businessMeeting from '../assets/business-meeting.jpg'
import workplaceAI from '../assets/workplace-ai.jpg'
import techWorkers from '../assets/tech-workers.jpg'
import healthcareTech from '../assets/healthcare-tech.jpg'
import legalOffice from '../assets/legal-office.jpg'
import manufacturingFacility from '../assets/manufacturing-facility.jpg'
import financialOffice from '../assets/financial-office.jpg'
import programmingWorkspace from '../assets/programming-workspace.jpg'

const Examples = () => {
  const examples = [
    // Mixed Educational and Professional Examples
    {
      category: "Elementary School",
      subcategory: "Reading Support",
      title: "AI-Powered Reading Comprehension Assistant",
      description: "We want to use an AI reading comprehension tool with 10-year-old students in our elementary school. It would provide personalized reading exercises and track comprehension progress.",
      image: booksEducation
    },
    {
      category: "Financial Services",
      subcategory: "Customer Service AI",
      title: "AI-Powered Customer Service Chatbot",
      description: "Intelligent chatbot system for handling customer inquiries, complaints, and support requests in a financial services organization with 24/7 availability and escalation protocols.",
      image: financialOffice
    },
    {
      category: "Middle School", 
      subcategory: "Study Assistant",
      title: "Intelligent Homework Helper",
      description: "We want to implement an AI homework assistance system for 14-year-old middle school students. It would provide hints and explanations without giving direct answers.",
      image: homeworkStudy
    },
    {
      category: "Healthcare Organization",
      subcategory: "Healthcare AI",
      title: "Healthcare Diagnosis Assistant AI",
      description: "Machine learning system that assists medical professionals in diagnosis by analyzing patient symptoms, medical history, and test results with high accuracy protocols.",
      image: healthcareTech
    },
    {
      category: "High School",
      subcategory: "Language Learning", 
      title: "AI Language Learning Companion",
      description: "We want to use an AI language learning system with 16-year-old high school students learning Spanish. It would provide conversational practice and pronunciation feedback.",
      image: languageMaterials
    },
    {
      category: "Technology Company",
      subcategory: "HR Technology",
      title: "AI Recruitment Screening System",
      description: "Automated system for screening job applications, ranking candidates, and identifying top talent for HR departments while ensuring fair evaluation processes.",
      image: techWorkers
    },
    {
      category: "University",
      subcategory: "Writing Assistant",
      title: "AI Writing Assistant for Students",
      description: "We want to implement an AI writing assistant for our 15-year-old high school students to help with essay structure and grammar checking while maintaining academic integrity.",
      image: writingTools
    },
    {
      category: "Manufacturing",
      subcategory: "Business Operations",
      title: "Supply Chain Optimization AI",
      description: "Machine learning system that optimizes inventory management, demand forecasting, and logistics for manufacturing companies to reduce costs and waste.",
      image: manufacturingFacility
    },
    {
      category: "Elementary",
      subcategory: "Predictive Analytics",
      title: "AI-Powered Virtual Science Labs",
      description: "We want to implement an AI-driven virtual science laboratory for our 13-year-old students. The system would simulate chemistry experiments and provide real-time feedback on hypotheses.",
      image: scienceLabEquipment
    },
    {
      category: "Technology Company",
      subcategory: "Content Safety",
      title: "AI Content Moderation System",
      description: "Automated system for detecting and filtering inappropriate content, hate speech, and policy violations on social media platforms with real-time screening capabilities.",
      image: programmingWorkspace
    },
    {
      category: "High School",
      subcategory: "Career Guidance",
      title: "AI Professional Development Tools",
      description: "We want to implement an AI-powered professional development platform for our university faculty. The system would analyze teaching methods and suggest improvements based on student engagement data.",
      image: teachingClassroom
    },
    {
      category: "Financial Services",
      subcategory: "Financial AI",
      title: "AI-Powered Fraud Detection System",
      description: "Machine learning system for financial institutions that analyzes transaction patterns in real-time to detect fraudulent activities and protect customer accounts from unauthorized access.",
      image: businessMeeting
    },
    {
      category: "Elementary School",
      subcategory: "Classroom Management",
      title: "AI Curriculum Planning Tools",
      description: "We want to implement an AI-powered curriculum planning system for our high school academic department. The system would help teachers align lesson plans with learning objectives and track student progress across subjects.",
      image: curriculumPlanningDesk
    },
    {
      category: "Manufacturing",
      subcategory: "Quality Control AI",
      title: "Smart Manufacturing Quality Control",
      description: "Computer vision AI system that inspects products on manufacturing lines, detecting defects and quality issues with higher accuracy than manual inspection processes.",
      image: workplaceAI
    },
    {
      category: "Middle School",
      subcategory: "Science Education",
      title: "Adaptive Science Simulation Platform",
      description: "We want to implement an AI-driven science simulation platform for 12-year-old students. It would create personalized virtual experiments based on learning objectives.",
      image: scienceBeakers
    },
    {
      category: "Legal Services",
      subcategory: "Legal AI",
      title: "AI Legal Document Analysis",
      description: "Natural language processing system that assists law firms in reviewing contracts, identifying key clauses, and flagging potential compliance issues in legal documents.",
      image: legalOffice
    },
    {
      category: "High School",
      subcategory: "Adaptive Learning",
      title: "AI-Powered Personalized Tutoring",
      description: "We want to implement an AI-driven personalized tutoring system for our 11-year-old students in mathematics. The system would adapt to individual learning styles and provide customized exercises.",
      image: mathClassroom
    },
    {
      category: "Manufacturing",
      subcategory: "Maintenance AI",
      title: "Predictive Maintenance AI Platform",
      description: "IoT-connected AI system that monitors equipment performance in real-time and predicts maintenance needs to prevent costly breakdowns and optimize operational efficiency.",
      image: mathEquations
    }
  ]

  const getCategoryColor = (category) => {
    if (category.includes('Elementary') || category.includes('Middle') || category.includes('High') || category.includes('University')) {
      return 'bg-purple-100 text-purple-800'
    }
    return 'bg-blue-100 text-blue-800'
  }

  const getSubcategoryColor = (subcategory) => {
    const colors = {
      'Reading Support': 'bg-green-100 text-green-800',
      'Study Assistant': 'bg-orange-100 text-orange-800', 
      'Language Learning': 'bg-pink-100 text-pink-800',
      'Writing Assistant': 'bg-indigo-100 text-indigo-800',
      'Predictive Analytics': 'bg-yellow-100 text-yellow-800',
      'Career Guidance': 'bg-red-100 text-red-800',
      'Classroom Management': 'bg-teal-100 text-teal-800',
      'Science Education': 'bg-cyan-100 text-cyan-800',
      'Adaptive Learning': 'bg-lime-100 text-lime-800',
      'Customer Service AI': 'bg-blue-100 text-blue-800',
      'Healthcare AI': 'bg-emerald-100 text-emerald-800',
      'HR Technology': 'bg-violet-100 text-violet-800',
      'Business Operations': 'bg-amber-100 text-amber-800',
      'Content Safety': 'bg-rose-100 text-rose-800',
      'Financial AI': 'bg-sky-100 text-sky-800',
      'Quality Control AI': 'bg-stone-100 text-stone-800',
      'Legal AI': 'bg-slate-100 text-slate-800',
      'Maintenance AI': 'bg-zinc-100 text-zinc-800'
    }
    return colors[subcategory] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Ethics Assessment Examples & Use Cases</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world AI implementation examples across professional sectors with ethical assessment scores. See how GDPR, EU AI Act, and UNESCO guidelines apply to different artificial intelligence use cases in education, healthcare, finance, and business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className={getCategoryColor(example.category)}>
                    {example.category}
                  </Badge>
                  <Badge variant="outline" className={getSubcategoryColor(example.subcategory)}>
                    {example.subcategory}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {example.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to assess your own AI implementation?
          </p>
          <div className="space-x-4">
            <Link 
              to="/assessment" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Assessment
            </Link>
            <Link 
              to="/methodology" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn About Our Methodology
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples

