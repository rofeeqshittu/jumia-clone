import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import Input from './ui/Input'

function Header() {
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showHelpMenu, setShowHelpMenu] = useState(false)

  return (
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
              <Input 
                placeholder="Search products, brands and categories"
                className="flex-1 rounded-r-none border-r-0"
              />
              <Button 
                to="/search" 
                className="rounded-l-none"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center space-x-4">
            <AccountDropdown 
              showMenu={showAccountMenu}
              setShowMenu={setShowAccountMenu}
            />
            
            <HelpDropdown 
              showMenu={showHelpMenu}
              setShowMenu={setShowHelpMenu}
            />

            <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function AccountDropdown({ showMenu, setShowMenu }) {
  return (
    <div className="relative">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <span>Account</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {showMenu && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border shadow-lg z-50">
          <Button 
            to="/login" 
            className="w-full rounded-none"
          >
            Sign In
          </Button>
          <div className="py-2">
            <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Account</Link>
            <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</Link>
            <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wishlist</Link>
          </div>
        </div>
      )}
    </div>
  )
}

function HelpDropdown({ showMenu, setShowMenu }) {
  return (
    <div className="relative">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <span>Help</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {showMenu && (
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
  )
}

export default Header
