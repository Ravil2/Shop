import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: 'Новая коллекция товаров',
    subtitle: 'Самые популярные товары только у нас',
    image: 'https://i.imgur.com/0qQBkxX.jpg',
    buttonText: 'Смотреть сейчас',
  },
  {
    title: 'Бесплатная доставка',
    subtitle: 'При заказе от 50$ долларов',
    image: 'https://i.imgur.com/J6MinJn.jpeg',
    buttonText: 'Подробнее',
  },
  {
    title: 'Распродажа товаров',
    subtitle: 'Только до конца месяца',
    image: 'https://i.imgur.com/IvxMPFr.jpeg',
    buttonText: 'Купить со скидкой',
  },
]

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl mb-12">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ${
            index === currentSlide
              ? 'translate-x-0'
              : index < currentSlide
              ? '-translate-x-full'
              : 'translate-x-full'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center flex items-center md:px-10 px-0"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 "></div>
            <div className="relative z-10 text-white max-w-2xl ml-10 sm:ml-16">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-6">{slide.subtitle}</p>
              <Link to='/categories' className="bg-blue-600 hover:bg-blue-700 text-white px-8 cursor-pointer py-3 rounded-lg font-semibold transition-colors">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/50 bg-opacity-80 p-1 sm:p-2 rounded-full hover:bg-opacity-100 transition-all"
      >
        <ChevronLeft className="w-6 h-6 " />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/50 bg-opacity-80 p-1 sm:p-2 rounded-full hover:bg-opacity-100 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-black/20' : 'bg-white '
            }`}
          />
        ))}
      </div>
    </div>
  )
}
