import { useState } from 'react'
import Home from './pages/Home'
import PlannerForm from './pages/PlannerForm'

function App() {
  const [page, setPage] = useState('home')
  const [request, setRequest] = useState(null)

  const handleSubmit = (data) => {
    setRequest(data)
    console.log('Plan request:', data) // Phase 2 will send this to the backend
  }

  return (
    <div>
      {page === 'home' && <Home onStart={() => setPage('planner')} />}
      {page === 'planner' && (
        <PlannerForm onSubmit={handleSubmit} onBack={() => setPage('home')} />
      )}
    </div>
  )
}

export default App