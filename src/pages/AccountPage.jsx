function AccountPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">john.doe@email.com</p>
            </div>

            <nav className="space-y-2">
              <a href="#" className="block py-2 px-3 rounded bg-orange-100 text-orange-600">
                My Account
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Orders
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Inbox
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Pending Reviews
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Vouchers
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Saved Items
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Recently Viewed
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Account Management
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
                Address Book
              </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 text-red-600">
                Logout
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white border rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Account Overview</h1>
            
            {/* Account Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📦</div>
                <h3 className="font-semibold">Orders</h3>
                <p className="text-2xl font-bold text-orange-500">12</p>
                <p className="text-sm text-gray-600">Total orders</p>
              </div>

              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⏳</div>
                <h3 className="font-semibold">Pending Orders</h3>
                <p className="text-2xl font-bold text-blue-500">2</p>
                <p className="text-sm text-gray-600">Awaiting delivery</p>
              </div>

              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-semibold">Jumia Credit</h3>
                <p className="text-2xl font-bold text-green-500">₦5,000</p>
                <p className="text-sm text-gray-600">Available balance</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <a href="#" className="text-orange-500 hover:underline text-sm">View All Orders</a>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">Order #100-1234567-1234567</h3>
                      <p className="text-sm text-gray-600">Placed on December 15, 2024</p>
                    </div>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded mr-3 flex items-center justify-center">
                      <span>📱</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Samsung Galaxy A54 5G</p>
                      <p className="text-sm text-gray-600">₦185,000</p>
                    </div>
                    <button className="text-orange-500 hover:underline text-sm">
                      Buy Again
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">Order #100-1234567-1234568</h3>
                      <p className="text-sm text-gray-600">Placed on December 10, 2024</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      Shipped
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded mr-3 flex items-center justify-center">
                      <span>👕</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Adidas T-Shirt - Blue XL</p>
                      <p className="text-sm text-gray-600">₦8,500</p>
                    </div>
                    <button className="text-orange-500 hover:underline text-sm">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Full Name</span>
                    <div className="flex items-center">
                      <span>John Doe</span>
                      <button className="ml-2 text-orange-500 hover:underline text-sm">Edit</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Email</span>
                    <div className="flex items-center">
                      <span>john.doe@email.com</span>
                      <button className="ml-2 text-orange-500 hover:underline text-sm">Edit</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Phone</span>
                    <div className="flex items-center">
                      <span>+234 801 234 5678</span>
                      <button className="ml-2 text-orange-500 hover:underline text-sm">Edit</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Date of Birth</span>
                    <div className="flex items-center">
                      <span>Not set</span>
                      <button className="ml-2 text-orange-500 hover:underline text-sm">Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Address Book</h2>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Default Address</h3>
                    <button className="text-orange-500 hover:underline text-sm">Edit</button>
                  </div>
                  <p className="text-sm text-gray-600">
                    John Doe<br />
                    123 Main Street, Victoria Island<br />
                    Lagos, Lagos State<br />
                    Nigeria<br />
                    +234 801 234 5678
                  </p>
                </div>
                <button className="mt-3 text-orange-500 hover:underline text-sm">
                  + Add New Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
