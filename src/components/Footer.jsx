import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'
import logoImage from '../assets/Untitled(150x150px).png'
import linkedinIcon from '../assets/LinkedInicon.png'
import xIcon from '../assets/Xicon.png'
import youtubeIcon from '../assets/YouTubeicon.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="EthiCheck" className="h-8 w-8" />
              <span className="text-xl font-bold">EthiCheck</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering people to implement AI ethically and responsibly in both educational and professional environments.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/ethicheckai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/EthiCheckAI" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
                aria-label="X (Twitter)"
              >
                <img src={xIcon} alt="X" className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@ethicheck" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/why-ethicheck" className="text-gray-400 hover:text-white transition-colors">
                  Why EthiCheck?
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-gray-400 hover:text-white transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-gray-400 hover:text-white transition-colors">
                  Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About EthiCheck
                </Link>
              </li>
              <li>
                <a href="https://store.ethicheck.ai/" className="text-gray-400 hover:text-white transition-colors">
                  Professional Guides
                </a>
              </li>
              <li>
                <Link to="/glossary" className="text-gray-400 hover:text-white transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/report-issue" className="text-gray-400 hover:text-white transition-colors">
                  Report Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

