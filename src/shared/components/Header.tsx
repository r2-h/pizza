"use client"

import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { Container } from "./Container"
import { ArrowRight, ShoppingCart, User } from "lucide-react"
import { Button } from "../ui/button"
import { SearchInput } from "./SearchInput"

interface Props {
  hasSearch?: boolean
  hasCart?: boolean
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm leading-3 text-gray-400">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        <SearchInput />

        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size={16} />
            Войти
          </Button>

          <Button className="group relative">
            <b>520 ₽</b>
            <span className="mx-3 h-full w-[1px] bg-white/30" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="relative h-4 w-4" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Button>
        </div>
      </Container>
    </header>
  )
}
