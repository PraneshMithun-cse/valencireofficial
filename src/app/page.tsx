import Header from "@/components/ck/Header";
import HeroSection from "@/components/ck/HeroSection";
import SwimShopSection from "@/components/ck/SwimShopSection";
import UnderwearSection from "@/components/ck/UnderwearSection";
import HeritageSection from "@/components/ck/HeritageSection";
import CollectionSection from "@/components/ck/CollectionSection";
import Footer from "@/components/ck/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div data-nav-theme="dark"><HeroSection /></div>
        <div data-nav-theme="dark"><SwimShopSection /></div>
        <div data-nav-theme="dark"><UnderwearSection /></div>
        <div data-nav-theme="dark"><HeritageSection /></div>
        <div data-nav-theme="dark"><CollectionSection /></div>
      </main>
      <div data-nav-theme="dark"><Footer /></div>
    </>
  );
}
