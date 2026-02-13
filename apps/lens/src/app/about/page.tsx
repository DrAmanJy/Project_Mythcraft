"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Activity,
  Calendar,
  Check,
  ChevronRight,
  Coins,
  Copy,
  Gamepad2,
  Globe,
  HelpCircle,
  Laptop,
  Layers,
  Map,
  Maximize,
  MessageCircle,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Swords,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"; // Assuming you have sonner installed

// --- CONFIGURATION ---
const SERVER_INFO = {
  ip: "play.mythcraft.net",
  port: "19132",
  version: "1.20.4",
  region: "North America",
  mode: "Survival SMP",
  online: 1420,
};

const FEATURES = [
  {
    title: "Beautiful Biomes",
    desc: "Experience a world like no other with custom terrain generation. Mountains, valleys, and oceans reimagined.",
    icon: Map,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Custom Dungeons",
    desc: "Explore 5 unique instances with custom mobs, bosses, and legendary loot tables.",
    icon: Swords,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    title: "Player Economy",
    desc: "A fully player-driven market with auction houses and balanced gold currency.",
    icon: Coins,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Cross-Platform",
    desc: "Play with friends on PC, Xbox, PlayStation, Switch, and Mobile.",
    icon: Gamepad2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const TECH_SPECS = [
  {
    label: "Server Software",
    value: "Purpur / Paper",
    icon: Terminal,
    color: "text-indigo-400",
  },
  {
    label: "Native Version",
    value: "1.20.4",
    icon: Layers,
    color: "text-emerald-400",
  },
  {
    label: "World Border",
    value: "50k x 50k",
    icon: Maximize,
    color: "text-rose-400",
  },
  {
    label: "View Distance",
    value: "16 Chunks",
    icon: Map,
    color: "text-amber-400",
  },
];

const STAFF = [
  {
    name: "MythicOwner",
    role: "Owner",
    uuid: "069a79f4-44e9-4726-a5be-fca90e38aaf5",
    color: "text-red-500",
    bg: "bg-red-500",
  },
  {
    name: "DevWizard",
    role: "Developer",
    uuid: "61699b2e-d327-4a01-9f1e-0ea8c3f06bc6",
    color: "text-indigo-400",
    bg: "bg-indigo-500",
  },
  {
    name: "CommunityLead",
    role: "Admin",
    uuid: "853c80ef-3c37-49fd-aa49-938b674adae6",
    color: "text-rose-400",
    bg: "bg-rose-500",
  },
  {
    name: "ModSteve",
    role: "Moderator",
    uuid: "0b549a88-2917-4d7a-9a03-755737194883",
    color: "text-emerald-400",
    bg: "bg-emerald-500",
  },
];

const FAQS = [
  {
    q: "Is the server Pay-to-Win?",
    a: "No. We strictly adhere to Minecraft's EULA. All purchasable items are cosmetic or offer convenience features (like /fly in lobbies) that do not give a competitive advantage in PvP.",
  },
  {
    q: "How do I claim land?",
    a: "We use a 'Golden Shovel' claim system. You start with 100 claim blocks. Right-click two corners of your area with a golden shovel to protect it.",
  },
  {
    q: "Can I join on Bedrock Edition?",
    a: "Yes! Bedrock players can join using the same IP with the default port 19132. See the connection guide below for details.",
  },
  {
    q: "When does the season reset?",
    a: "We never reset the map unless absolutely necessary for a major Minecraft update (like 1.21). Your builds are safe forever.",
  },
];

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_INFO.ip);
    setCopied(true);
    toast.success("IP Copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="fixed left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <main className="container mx-auto px-4 py-32 md:py-40">
        {/* 1. HERO SECTION */}
        <div className="mb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-8 py-1.5 px-4 gap-3 border-primary/20 bg-primary/10 text-primary font-bold tracking-tight backdrop-blur-md animate-in fade-in zoom-in-95 duration-700"
          >
            <Sparkles className="h-3 w-3" /> ABOUT MYTHCRAFT
          </Badge>

          <h1 className="mb-6 text-6xl md:text-8xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700">
            THE ULTIMATE <br />
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.4)]">
              ADVENTURE
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
            Founded in 2024, MythCraft is a community-driven survival server
            designed to bring the magic back to Minecraft.
          </p>
        </div>

        {/* 2. STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          {[
            { label: "Region", value: SERVER_INFO.region, icon: Globe },
            { label: "Version", value: SERVER_INFO.version, icon: Terminal },
            { label: "Gamemode", value: SERVER_INFO.mode, icon: Server },
            { label: "Uptime", value: "99.9%", icon: Zap },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-white/5 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
            >
              <stat.icon className="h-6 w-6 text-primary mb-3" />
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* 3. FEATURES GRID */}
        <section className="mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-2">
                Why Play Here?
              </h2>
              <p className="text-muted-foreground font-medium">
                Features that set us apart from the rest.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feat, i) => (
              <Card
                key={i}
                className="group border-white/5 bg-white/5 hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 flex items-start gap-6">
                  <div
                    className={cn(
                      "h-14 w-14 rounded-2xl flex items-center justify-center shrink-0",
                      feat.bg,
                    )}
                  >
                    <feat.icon className={cn("h-7 w-7", feat.color)} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. TECH SPECS & CONNECT */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          {/* Tech Specs (Left - 7 Cols) */}
          <Card className="lg:col-span-7 border-white/5 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-50" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Activity className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-black tracking-tight">
                  Server Specs
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {TECH_SPECS.map((spec, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn("p-2 rounded-lg bg-white/5", spec.color)}
                      >
                        <spec.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold text-muted-foreground">
                        {spec.label}
                      </span>
                    </div>
                    <span className="font-bold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Connect Card (Right - 5 Cols) */}
          <Card className="lg:col-span-5 border-white/5 bg-gradient-to-br from-indigo-900/20 to-black relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="p-8 md:p-10 relative z-10 text-center">
              <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                ONLINE ({SERVER_INFO.online})
              </Badge>

              <h2 className="text-3xl font-black tracking-tight mb-2">
                Join the Action
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with {SERVER_INFO.ip}
              </p>

              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full h-12 font-bold text-base"
                  onClick={copyIP}
                >
                  {copied ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
                  {copied ? "IP COPIED!" : "COPY JAVA IP"}
                </Button>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">
                  Bedrock Port: 19132
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 5. STAFF TEAM */}
        <section className="mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Staff Team
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAFF.map((member) => (
              <Card
                key={member.name}
                className="group relative border-white/5 bg-white/5 overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity",
                    member.bg,
                  )}
                />
                <div className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="relative mb-6">
                    <div
                      className={cn(
                        "absolute inset-0 blur-xl opacity-20 rounded-full",
                        member.bg,
                      )}
                    />
                    <img
                      src={`https://visage.surgeplay.com/bust/160/${member.uuid}`}
                      alt={member.name}
                      className="h-32 w-32 object-contain drop-shadow-2xl transform transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-[10px] font-black uppercase tracking-widest bg-white/5",
                      member.color,
                    )}
                  >
                    {member.role}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="max-w-3xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-center">
            Frequent Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/5 bg-white/5 rounded-xl px-2 data-[state=open]:bg-white/10 data-[state=open]:border-primary/20 transition-all"
              >
                <AccordionTrigger className="font-bold hover:no-underline px-4 text-white/90">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="h-5 w-5 text-primary/50" />
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-muted-foreground ml-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
}
