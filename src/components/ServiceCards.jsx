import { Card, CardContent } from './ui/Card'
import Button from './ui/Button'
import { serviceCards } from '../data/data'

function ServiceCards() {
  return (
    <div className="space-y-4">
      {serviceCards.map((service, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="flex items-start gap-3 p-4">
            <span className="text-lg">{service.icon}</span>
            <div>
              <div className="font-medium text-sm">{service.title}</div>
              {service.subtitle && (
                <div className="text-xs text-gray-600">{service.subtitle}</div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      
      {/* Jumia Force Card */}
      <Card className="bg-orange-600 text-white">
        <CardContent className="p-4 text-center">
          <div className="font-bold text-lg mb-2">JUMIA FORCE</div>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
            JOIN NOW
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ServiceCards
