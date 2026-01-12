import { Zap, Fuel, Wallet, CreditCard, Repeat, MousePointer2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GaslessSection = () => {
  const traditionalSteps = [
    { icon: Wallet, text: "Create a wallet", status: "bad" },
    { icon: CreditCard, text: "Buy cryptocurrency", status: "bad" },
    { icon: Repeat, text: "Transfer to wallet", status: "bad" },
    { icon: MousePointer2, text: "Finally use the app", status: "bad" },
  ];

  const acceslySteps = [
    { icon: MousePointer2, text: 'Click "Continue with Google"', status: "good" },
    { icon: Zap, text: "Start using the app", status: "good" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="relative">
              <Fuel className="w-8 h-8 text-muted-foreground" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-0.5 bg-destructive rotate-45 rounded-full" />
              </div>
            </div>
            <Zap className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            True <span className="text-gradient">Gasless</span> Transactions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The biggest onboarding barrier eliminated. Users start using your app instantly.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Traditional */}
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/5 rounded-2xl" />
            <div className="relative bg-card rounded-2xl p-8 border border-destructive/20 h-full shadow-card">
              <h3 className="font-display text-xl font-bold mb-6 text-muted-foreground">
                Traditional Blockchain Apps
              </h3>
              <div className="space-y-4">
                {traditionalSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground line-through">{step.text}</span>
                    <span className="text-destructive text-xl">❌</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                Multiple friction points = high abandonment
              </div>
            </div>
          </div>

          {/* Accesly */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 rounded-2xl" />
            <div className="relative bg-card rounded-2xl p-8 border border-accent/20 h-full shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="font-display text-xl font-bold">With Accesly</h3>
                <span className="gasless-badge text-[10px]">GASLESS</span>
              </div>
              <div className="space-y-4">
                {acceslySteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium">{step.text}</span>
                    <span className="text-accent text-xl">✅</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm font-medium text-accent">
                Zero friction = maximum conversion
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gasless" size="lg" asChild>
            <a href="https://stellarsdk.vercel.app/" target="_blank" rel="noopener noreferrer">
              Experience Gasless Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GaslessSection;
