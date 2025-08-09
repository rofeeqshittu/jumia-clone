function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-600">
          <span>Home &gt; Electronics &gt; Phones &gt; Product Name</span>
        </nav>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-500 text-8xl">📱</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-gray-200 h-20 rounded flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Samsung Galaxy A55 5G - 256GB - Awesome Navy
          </h1>
          
          <div className="mb-4">
            <span className="text-sm text-gray-600">Brand: </span>
            <span className="text-orange-600 font-medium">Samsung</span>
          </div>

          <div className="mb-4">
            <span className="text-xs text-gray-600">⭐⭐⭐⭐ (124 ratings)</span>
          </div>

          <div className="mb-6">
            <div className="text-3xl font-bold text-orange-600">₦ 285,000</div>
            <div className="text-lg text-gray-500 line-through">₦ 320,000</div>
            <div className="text-sm text-green-600">You save ₦ 35,000</div>
          </div>

          {/* Product Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-blue-900 rounded border-2 border-orange-500"></button>
              <button className="w-8 h-8 bg-gray-800 rounded"></button>
              <button className="w-8 h-8 bg-blue-400 rounded"></button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Storage</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded">128GB</button>
              <button className="px-4 py-2 border rounded">256GB</button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border">
                <button className="px-3 py-2">-</button>
                <span className="px-3 py-2">1</span>
                <button className="px-3 py-2">+</button>
              </div>
              <span className="text-sm text-gray-600">Only 5 items left!</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600">
              ADD TO CART
            </button>
            <button className="w-full border border-orange-500 text-orange-500 py-3 rounded font-medium hover:bg-orange-50">
              BUY NOW
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">🚚 Delivery & Returns</h3>
            <p className="text-sm text-gray-600 mb-2">
              Free delivery on orders over ₦15,000 in Lagos
            </p>
            <p className="text-sm text-gray-600">
              Easy 7-day returns if you change your mind
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <div className="border-b">
          <nav className="flex space-x-8">
            <button className="py-4 border-b-2 border-orange-500 text-orange-500 font-medium">
              Description
            </button>
            <button className="py-4 text-gray-600">
              Specifications
            </button>
            <button className="py-4 text-gray-600">
              Reviews (124)
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          <h3 className="font-bold text-lg mb-4">Product Description</h3>
          <div className="prose text-gray-700">
            <p className="mb-4">
              The Samsung Galaxy A55 5G delivers premium features at an accessible price point. 
              With its sleek design and powerful performance, this smartphone is perfect for 
              everyday use and advanced mobile computing.
            </p>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>6.6" Super AMOLED Display</li>
              <li>50MP Triple Camera System</li>
              <li>5000mAh Battery with Fast Charging</li>
              <li>256GB Storage + 8GB RAM</li>
              <li>5G Connectivity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
