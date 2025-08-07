import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './styles.css'
import LandingPage from './components/LandingPage'
import StudentDashboard from './components/StudentDashboard'
import ShopOwnerDashboard from './components/ShopOwnerDashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student/*" element={<StudentDashboard />} />
          <Route path="/owner/*" element={<ShopOwnerDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
