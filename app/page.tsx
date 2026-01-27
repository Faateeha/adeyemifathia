import Hero from "./components/home/Hero";
import FeaturedWork from "./components/home/FeaturedWork";
import Skills from "./components/home/Skills";
import AboutPreview from "./components/home/AboutPreview";
import CTA from "./components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Skills />
      <AboutPreview />
      <CTA />
    </>
  );
}
