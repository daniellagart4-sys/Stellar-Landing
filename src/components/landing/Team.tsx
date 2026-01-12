import { Twitter, Linkedin, Github } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Vianey Alejandra Álvarez",
      role: "Business, Strategy & Ecosystem",
      twitter: "@Vialvalv",
      twitterUrl: "https://twitter.com/Vialvalv",
    },
    {
      name: "Daniel Bustamante",
      role: "Security & Frontend Engineering",
      twitter: "@HackBalam",
      twitterUrl: "https://twitter.com/HackBalam",
    },
    {
      name: "José Román Andrade",
      role: "Backend & Web3 Engineering",
      twitter: "@0xscarf",
      twitterUrl: "https://twitter.com/0xscarf",
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future of blockchain onboarding on Stellar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

              <a
                href={member.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                {member.twitter}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
