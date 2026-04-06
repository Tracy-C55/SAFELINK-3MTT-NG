import type { LucideIcon } from "lucide-react";

interface LearningCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const LearningCard = ({ icon: Icon, title, description }: LearningCardProps) => {
  return (
    <div className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default LearningCard;
