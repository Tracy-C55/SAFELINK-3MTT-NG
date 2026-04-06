import { ShieldCheck, Lock, Heart, Lock as LockIcon } from "lucide-react";
import LinkChecker from "@/components/LinkChecker";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container py-16 md:py-24 text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <ShieldCheck className="h-4 w-4" />
            Your safety matters
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            🔐 <span className="text-primary">SECURELINK</span> 3MTT NG
          </h1>
          <p className="text-lg text-muted-foreground">
            Check if a link is safe before clicking. Protect yourself from phishing, scams, and malicious websites.
          </p>
        </div>
      </section>

      {/* Checker */}
      <section className="container pb-16">
        <LinkChecker />
      </section>

      {/* Trust bar */}
      <section className="border-t border-border bg-card">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div className="space-y-2">
              <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Instant Checks</h3>
              <p className="text-sm text-muted-foreground">Get results in seconds</p>
            </div>
            <div className="space-y-2">
              <Lock className="mx-auto h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">100% Private</h3>
              <p className="text-sm text-muted-foreground">No data stored or shared</p>
            </div>
            <div className="space-y-2">
              <Heart className="mx-auto h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Built for Nigeria</h3>
              <p className="text-sm text-muted-foreground">Tackling local scam patterns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
