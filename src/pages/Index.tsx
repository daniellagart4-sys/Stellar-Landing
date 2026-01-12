import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Workflow from "@/components/landing/Workflow";
import GaslessSection from "@/components/landing/GaslessSection";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Pricing from "@/components/landing/Pricing";
import Team from "@/components/landing/Team";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSolution />
      <Workflow />
      <GaslessSection />
      <ComparisonTable />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
