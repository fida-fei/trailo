function HowItWorks() {
  const steps = [
    {
      icon: '🗺️',
      title: 'Tell your vibe',
      description: 'Tell us where you want to go, how many days, and the kind of experience you are looking for.'
    },
    {
      icon: '✨',
      title: 'AI builds your plan',
      description: 'Trailo instantly curates a perfect day by day itinerary with places, food spots and local tips.'
    },
    {
      icon: '✈️',
      title: 'Go explore',
      description: 'Pack your bags and go. Your perfect trip is ready and waiting for you.'
    }
  ]

  return (
    <div className="px-8 py-16 text-center" style={{background: '#FDF6E3'}}>
      
      <h2 className="text-4xl font-bold mb-4" style={{color: '#1a1a1a'}}>
        How it works
      </h2>
      <p className="text-lg mb-12" style={{color: '#4a6357'}}>
        Three simple steps to your perfect trip
      </p>

      <div className="flex flex-row justify-center gap-8 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center p-8 rounded-2xl flex-1"
            style={{background: '#ffffff80', border: '1px solid #2D6A4F20'}}>
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-3" style={{color: '#1B4332'}}>
              {step.title}
            </h3>
            <p className="text-sm" style={{color: '#4a6357'}}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HowItWorks