import { ShoppingBag } from 'lucide-react'

interface Order {
  id: string
  date: string
  amount: string
}

interface RecentOrdersProps {
  title: string
  orders: Order[]
}

export default function RecentOrders({ title, orders }: RecentOrdersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg mt-1">
              <ShoppingBag className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Заказ #{order.id}</p>
              <p className="text-sm text-gray-600">
                {order.date} • {order.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
