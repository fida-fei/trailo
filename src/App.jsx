import { useState } from 'react'
import Home from './pages/Home'
import PlannerForm from './pages/PlannerForm'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      {page === 'home' && <Home onStart={() => setPage('planner')} />}
      {page === 'planner' && <PlannerForm />}
    </div>
  )
}

export default App