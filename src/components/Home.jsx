import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleStudentClick = () => {
    navigate('/student')
  }

  const handleShopClick = () => {
    navigate('/owner')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          {/* JDM Labs Logo */}
          <div className="flex justify-center mb-4 ">
            <img
              src="/jdm-labs-logo.jpg"
              alt="JDM Labs Logo"
              className="h-40 w-auto rounded-xl shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Easy<span className="text-blue-600">Print</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Digital photocopy ordering system for local print shops. 
            Fast, convenient, and hassle-free printing solutions.
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Card */}
          <div 
            onClick={handleStudentClick}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 p-8 border border-gray-100"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Student</h2>
              <p className="text-gray-600 mb-6 hidden md:block">
                Upload files, customize print options, and track your orders with ease.
              </p>
           
            </div>
          </div>

          {/* Shop Owner Card */}
          <div 
            onClick={handleShopClick}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 p-8 border border-gray-100"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop Owner</h2>
              <p className="text-gray-600 mb-6 hidden md:block">
                Manage incoming orders, track progress, and handle customer requests efficiently.
              </p>
          
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © 2025 EasyPrint. Making printing simple and efficient.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home 