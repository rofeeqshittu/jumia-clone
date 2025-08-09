import { Link } from 'react-router-dom'
import { Card, CardContent } from './ui/Card'
import { categories } from '../data/data'

function CategorySidebar() {
  return (
    <Card className="w-64">
      <CardContent className="p-0">
        <ul className="divide-y">
          {categories.map((category) => (
            <CategoryItem 
              key={category.label}
              name={category.label}
              icon={category.icon}
              link={`/category/${category.label.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function CategoryItem({ name, icon, link }) {
  return (
    <li>
      <Link 
        to={link} 
        className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors text-sm"
      >
        <span className="text-lg">{icon}</span>
        <span>{name}</span>
      </Link>
    </li>
  )
}

export default CategorySidebar
