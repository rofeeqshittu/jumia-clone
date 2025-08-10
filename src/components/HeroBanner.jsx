import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { heroSlides } from '../data/data'

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg p-8 text-white mb-6 relative overflow-hidden">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">{currentSlideData.title.split(' ')[0]}</h2>
          <h2 className="text-3xl font-bold mb-2">{currentSlideData.title.split(' ').slice(1, -1).join(' ')}</h2>
          <h2 className="text-3xl font-bold mb-4">{currentSlideData.title.split(' ').slice(-1)[0]}</h2>
          <div className="bg-orange-600 px-4 py-2 rounded text-2xl font-bold inline-block">
            30% OFF
          </div>
          <p className="mt-2 text-sm">T&Cs Apply.</p>
          <Button 
            variant="secondary"
            className="mt-4 bg-white text-orange-600 hover:bg-gray-100"
          >
            SHOP NOW →
          </Button>
        </div>
        <div className="flex space-x-4">
          <div className="w-24 h-32 bg-blue-300 rounded-lg flex items-center justify-center">
            <img src="/api/placeholder/80/120" alt="Product" className="rounded" />
          </div>
          <div className="w-24 h-32 bg-yellow-300 rounded-lg flex items-center justify-center">
            <img src="/api/placeholder/80/120" alt="Product" className="rounded" />
          </div>
          <div className="w-24 h-32 bg-pink-300 rounded-lg flex items-center justify-center">
            <img src="/api/placeholder/80/120" alt="Product" className="rounded" />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroBanner
