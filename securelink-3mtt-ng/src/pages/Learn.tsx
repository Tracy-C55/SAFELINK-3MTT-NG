import {
  Link2Off,
  UserCheck,
  AlertTriangle,
  Eye,
  MessageCircleWarning,
  ShieldAlert,
  Globe,
  CreditCard,
  Gift,
  Phone,
} from "lucide-react";
import LearningCard from "@/components/LearningCard";

const tips = [
  {
    icon: Link2Off,
    title: "Check URLs Carefully",
    description: "Scammers use look-alike domains (e.g. g00gle.com). Always verify the spelling and look for HTTPS.",
  },
  {
    icon: UserCheck,
    title: "Verify Sender Identity",
    description: "Before clicking any link, confirm who sent it. Scammers impersonate banks, friends, and companies.",
  },
  {
    icon: AlertTriangle,
    title: "Beware of Urgency",
    description: '"Act now or lose your account!" — Legitimate companies don\'t pressure you with urgent threats.',
  },
  {
    icon: Eye,
    title: "Look for Red Flags",
    description: "Poor grammar, strange sender addresses, and requests for personal info are classic scam indicators.",
  },
  {
    icon: MessageCircleWarning,
    title: "Don't Share OTPs",
    description: "No bank or service will ever ask for your OTP or PIN via message. Never share these with anyone.",
  },
  {
    icon: ShieldAlert,
    title: "Avoid Unknown Links",
    description: "If you didn't expect a message with a link, don't click it. Use ShieldLink NG to verify first.",
  },
];

const scams = [
  {
    icon: CreditCard,
    title: "Fake Bank Alerts",
    description: "Messages claiming your account is locked and asking you to click a link to 'verify' your details.",
  },
  {
    icon: Gift,
    title: "Giveaway Scams",
    description: "Fake promotions promising free airtime, money, or prizes if you click a link and enter your info.",
  },
  {
    icon: Globe,
    title: "Phishing Websites",
    description: "Fake websites that look identical to real ones (banks, social media) designed to steal your login.",
  },
  {
    icon: Phone,
    title: "WhatsApp/SMS Scams",
    description: "Messages from unknown numbers with suspicious links claiming you won a prize or need to update info.",
  },
];

const Learn = () => {
  return (
    <div className="min-h-screen">
      <section className="container py-16 text-center">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Learn How to <span className="text-primary">Stay Safe Online</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Simple, practical tips to protect yourself from online scams and phishing attacks.
        </p>
      </section>

      <section className="container pb-12">
        <h2 className="mb-6 text-xl font-bold text-foreground">Safety Tips</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <LearningCard key={tip.title} {...tip} />
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <h2 className="mb-6 text-xl font-bold text-foreground">Common Scams in Nigeria</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {scams.map((scam) => (
            <LearningCard key={scam.title} {...scam} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Learn;
