import { ModeToggle } from "@/components/Toggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <ModeToggle />
      <h1>este es el home</h1>
      <Button>Enviar</Button>
    </main>
  );
}
