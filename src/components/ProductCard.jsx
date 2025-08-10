import { Link } from 'react-router-dom'
import { Card, CardContent } from './ui/Card'
import { formatCurrencyNGN } from '../data/data'

function ProductCard({ 
  id = "1",
  title = "Sample Product", 
  price = 10000, 
  oldPrice, 
  discount, 
  image = "https://picsum.photos/200/200?random=999",
  itemsLeft 
}) {
  const progressPercentage = typeof itemsLeft === "number" ? 
    Math.max(0, Math.min(100, (itemsLeft / 100) * 100)) : 0

  return (
    <Card className="w-[200px] shrink-0 hover:shadow-md transition-shadow">
      <Link to={`/product/${id}`} className="block">
        <div className="relative">
          {typeof discount === "number" && (
            <div className="absolute left-2 top-2 rounded bg-orange-500 px-1.5 py-0.5 text-xs font-bold text-white z-10">
              -{discount}%
            </div>
          )}
          <img
            src={image}
            alt={title}
            className="h-[160px] w-full object-cover rounded-t"
          />
        </div>
        <CardContent className="p-3">
          <div className="line-clamp-2 text-sm text-gray-800 mb-2 h-10">
            {title}
          </div>
          <div className="font-bold text-gray-900">
            {formatCurrencyNGN(price)}
          </div>
          {oldPrice && (
            <div className="text-xs text-gray-500 line-through">
              {formatCurrencyNGN(oldPrice)}
            </div>
          )}
          {typeof itemsLeft === "number" && (
            <div className="mt-2">
              <div className="h-1.5 w-full rounded bg-orange-100">
                <div 
                  className="h-1.5 rounded bg-orange-500" 
                  style={{ width: `${progressPercentage}%` }} 
                />
              </div>
              <div className="mt-1 text-xs text-gray-600">
                {itemsLeft} items left
              </div>
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}

export default ProductCard
