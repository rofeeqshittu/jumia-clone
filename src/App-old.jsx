import { useState } from 'react'
import './App.css'

function App() {
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm">
        Sell on Jumia
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Header */}
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex space-x-6">
              <span className="text-gray-600">JUMIA</span>
              <span className="text-gray-600">PAY</span>
              <span className="text-gray-600">DELIVERY</span>
            </div>
            <div className="text-gray-600">
              Call for Deals: 0700 600 0000
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center py-4 space-x-6">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-black">JUMIA</span>
                <span className="text-orange-500">●</span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Search products, brands and categories"
                  className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600">
                  Search
                </button>
              </div>
            </div>

            {/* Account & Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setShowAccountMenu(!showAccountMenu)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
                >
                  <span>👤</span>
                  <span>Account</span>
                  <span>▼</span>
                </button>
                
                {showAccountMenu && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border shadow-lg z-50">
                    <button className="w-full bg-orange-500 text-white py-2 px-4 hover:bg-orange-600">
                      Sign In
                    </button>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">👤 My Account</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">📦 Orders</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">❤️ Wishlist</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <span>❓</span>
                <span>Help</span>
                <span>▼</span>
              </div>

              <div className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <span>🛒</span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Sidebar Categories */}
          <div className="w-64 bg-white shadow-sm">
            <div className="p-4">
              <CategoryItem icon="📱" name="Appliances" />
              <CategoryItem icon="📞" name="Phones & Tablets" />
              <CategoryItem icon="💄" name="Health & Beauty" />
              <CategoryItem icon="🏠" name="Home & Office" />
              <CategoryItem icon="💻" name="Electronics" />
              <CategoryItem icon="👗" name="Fashion" />
              <CategoryItem icon="🛒" name="Supermarket" />
              <CategoryItem icon="💻" name="Computing" />
              <CategoryItem icon="👶" name="Baby Products" />
              <CategoryItem icon="🎮" name="Gaming" />
              <CategoryItem icon="🎵" name="Musical Instruments" />
              <CategoryItem icon="📁" name="Other categories" />
            </div>
          </div>

          {/* Main Banner */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg p-8 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Must-have</h2>
                  <h2 className="text-3xl font-bold mb-2">Clothing</h2>
                  <h2 className="text-3xl font-bold mb-4">Sale</h2>
                  <div className="bg-orange-600 px-4 py-2 rounded text-2xl font-bold inline-block">
                    10% OFF
                  </div>
                  <p className="mt-2 text-sm">T&Cs Apply.</p>
                </div>
                <div className="flex space-x-4">
                  <div className="w-24 h-32 bg-blue-300 rounded-lg flex items-center justify-center">
                    👕
                  </div>
                  <div className="w-24 h-32 bg-yellow-300 rounded-lg flex items-center justify-center">
                    👔
                  </div>
                  <div className="w-24 h-32 bg-pink-300 rounded-lg flex items-center justify-center">
                    👗
                  </div>
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-4 gap-4">
              <ServiceCard color="bg-red-500" title="Awoof Deals" subtitle="Awoof Deals" />
              <ServiceCard color="bg-yellow-500" title="Up to 80% Off" subtitle="Clearance Sales" />
              <ServiceCard color="bg-green-500" title="Send Packages" subtitle="Jumia Delivery" />
              <ServiceCard color="bg-black" title="New Arrival" subtitle="Latest Products" />
              <ServiceCard color="bg-orange-500" title="Earn While You Shop" subtitle="Jumia Force" />
              <ServiceCard color="bg-blue-500" title="Buy 2 Items Get ₦850 Off" subtitle="Unlock Your Deal" />
              <ServiceCard color="bg-gray-700" title="Banger deals" subtitle="Limited Time" />
              <ServiceCard color="bg-purple-500" title="Sporting Goods" subtitle="Sports & Fitness" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">NEED HELP?</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Chat with us</a></li>
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">ABOUT JUMIA</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">About us</a></li>
                <li><a href="#" className="hover:text-orange-500">Jumia careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms and Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">MAKE MONEY WITH JUMIA</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Sell on Jumia</a></li>
                <li><a href="#" className="hover:text-orange-500">Vendor hub</a></li>
                <li><a href="#" className="hover:text-orange-500">Become a Sales Consultant</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">JUMIA INTERNATIONAL</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500">Algeria</a></li>
                <li><a href="#" className="hover:text-orange-500">Egypt</a></li>
                <li><a href="#" className="hover:text-orange-500">Ghana</a></li>
                <li><a href="#" className="hover:text-orange-500">Kenya</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Category Item Component
function CategoryItem({ icon, name }) {
  return (
    <div className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-100 cursor-pointer">
      <span>{icon}</span>
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  )
}

// Service Card Component
function ServiceCard({ color, title, subtitle }) {
  return (
    <div className={`${color} text-white p-4 rounded-lg text-center cursor-pointer hover:opacity-90`}>
      <div className="text-sm font-bold">{title}</div>
      <div className="text-xs mt-1">{subtitle}</div>
    </div>
  )
}

export default App
