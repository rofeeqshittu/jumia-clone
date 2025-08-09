import { useParams } from 'react-router-dom'

function CategoryPage() {
  const { category } = useParams()
  
  const categoryNames = {
    appliances: 'Appliances',
    phones: 'Phones & Tablets',
    'health-beauty': 'Health & Beauty',
    'home-office': 'Home & Office',
    electronics: 'Electronics',
    fashion: 'Fashion',
    supermarket: 'Supermarket',
    computing: 'Computing',
    baby: 'Baby Products',
    gaming: 'Gaming',
    music: 'Musical Instruments',
    other: 'Other Categories'
  }

  const categoryName = categoryNames[category] || 'Category'

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-600">
          <span>Home &gt; {categoryName}</span>
        </nav>
        <h1 className="text-2xl font-bold mt-2">{categoryName}</h1>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className="w-64">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold mb-4">FILTERS</h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Under ₦5,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₦5,000 - ₦15,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₦15,000 - ₦50,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Above ₦50,000</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Brand</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Samsung</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Apple</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Infinix</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Rating</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">⭐⭐⭐⭐⭐ & up</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">⭐⭐⭐⭐ & up</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Showing 1-24 of 156 products</p>
            <select className="border border-gray-300 px-3 py-2">
              <option>Sort by: Best Selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <ProductCard key={i} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="px-3 py-2 border">Previous</button>
              <button className="px-3 py-2 bg-orange-500 text-white">1</button>
              <button className="px-3 py-2 border">2</button>
              <button className="px-3 py-2 border">3</button>
              <button className="px-3 py-2 border">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard() {
  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-lg">
      <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
        <span className="text-gray-500 text-4xl">📱</span>
      </div>
      <h3 className="text-sm font-medium mb-2 h-10 overflow-hidden">
        Sample Product Name Here
      </h3>
      <div className="text-lg font-bold text-orange-600">₦ 15,999</div>
      <div className="text-sm text-gray-500 line-through">₦ 19,999</div>
      <div className="text-xs text-gray-600 mt-1">⭐⭐⭐⭐ (24)</div>
    </div>
  )
}

export default CategoryPage
