import React from 'react'

const ShopOrders = ({ orders, updateOrderStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'In Process':
        return 'bg-blue-100 text-blue-800'
      case 'Ready':
        return 'bg-green-100 text-green-800'
      case 'Completed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusActions = (order) => {
    switch (order.status) {
      case 'Pending':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'In Process')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Accept Order
          </button>
        )
      case 'In Process':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'Ready')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Mark as Ready
          </button>
        )
      case 'Ready':
        return (
          <button
            onClick={() => updateOrderStatus(order.id, 'Completed')}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            Complete
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Orders Overview</h1>
            <p className="text-gray-600 text-sm sm:text-base">Manage incoming print requests</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Pending</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {orders.filter(order => order.status === 'Pending').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 border border-yellow-100">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">In Process</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {orders.filter(order => order.status === 'In Process').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-100">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Ready</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {orders.filter(order => order.status === 'Ready').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Completed</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {orders.filter(order => order.status === 'Completed').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{order.fileName}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Order ID: #{order.id}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{order.timestamp}</p>
                  </div>
                </div>
                
                <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0">
                  <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{order.estimatedTime}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Customer:</span>
                    <span className="ml-1 font-medium text-gray-800">{order.customerName}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Color:</span>
                    <span className="ml-1 font-medium text-gray-800">{order.color}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Copies:</span>
                    <span className="ml-1 font-medium text-gray-800">{order.copies}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Pages:</span>
                    <span className="ml-1 font-medium text-gray-800">{order.pages}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="text-xs sm:text-sm text-gray-600">
                    Contact: {order.contactNumber}
                  </div>
                  <div className="mt-2 sm:mt-0">{getStatusActions(order)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopOrders 