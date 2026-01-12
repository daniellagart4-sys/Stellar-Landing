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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
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

          {/* Social Login Animation Preview */}
          <div className="relative max-w-md mx-auto animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              <div className="text-sm font-medium text-muted-foreground mb-4">Sign in to continue</div>
              <button className="w-full flex items-center justify-center gap-3 bg-background border-2 border-border rounded-xl px-6 py-4 hover:border-primary/50 hover:shadow-md transition-all group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">Continue with Google</span>
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" />
                Non-custodial & Secure
                <span className="mx-2">•</span>
                <Zap className="w-3 h-3 text-accent" />
                <span className="text-accent font-medium">Gasless</span>
              </div>
            </div>
            
            {/* Floating indicators */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse-glow">
              0 GAS FEES
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">~$0.00001</div>
              <div className="text-sm text-muted-foreground">Per Transaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">&lt;10 min</div>
              <div className="text-sm text-muted-foreground">Integration Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Non-Custodial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
