import { useState } from "react";
import { Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ReportScam = () => {
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      toast.error("Please describe the scam");
      return;
    }
    toast.success("Thank you! Your report has been submitted.");
    setDescription("");
    setFileName("");
  };

  return (
    <div className="min-h-screen">
      <section className="container py-16 text-center">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Report a <span className="text-danger">Scam</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Help keep others safe by reporting suspicious links and scam attempts.
        </p>
      </section>

      <section className="container max-w-lg pb-16">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          {/* Upload */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Screenshot (optional)
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-border p-6 transition-colors hover:border-primary/40 hover:bg-accent/50">
              <Upload className="h-6 w-6 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {fileName || "Click to upload a screenshot"}
              </span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Describe the scam
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What happened? Include any suspicious links…"
              rows={5}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Suspicious link */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Suspicious link (optional)
            </label>
            <Input
              placeholder="Paste the suspicious link here"
              className="h-12 rounded-2xl"
            />
          </div>

          <Button type="submit" className="h-14 w-full rounded-2xl text-base font-semibold shadow-md">
            <Send className="h-5 w-5" />
            <span className="ml-2">Submit Report</span>
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ReportScam;
