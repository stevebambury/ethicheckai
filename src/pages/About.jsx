import { ExternalLink, Calendar, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import steveImage from '../assets/1741324225700.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About EthiCheck
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Empowering responsible AI adoption through comprehensive ethics assessment
          </p>
        </div>
      </section>

      {/* About The Platform */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About The Platform</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              EthiCheck was designed in May 2025 and launched in July of the same year to provide educators and other professionals with a tool to assess the ethical viability of AI tool use within their classrooms or workplaces. EthiCheck was initially built using the Replit platform but was later bridged into Manus for debugging, expansion and quality assurance. DeepSeek R1 was also used to curate and refine additional concepts.
            </p>

            <p>
              To ensure broad access worldwide, the platform does not require registration, nor does it collect any data from users. A limited number of Google Ads have been integrated to cover operational costs of the site and the AI involved in the assessment process itself.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                  <p className="text-yellow-700 text-sm">
                    Please note that whilst every endeavour is made to ensure the accuracy of the assessment process, at no point should it be deemed legal advice nor relied on exclusively to justify the deployment of an AI tool within your organisation. Every organisation has specific policies and governance systems in place which should always be considered alongside external advice like that provided by EthiCheck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Creator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About the Creator</h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  src={steveImage} 
                  alt="Steve Bambury - Dubai-based educator and technologist" 
                  className="w-48 h-48 rounded-lg object-cover mx-auto shadow-lg"
                />
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Steve Bambury</h3>
                <p className="text-lg text-gray-600 mb-6">Dubai-based educator and technologist</p>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                  <p>
                    EthiCheck was developed by Steve Bambury, a Dubai-based educator and technologist. Steve's work with technology has been featured in the likes of Forbes and Arabian Business and he has won awards from Apple, Microsoft, BETT, GESS and EdTech Digest.
                  </p>
                  
                  <p>
                    Steve chairs the Dubai AI Think Tank group and he developed the EthiCheck platform to help educators and other professionals around the world to navigate the uncharted waters of AI Ethics.
                  </p>
                </div>

                <div className="mt-6">
                  <a 
                    href="https://www.linkedin.com/in/stevebamburyvr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Connect with Steve on LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Development Timeline</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">May 2025</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                    Design Phase
                  </span>
                </div>
                <p className="text-gray-600">Platform design and development began</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">July 2025</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                    Launch
                  </span>
                </div>
                <p className="text-gray-600">EthiCheck platform launched to the public</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600">Built with privacy and accessibility in mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Registration</h3>
              <p className="text-gray-600 text-sm">Access the platform immediately without creating an account</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protected</h3>
              <p className="text-gray-600 text-sm">No data collection or storage of your assessment information</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free to Use</h3>
              <p className="text-gray-600 text-sm">Complete ethical assessments at no cost to your organization</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Access</h3>
              <p className="text-gray-600 text-sm">Available worldwide to support international AI ethics standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

