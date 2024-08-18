"use client"
import { Product } from "@prisma/client"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { useClickAway, useDebounce } from "react-use"
import { ApiClient } from "../../../services/api-client"
import { cn } from "../lib/utils"

type Props = {}

export const SearchInput = ({}: Props) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [focused, setFocused] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => {
    setFocused(false)
  })

  useDebounce(
    async () => {
      try {
        ApiClient.products
          .searchProducts(searchQuery)
          .then((res) => setProducts(res))
      } catch (e) {
        console.error(e)
      }
    },
    200,
    [searchQuery],
  )

  return (
    <>
      {focused && <div className="fixed inset-0 z-30 bg-black/50" />}
      <div
        className="relative z-30 mx-2 flex h-11 flex-1 justify-between rounded-2xl"
        ref={ref}
      >
        <Search className="absolute left-3 top-1/2 h-5 -translate-y-1/2 text-gray-400" />
        <input
          className="w-full rounded-2xl bg-gray-50 pl-11 outline-none"
          type="text"
          placeholder="Найти пиццу..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            "invisible absolute top-14 z-30 w-full rounded-xl bg-white py-2 opacity-0 shadow-md transition-all duration-200",
            focused && "visible top-12 opacity-100",
          )}
        >
          {products &&
            products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                className="flex items-center gap-x-3 px-3 py-2 hover:bg-primary/10"
                key={product.id}
                onClick={() => setFocused(false)}
              >
                <Image
                  alt="Pizza"
                  width={32}
                  height={32}
                  src={product.imageUrl}
                />
                <span className="">{product.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}
