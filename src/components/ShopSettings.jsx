import React from 'react'

const ShopSettings = ({ shopSettings, setShopSettings }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Shop Settings</h1>
            <p className="text-gray-600">Manage your shop information and preferences</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Shop Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Shop Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shop Name
                </label>
                <input
                  type="text"
                  value={shopSettings.shopName}
                  onChange={(e) => setShopSettings({...shopSettings, shopName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={shopSettings.phone}
                  onChange={(e) => setShopSettings({...shopSettings, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={shopSettings.address}
                  onChange={(e) => setShopSettings({...shopSettings, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={shopSettings.email}
                  onChange={(e) => setShopSettings({...shopSettings, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Business Hours</h2>
            <textarea
              value={shopSettings.businessHours}
              onChange={(e) => setShopSettings({...shopSettings, businessHours: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your business hours"
            />
          </div>

          {/* Shop Status */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Shop Status</h2>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={shopSettings.isOpen}
                  onChange={(e) => setShopSettings({...shopSettings, isOpen: e.target.checked})}
                  className="mr-3"
                />
                <span className="text-gray-700">Shop is open for orders</span>
              </label>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                shopSettings.isOpen 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {shopSettings.isOpen ? 'Open' : 'Closed'}
              </span>
            </div>
          </div>

          {/* Print Pricing */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Print Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  B/W Print (per page)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.10"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Print (per page)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.50"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Additional Services</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3"
                />
                <span className="text-gray-700">Offer binding services</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3"
                />
                <span className="text-gray-700">Offer laminating services</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3"
                />
                <span className="text-gray-700">Offer scanning services</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3"
                />
                <span className="text-gray-700">Offer fax services</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6 border-t border-gray-200">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopSettings 