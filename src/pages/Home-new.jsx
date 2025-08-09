import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex gap-4">
        {/* Sidebar Categories */}
        <div className="w-64 bg-white shadow-sm">
          <div className="p-4">
            <CategoryItem name="Appliances" link="/category/appliances" />
            <CategoryItem name="Phones & Tablets" link="/category/phones" />
            <CategoryItem name="Health & Beauty" link="/category/health-beauty" />
            <CategoryItem name="Home & Office" link="/category/home-office" />
            <CategoryItem name="Electronics" link="/category/electronics" />
            <CategoryItem name="Fashion" link="/category/fashion" />
            <CategoryItem name="Supermarket" link="/category/supermarket" />
            <CategoryItem name="Computing" link="/category/computing" />
            <CategoryItem name="Baby Products" link="/category/baby" />
            <CategoryItem name="Gaming" link="/category/gaming" />
            <CategoryItem name="Musical Instruments" link="/category/music" />
            <CategoryItem name="Other categories" link="/category/other" />
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
                <div className="w-24 h-32 bg-blue-300 rounded-lg flex items-center justify-center">
                  <img src="/api/placeholder/80/120" alt="Clothing" className="rounded" />
                </div>
                <div className="w-24 h-32 bg-yellow-300 rounded-lg flex items-center justify-center">
                  <img src="/api/placeholder/80/120" alt="Clothing" className="rounded" />
                </div>
                <div className="w-24 h-32 bg-pink-300 rounded-lg flex items-center justify-center">
                  <img src="/api/placeholder/80/120" alt="Clothing" className="rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <ServiceCard color="bg-red-500" title="Awoof Deals" subtitle="Awoof Deals" />
            <ServiceCard color="bg-yellow-500" title="Up to 80% Off" subtitle="Clearance Sales" />
            <ServiceCard color="bg-green-500" title="Send Packages" subtitle="Jumia Delivery" />
            <ServiceCard color="bg-black" title="New Arrival" subtitle="Latest Products" />
            <ServiceCard color="bg-orange-500" title="Earn While You Shop" subtitle="Jumia Force" />
            <ServiceCard color="bg-blue-500" title="Buy 2 Items Get ₦850 Off" subtitle="Unlock Your Deal" />
            <ServiceCard color="bg-gray-700" title="Banger deals" subtitle="Limited Time" />
            <ServiceCard color="bg-purple-500" title="Sporting Goods" subtitle="Sports & Fitness" />
          </div>

          {/* Flash Sales Section */}
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Flash Sales</h2>
              <div className="text-sm">
                Time Left: <span className="font-bold">10h : 05m : 52s</span>
              </div>
              <Link to="/category/flash-sales" className="text-white underline">See All</Link>
            </div>
            
            <div className="grid grid-cols-6 gap-4">
              <FlashSaleItem 
                title="Tecno POP10 6.67&quot; 3GB..."
                price="₦ 104,315"
                originalPrice="₦ 154,315"
                discount="-1%"
                itemsLeft="19 items left"
              />
              <FlashSaleItem 
                title="Syinix 2.2L Electric Kettle"
                price="₦ 6,100"
                originalPrice="₦ 7,327"
                discount="-4%"
                itemsLeft="100 items left"
              />
              <FlashSaleItem 
                title="Infinix Smart 10 Plus 6.7&quot;"
                price="₦ 124,950"
                originalPrice=""
                discount="-20%"
                itemsLeft="29 items left"
              />
              <FlashSaleItem 
                title="Hisense 20 Litres Microwave"
                price="₦ 76,999"
                originalPrice="₦ 91,900"
                discount="-5%"
                itemsLeft="50 items left"
              />
              <FlashSaleItem 
                title="Aeon 1.5HP Split Inverter"
                price="₦ 359,900"
                originalPrice="₦ 432,500"
                discount="-17%"
                itemsLeft="99 items left"
              />
              <FlashSaleItem 
                title="Aeon 4 Burner 50 x 50 Gas"
                price="₦ 136,960"
                originalPrice="₦ 191,270"
                discount="-1%"
                itemsLeft="97 items left"
              />
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-6 gap-4">
            <CategoryCard title="Phones & Tablets" image="/api/placeholder/150/150" />
            <CategoryCard title="TV & Audio" image="/api/placeholder/150/150" />
            <CategoryCard title="Beauty Must Have" image="/api/placeholder/150/150" />
            <CategoryCard title="Appliances" image="/api/placeholder/150/150" />
            <CategoryCard title="Generators & Inverters" image="/api/placeholder/150/150" />
            <CategoryCard title="Fashion" image="/api/placeholder/150/150" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Category Item Component
function CategoryItem({ name, link }) {
  return (
    <Link to={link} className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-100 cursor-pointer">
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

// Flash Sale Item Component
function FlashSaleItem({ title, price, originalPrice, discount, itemsLeft }) {
  return (
    <div className="bg-white text-black p-3 rounded">
      <div className="w-full h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">
        <img src="/api/placeholder/80/80" alt={title} className="rounded" />
      </div>
      <h3 className="text-xs font-medium mb-1 truncate">{title}</h3>
      <div className="text-sm font-bold">{price}</div>
      {originalPrice && (
        <div className="text-xs text-gray-500 line-through">{originalPrice}</div>
      )}
      <div className="text-xs text-orange-600 bg-orange-100 px-1 py-0.5 rounded mt-1 inline-block">
        {discount}
      </div>
      <div className="text-xs text-gray-600 mt-1">{itemsLeft}</div>
      <div className="w-full bg-orange-200 rounded-full h-1 mt-2">
        <div className="bg-orange-500 h-1 rounded-full" style={{width: '40%'}}></div>
      </div>
    </div>
  )
}

// Category Card Component  
function CategoryCard({ title, image }) {
  return (
    <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
      <div className="w-full h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">
        <img src={image} alt={title} className="rounded" />
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}

export default Home
