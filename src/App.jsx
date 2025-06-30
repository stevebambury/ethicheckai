import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Assessment from './pages/Assessment'
import Examples from './pages/Examples'
import Methodology from './pages/Methodology'
import About from './pages/About'
import WhyEthiCheck from './pages/WhyEthiCheck'
import Glossary from './pages/Glossary'
import ReportIssue from './pages/ReportIssue'
import ReportIssueSuccess from './pages/ReportIssueSuccess'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AssessmentForm from './components/AssessmentForm'
import AssessmentResults from './pages/AssessmentResults'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/assessment/:type" element={<AssessmentForm />} />
            <Route path="/assessment-results" element={<AssessmentResults />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/why-ethicheck" element={<WhyEthiCheck />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/report-issue-success" element={<ReportIssueSuccess />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App