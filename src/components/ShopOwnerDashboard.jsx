import React, { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import ShopOrders from './ShopOrders'
import ShopSettings from './ShopSettings'

const ShopOwnerDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [orders, setOrders] = useState([
    {
      id: 1,
      fileName: 'Assignment_1.pdf',
      status: 'Pending',
      customerName: 'John Doe',
      contactNumber: '+1234567890',
      timestamp: '2024-01-15 14:30',
      copies: 2,
      color: 'B/W',
      pages: 'All pages',
      estimatedTime: '15 minutes'
    },
    {
      id: 2,
      fileName: 'Research_Paper.docx',
      status: 'In Process',
      customerName: 'Jane Smith',
      contactNumber: '+1234567891',
      timestamp: '2024-01-15 13:45',
      copies: 1,
      color: 'Color',
      pages: 'Pages 1-5',
      estimatedTime: '10 minutes'
    },
    {
      id: 3,
      fileName: 'Presentation.pptx',
      status: 'Ready',
      customerName: 'Mike Johnson',
      contactNumber: '+1234567892',
      timestamp: '2024-01-15 12:20',
      copies: 3,
      color: 'Color',
      pages: 'All pages',
      estimatedTime: 'Ready for pickup'
    }
  ])
  const [shopSettings, setShopSettings] = useState({
    shopName: 'EasyPrint Shop',
    address: '123 Main Street, City, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@easyprintshop.com',
    isOpen: true,
    businessHours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  })

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <ShopNavigation />
      
      {/* Content */}
      <Routes>
        <Route path="/" element={<ShopOrders orders={orders} updateOrderStatus={updateOrderStatus} />} />
        <Route path="/settings" element={<ShopSettings shopSettings={shopSettings} setShopSettings={setShopSettings} />} />
      </Routes>
    </div>
  )
}

const LoginScreen = ({ onLogin }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
    <div className="max-w-md w-full">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Easy<span className="text-blue-600">Print</span>
          </h1>
          <p className="text-gray-600">Shop Owner Login</p>
        </div>

        <form onSubmit={onLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  </div>
)

const ShopNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === `/owner${path}`
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">

          <div className="flex space-x-1">
            <button
              onClick={() => navigate('/owner')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('') || isActive('/')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => navigate('/owner/settings')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/settings')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ShopOwnerDashboard 