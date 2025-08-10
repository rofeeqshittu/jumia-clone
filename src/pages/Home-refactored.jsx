import CategorySidebar from '../components/CategorySidebar'
import HeroBanner from '../components/HeroBanner'
import ProductCarousel from '../components/ProductCarousel'
import Section from '../components/Section'
import { Card, CardContent } from '../components/ui/Card'

function Home() {
  // Sample data - in a real app this would come from an API
  const flashSalesProducts = [
    {
      id: 1,
      title: "Samsung Galaxy A14 5G 128GB",
      price: 185000,
      oldPrice: 220000,
      discount: 16,
      image: "/api/placeholder/200/200",
      itemsLeft: 23
    },
    {
      id: 2,
      title: "iPhone 13 128GB",
      price: 890000,
      oldPrice: 950000,
      discount: 6,
      image: "/api/placeholder/200/200",
      itemsLeft: 12
    },
    {
      id: 3,
      title: "Oraimo Wireless Earbuds",
      price: 15000,
      oldPrice: 25000,
      discount: 40,
      image: "/api/placeholder/200/200",
      itemsLeft: 45
    },
    {
      id: 4,
      title: "HP Laptop 15.6 inch",
      price: 420000,
      oldPrice: 500000,
      discount: 16,
      image: "/api/placeholder/200/200",
      itemsLeft: 8
    },
    {
      id: 5,
      title: "Smart Watch Series 7",
      price: 35000,
      oldPrice: 45000,
      discount: 22,
      image: "/api/placeholder/200/200",
      itemsLeft: 31
    }
  ]

  const topSellersProducts = [
    {
      id: 6,
      title: "Nike Air Force 1",
      price: 85000,
      image: "/api/placeholder/200/200"
    },
    {
      id: 7,
      title: "Adidas Ultraboost 22",
      price: 95000,
      image: "/api/placeholder/200/200"
    },
    {
      id: 8,
      title: "Sony WH-1000XM4",
      price: 125000,
      image: "/api/placeholder/200/200"
    },
    {
      id: 9,
      title: "MacBook Air M2",
      price: 1200000,
      image: "/api/placeholder/200/200"
    },
    {
      id: 10,
      title: "Canon EOS Camera",
      price: 350000,
      image: "/api/placeholder/200/200"
    }
  ]

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
              products={flashSalesProducts.slice(0, 3)}
              seeAllLink="/category/kids"
            />
          </Section>

          <Section title="Power Boost Deals">
            <ProductCarousel 
              products={topSellersProducts.slice(0, 3)}
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
