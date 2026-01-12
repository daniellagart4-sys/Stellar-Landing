import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      subtitle: "For Hobbyists",
      price: "$0",
      period: "forever",
      features: [
        "Up to 1,000 MAUs",
        "Core Social & Passkey Auth",
        "Gasless transactions included",
        "Testnet Access",
        "Community Support",
      ],
      cta: "Get Started",
      variant: "heroOutline" as const,
      popular: false,
    },
    {
      name: "Scale",
      subtitle: "For Growing Apps",
      price: "$0.05",
      period: "per MAU",
      features: [
        "Unlimited MAUs",
        "Mainnet Support",
        "Advanced gasless controls & analytics",
        "Advanced Analytics",
        "Priority Email Support",
      ],
      cta: "Start Building",
      variant: "hero" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "For Large Teams",
      price: "Custom",
      period: "contact us",
      features: [
        "Volume-Based Pricing",
        "White-Labeling & Custom Integrations",
        "Custom gas sponsorship rules",
        "Dedicated gas reserve management",
        "SLA Guarantees & SOC2",
        "Dedicated Support",
      ],
      cta: "Talk to Sales",
      variant: "dark" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="gasless-badge mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Gasless Included
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. Gasless transactions included in all plans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-2xl font-bold ${plan.popular ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? "" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {" "}{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-primary-foreground/20" : "bg-accent/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-accent"}`} />
                    </div>
                    <span className={`text-sm ${
                      feature.toLowerCase().includes("gasless") 
                        ? "font-semibold" 
                        : plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : plan.variant}
                size="lg"
                className={`w-full ${plan.popular ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}
                asChild
              >
                <a href="https://t.me/+btpRC-Bo02QxYWYx" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
