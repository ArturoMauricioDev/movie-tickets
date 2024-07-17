import { CarouselSize } from "@/components/Highlights";
import { ModeToggle } from "@/components/Toggler";
import { Button } from "@/components/ui/button";
import getImagePath from "@/lib/getImagePath";
import { getUpcomingMovies } from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  console.log(upcomingMovies);
  console.log(getImagePath(upcomingMovies[0].backdrop_path));
  return (
    <main className="">
      <ModeToggle />
      <h1>este es el home</h1>
      <CarouselSize />
      <Button>Enviar</Button>
    </main>
  );
}
