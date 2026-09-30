import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import NextGen from "@/components/sections/NextGen";
import CoreServices from "@/components/sections/CoreServices";
import Projects from "@/components/sections/Projects";
import Enterprise from "@/components/sections/Enterprise";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <NextGen />
        <CoreServices />
        <Projects />
        <Enterprise />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
