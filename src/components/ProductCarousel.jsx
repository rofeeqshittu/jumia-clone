import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductCarousel({ title, products, showCountdown = false, seeAllLink }) {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {seeAllLink && (
          <Link 
            to={seeAllLink} 
            className="text-sm text-orange-500 hover:underline font-medium"
          >
            See All →
          </Link>
        )}
      </div>

      {showCountdown && (
        <div className="mb-4 rounded bg-red-600 text-white px-3 py-2 text-sm flex items-center gap-2">
          <span className="font-bold">⚡ Flash Sales</span>
          <span>•</span>
          <span>Time Left: 09h : 49m : 43s</span>
        </div>
      )}

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 hidden md:block"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button
          onClick={scrollRight}
          className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 hidden md:block"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCarousel
