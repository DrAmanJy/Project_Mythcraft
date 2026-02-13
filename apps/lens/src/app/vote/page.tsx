"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator"; // Ensure you have this or remove if not
import {
  Check,
  Copy,
  ExternalLink,
  Gift,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// --- CONFIGURATION ---
const VOTE_SITES = [
  {
    name: "PlanetMinecraft",
    url: "#",
    color: "group-hover:text-green-400",
    bg: "group-hover:bg-green-500/10",
    border: "group-hover:border-green-500/50",
  },
  {
    name: "Minecraft-MP",
    url: "#",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    name: "TopG",
    url: "#",
    color: "group-hover:text-red-400",
    bg: "group-hover:bg-red-500/10",
    border: "group-hover:border-red-500/50",
  },
  {
    name: "ServerList",
    url: "#",
    color: "group-hover:text-orange-400",
    bg: "group-hover:bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
  },
  {
    name: "BestServers",
    url: "#",
    color: "group-hover:text-purple-400",
    bg: "group-hover:bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
  },
];

const TOP_VOTERS = [
  { name: "DrAmanJy", votes: 42 },
  { name: "Notch", votes: 38 },
  { name: "Steve", votes: 31 },
  { name: "Alex", votes: 28 },
  { name: "Herobrine", votes: 25 },
];

const REWARDS = [
  { label: "1x Vote Key", icon: "🔑" },
  { label: "$500 Money", icon: "💰" },
  { label: "50 XP Levels", icon: "✨" },
  { label: "Rare Candy Chance", icon: "🍬" },
];

export default function VotePage() {
  const [copied, setCopied] = useState(false);
  const [username, setUsername] = useState("");

  const handleCopy = () => {
    if (!username) return;
    navigator.clipboard.writeText(username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* --- BACKGROUND EFFECTS (Matches Home Page) --- */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="fixed left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* 1. HEADER SECTION */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-6 border-primary/20 bg-primary/10 px-4 py-1 text-primary backdrop-blur-md animate-in fade-in zoom-in-95 duration-700"
          >
            <Sparkles className="mr-2 h-3 w-3" /> MONTHLY REWARDS
          </Badge>

          <h1 className="mb-6 text-5xl font-black tracking-tighter md:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            VOTE FOR{" "}
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.4)]">
              REWARDS
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Support the server daily to earn keys, money, and ranks. Top voters
            at the end of the month win{" "}
            <span className="text-white font-bold">$10 Store Credit</span>.
          </p>

          {/* VOTE PARTY "BOSS BAR" */}
          <div className="relative mx-auto w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1 backdrop-blur-md">
              {/* Glow behind the bar */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary animate-bounce" />
                  <span className="font-black uppercase tracking-widest text-sm text-white">
                    Vote Party
                  </span>
                </div>
                <span className="font-mono font-bold text-primary">
                  85 / 100
                </span>
              </div>

              <Progress
                value={85}
                className="h-6 rounded-lg bg-black/50"
                indicatorClassName="bg-gradient-to-r from-primary/80 to-primary shadow-[0_0_15px_rgba(var(--primary),0.6)]"
              />
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              Server Wide Drop Party at 100 Votes
            </p>
          </div>
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="grid gap-8 lg:grid-cols-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          {/* LEFT COLUMN: Voting Links (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Utility: Copy Username */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1 w-full">
                  <label className="text-xs font-bold uppercase text-muted-foreground mb-1.5 block ml-1">
                    Your Username
                  </label>
                  <Input
                    placeholder="Steve"
                    className="h-12 bg-black/20 border-white/10 text-lg font-medium"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <Button
                  size="lg"
                  className="h-12 w-full sm:w-auto shrink-0 font-bold"
                  onClick={handleCopy}
                  variant={copied ? "default" : "secondary"}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> COPY NAME
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Links Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {VOTE_SITES.map((site, i) => (
                <Link
                  key={i}
                  href={site.url}
                  target="_blank"
                  className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${site.border} ${site.bg}`}
                >
                  <div className="relative z-10">
                    <h3
                      className={`text-xl font-black uppercase tracking-tight text-white transition-colors ${site.color}`}
                    >
                      {site.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-white/80">
                      STATUS: <span className="text-emerald-500">READY</span>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:scale-110 group-hover:bg-white/20">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Rewards List */}
            <div className="rounded-2xl border border-dashed border-white/10 bg-primary/5 p-8">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-black uppercase tracking-tight">
                <Gift className="h-6 w-6 text-primary" /> Guaranteed Rewards
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {REWARDS.map((reward, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-xl bg-black/20 p-4 text-center transition-colors hover:bg-primary/20"
                  >
                    <div className="mb-2 text-2xl">{reward.icon}</div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {reward.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Leaderboard (4 Cols) */}
          <div className="lg:col-span-4">
            <Card className="h-full border-white/10 bg-white/5 backdrop-blur-md">
              <CardHeader className="border-b border-white/10 pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-black tracking-tight">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  LEADERBOARD
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  February 2026 Top Voters
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {TOP_VOTERS.map((voter, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-4 rounded-xl border border-transparent bg-black/20 p-3 transition-all hover:border-primary/20 hover:bg-white/5"
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded font-black text-sm ${i < 3 ? "bg-yellow-500/10 text-yellow-500" : "bg-white/5 text-muted-foreground"}`}
                      >
                        #{i + 1}
                      </div>

                      {/* Player Head Image */}
                      <img
                        src={`https://minotar.net/helm/${voter.name}/100.png`}
                        alt={voter.name}
                        className="h-10 w-10 rounded-lg bg-black/50 shadow-sm"
                      />

                      <div className="flex-1 overflow-hidden">
                        <p className="truncate font-bold text-white group-hover:text-primary transition-colors">
                          {voter.name}
                        </p>
                        <p className="text-xs font-bold text-muted-foreground">
                          {voter.votes} VOTES
                        </p>
                      </div>

                      {i === 0 && (
                        <Trophy className="h-4 w-4 text-yellow-500 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-6 text-center">
                  <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-1 font-black text-white">WANT TO WIN?</h4>
                  <p className="text-xs text-muted-foreground">
                    Vote on all links daily to climb the leaderboard and win
                    store credit!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
