import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { AdditionalServices } from "@/components/sections/AdditionalServices";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Pricing />
      <AdditionalServices />
      <PortfolioPreview />
      <CTA />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default Index;
