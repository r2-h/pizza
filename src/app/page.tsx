import { Container, Title, TopBar } from "@/shared/components"

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <div className="flex h-[2000px] items-center justify-center">
        <div className="size-20 bg-red-700"></div>
      </div>
    </>
  )
}
