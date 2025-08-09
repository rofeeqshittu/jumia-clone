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
          <div className="grid grid-cols-6 gap-4 mb-6">
            <CategoryCard title="Phones & Tablets" image="/api/placeholder/150/150" />
            <CategoryCard title="TV & Audio" image="/api/placeholder/150/150" />
            <CategoryCard title="Beauty Must Have" image="/api/placeholder/150/150" />
            <CategoryCard title="Appliances" image="/api/placeholder/150/150" />
            <CategoryCard title="Generators & Inverters" image="/api/placeholder/150/150" />
            <CategoryCard title="Fashion" image="/api/placeholder/150/150" />
          </div>

          {/* Kids Corner Deals */}
          <div className="bg-white border rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Kids Corner Deals</h2>
              <Link to="/category/kids" className="text-orange-500 text-sm hover:underline">See All →</Link>
            </div>
            
            <div className="grid grid-cols-6 gap-4">
              <KidsProduct 
                title="Girls One Shoulder Princess..."
                price="₦ 20,753"
                originalPrice="₦ 31,678"
                discount="-35%"
                image="/api/placeholder/150/150"
              />
              <KidsProduct 
                title="Tanny Kid's Jumping Ladybug..."
                price="₦ 29,000"
                originalPrice=""
                discount=""
                image="/api/placeholder/150/150"
              />
              <KidsProduct 
                title="12 Inches LCD Learning..."
                price="₦ 6,300"
                originalPrice="₦ 12,000"
                discount="-48%"
                image="/api/placeholder/150/150"
              />
              <KidsProduct 
                title="Defacto Girl Special Collection..."
                price="₦ 3,000"
                originalPrice="₦ 10,395"
                discount="-71%"
                image="/api/placeholder/150/150"
              />
              <KidsProduct 
                title="None Flying Drone & Radio..."
                price="₦ 17,999"
                originalPrice=""
                discount=""
                image="/api/placeholder/150/150"
              />
              <KidsProduct 
                title="Kids Household Playset..."
                price="₦ 9,499"
                originalPrice="₦ 9,999"
                discount="-5%"
                image="/api/placeholder/150/150"
              />
            </div>
          </div>

          {/* Power Boost Deals */}
          <div className="bg-white border rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Power Boost Deals</h2>
              <Link to="/category/power" className="text-orange-500 text-sm hover:underline">See All →</Link>
            </div>
            
            <div className="grid grid-cols-6 gap-4">
              <PowerProduct 
                title="Ace Elec 66W Power Bank..."
                price="₦ 13,412"
                badge="20000mAh"
                image="/api/placeholder/150/150"
              />
              <PowerProduct 
                title="Ace Elec 20000 MAh Ultra..."
                price="₦ 7,294"
                badge="ACE ELEC"
                image="/api/placeholder/150/150"
              />
              <PowerProduct 
                title="Haier Thermocool GEN..."
                price="₦ 565,800"
                badge="20000W"
                image="/api/placeholder/150/150"
              />
              <PowerProduct 
                title="Senwei 1.8kva Ecology..."
                price="₦ 158,990"
                discount="-12%"
                image="/api/placeholder/150/150"
              />
              <PowerProduct 
                title="itel PowerPulse 20000mah..."
                price="₦ 15,250"
                discount="-86%"
                badge="Hot"
                image="/api/placeholder/150/150"
              />
              <PowerProduct 
                title="EASYPIE EasyPie 2000..."
                price="₦ 7,392"
                discount="-24%"
                image="/api/placeholder/150/150"
              />
            </div>
          </div>

          {/* Jumia Bar */}
          <div className="bg-white border rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Jumia Bar</h2>
              <Link to="/category/bar" className="text-orange-500 text-sm hover:underline">See All →</Link>
            </div>
            
            <div className="grid grid-cols-6 gap-4">
              <BarProduct 
                title="Black & White Scotch Whisky..."
                price="₦ 9,999"
                originalPrice="₦ 10,999"
                discount="-9%"
                image="/api/placeholder/150/150"
              />
              <BarProduct 
                title="Martini Asti Spumante Sweet..."
                price="₦ 11,440"
                originalPrice="₦ 15,584"
                discount="-27%"
                image="/api/placeholder/150/150"
              />
              <BarProduct 
                title="Jameson Irish Whiskey..."
                price="₦ 20,336"
                originalPrice="₦ 22,369"
                discount="-9%"
                image="/api/placeholder/150/150"
              />
              <BarProduct 
                title="Jameson Black Barrel 70cl"
                price="₦ 33,894"
                originalPrice="₦ 37,384"
                discount="-9%"
                image="/api/placeholder/150/150"
              />
              <BarProduct 
                title="Baileys Original Irish Cream..."
                price="₦ 18,158"
                originalPrice="₦ 19,974"
                discount="-9%"
                image="/api/placeholder/150/150"
              />
              <BarProduct 
                title="Bombay Sapphire London..."
                price="₦ 15,999"
                originalPrice="₦ 19,359"
                discount="-17%"
                image="/api/placeholder/150/150"
              />
            </div>
          </div>

          {/* Jumia Nigeria Description */}
          <div className="bg-white border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Jumia Nigeria - Nigeria's No. 1 Shopping Destination</h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Shop for Everything You Need on Jumia Nigeria</h3>
                <p className="text-sm leading-relaxed">
                  Jumia Nigeria is the largest online shopping website in Nigeria. We offer a platform where customers in any part of Nigeria can find and shop for all they need in one online store and that platform is the Jumia website. On the Jumia mobile app or website, you can shop from the comfort of your home or office and get everything delivered fast without you having to stress or move an inch. Be it <strong>fashion, electronics, mobile phones, computers</strong> or your everyday <strong>groceries</strong> you can get everything you need on Jumia online store.
                </p>
              </div>
              
              <p className="text-sm leading-relaxed">
                Have you used the Jumia online store today? Shop now on Jumia to enjoy a seamless <Link to="#" className="text-blue-500 hover:underline">online shopping experience</Link>. With fast delivery, free returns, and flexible payment options, you are certain to enjoy the convenience of <strong>shopping online</strong>.
              </p>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Shop for Original and Quality Items at The Best Prices</h3>
                <p className="text-sm leading-relaxed">
                  Jumia Nigeria prides itself in giving the best prices and the best quality of products you can find anywhere in the country. Our strong partnership with top brands like <strong>Oraimo, Samsung, Infinix, Xiaomi, Diageo, Tecno, Adidas, Nike, Trendyol</strong>, etc. guarantees our customers the cheapest prices on original brand products. Beyond that, customers also have exclusive access to the latest product released by these top brands. If you enjoy exclusivity, the <Link to="#" className="text-blue-500 hover:underline">Jumia Official Store</Link> is the right place for you. On the Jumia official stores, you can experience a wide range of amazing products. You can also enjoy huge offers on brand days that come with heavy discounts on various products ranging from mobile phones to drinks, clothing items, sneakers, and many more!
                </p>
              </div>
              
              <p className="text-sm leading-relaxed">
                Aside these major events, we also have Ramadan sales, Easter sales, Christmas sales and other seasonal celebrations we make sure our customers enjoy on Jumia.
              </p>
              
              <p className="text-sm">
                <Link to="#" className="text-blue-500 hover:underline">Shop now and enjoy unlimited offers, discounts and the best online shopping experience!</Link>
              </p>
            </div>
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

// Kids Product Component
function KidsProduct({ title, price, originalPrice, discount, image }) {
  return (
    <div className="bg-white border rounded p-3 hover:shadow-md cursor-pointer">
      <div className="relative">
        <div className="w-full h-32 bg-gray-100 rounded mb-2 flex items-center justify-center">
          <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
        {discount && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {discount}
          </div>
        )}
      </div>
      <h3 className="text-xs font-medium mb-2 truncate">{title}</h3>
      <div className="text-sm font-bold text-gray-900">{price}</div>
      {originalPrice && (
        <div className="text-xs text-gray-500 line-through">{originalPrice}</div>
      )}
    </div>
  )
}

// Power Product Component
function PowerProduct({ title, price, discount, badge, image }) {
  return (
    <div className="bg-white border rounded p-3 hover:shadow-md cursor-pointer">
      <div className="relative">
        <div className="w-full h-32 bg-gray-100 rounded mb-2 flex items-center justify-center">
          <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
        {badge && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            {badge}
          </div>
        )}
        {discount && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {discount}
          </div>
        )}
      </div>
      <h3 className="text-xs font-medium mb-2 truncate">{title}</h3>
      <div className="text-sm font-bold text-gray-900">{price}</div>
    </div>
  )
}

// Bar Product Component
function BarProduct({ title, price, originalPrice, discount, image }) {
  return (
    <div className="bg-white border rounded p-3 hover:shadow-md cursor-pointer">
      <div className="relative">
        <div className="w-full h-32 bg-gray-100 rounded mb-2 flex items-center justify-center">
          <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}
          </div>
        )}
      </div>
      <h3 className="text-xs font-medium mb-2 truncate">{title}</h3>
      <div className="text-sm font-bold text-gray-900">{price}</div>
      {originalPrice && (
        <div className="text-xs text-gray-500 line-through">{originalPrice}</div>
      )}
    </div>
  )
}

export default Home
