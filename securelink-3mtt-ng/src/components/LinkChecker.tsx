import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ResultCard from "./ResultCard";
import { validateLink, type LinkResult } from "@/utils/validator";
import { toast } from "sonner";

const LinkChecker = () => {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<{ status: LinkResult; url: string } | null>(null);

  const handleCheck = () => {
    if (!url.trim()) {
      toast.error("Please enter a link to check");
      return;
    }
    setResult(null);
    setScanning(true);

    setTimeout(() => {
      const status = validateLink(url);
      const displayUrl = url.trim().startsWith("http") ? url.trim() : "https://" + url.trim();
      setResult({ status, url: displayUrl });
      setScanning(false);

      if (status === "safe") toast.success("Link is safe!");
      else if (status === "danger") toast.error("Dangerous link detected!");
      else if (status === "invalid") toast.error("Invalid URL format");
      else toast.warning("Unknown link — proceed with caution");
    }, 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          placeholder="Paste or type a link here…"
          className="h-14 rounded-2xl border-border bg-card px-5 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <Button
          onClick={handleCheck}
          disabled={scanning}
          className="h-14 rounded-2xl px-8 text-base font-semibold shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
          size="lg"
        >
          {scanning ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
          <span className="ml-2">{scanning ? "Scanning…" : "Check Link"}</span>
        </Button>
      </div>

      {scanning && (
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse-ring" />
            <div className="absolute inset-2 rounded-full border-4 border-primary/40 animate-pulse-ring" style={{ animationDelay: "0.3s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          <p className="text-sm font-medium text-muted-foreground animate-pulse">
            Analyzing link security…
          </p>
        </div>
      )}

      {result && !scanning && <ResultCard status={result.status} url={result.url} />}
    </div>
  );
};

export default LinkChecker;
