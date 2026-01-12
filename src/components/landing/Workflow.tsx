import { MousePointer2, Key, Wallet, Zap } from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      icon: MousePointer2,
      number: "01",
      title: 'User Clicks "Continue with Google"',
      description: "Familiar Web2 login flow within your application",
      color: "primary",
    },
    {
      icon: Key,
      number: "02",
      title: "Accesly SDK Captures Auth Token",
      description: "Lightweight SDK securely handles OAuth token",
      color: "primary",
    },
    {
      icon: Wallet,
      number: "03",
      title: "Secure Stellar Keypair is Generated",
      description: "Deterministic generation from token. Same social account = same Stellar address, always",
      color: "primary",
    },
    {
      icon: Zap,
      number: "04",
      title: "Account Activated with Gasless Capability",
      description: "Soroban smart contracts manage the account. Users transact immediately without holding XLM",
      color: "primary",
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-gradient-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold bg-primary text-primary-foreground mb-4">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Four Steps to Frictionless Onboarding
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            From click to transaction in seconds—no seed phrases, no wallet funding required.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-accent to-primary/50 hidden lg:block" style={{ transform: "translateY(-50%)" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full text-xs font-bold bg-gradient-primary text-primary-foreground">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mt-2 bg-primary-foreground/10">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {step.description}
                  </p>

                </div>

                {/* Arrow for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-3 h-3 border-t-2 border-r-2 border-accent transform rotate-45" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
