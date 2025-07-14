import { CarouselItems } from "@/components/carousel-items";



export default function Home() {
  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <section className="flex flex-col gap-4">
        <CarouselItems theme="Front-end" />
        <CarouselItems theme="Back-end" />
        <CarouselItems theme="Arquitetura de dados" />
        <CarouselItems theme="Engenharia de Software" />
        <CarouselItems theme="Modelagem de software" />
      </section>
    </main>
  );
}
