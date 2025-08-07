import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'
import logoImage from '../assets/Untitled(150x150px).png'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="EthiCheck" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">
              EthiCheck
            </span>
          </Link>

          {/* Navigation and CTA Button grouped together */}
          <div className="flex items-center space-x-1">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1 mr-4">
              <Link to="/why-ethicheck" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Why EthiCheck?
              </Link>
              <Link to="/methodology" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Methodology
              </Link>
              <Link to="/examples" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Examples
              </Link>
              <a href="https://store.ethicheck.ai/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Guides
              </a>
              <Link to="/glossary" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Glossary
              </Link>
              <Link to="/report-issue" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Report Issue
              </Link>
            </nav>

            {/* CTA Button */}
            <Link to="/assessment">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                New Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

