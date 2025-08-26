import { Headphones, Shield, Truck } from 'lucide-react'

export default function Advantages() {
  return (
    <section className="bg-black rounded-xl shadow-sm p-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-blue-400 text-lg mb-2">Бесплатная доставка</h3>
          <p className="text-white">При заказе от 5000 рублей</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-green-400 text-lg mb-2">Гарантия качества</h3>
          <p className="text-white">Возврат в течение 14 дней</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Headphones className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="font-semibold text-purple-400 text-lg mb-2">Поддержка 24/7</h3>
          <p className="text-white">Всегда готовы помочь</p>
        </div>
      </div>
    </section>
  )
}
