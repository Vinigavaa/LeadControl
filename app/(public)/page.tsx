import Hero from "./_components/hero";
import BackgroundPattern from "@/components/background-pattern";
import Header from "@/components/header";

export default function Home() {
  return (
    <BackgroundPattern>
      <Header />
      <Hero />
    </BackgroundPattern>
  );
}
