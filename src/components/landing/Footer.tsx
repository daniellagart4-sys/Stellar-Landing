import { ArrowRight, Zap, Github, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import acceslyLogo from "@/assets/accesly-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="gasless-badge mb-6">
            <Zap className="w-3 h-3 mr-1" />
            Ready to Go Gasless?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            No Seed Phrases. No Gas Fees.{" "}
            <span className="text-accent">No Friction.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Solidify Stellar as the de facto standard for real-world applications by providing 
            the critical infrastructure for seamless, large-scale user onboarding, with true 
            Web2-like gasless experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gasless" size="xl" asChild>
              <a href="https://stellarsdk.vercel.app/" target="_blank" rel="noopener noreferrer">
                Start Building Gasless Apps Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://t.me/+btpRC-Bo02QxYWYx" target="_blank" rel="noopener noreferrer">
                Talk to Our Team
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={acceslyLogo} alt="Accesly" className="h-8 w-auto brightness-0 invert" />
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <a href="https://stellarsdk.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Demo
              </a>
              <a href="https://github.com/Hoblayerta/Stellar-Account-Abstraction-SDK" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Documentation
              </a>
              <a href="#pricing" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
              <a href="#team" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Team
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Hoblayerta/Stellar-Account-Abstraction-SDK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/+btpRC-Bo02QxYWYx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Vialvalv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Accesly. Built on Stellar. Making Web3 accessible to everyone.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
