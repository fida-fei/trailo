function CTA() {
  return (
    <div className="px-8 py-16 text-center mx-8 mb-16 rounded-3xl"
      style={{background: '#2D6A4F'}}>
      
      <h2 className="text-3xl font-bold mb-3 text-white">
        Your next adventure is one click away
      </h2>
      <p className="text-base mb-8 max-w-lg mx-auto"
        style={{color: '#a8d5a2'}}>
        Stop overthinking. Tell us your vibe and let Trailo handle the rest.
      </p>

      <button className="px-8 py-3 rounded-full text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        style={{background: '#FDF6E3', color: '#2D6A4F'}}>
        Start Planning →
      </button>

    </div>
  )
}

export default CTA