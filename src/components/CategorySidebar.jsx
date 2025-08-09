import { Link } from 'react-router-dom'
import { Card, CardContent } from './ui/Card'

function CategorySidebar() {
  const categories = [
    { name: "Appliances", link: "/category/appliances" },
    { name: "Phones & Tablets", link: "/category/phones" },
    { name: "Health & Beauty", link: "/category/health-beauty" },
    { name: "Home & Office", link: "/category/home-office" },
    { name: "Electronics", link: "/category/electronics" },
    { name: "Fashion", link: "/category/fashion" },
    { name: "Supermarket", link: "/category/supermarket" },
    { name: "Computing", link: "/category/computing" },
    { name: "Baby Products", link: "/category/baby" },
    { name: "Gaming", link: "/category/gaming" },
    { name: "Musical Instruments", link: "/category/music" },
    { name: "Other categories", link: "/category/other" }
  ]

  return (
    <Card className="w-64">
      <CardContent className="p-0">
        <ul className="divide-y">
          {categories.map((category) => (
            <CategoryItem 
              key={category.name}
              name={category.name}
              link={category.link}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function CategoryItem({ name, link }) {
  return (
    <li>
      <Link 
        to={link} 
        className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors text-sm"
      >
        <span>{name}</span>
      </Link>
    </li>
  )
}

export default CategorySidebar
