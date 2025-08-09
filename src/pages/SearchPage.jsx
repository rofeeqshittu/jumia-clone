function SearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Results Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-2">Search Results for "smartphone"</h1>
        <p className="text-gray-600">Showing 1,234 results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Phones & Tablets (1,234)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Electronics (567)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Accessories (234)</span>
                </label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Under ₦50,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₦50,000 - ₦100,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₦100,000 - ₦200,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Above ₦200,000</span>
                </label>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Brand</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Samsung (456)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">iPhone (234)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Xiaomi (123)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Tecno (98)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Infinix (76)</span>
                </label>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Customer Rating</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">⭐⭐⭐⭐⭐ & up</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">⭐⭐⭐⭐ & up</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">⭐⭐⭐ & up</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3">
          {/* Sort Options */}
          <div className="bg-white border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border border-gray-300 px-3 py-1 rounded text-sm">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Product Card 1 */}
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded mb-3 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-sm mb-2">Samsung Galaxy A54 5G - 128GB, 8GB RAM</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm mr-1">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-600">(4.5) 234 reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₦185,000</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₦220,000</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">-16%</span>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded mb-3 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-sm mb-2">iPhone 14 - 128GB, 6GB RAM</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm mr-1">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-600">(4.8) 456 reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₦485,000</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₦520,000</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">-7%</span>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded mb-3 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-sm mb-2">Xiaomi Redmi Note 12 - 64GB, 4GB RAM</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm mr-1">⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-600">(4.2) 123 reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₦89,000</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₦105,000</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">-15%</span>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded mb-3 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-sm mb-2">Tecno Camon 20 Pro - 256GB, 8GB RAM</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm mr-1">⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-600">(4.0) 89 reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₦145,000</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₦170,000</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">-15%</span>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded mb-3 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-sm mb-2">Infinix Hot 30i - 128GB, 4GB RAM</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm mr-1">⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-600">(3.9) 67 reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₦65,000</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₦75,000</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">-13%</span>
              </div>
            </div>

            {/* Product Card 6 */}
            <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded mb-3 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-medium text-sm mb-2">Samsung Galaxy S23 - 256GB, 8GB RAM</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 text-sm mr-1">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-600">(4.7) 189 reviews</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold">₦385,000</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₦420,000</span>
                </div>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">-8%</span>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 border rounded hover:bg-gray-50" disabled>
                Previous
              </button>
              <button className="px-3 py-2 bg-orange-500 text-white rounded">1</button>
              <button className="px-3 py-2 border rounded hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border rounded hover:bg-gray-50">3</button>
              <button className="px-3 py-2 border rounded hover:bg-gray-50">4</button>
              <span className="px-3 py-2">...</span>
              <button className="px-3 py-2 border rounded hover:bg-gray-50">10</button>
              <button className="px-3 py-2 border rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
