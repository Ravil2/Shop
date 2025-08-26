import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { ArrowDownWideNarrow, Calendar, Flame } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

interface Category {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: string[]
  creationAt: string
  updatedAt: string
}

interface IProdCategory {
  products: Product[]
  setSelectedCategory: (category: string | null) => void
  setSortBy: (sort: string) => void
}
export function CategorySidebar({
  products,
  setSelectedCategory,
  setSortBy,
}: IProdCategory) {
  const [selected, setSelected] = useState<string | null>(null)
  const categories = Array.from(
    new Map(products.map((p) => [p.category.id, p.category])).values(),
  )

  return (
    <Sidebar className="w-64 border-r bg-gray-50 py-15">
      <SidebarContent className="p-4 space-y-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 text-sm font-semibold mb-2">
            Сортировать по
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="flex items-center gap-2 rounded-lg border hover:bg-gray-100 transition"
                  onClick={() => setSortBy('price')}
                >
                  <ArrowDownWideNarrow className="w-4 h-4 text-gray-500" />
                  Цена
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="flex items-center gap-2 rounded-lg border hover:bg-gray-100 transition"
                  onClick={() => setSortBy('popularity')}
                >
                  <Flame className="w-4 h-4 text-gray-500" />
                  Популярность
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="flex items-center gap-2 rounded-lg border hover:bg-gray-100 transition"
                  onClick={() => setSortBy('date')}
                >
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Дата
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 text-sm font-semibold mb-2">
            Категории
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  <Checkbox
                    checked={selected === cat.slug}
                    onCheckedChange={(checked) => {
                      const newValue = checked ? cat.slug : null
                      setSelected(newValue)
                      setSelectedCategory(newValue)
                    }}
                  />
                  <span className="text-gray-800 text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
