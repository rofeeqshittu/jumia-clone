function HelpPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-4">Help Topics</h3>
            <div className="space-y-2">
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 text-orange-500">
                Track your order
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Place an order
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Payment options
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Delivery options
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Returns & refunds
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Manage your account
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Jumia Prime
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Report a product
              </a>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4 mt-6">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <div>
                  <p className="font-medium">Call us</p>
                  <p className="text-sm text-gray-600">0700-600-0000</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3">💬</span>
                <div>
                  <p className="font-medium">Live chat</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <div>
                  <p className="font-medium">Email us</p>
                  <p className="text-sm text-gray-600">help@jumia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white border rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6">How to Track Your Order</h1>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Quick Order Tracking</h2>
              <div className="bg-gray-50 p-4 rounded">
                <label className="block text-sm font-medium mb-2">Enter your order number</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Order number (e.g. 100-1234567-1234567)"
                    className="flex-1 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                    Track
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Step-by-step tracking guide</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Find your order number</h4>
                      <p className="text-gray-600">Check your email confirmation or SMS for the order number starting with "100-"</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Enter tracking details</h4>
                      <p className="text-gray-600">Use the tracking form above or go to "My Account" &gt; "My Orders"</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">View order status</h4>
                      <p className="text-gray-600">See real-time updates on your package location and delivery timeline</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Order Status Meanings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="font-medium">Processing</span>
                    </div>
                    <p className="text-sm text-gray-600">Your order is being prepared for shipment</p>
                  </div>

                  <div className="border rounded p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="font-medium">Shipped</span>
                    </div>
                    <p className="text-sm text-gray-600">Your package is on its way to you</p>
                  </div>

                  <div className="border rounded p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      <span className="font-medium">Out for Delivery</span>
                    </div>
                    <p className="text-sm text-gray-600">Your package is out for delivery today</p>
                  </div>

                  <div className="border rounded p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="font-medium">Delivered</span>
                    </div>
                    <p className="text-sm text-gray-600">Your package has been delivered</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border rounded p-4">
                    <h4 className="font-medium mb-2">How long does delivery take?</h4>
                    <p className="text-gray-600">Standard delivery takes 2-5 business days. Express delivery takes 1-2 business days.</p>
                  </div>

                  <div className="border rounded p-4">
                    <h4 className="font-medium mb-2">Can I change my delivery address?</h4>
                    <p className="text-gray-600">You can change your address before the item is shipped. Contact customer service for assistance.</p>
                  </div>

                  <div className="border rounded p-4">
                    <h4 className="font-medium mb-2">What if my package is delayed?</h4>
                    <p className="text-gray-600">If your package is delayed beyond the estimated delivery date, please contact our customer service team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPage
