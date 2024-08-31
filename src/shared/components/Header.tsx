"use client"

import { cn } from "@/shared/lib/utils"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { CartButton } from "."
import { Button } from "../ui/button"
import { Container } from "./Container"
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
          <CartButton />
        </div>
      </Container>
    </header>
  )
}
