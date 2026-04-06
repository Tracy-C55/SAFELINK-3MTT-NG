import { ShieldCheck, ShieldAlert, AlertTriangle, XCircle } from "lucide-react";
import type { LinkResult } from "@/utils/validator";

interface ResultCardProps {
  status: LinkResult;
  url: string;
}

const config = {
  safe: {
    icon: ShieldCheck,
    title: "✅ Safe Link",
    description: "This website is recognized and trusted. You can proceed safely.",
    helper: null,
    bgClass: "gradient-safe",
    borderClass: "border-safe/30",
    iconClass: "text-safe",
    titleClass: "text-safe",
    iconBg: "bg-safe/10",
  },
  unknown: {
    icon: AlertTriangle,
    title: "⚠️ Unknown Link — Proceed with caution",
    description: "We couldn't verify this link. Avoid entering personal information.",
    helper: null,
    bgClass: "gradient-warning",
    borderClass: "border-warning/30",
    iconClass: "text-warning",
    titleClass: "text-yellow-600 dark:text-yellow-400",
    iconBg: "bg-warning/10",
  },
  danger: {
    icon: ShieldAlert,
    title: "❌ Dangerous Link",
    description: "This link matches known phishing or scam patterns. Do NOT click or enter any information.",
    helper: "Why is this dangerous? This URL mimics a legitimate service using look-alike characters or suspicious domain names — a common phishing technique.",
    bgClass: "gradient-danger",
    borderClass: "border-danger/30",
    iconClass: "text-danger",
    titleClass: "text-danger",
    iconBg: "bg-danger/10",
  },
  invalid: {
    icon: XCircle,
    title: "❌ Invalid URL Format",
    description: "The text you entered is not a valid URL. Please check the format and try again.",
    helper: null,
    bgClass: "gradient-danger",
    borderClass: "border-danger/30",
    iconClass: "text-danger",
    titleClass: "text-danger",
    iconBg: "bg-danger/10",
  },
};

const ResultCard = ({ status, url }: ResultCardProps) => {
  const c = config[status];
  const Icon = c.icon;

  return (
    <div className={`animate-scale-in rounded-3xl border ${c.borderClass} ${c.bgClass} p-6 md:p-8`}>
      <div className="flex flex-col items-center gap-4 text-center">
        <div className={`rounded-2xl p-4 ${c.iconBg}`}>
          <Icon className={`h-10 w-10 ${c.iconClass}`} />
        </div>
        <h3 className={`text-xl font-bold ${c.titleClass}`}>{c.title}</h3>
        <p className="text-sm text-muted-foreground">{c.description}</p>
        {c.helper && (
          <p className="text-xs text-muted-foreground/80 italic max-w-md">{c.helper}</p>
        )}
        <div className="mt-2 rounded-xl bg-card/60 px-4 py-2">
          <code className="text-xs text-muted-foreground break-all">{url}</code>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
