import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CopyButton from "./CopyButton";
import { Copy } from "lucide-react";

function ConnectionCard({
  icon,
  title,
  description,
  ip,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  ip: string;
  accent: string;
}) {
  return (
    <Card className="relative overflow-hidden bg-card/30 backdrop-blur-xl border-white/5 transition-all hover:border-primary/30 group">
      <div
        className={cn(
          "absolute top-0 left-0 h-1 w-full opacity-20 transition-opacity group-hover:opacity-100",
          accent,
        )}
      />
      <CardHeader className="flex flex-row items-center gap-4">
        <div
          className={cn(
            "rounded-xl p-3 shadow-inner",
            accent.replace("bg-", "bg-").replace("/10", "/20"),
          )}
        >
          {icon}
        </div>
        <div className="text-left">
          <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
          <CardDescription className="text-xs uppercase tracking-widest font-semibold opacity-70">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-black/60 p-1.5 pl-4 shadow-inner">
          <code className="text-sm font-mono text-primary/80">{ip}</code>
          <CopyButton
            value={ip}
            label={"Copy IP"}
            size="sm"
            afterLable={"Copied"}
            icon={<Copy className="h-3 w-3" />}
            variant="secondary"
            style={
              "h-8 gap-2 px-3 text-xs font-bold uppercase tracking-tighter"
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ConnectionCard;
