import { useState } from 'react'

function PlannerForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    days: '',
    vibe: '',
    budget: ''
  })

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8"
      style={{background: '#FDF6E3'}}>

      {/* Step 1 — Where from */}
      {step === 1 && (
        <div className="text-center">
          <p className="text-sm font-semibold mb-2" style={{color: '#2D6A4F'}}>
            Step 1 of 5
          </p>
          <h2 className="text-4xl font-bold mb-8" style={{color: '#1a1a1a'}}>
            Where are you starting from?
          </h2>
          <input
            type="text"
            placeholder="Enter your city..."
            value={formData.from}
            onChange={(e) => setFormData({...formData, from: e.target.value})}
            className="w-80 px-6 py-4 rounded-2xl text-lg outline-none mb-8"
            style={{background: '#ffffff', border: '2px solid #2D6A4F30', color: '#1a1a1a'}}
          />
          <br/>
          <button onClick={handleNext}
            className="px-10 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{background: '#2D6A4F'}}>
            Next →
          </button>
        </div>
      )}

      {/* Step 2 — Where to */}
      {step === 2 && (
        <div className="text-center">
          <p className="text-sm font-semibold mb-2" style={{color: '#2D6A4F'}}>
            Step 2 of 5
          </p>
          <h2 className="text-4xl font-bold mb-8" style={{color: '#1a1a1a'}}>
            Where do you want to go?
          </h2>
          <input
            type="text"
            placeholder="Enter destination..."
            value={formData.to}
            onChange={(e) => setFormData({...formData, to: e.target.value})}
            className="w-80 px-6 py-4 rounded-2xl text-lg outline-none mb-8"
            style={{background: '#ffffff', border: '2px solid #2D6A4F30', color: '#1a1a1a'}}
          />
          <br/>
          <div className="flex gap-4 justify-center">
            <button onClick={handleBack}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              style={{background: '#2D6A4F20', color: '#2D6A4F'}}>
              ← Back
            </button>
            <button onClick={handleNext}
              className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{background: '#2D6A4F'}}>
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — How many days */}
      {step === 3 && (
        <div className="text-center">
          <p className="text-sm font-semibold mb-2" style={{color: '#2D6A4F'}}>
            Step 3 of 5
          </p>
          <h2 className="text-4xl font-bold mb-8" style={{color: '#1a1a1a'}}>
            How many days can you escape?
          </h2>
          <div className="flex gap-4 justify-center mb-8">
            {['1', '2', '3', '4', '5+'].map((day) => (
              <button key={day}
                onClick={() => setFormData({...formData, days: day})}
                className="w-16 h-16 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: formData.days === day ? '#2D6A4F' : '#ffffff',
                  color: formData.days === day ? '#ffffff' : '#1a1a1a',
                  border: '2px solid #2D6A4F30'
                }}>
                {day}
              </button>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={handleBack}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              style={{background: '#2D6A4F20', color: '#2D6A4F'}}>
              ← Back
            </button>
            <button onClick={handleNext}
              className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{background: '#2D6A4F'}}>
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 4 — Vibe */}
      {step === 4 && (
        <div className="text-center">
          <p className="text-sm font-semibold mb-2" style={{color: '#2D6A4F'}}>
            Step 4 of 5
          </p>
          <h2 className="text-4xl font-bold mb-8" style={{color: '#1a1a1a'}}>
            What's your vibe?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-8 max-w-md mx-auto">
            {[
              {label: 'Nature', icon: '🌿'},
              {label: 'Foodie', icon: '🍜'},
              {label: 'Culture', icon: '🏛️'},
              {label: 'Adventure', icon: '🧗'},
              {label: 'Relaxed', icon: '😌'},
              {label: 'Nightlife', icon: '🎉'}
            ].map((v) => (
              <button key={v.label}
                onClick={() => setFormData({...formData, vibe: v.label})}
                className="px-6 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: formData.vibe === v.label ? '#2D6A4F' : '#ffffff',
                  color: formData.vibe === v.label ? '#ffffff' : '#1a1a1a',
                  border: '2px solid #2D6A4F30'
                }}>
                {v.icon} {v.label}
              </button>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={handleBack}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              style={{background: '#2D6A4F20', color: '#2D6A4F'}}>
              ← Back
            </button>
            <button onClick={handleNext}
              className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{background: '#2D6A4F'}}>
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 5 — Budget */}
      {step === 5 && (
        <div className="text-center">
          <p className="text-sm font-semibold mb-2" style={{color: '#2D6A4F'}}>
            Step 5 of 5
          </p>
          <h2 className="text-4xl font-bold mb-8" style={{color: '#1a1a1a'}}>
            What's your budget?
          </h2>
          <div className="flex gap-4 justify-center mb-8">
            {[
              {label: 'Budget', icon: '💰'},
              {label: 'Mid-range', icon: '💳'},
              {label: 'Luxury', icon: '💎'}
            ].map((b) => (
              <button key={b.label}
                onClick={() => setFormData({...formData, budget: b.label})}
                className="px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: formData.budget === b.label ? '#2D6A4F' : '#ffffff',
                  color: formData.budget === b.label ? '#ffffff' : '#1a1a1a',
                  border: '2px solid #2D6A4F30'
                }}>
                {b.icon} {b.label}
              </button>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={handleBack}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              style={{background: '#2D6A4F20', color: '#2D6A4F'}}>
              ← Back
            </button>
            <button
              className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{background: '#2D6A4F'}}>
              Build My Trip ✨
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default PlannerForm