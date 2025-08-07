import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const FileUpload = ({ onOrderSubmit }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [printOptions, setPrintOptions] = useState({
    color: 'B/W',
    copies: 1,
    sided: 'single',
    pages: 'all',
    customPages: '',
    contactNumber: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  const handleFileSelect = (file) => {
    if (file && (file.type === 'application/pdf' || 
                 file.type === 'application/msword' || 
                 file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                 file.type.startsWith('image/'))) {
      setSelectedFile(file)
    } else {
      alert('Please select a valid file (PDF, DOC, DOCX, JPG, PNG)')
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    handleFileSelect(file)
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    handleFileSelect(file)
  }

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Please select a file to upload')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      const newOrder = {
        id: Date.now(),
        fileName: selectedFile.name,
        status: 'Sent',
        estimatedTime: '20 minutes',
        timestamp: new Date().toLocaleString(),
        copies: printOptions.copies,
        color: printOptions.color,
        pages: printOptions.pages === 'all' ? 'All pages' : `Pages ${printOptions.customPages}`,
        contactNumber: printOptions.contactNumber
      }
      
      onOrderSubmit(newOrder)
      setIsSubmitting(false)
      navigate('/student/tracking')
    }, 1500)
  }

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase()
    switch (extension) {
      case 'pdf':
        return (
          <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        )
      case 'doc':
      case 'docx':
        return (
          <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        )
      default:
        return (
          <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        )
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Upload File to Print</h1>
        
        {/* File Upload Area */}
        <div className="mb-8">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              isDragOver 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  {getFileIcon(selectedFile.name)}
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    Drop your file here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                  </p>
                </div>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Choose File
                </button>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>

        {/* Print Options */}
        {selectedFile && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Print Options</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Color Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Color Options
                </label>
                <div className="space-y-2">
                  {['B/W', 'Color'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="color"
                        value={option}
                        checked={printOptions.color === option}
                        onChange={(e) => setPrintOptions({...printOptions, color: e.target.value})}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Number of Copies */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Number of Copies
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={printOptions.copies}
                  onChange={(e) => setPrintOptions({...printOptions, copies: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Single/Double Sided */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Print Sided
                </label>
                <div className="space-y-2">
                  {['single', 'double'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="sided"
                        value={option}
                        checked={printOptions.sided === option}
                        onChange={(e) => setPrintOptions({...printOptions, sided: e.target.value})}
                        className="mr-3"
                      />
                      <span className="text-gray-700 capitalize">{option}-sided</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Page Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Page Selection
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="pages"
                      value="all"
                      checked={printOptions.pages === 'all'}
                      onChange={(e) => setPrintOptions({...printOptions, pages: e.target.value})}
                      className="mr-3"
                    />
                    <span className="text-gray-700">All pages</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="pages"
                      value="custom"
                      checked={printOptions.pages === 'custom'}
                      onChange={(e) => setPrintOptions({...printOptions, pages: e.target.value})}
                      className="mr-3"
                    />
                    <span className="text-gray-700">Custom pages</span>
                  </label>
                  {printOptions.pages === 'custom' && (
                    <input
                      type="text"
                      placeholder="e.g., 1-5, 8, 10-12"
                      value={printOptions.customPages}
                      onChange={(e) => setPrintOptions({...printOptions, customPages: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Contact Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={printOptions.contactNumber}
                onChange={(e) => setPrintOptions({...printOptions, contactNumber: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Order...
                  </div>
                ) : (
                  'Submit Print Order'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileUpload 