import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Jumai</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Categories</a>
              <a href="#" className="text-gray-700 hover:text-green-600">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Jumai Clone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your marketplace for fresh groceries and everyday essentials
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            title="Fresh Vegetables"
            description="Farm fresh vegetables delivered to your door"
            image="/api/placeholder/300/200"
          />
          <ProductCard 
            title="Fruits"
            description="Sweet and juicy fruits for healthy living"
            image="/api/placeholder/300/200"
          />
          <ProductCard 
            title="Dairy Products"
            description="Fresh milk, cheese and dairy essentials"
            image="/api/placeholder/300/200"
          />
          <ProductCard 
            title="Beverages"
            description="Refreshing drinks for every occasion"
            image="/api/placeholder/300/200"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Jumai Clone</h3>
            <p className="text-gray-400">
              © 2024 Jumai Clone. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Simple Product Card Component
function ProductCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="mt-3 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
          View Products
        </button>
      </div>
    </div>
  )
}

export default App
