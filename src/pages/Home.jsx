import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex gap-4">
        {/* Sidebar Categories */}
        <div className="w-64 bg-white shadow-sm">
          <div className="p-4">
            <CategoryItem icon="📱" name="Appliances" link="/category/appliances" />
            <CategoryItem icon="📞" name="Phones & Tablets" link="/category/phones" />
            <CategoryItem icon="💄" name="Health & Beauty" link="/category/health-beauty" />
            <CategoryItem icon="🏠" name="Home & Office" link="/category/home-office" />
            <CategoryItem icon="💻" name="Electronics" link="/category/electronics" />
            <CategoryItem icon="👗" name="Fashion" link="/category/fashion" />
            <CategoryItem icon="🛒" name="Supermarket" link="/category/supermarket" />
            <CategoryItem icon="💻" name="Computing" link="/category/computing" />
            <CategoryItem icon="👶" name="Baby Products" link="/category/baby" />
            <CategoryItem icon="🎮" name="Gaming" link="/category/gaming" />
            <CategoryItem icon="🎵" name="Musical Instruments" link="/category/music" />
            <CategoryItem icon="📁" name="Other categories" link="/category/other" />
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
                <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">
                  SHOP NOW →
                </button>
              </div>
              <div className="flex space-x-4">
                <div className="w-24 h-32 bg-blue-300 rounded-lg flex items-center justify-center text-4xl">
                  👕
                </div>
                <div className="w-24 h-32 bg-yellow-300 rounded-lg flex items-center justify-center text-4xl">
                  👔
                </div>
                <div className="w-24 h-32 bg-pink-300 rounded-lg flex items-center justify-center text-4xl">
                  👗
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-4 gap-4">
            <ServiceCard color="bg-red-500" title="Awoof Deals" subtitle="Awoof of the Month" />
            <ServiceCard color="bg-yellow-500" title="Up to 80% Off" subtitle="Clearance Sales" />
            <ServiceCard color="bg-green-500" title="Send Packages" subtitle="Jumia Delivery" />
            <ServiceCard color="bg-black" title="★ NEW ARRIVAL" subtitle="Latest Products" />
            <ServiceCard color="bg-orange-500" title="Earn While You Shop" subtitle="Jumia Force" />
            <ServiceCard color="bg-blue-500" title="BUY 2 ITEMS GET ₦850 OFF" subtitle="Unlock Your Deal" />
            <ServiceCard color="bg-gray-700" title="Banger deals" subtitle="Limited Time" />
            <ServiceCard color="bg-purple-500" title="Sporting Goods" subtitle="Sports & Fitness" />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64">
          <div className="bg-white shadow-sm p-4 mb-4">
            <h3 className="font-semibold mb-2">📞 CALL TO ORDER</h3>
            <p className="text-sm text-gray-600">0700-600-0000, 0201883...</p>
          </div>
          
          <div className="bg-white shadow-sm p-4 mb-4">
            <h3 className="font-semibold mb-2">🏪 Sell on Jumia</h3>
          </div>
          
          <div className="bg-white shadow-sm p-4">
            <h3 className="font-semibold mb-2">📦 Send Your Packages</h3>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-5 gap-4">
          <ProductCard 
            image="🥃" 
            name="Black & White Scotch Whisky" 
            price="₦ 9,999" 
            originalPrice="₦ 19,999"
          />
          <ProductCard 
            image="🍸" 
            name="Martini Asti Spumante Sweet" 
            price="₦ 11,440" 
            originalPrice="₦ 12,564"
          />
          <ProductCard 
            image="🥃" 
            name="Jameson Irish Whiskey" 
            price="₦ 20,336" 
            originalPrice="₦ 22,369"
          />
          <ProductCard 
            image="🥃" 
            name="Jameson Black Barrel 70cl" 
            price="₦ 33,894" 
            originalPrice="₦ 37,284"
          />
          <ProductCard 
            image="🍺" 
            name="Baileys Original Irish Cream" 
            price="₦ 18,158" 
            originalPrice="₦ 19,974"
          />
        </div>
      </div>
    </div>
  )
}

// Category Item Component
function CategoryItem({ icon, name, link }) {
  return (
    <Link to={link} className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-100 cursor-pointer">
      <span>{icon}</span>
      <span className="text-sm text-gray-700">{name}</span>
    </Link>
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

// Product Card Component
function ProductCard({ image, name, price, originalPrice }) {
  return (
    <Link to="/product/1" className="bg-white border rounded-lg p-4 hover:shadow-lg">
      <div className="text-6xl text-center mb-4">{image}</div>
      <h3 className="text-sm font-medium mb-2 h-10 overflow-hidden">{name}</h3>
      <div className="text-lg font-bold text-orange-600">{price}</div>
      <div className="text-sm text-gray-500 line-through">{originalPrice}</div>
    </Link>
  )
}

export default Home
