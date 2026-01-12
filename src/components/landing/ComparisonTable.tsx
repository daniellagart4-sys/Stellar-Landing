import { Check, X, Minus, Zap } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      name: "Onboarding Method",
      accesly: { value: "Social, Phone, Passkeys", subtext: "Creates wallet for users", status: "best" },
      walletKit: { value: "Requires Existing Wallet", status: "neutral" },
      generic: { value: "Social, Phone, Passkeys", subtext: "Creates wallet for users", status: "good" },
    },
    {
      name: "Integration Time",
      accesly: { value: "<10 minutes", subtext: "Plug-and-play SDK", status: "best" },
      walletKit: { value: "N/A", subtext: "Not a social login tool", status: "neutral" },
      generic: { value: "4+ hours", subtext: "Complex workarounds", status: "bad" },
    },
    {
      name: "Stellar-Native",
      accesly: { value: "Deep Integration", subtext: "Soroban, Gas Abstraction, Sponsored Tx", status: "best" },
      walletKit: { value: "Deep Integration", subtext: "Wallet interactions", status: "good" },
      generic: { value: "None", subtext: "Generic EVM features", status: "bad" },
    },
    {
      name: "Gasless Transactions",
      accesly: { value: "Native Support", subtext: "Sponsored reserves built-in", status: "best", isGasless: true },
      walletKit: { value: "Not supported", status: "bad" },
      generic: { value: "Limited/Expensive", status: "neutral" },
    },
    {
      name: "Cost Per Tx",
      accesly: { value: "~$0.00001", subtext: "Leverages Stellar's ultra-low fees", status: "best" },
      walletKit: { value: "~$0.00001", status: "good" },
      generic: { value: "$1-$50+", subtext: "Expensive EVM fees", status: "bad" },
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "best":
        return "bg-accent/10 text-accent";
      case "good":
        return "bg-primary/10 text-primary";
      case "neutral":
        return "bg-muted text-muted-foreground";
      case "bad":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "best":
        return <Check className="w-4 h-4" />;
      case "good":
        return <Check className="w-4 h-4" />;
      case "neutral":
        return <Minus className="w-4 h-4" />;
      case "bad":
        return <X className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Competitive <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Accesly compares to other solutions in the market.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
            {/* Header */}
            <div className="grid grid-cols-4 bg-muted/50 border-b border-border">
              <div className="p-6 font-semibold text-muted-foreground">Feature</div>
              <div className="p-6 text-center">
                <div className="font-display text-lg font-bold text-gradient">Accesly</div>
                <div className="text-xs text-muted-foreground">Account Abstraction</div>
              </div>
              <div className="p-6 text-center">
                <div className="font-display text-lg font-bold">Stellar Wallet Kit</div>
                <div className="text-xs text-muted-foreground">Wallet Management</div>
              </div>
              <div className="p-6 text-center">
                <div className="font-display text-lg font-bold">Generic Solutions</div>
                <div className="text-xs text-muted-foreground">(Privy, etc.)</div>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 ${index !== features.length - 1 ? "border-b border-border" : ""}`}
              >
              <div className="p-6 font-medium flex items-center">
                {feature.name}
                {feature.accesly.isGasless && (
                  <Zap className="w-4 h-4 text-accent ml-2" />
                )}
              </div>
                
                {/* Accesly */}
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(feature.accesly.status)}`}>
                    {getStatusIcon(feature.accesly.status)}
                    {feature.accesly.isGasless && <Zap className="w-3 h-3" />}
                    {feature.accesly.value}
                  </div>
                  {feature.accesly.subtext && (
                    <div className="text-xs text-muted-foreground mt-1">{feature.accesly.subtext}</div>
                  )}
                </div>

                {/* Wallet Kit */}
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(feature.walletKit.status)}`}>
                    {getStatusIcon(feature.walletKit.status)}
                    {feature.walletKit.value}
                  </div>
                  {feature.walletKit.subtext && (
                    <div className="text-xs text-muted-foreground mt-1">{feature.walletKit.subtext}</div>
                  )}
                </div>

                {/* Generic */}
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(feature.generic.status)}`}>
                    {getStatusIcon(feature.generic.status)}
                    {feature.generic.value}
                  </div>
                  {feature.generic.subtext && (
                    <div className="text-xs text-muted-foreground mt-1">{feature.generic.subtext}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                {feature.name}
                {feature.accesly.isGasless && <Zap className="w-4 h-4 text-accent" />}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Accesly</span>
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(feature.accesly.status)}`}>
                    {getStatusIcon(feature.accesly.status)}
                    {feature.accesly.value}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Wallet Kit</span>
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(feature.walletKit.status)}`}>
                    {getStatusIcon(feature.walletKit.status)}
                    {feature.walletKit.value}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Generic</span>
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(feature.generic.status)}`}>
                    {getStatusIcon(feature.generic.status)}
                    {feature.generic.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
