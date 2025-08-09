import { useState } from 'react'
import { Link } from 'react-router-dom'

function Layout({ children }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showHelpMenu, setShowHelpMenu] = useState(false)

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
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-black">JUMIA</span>
                <span className="text-orange-500">●</span>
              </h1>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Search products, brands and categories"
                  className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Link to="/search" className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600">
                  Search
                </Link>
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
                    <Link to="/login" className="block w-full bg-orange-500 text-white py-2 px-4 hover:bg-orange-600 text-center">
                      Sign In
                    </Link>
                    <div className="py-2">
                      <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">👤 My Account</Link>
                      <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">📦 Orders</Link>
                      <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">❤️ Wishlist</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setShowHelpMenu(!showHelpMenu)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
                >
                  <span>❓</span>
                  <span>Help</span>
                  <span>▼</span>
                </button>
                
                {showHelpMenu && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border shadow-lg z-50">
                    <div className="py-2">
                      <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help Center</Link>
                      <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Place an order</Link>
                      <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Payment options</Link>
                      <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Track an order</Link>
                      <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cancel an order</Link>
                      <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Returns & Refunds</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <span>🛒</span>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">NEED HELP?</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/help" className="hover:text-orange-500">Chat with us</Link></li>
                <li><Link to="/help" className="hover:text-orange-500">Help Center</Link></li>
                <li><Link to="/help" className="hover:text-orange-500">Contact Us</Link></li>
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

export default Layout
