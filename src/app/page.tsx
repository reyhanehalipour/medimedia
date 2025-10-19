
import HeroSection from "@/components/sections/HeroSection";

import BestInStore from "@/components/sections/BestInStore";

import AboutWatch from "@/components/sections/AboutWatch";
import ProductGallery from "@/components/sections/ProductGallery";
import Categories from "@/components/sections/Categories";
import RecentBlog from "@/components/sections/RecentBlog";
import Newsletter from "@/components/sections/Newsletter";
import BrandExperience from "@/components/sections/BrandExperience";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Container from "@/components/Layout/Container";
import PromoBanners from "@/components/sections/PromoBanners";
import MostWanted from "@/components/sections/MostWanted";
import Header from "@/components/Layout/Header";

export default function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <Container>
          <HeroSection />
          <PromoBanners />
          <BestInStore />
          <MostWanted />
          <AboutWatch />
          <ProductGallery />
          <Categories />
          <RecentBlog />
          <Newsletter />
          <BrandExperience />
        </Container>
      </main>
      <Footer />
    </>
  );
}

