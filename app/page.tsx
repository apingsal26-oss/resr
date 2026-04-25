import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Features } from "@/components/Features";
import { StickyStory } from "@/components/StickyStory";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <LogoMarquee />
      <Features />
      <StickyStory />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
