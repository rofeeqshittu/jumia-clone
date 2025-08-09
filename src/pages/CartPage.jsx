function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart (2 items)</h1>
      
      <div className="grid grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-2">
          <div className="bg-white border rounded-lg">
            <CartItem />
            <hr />
            <CartItem />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Subtotal (2 items)</span>
                <span>₦ 300,999</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>₦ 1,500</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-orange-600">₦ 302,499</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600 mb-3">
              PROCEED TO CHECKOUT
            </button>
            
            <p className="text-xs text-gray-600 text-center">
              Free delivery on orders over ₦15,000
            </p>
          </div>

          {/* Promo Code */}
          <div className="bg-white border rounded-lg p-6 mt-4">
            <h3 className="font-bold mb-3">Promo Code</h3>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Enter promo code"
                className="flex-1 border border-gray-300 px-3 py-2 rounded-l"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }, (_, i) => (
            <RecentlyViewedItem key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CartItem() {
  return (
    <div className="p-6">
      <div className="flex space-x-4">
        <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-2xl">📱</span>
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium mb-1">Samsung Galaxy A55 5G - 256GB</h3>
          <p className="text-sm text-gray-600 mb-2">Color: Awesome Navy</p>
          <p className="text-sm text-green-600">In Stock</p>
        </div>

        <div className="text-right">
          <div className="text-lg font-bold text-orange-600 mb-2">₦ 285,000</div>
          <div className="text-sm text-gray-500 line-through">₦ 320,000</div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-3">
          <button className="text-orange-500 text-sm hover:underline">❤️ SAVE FOR LATER</button>
          <button className="text-red-500 text-sm hover:underline">🗑️ REMOVE</button>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-sm">Qty:</span>
          <div className="flex items-center border">
            <button className="px-2 py-1">-</button>
            <span className="px-3 py-1">1</span>
            <button className="px-2 py-1">+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function RecentlyViewedItem() {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
        <span className="text-gray-500 text-4xl">📱</span>
      </div>
      <h3 className="text-sm font-medium mb-2 h-10 overflow-hidden">
        iPhone 15 Pro Max
      </h3>
      <div className="text-lg font-bold text-orange-600">₦ 1,200,000</div>
    </div>
  )
}

export default CartPage
