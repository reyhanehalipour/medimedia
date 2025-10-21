import HeroSection from "@/components/sections/HeroSection";
import BestInStore from "@/components/sections/BestInStore";
import AboutWatch from "@/components/sections/AboutWatch";
import ProductGallery from "@/components/sections/ProductGallery";
import Categories from "@/components/sections/Categories";
import RecentBlog from "@/components/sections/RecentBlog";
import BrandExperience from "@/components/sections/BrandExperience";
import Footer from "@/components/Layout/Footer";
import PromoBanners from "@/components/sections/PromoBanners";
import MostWanted from "@/components/sections/MostWanted";
import Header from "@/components/Layout/Header";
import Newslcller from "@/components/sections/Newsletter";
import SectionBox from "@/components/sections/SectionBox";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-2 items-center justify-center">
        <HeroSection />
        <PromoBanners />
        <BestInStore />
        <MostWanted />
        <AboutWatch />
        <ProductGallery />
        <SectionBox />
        <Categories />
        <RecentBlog />
        <Newslcller />
        <BrandExperience />
      </main>
      <Footer />
    </>
  );
}
