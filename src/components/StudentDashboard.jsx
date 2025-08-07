import React, { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import FileUpload from './FileUpload'
import OrderTracking from './OrderTracking'
import StudentHome from './StudentHome'

const StudentDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      fileName: 'Assignment_1.pdf',
      status: 'In Process',
      estimatedTime: '15 minutes',
      timestamp: '2024-01-15 14:30',
      copies: 2,
      color: 'B/W',
      pages: 'All pages'
    },
    {
      id: 2,
      fileName: 'Research_Paper.docx',
      status: 'Ready',
      estimatedTime: 'Ready for pickup',
      timestamp: '2024-01-15 13:45',
      copies: 1,
      color: 'Color',
      pages: 'Pages 1-5'
    }
  ])

  const addOrder = (newOrder) => {
    setOrders([newOrder, ...orders])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <StudentNavigation />
      
      {/* Content */}
      <Routes>
        <Route path="/" element={<StudentHome orders={orders} addOrder={addOrder} />} />
        <Route path="/upload" element={<FileUpload onOrderSubmit={addOrder} />} />
        <Route path="/tracking" element={<OrderTracking orders={orders} />} />
      </Routes>
    </div>
  )
}

const StudentNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === `/student${path}`
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
       
          <div className="flex space-x-1">
            <button
              onClick={() => navigate('/student')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('') || isActive('/')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/student/upload')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/upload')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Upload
            </button>
            <button
              onClick={() => navigate('/student/tracking')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/tracking')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Track Orders
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default StudentDashboard 