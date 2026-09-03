import Navbar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'

function Home() {
  return (
    <div className="min-h-screen" style={{background: '#FDF6E3'}}>
      
      <Navbar />

      {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-8 pt-16 pb-8">        
        {/* Badge */}
        <div className="mb-6 px-4 py-2 rounded-full text-sm font-semibold"
          style={{background: '#2D6A4F20', color: '#1B4332'}}>
          ✨ AI Powered Trip Planner
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl font-bold mb-6 leading-none">       
        <span style={{color: '#333333'}}>Plan to Vibe</span>  <br/>     
        <span style={{color: '#2D6A4F'}}>Travel your way</span>
        </h1>
        {/* Subtext */}
        <p className="text-lg mb-10 max-w-xl"
          style={{color: '#4a6357'}}>
          Tell us how you want to feel. 
          Trailo builds your perfect itinerary in seconds.
        </p>

        {/* CTA Button */}
        <button className="px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          style={{background: '#2D6A4F'}}>
          Start Planning →
        </button>

      </div>
      <CTA />

    </div>
  )
}

export default Home