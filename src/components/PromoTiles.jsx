import { Card, CardContent } from './ui/Card'
import { promoTiles } from '../data/data'

function PromoTiles() {
  return (
    <div className="mt-4 overflow-x-auto mb-6">
      <div className="flex gap-3 min-w-max">
        {promoTiles.map((promo) => (
          <Card key={promo.title} className="w-[140px] shrink-0 hover:shadow bg-white">
            <CardContent className="p-3 text-center">
              <img
                src={promo.img}
                alt={promo.title}
                className="h-16 w-16 mx-auto rounded object-cover mb-2"
              />
              <div className="text-xs font-medium">{promo.title}</div>
              {promo.subtitle && (
                <div className="text-xs text-gray-500 mt-1">{promo.subtitle}</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PromoTiles
