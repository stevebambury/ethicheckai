import { useEffect } from 'react'

const AdSense = ({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  style = {},
  className = '',
  adTest = false 
}) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  const adStyle = {
    display: 'block',
    ...style
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-1808302987"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
        data-adtest={adTest ? 'on' : 'off'}
      />
    </div>
  )
}

// Pre-configured ad components for different placements
export const HeaderAd = ({ className = '' }) => (
  <AdSense
    slot="1234567890" // You'll need to create this slot in AdSense
    format="horizontal"
    className={`header-ad ${className}`}
    style={{ minHeight: '90px' }}
  />
)

export const SidebarAd = ({ className = '' }) => (
  <AdSense
    slot="2345678901" // You'll need to create this slot in AdSense
    format="vertical"
    className={`sidebar-ad ${className}`}
    style={{ minHeight: '250px', minWidth: '300px' }}
  />
)

export const ContentAd = ({ className = '' }) => (
  <AdSense
    slot="3456789012" // You'll need to create this slot in AdSense
    format="rectangle"
    className={`content-ad ${className}`}
    style={{ minHeight: '250px' }}
  />
)

export const FooterAd = ({ className = '' }) => (
  <AdSense
    slot="4567890123" // You'll need to create this slot in AdSense
    format="horizontal"
    className={`footer-ad ${className}`}
    style={{ minHeight: '90px' }}
  />
)

export default AdSense

