import CategorySidebar from '../components/CategorySidebar'
import HeroBanner from '../components/HeroBanner'
import ProductCarousel from '../components/ProductCarousel'
import Section from '../components/Section'
import { Card, CardContent } from '../components/ui/Card'
import { 
  productsFlash, 
  productsTopSellers, 
  productsPhoneAccessories, 
  productsShoes,
  categories
} from '../data/data'

function Home() {
  // Use imported data instead of inline definitions
      // Use imported data instead of inline definitions
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex gap-4">
        {/* Sidebar Categories */}
        <div className="hidden lg:block">
          <CategorySidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <HeroBanner />
          
          <ProductCarousel 
            title="Flash Sales" 
            products={productsFlash}
            showCountdown={true}
            seeAllLink="/category/flash-sales"
          />
          
          <ProductCarousel 
            title="Top Sellers" 
            products={productsTopSellers}
            seeAllLink="/category/top-sellers"
          />

          <ProductCarousel 
            title="Phone & Tablet Accessories" 
            products={productsPhoneAccessories}
            seeAllLink="/category/phone-accessories"
          />

          <ProductCarousel 
            title="Shoes & Footwear" 
            products={productsShoes}
            seeAllLink="/category/shoes"
          />

          <Section title="Categories">
            <CategoryGrid />
          </Section>

          <Section title="Kids Corner Deals">
            <ProductCarousel 
              products={productsFlash.slice(0, 3)}
              seeAllLink="/category/kids"
            />
          </Section>

          <Section title="Power Boost Deals">
            <ProductCarousel 
              products={productsTopSellers.slice(0, 3)}
              seeAllLink="/category/power-boost"
            />
          </Section>

          <Section title="Jumia Bar">
            <div className="bg-orange-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-2">
                Get Your Favorite Drinks Delivered
              </h3>
              <p className="text-orange-700 mb-4">
                Beer, wine, spirits and more at great prices
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                Shop Now
              </button>
            </div>
          </Section>

          <CompanyDescription />
        </div>
      </div>
    </div>
  )

  function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Card key={category.label} className="hover:shadow-md transition-shadow">
          <CardContent className="p-3">
            <img
              src="/api/placeholder/150/120"
              alt={category.label}
              className="h-20 w-full rounded object-cover mb-2"
            />
            <div className="text-sm font-medium text-center text-gray-800">
              {category.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex gap-4">
        {/* Sidebar Categories */}
        <div className="hidden lg:block">
          <CategorySidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <HeroBanner />
          
          <ProductCarousel 
            title="Flash Sales" 
            products={flashSalesProducts}
            showCountdown={true}
            seeAllLink="/category/flash-sales"
          />
          
          <ProductCarousel 
            title="Top Sellers" 
            products={topSellersProducts}
            seeAllLink="/category/top-sellers"
          />

          <Section title="Categories">
            <CategoryGrid />
          </Section>

          <Section title="Kids Corner Deals">
            <ProductCarousel 
              products={productsFlash.slice(0, 3)}
              seeAllLink="/category/kids"
            />
          </Section>

          <Section title="Power Boost Deals">
            <ProductCarousel 
              products={productsTopSellers.slice(0, 3)}
              seeAllLink="/category/power-boost"
            />
          </Section>

          <Section title="Jumia Bar">
            <div className="bg-orange-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-2">
                Get Your Favorite Drinks Delivered
              </h3>
              <p className="text-orange-700 mb-4">
                Beer, wine, spirits and more at great prices
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                Shop Now
              </button>
            </div>
          </Section>

          <CompanyDescription />
        </div>
      </div>
    </div>
  )
}

function CategoryGrid() {
  const categories = [
    { name: "Phones & Tablets", image: "/api/placeholder/150/120" },
    { name: "Fashion", image: "/api/placeholder/150/120" },
    { name: "Home & Office", image: "/api/placeholder/150/120" },
    { name: "Health & Beauty", image: "/api/placeholder/150/120" },
    { name: "Electronics", image: "/api/placeholder/150/120" },
    { name: "Computing", image: "/api/placeholder/150/120" },
    { name: "Appliances", image: "/api/placeholder/150/120" },
    { name: "Supermarket", image: "/api/placeholder/150/120" }
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Card key={category.name} className="hover:shadow-md transition-shadow">
          <CardContent className="p-3">
            <img
              src={category.image}
              alt={category.name}
              className="h-20 w-full rounded object-cover mb-2"
            />
            <div className="text-sm font-medium text-center text-gray-800">
              {category.name}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function CompanyDescription() {
  return (
    <Section title="About Jumia Nigeria">
      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Jumia is Nigeria's number one online shopping destination. We are an online marketplace where 
          you can purchase all your electronics, as well as books, home appliances, kiddies items, 
          fashion items for men, women, and children; cool gadgets, computers, groceries, automobile 
          parts, and more on the go.
        </p>
        <p className="mb-4">
          What more? You can have them delivered directly to you. Jumia Nigeria is the largest online 
          retail store in Nigeria. We provide a platform where customers in any part of Nigeria can 
          find and shop for all they need in one online store and that platform is the Jumia shopping 
          website.
        </p>
      </div>
    </Section>
  )
}

export default Home
