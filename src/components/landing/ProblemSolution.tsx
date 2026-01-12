import { X, Check, Users, Code2 } from "lucide-react";

const ProblemSolution = () => {
  const endUserProblems = [
    "Must manage private keys & seed phrases",
    "Need crypto to pay for gas fees (chicken-and-egg)",
    "Resulting in <15% conversion rates & low retention",
  ];

  const endUserSolutions = [
    "Log in with social account, phone, or passkey",
    "Get a secure, non-custodial wallet without complexity",
    "Start transacting immediately with gasless transactions",
  ];

  const developerProblems = [
    "Building Web2-like experience is a nightmare",
    "Integration takes 4+ hours of complex, custom work",
    "Users abandon onboarding when asked to fund wallets",
  ];

  const developerSolutions = [
    "Integrate social login in under 10 minutes",
    "Focus on your product, not complex wallet management",
    "Offer true Web2 UX with sponsored transactions",
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Onboarding Problem,{" "}
            <span className="text-gradient">Solved</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional blockchain onboarding creates friction. Accesly eliminates it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* End Users Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-20" />
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-card h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold">For End Users</h3>
              </div>

              {/* Problems */}
              <div className="mb-8">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Without Accesly
                </div>
                <div className="space-y-3">
                  {endUserProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                      <span>{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  With Accesly
                </div>
                <div className="space-y-3">
                  {endUserSolutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className={index === 2 ? "font-semibold text-foreground" : "text-foreground"}>
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Developers Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-gasless rounded-3xl blur opacity-20" />
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-card h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-gasless flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold">For Developers</h3>
              </div>

              {/* Problems */}
              <div className="mb-8">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Without Accesly
                </div>
                <div className="space-y-3">
                  {developerProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                      <span>{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  With Accesly
                </div>
                <div className="space-y-3">
                  {developerSolutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className={index === 2 ? "font-semibold text-foreground" : "text-foreground"}>
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
