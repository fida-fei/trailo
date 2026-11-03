import { useState } from 'react'

// All the questions live here as DATA. To add or change a question,
// you edit this array. You never touch the component below.
const STEPS = [
  {
    key: 'place',
    type: 'text',
    title: 'Where are you right now?',
    placeholder: 'Area or city, e.g. Fort Kochi',
  },
  {
    key: 'hours',
    type: 'choice',
    title: 'How much free time do you have?',
    options: [
      { value: '2 hours', label: '~2 hrs', icon: '⏱️' },
      { value: '4 hours', label: '~4 hrs', icon: '🌆' },
      { value: 'half day', label: 'Half day', icon: '🌤️' },
      { value: 'full day', label: 'Full day', icon: '☀️' },
    ],
  },
  {
    key: 'energy',
    type: 'choice',
    title: 'How much energy do you have?',
    options: [
      { value: 'low', label: 'Tired', icon: '😴' },
      { value: 'medium', label: 'Okay', icon: '🙂' },
      { value: 'high', label: 'Energetic', icon: '⚡' },
    ],
  },
  {
    key: 'vibe',
    type: 'choice',
    title: "What's your vibe?",
    options: [
      { value: 'nature', label: 'Nature', icon: '🌿' },
      { value: 'food', label: 'Foodie', icon: '🍜' },
      { value: 'culture', label: 'Culture', icon: '🏛️' },
      { value: 'adventure', label: 'Adventure', icon: '🧗' },
      { value: 'relaxed', label: 'Relaxed', icon: '😌' },
      { value: 'nightlife', label: 'Nightlife', icon: '🎉' },
    ],
  },
  {
    key: 'budget',
    type: 'choice',
    title: "What's your budget?",
    options: [
      { value: 'budget', label: 'Budget', icon: '💰' },
      { value: 'mid-range', label: 'Mid-range', icon: '💳' },
      { value: 'luxury', label: 'Luxury', icon: '💎' },
    ],
  },
]

// Build the empty form from STEPS: { place: '', hours: '', ... }
const initialData = Object.fromEntries(STEPS.map((s) => [s.key, '']))

function PlannerForm({ onSubmit, onBack }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [formData, setFormData] = useState(initialData)

  const step = STEPS[stepIndex]
  const isFirst = stepIndex === 0
  const isLast = stepIndex === STEPS.length - 1
  const value = formData[step.key]
  const canContinue = value.trim() !== ''

  const updateField = (key, newValue) => {
    setFormData((prev) => ({ ...prev, [key]: newValue }))
  }

  const handleBack = () => {
    if (isFirst) onBack()
    else setStepIndex((i) => i - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault() // stop the browser from reloading the page
    if (!canContinue) return
    if (isLast) onSubmit(formData)
    else setStepIndex((i) => i + 1)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-cream">
      <form onSubmit={handleSubmit} className="text-center">
        <p className="text-sm font-semibold mb-2 text-forest">
          Step {stepIndex + 1} of {STEPS.length}
        </p>
        <h2 className="text-4xl font-bold mb-8 text-ink">{step.title}</h2>

        {step.type === 'text' && (
          <input
            type="text"
            autoFocus
            placeholder={step.placeholder}
            value={value}
            onChange={(e) => updateField(step.key, e.target.value)}
            className="w-80 px-6 py-4 rounded-2xl text-lg outline-none mb-8 bg-white border-2 border-forest/20 text-ink"
          />
        )}

        {step.type === 'choice' && (
          <div className="flex flex-wrap gap-4 justify-center mb-8 max-w-md mx-auto">
            {step.options.map((opt) => {
              const selected = value === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => updateField(step.key, opt.value)}
                  className={`px-6 py-3 rounded-2xl text-lg font-semibold border-2 border-forest/20 transition-all duration-300 hover:scale-105 ${
                    selected ? 'bg-forest text-white' : 'bg-white text-ink'
                  }`}
                >
                  {opt.icon} {opt.label}
                </button>
              )
            })}
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={handleBack}
            className="px-8 py-4 rounded-full text-lg font-semibold bg-forest/20 text-forest"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={!canContinue}
            className="px-8 py-4 rounded-full text-white text-lg font-semibold bg-forest transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
          >
            {isLast ? 'Build My Plan ✨' : 'Next →'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PlannerForm