import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Gasless Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
            <span className="gasless-badge">
              <Zap className="w-3 h-3 mr-1" />
              Zero Gas Fees
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              Built on Stellar
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Onboarding Users to Stellar with{" "}
            <span className="text-gradient">Frictionless Social Login</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            The next million users won't use a seed phrase
            <br className="hidden sm:block" />
            they'll log in with Google
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Accesly enables instant, invisible wallet creation through familiar social accounts. 
            Users click "Continue with Google" and get a secure, non-custodial Stellar wallet ready 
            to transact in seconds, <strong className="text-foreground">with zero gas fees</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://stellarsdk.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="telegram" size="lg" asChild>
              <a href="https://t.me/+btpRC-Bo02QxYWYx" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
          </div>

          {/* Social Login Animation Preview removed */}

          {/* Stats section removed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
