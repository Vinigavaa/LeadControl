import Hero from "./_components/hero";
import BackgroundPattern from "@/components/background-pattern";
import Header from "@/components/Header";

export default function Home() {
  return (
    <BackgroundPattern>
      <Header />
      <Hero />
    </BackgroundPattern>
  );
}
