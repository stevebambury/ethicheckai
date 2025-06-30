import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, BookOpen } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Ethics', 'Privacy', 'Legal', 'Transparency', 'Education']

  const terms = [
    {
      term: "Accountability",
      category: "Ethics",
      definition: "The obligation of individuals or organizations to be answerable for the actions and impacts of the AI systems they create, deploy, or use.",
      example: "Clear assignment of responsibility when an AI hiring system makes discriminatory decisions.",
      whyItMatters: "Essential for building trust and ensuring redress when AI systems cause harm."
    },
    {
      term: "Academic Integrity",
      category: "Education",
      definition: "The commitment to honest and ethical conduct in academic work, including proper attribution of sources and original thinking.",
      example: "Establishing clear policies about when and how students can use AI writing assistants for assignments.",
      whyItMatters: "Maintains the value of education and ensures students develop genuine skills and knowledge."
    },
    {
      term: "Adaptive Learning",
      category: "Education", 
      definition: "AI systems that adjust content, recommendations, and interactions based on individual user behavior and performance patterns.",
      example: "A professional training platform that provides additional modules when a user struggles with concepts, but advances quickly through familiar topics.",
      whyItMatters: "Personalizes experiences to meet diverse user needs and improve outcomes."
    },
    {
      term: "Adversarial Examples",
      category: "Ethics",
      definition: "Inputs deliberately designed to fool AI systems into making incorrect decisions or classifications.",
      example: "Students learning to manipulate AI plagiarism detectors by slightly altering copied text in specific ways.",
      whyItMatters: "Understanding vulnerabilities helps educators implement appropriate safeguards and supervision."
    },
    {
      term: "AI Audit",
      category: "Legal",
      definition: "A systematic evaluation of an AI system to assess its compliance with ethical principles, legal requirements, and technical standards.",
      example: "Conducting regular reviews of a hiring AI system to check for bias, accuracy, and compliance with employment laws.",
      whyItMatters: "Ensures ongoing compliance and identifies issues before they cause significant harm."
    },
    {
      term: "AI Ethics",
      category: "Ethics",
      definition: "The field concerned with studying and addressing the ethical implications, societal impacts, and responsible development of AI systems.",
      example: "Establishing guidelines for fair, transparent, and accountable AI use in healthcare decision-making.",
      whyItMatters: "Provides the foundation for responsible AI development and deployment across all sectors."
    },
    {
      term: "AI for Social Good (AI4SG)",
      category: "Ethics",
      definition: "The application of AI to address societal challenges in an ethical and beneficial manner.",
      example: "Using AI to improve disaster response, combat climate change, or enhance accessibility for people with disabilities.",
      whyItMatters: "Demonstrates AI's potential to create positive societal impact when developed responsibly."
    },
    {
      term: "AI Governance",
      category: "Legal",
      definition: "The framework of policies, procedures, standards, and accountability mechanisms established to ensure responsible AI development and use.",
      example: "A company's comprehensive AI governance framework including ethics boards, risk assessments, and regular audits.",
      whyItMatters: "Provides structure for managing AI risks and ensuring ethical practices across organizations."
    },
    {
      term: "AI Impact Assessment (AIA)",
      category: "Legal",
      definition: "A structured process for identifying, analyzing, and mitigating the potential positive and negative impacts of an AI system before and during deployment.",
      example: "Evaluating potential bias, privacy risks, and societal impacts before deploying an AI recruitment tool.",
      whyItMatters: "Prevents harm by identifying risks early and implementing appropriate safeguards."
    },
    {
      term: "AI Literacy",
      category: "Education",
      definition: "Understanding of AI concepts, capabilities, limitations, and societal implications necessary for informed decision-making.",
      example: "Training users to understand how recommendation algorithms work and their potential biases in social media and search.",
      whyItMatters: "Essential for preparing individuals to live and work in an AI-integrated society."
    },
    {
      term: "AI Safety",
      category: "Ethics",
      definition: "The field focused on ensuring AI systems are reliably aligned with human values and do not pose catastrophic risks.",
      example: "Developing safeguards to prevent autonomous vehicles from making decisions that could harm passengers or pedestrians.",
      whyItMatters: "Critical for preventing AI systems from causing unintended harm as they become more capable."
    },
    {
      term: "Algorithmic Bias",
      category: "Ethics",
      definition: "Systematic and unfair discrimination in AI system outputs that disadvantages certain groups or individuals.",
      example: "A hiring AI that consistently ranks male candidates higher than equally qualified female candidates.",
      whyItMatters: "Can perpetuate and amplify existing societal inequalities at scale."
    },
    {
      term: "Algorithmic Discrimination",
      category: "Ethics",
      definition: "When algorithmic bias results in unfair or prejudicial treatment of individuals or groups, often reinforcing historical inequalities.",
      example: "A loan approval system that systematically denies credit to applicants from certain neighborhoods based on biased historical data.",
      whyItMatters: "Can institutionalize and scale discriminatory practices, requiring active prevention measures."
    },
    {
      term: "Algorithmic Transparency",
      category: "Transparency",
      definition: "The degree to which AI system decision-making processes are open, understandable, and accessible to stakeholders.",
      example: "Providing clear explanations of how a credit scoring algorithm weighs different factors in its decisions.",
      whyItMatters: "Enables accountability, builds trust, and allows for meaningful oversight."
    },
    {
      term: "Artificial General Intelligence (AGI)",
      category: "Ethics",
      definition: "Hypothetical AI systems that match or exceed human cognitive abilities across all domains.",
      example: "An AI system that can perform any intellectual task that a human can, from creative writing to scientific research.",
      whyItMatters: "Represents potential future developments that require proactive ethical consideration."
    },
    {
      term: "Automated Decision-Making",
      category: "Ethics",
      definition: "Systems that make decisions about individuals or groups without meaningful human intervention.",
      example: "An AI system that automatically approves or denies loan applications based on algorithmic analysis.",
      whyItMatters: "Can significantly impact people's lives and requires careful oversight and accountability measures."
    },
    {
      term: "Autonomy",
      category: "Ethics",
      definition: "Respecting human decision-making and freedom, with concerns arising when AI systems unduly influence or override human choices.",
      example: "Ensuring users can opt out of AI recommendations and maintain control over their personal decisions.",
      whyItMatters: "Fundamental to human dignity and preventing AI systems from undermining human agency."
    },
    {
      term: "Beneficence",
      category: "Ethics",
      definition: "The principle that AI should be designed and used to actively promote well-being and benefit humanity.",
      example: "Developing AI medical diagnostic tools that improve patient outcomes and reduce healthcare disparities.",
      whyItMatters: "Ensures AI development focuses on creating positive value for individuals and society."
    },
    {
      term: "Bias Mitigation",
      category: "Ethics",
      definition: "Techniques and processes used to identify, measure, and reduce unfair bias in AI systems.",
      example: "Using diverse training data and regular bias audits to ensure fair treatment across demographic groups.",
      whyItMatters: "Critical for ensuring AI systems treat all users fairly and equitably."
    },
    {
      term: "Black Box Model",
      category: "Transparency",
      definition: "An AI model whose internal decision-making process is opaque and difficult for humans to understand.",
      example: "A deep learning model that makes accurate predictions but cannot explain why it reached specific conclusions.",
      whyItMatters: "Limits accountability and trust, especially in high-stakes applications requiring explainability."
    },
    {
      term: "Data Minimization",
      category: "Privacy",
      definition: "The principle of collecting, processing, and storing only the minimum amount of personal data necessary for a specific purpose.",
      example: "A learning app that collects only student performance data, not personal information like home address or family details.",
      whyItMatters: "Reduces privacy risks and complies with data protection regulations."
    },
    {
      term: "Data Subject Rights",
      category: "Legal",
      definition: "Legal rights individuals have regarding their personal data, including access, correction, deletion, and portability.",
      example: "Students having the right to request deletion of their data from an educational AI system.",
      whyItMatters: "Fundamental to privacy protection and regulatory compliance."
    },
    {
      term: "Deep Learning",
      category: "Ethics",
      definition: "A subset of machine learning using neural networks with multiple layers to model complex patterns in data.",
      example: "Deep learning models used in facial recognition systems that may exhibit bias against certain demographic groups.",
      whyItMatters: "Powerful technology that requires careful ethical consideration due to its complexity and potential for bias."
    },
    {
      term: "Differential Privacy",
      category: "Privacy",
      definition: "A mathematical framework for quantifying and limiting privacy loss when analyzing datasets containing personal information.",
      example: "Adding carefully calibrated noise to student performance data to enable research while protecting individual privacy.",
      whyItMatters: "Enables valuable data analysis while providing strong privacy guarantees."
    },
    {
      term: "Disparate Impact",
      category: "Ethics",
      definition: "When an AI system's outputs have a disproportionately adverse effect on members of a protected group, even if unintentional.",
      example: "A resume screening AI that inadvertently filters out more qualified female candidates due to biased training data.",
      whyItMatters: "Helps identify indirect discrimination that may not be immediately obvious but still causes harm."
    },
    {
      term: "Ethical AI Principles",
      category: "Ethics",
      definition: "Fundamental guidelines that govern the responsible development and deployment of AI systems.",
      example: "Principles like fairness, transparency, accountability, and human dignity guiding AI development decisions.",
      whyItMatters: "Provides a foundation for making ethical decisions throughout the AI lifecycle."
    },
    {
      term: "Explainable AI (XAI)",
      category: "Transparency",
      definition: "AI systems designed to provide clear, understandable explanations for their decisions and recommendations.",
      example: "A medical diagnosis AI that explains which symptoms and test results led to its diagnostic recommendation.",
      whyItMatters: "Enables trust, accountability, and meaningful human oversight of AI decisions."
    },
    {
      term: "Fairness",
      category: "Ethics",
      definition: "The principle that AI systems should treat all individuals and groups equitably, without unjust discrimination.",
      example: "An educational AI that provides equal learning opportunities regardless of student background or demographics.",
      whyItMatters: "Ensures AI systems promote equality and don't perpetuate harmful biases."
    },
    {
      term: "Federated Learning",
      category: "Privacy",
      definition: "A machine learning technique where models are trained across multiple devices without exchanging raw data.",
      example: "Training a predictive text model on smartphones without sending personal messages to a central server.",
      whyItMatters: "Enables AI development while preserving data privacy and reducing centralized data risks."
    },
    {
      term: "GDPR Compliance",
      category: "Legal",
      definition: "Adherence to the European Union's General Data Protection Regulation governing personal data processing.",
      example: "Implementing privacy by design principles and obtaining proper consent for student data processing.",
      whyItMatters: "Required for legal operation in EU and sets global standards for data protection."
    },
    {
      term: "Hallucination",
      category: "Ethics",
      definition: "When AI systems generate false, misleading, or nonsensical information that appears plausible but is not based on training data or reality.",
      example: "A chatbot providing confident but incorrect medical advice or citing non-existent research papers.",
      whyItMatters: "Can spread misinformation and lead to harmful decisions, especially in critical applications like healthcare or education."
    },
    {
      term: "High-Risk AI System",
      category: "Legal",
      definition: "AI systems identified by regulations as posing significant potential harm, subject to stricter requirements.",
      example: "AI systems used in hiring, credit scoring, or medical diagnosis that require additional oversight and testing.",
      whyItMatters: "Ensures appropriate safeguards are in place for AI applications that could significantly impact people's lives."
    },
    {
      term: "Human-in-the-Loop",
      category: "Ethics",
      definition: "AI systems that incorporate meaningful human oversight and intervention in decision-making processes.",
      example: "A content moderation system that flags potentially problematic content for human review rather than automatically removing it.",
      whyItMatters: "Maintains human agency and accountability in AI-assisted decisions."
    },
    {
      term: "Informed Consent",
      category: "Legal",
      definition: "Agreement to participate based on clear understanding of purposes, risks, and rights regarding data use.",
      example: "Students and parents receiving clear information about how an AI tutoring system will use learning data.",
      whyItMatters: "Fundamental to ethical data collection and user autonomy."
    },
    {
      term: "Intelligent Tutoring Systems (ITS)",
      category: "Education",
      definition: "AI-powered educational systems that provide personalized instruction and feedback adapted to individual student needs.",
      example: "An adaptive math tutoring system that adjusts problem difficulty and provides targeted hints based on student performance.",
      whyItMatters: "Can enhance learning outcomes through personalization while raising questions about data privacy and educational equity."
    },
    {
      term: "Justice",
      category: "Ethics",
      definition: "Concerned with the equitable distribution of AI's benefits and burdens, and preventing systems from exacerbating social injustices.",
      example: "Ensuring AI healthcare tools are accessible to underserved communities, not just wealthy populations.",
      whyItMatters: "Prevents AI from widening existing inequalities and ensures fair access to AI benefits."
    },
    {
      term: "Large Language Model (LLM)",
      category: "Ethics",
      definition: "AI systems trained on vast amounts of text data to understand and generate human-like language across diverse topics.",
      example: "Models like GPT or Claude that can write essays, answer questions, and assist with various language tasks.",
      whyItMatters: "Powerful tools that raise important questions about misinformation, bias, academic integrity, and the future of human communication."
    },
    {
      term: "Machine Learning",
      category: "Ethics",
      definition: "AI systems that improve their performance on tasks through experience and data analysis.",
      example: "A recommendation system that learns student preferences to suggest relevant learning materials.",
      whyItMatters: "Core technology behind many AI applications requiring ethical consideration."
    },
    {
      term: "Natural Language Processing (NLP)",
      category: "Ethics",
      definition: "AI technology that enables computers to understand, interpret, and generate human language in a meaningful way.",
      example: "Automated essay grading systems that analyze student writing for grammar, content, and argumentation quality.",
      whyItMatters: "Enables powerful language applications but raises concerns about bias, privacy, and the authenticity of human communication."
    },
    {
      term: "Non-Maleficence",
      category: "Ethics",
      definition: "The principle of 'doing no harm' that requires proactive efforts to identify and prevent potential harms from AI systems.",
      example: "Thoroughly testing an AI medical device to ensure it doesn't misdiagnose conditions or recommend harmful treatments.",
      whyItMatters: "Establishes the fundamental obligation to prevent AI systems from causing harm to individuals or society."
    },
    {
      term: "Privacy by Design",
      category: "Privacy",
      definition: "Approach that embeds privacy considerations into system design from the outset rather than as an afterthought.",
      example: "Building an educational platform that encrypts student data and limits access by default.",
      whyItMatters: "Proactively protects privacy and reduces risks of data breaches or misuse."
    },
    {
      term: "Prompt",
      category: "Education",
      definition: "The input text or instructions given to an AI system to elicit a specific type of response or behavior.",
      example: "A teacher providing specific instructions to an AI writing assistant to help students brainstorm essay topics.",
      whyItMatters: "The quality and design of prompts significantly affects AI output quality and can influence learning outcomes."
    },
    {
      term: "Prompt Engineering",
      category: "Education",
      definition: "The practice of designing and refining input prompts to optimize AI system responses for specific tasks or outcomes.",
      example: "Crafting detailed prompts that help AI tutoring systems provide more effective, personalized feedback to students.",
      whyItMatters: "Essential skill for effectively leveraging AI tools in education while maintaining pedagogical quality and learning objectives."
    },
    {
      term: "Red Teaming",
      category: "Ethics",
      definition: "A security practice where teams simulate adversarial attacks to probe AI systems for vulnerabilities and failure modes.",
      example: "Testing an AI chatbot to identify ways it could be manipulated to provide harmful or biased responses.",
      whyItMatters: "Helps identify and fix security vulnerabilities before AI systems are deployed in real-world settings."
    },
    {
      term: "Responsibility",
      category: "Ethics",
      definition: "The broader moral, professional, and legal duty to ensure AI is developed and used ethically.",
      example: "AI developers taking responsibility for considering societal impacts throughout the development process.",
      whyItMatters: "Establishes the foundation for ethical AI development and creates a culture of responsible innovation."
    },
    {
      term: "Responsible AI",
      category: "Ethics",
      definition: "The practice of developing and deploying AI systems in ways that are ethical, fair, transparent, and accountable.",
      example: "Following established frameworks and conducting regular audits to ensure AI systems serve the public good.",
      whyItMatters: "Essential for building trust and ensuring AI benefits society while minimizing harm."
    },
    {
      term: "Right to Explanation",
      category: "Legal",
      definition: "The concept that individuals have a right to receive an explanation for automated decisions that significantly affect them.",
      example: "A job applicant being able to understand why an AI system rejected their application and what factors influenced the decision.",
      whyItMatters: "Enables individuals to understand and potentially challenge automated decisions affecting their lives."
    },
    {
      term: "Stakeholder Engagement",
      category: "Ethics",
      definition: "Involving relevant parties in AI development and deployment decisions, including affected communities.",
      example: "Consulting teachers, students, and parents when implementing AI systems in educational settings.",
      whyItMatters: "Ensures diverse perspectives are considered and builds community support."
    },
    {
      term: "Surveillance Capitalism",
      category: "Ethics",
      definition: "An economic system centered around commodifying personal data for profit, often powered by AI, raising privacy and autonomy concerns.",
      example: "Social media platforms using AI to analyze user behavior for targeted advertising without meaningful user control.",
      whyItMatters: "Highlights how AI can be used in ways that undermine privacy and human autonomy for commercial gain."
    },
    {
      term: "Synthetic Data",
      category: "Privacy",
      definition: "Artificially generated data that mimics real data's statistical properties, used to mitigate privacy concerns.",
      example: "Creating synthetic patient records for medical AI training that preserve statistical patterns without exposing real patient information.",
      whyItMatters: "Enables AI development and research while protecting individual privacy and sensitive information."
    },
    {
      term: "Transparency",
      category: "Transparency",
      definition: "Openness about AI system capabilities, limitations, decision-making processes, and potential impacts.",
      example: "Clearly communicating how an AI grading system works and what factors it considers.",
      whyItMatters: "Builds trust and enables informed decision-making by users and stakeholders."
    },
    {
      term: "Value Alignment",
      category: "Ethics",
      definition: "The challenge of ensuring AI systems' goals and behaviors align with human values and ethical principles.",
      example: "Programming an AI assistant to prioritize user well-being over engagement metrics that might encourage addictive behavior.",
      whyItMatters: "Critical for ensuring AI systems act in ways that support rather than undermine human flourishing."
    }
  ]

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category) => {
    const colors = {
      'Ethics': 'bg-red-100 text-red-800',
      'Privacy': 'bg-blue-100 text-blue-800',
      'Legal': 'bg-yellow-100 text-yellow-800',
      'Transparency': 'bg-purple-100 text-purple-800',
      'Education': 'bg-orange-100 text-orange-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Ethics Glossary</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential terms and concepts for understanding AI ethics in professional and educational contexts
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search terms and definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {filteredTerms.map((termData, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <CardTitle className="text-xl">{termData.term}</CardTitle>
                  </div>
                  <Badge className={getCategoryColor(termData.category)}>
                    {termData.category}
                  </Badge>
                </div>
                <CardDescription className="text-gray-700 leading-relaxed">
                  {termData.definition}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Example:</h4>
                  <p className="text-blue-800 text-sm">{termData.example}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Why It Matters:</h4>
                  <p className="text-amber-800 text-sm">{termData.whyItMatters}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No terms found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply These Concepts?</h2>
          <p className="text-gray-600 mb-6">
            Use our comprehensive assessment tool to evaluate your AI implementation against these ethical principles.
          </p>
          <Link 
            to="/assessment" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Assessment
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Glossary

