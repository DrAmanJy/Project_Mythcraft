"use client";

import * as React from "react";
import {
  Sword,
  Wallet,
  Clock,
  Scroll,
  Crown,
  ArrowUp,
  ArrowDown,
  Minus,
  Trophy,
  Medal,
  User,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* CONFIGURATION                                                      */
/* ------------------------------------------------------------------ */

const CATEGORIES = [
  {
    id: "balance",
    label: "Top Balance",
    icon: Wallet,
    format: (v: number) => `$${v.toLocaleString()}`,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    id: "kills",
    label: "Most Kills",
    icon: Sword,
    format: (v: number) => v.toLocaleString(),
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    id: "playtime",
    label: "Playtime",
    icon: Clock,
    format: (v: number) => `${v}h`,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: "battlepass",
    label: "Battle Pass",
    icon: Scroll,
    format: (v: number) => `Lvl ${v}`,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

const PLAYERS = [
  { uuid: "b1973865-fbac-4ca3-a9f2-cc91811df10f", name: "DrAmanJy" },
  { uuid: "61699b2e-d327-4a01-9f1e-0ea8c3f06bc6", name: "Dinnerbone" },
  { uuid: "853c80ef-3c37-49fd-aa49-938b674adae6", name: "Jeb_" },
  { uuid: "8667ba71-b85a-4004-af54-457a9734eed7", name: "Steve" },
  { uuid: "1dce5926-26d1-4475-802c-74a6258098c4", name: "Alex" },
];

const DATA: Record<string, any[]> = {
  balance: [
    { ...PLAYERS[0], value: 1250400, change: "+1" },
    { ...PLAYERS[1], value: 980200, change: "0" },
    { ...PLAYERS[2], value: 945000, change: "-1" },
    { ...PLAYERS[3], value: 640000, change: "new" },
    { ...PLAYERS[4], value: 520000, change: "+2" },
  ],
  kills: [
    { ...PLAYERS[4], value: 5240, change: "+2" },
    { ...PLAYERS[0], value: 4100, change: "-1" },
    { ...PLAYERS[1], value: 2500, change: "new" },
    { ...PLAYERS[2], value: 1200, change: "0" },
    { ...PLAYERS[3], value: 800, change: "-5" },
  ],
  playtime: [
    { ...PLAYERS[2], value: 4500, change: "0" },
    { ...PLAYERS[1], value: 3200, change: "0" },
    { ...PLAYERS[0], value: 1200, change: "0" },
    { ...PLAYERS[4], value: 500, change: "new" },
    { ...PLAYERS[3], value: 100, change: "+10" },
  ],
  battlepass: [
    { ...PLAYERS[3], value: 98, change: "+5" },
    { ...PLAYERS[4], value: 85, change: "0" },
    { ...PLAYERS[2], value: 22, change: "new" },
    { ...PLAYERS[0], value: 10, change: "-2" },
    { ...PLAYERS[1], value: 5, change: "0" },
  ],
};

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function LeaderboardPage() {
  const [tab, setTab] = React.useState("balance");

  const category = CATEGORIES.find((c) => c.id === tab)!;
  const list = DATA[tab] || [];

  // Podium Logic: [2nd, 1st, 3rd]
  const first = list[0];
  const second = list[1];
  const third = list[2];
  const rest = list.slice(3);

  return (
    <>
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="fixed left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <main className="container mx-auto px-4 py-32 md:py-40">
        {/* 1. HEADER SECTION */}
        <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-8 py-1.5 px-4 gap-3 border-primary/20 bg-primary/10 text-primary font-bold tracking-tight backdrop-blur-md animate-in fade-in zoom-in-95 duration-700"
          >
            <Trophy className="h-3 w-3" /> HALL OF FAME
          </Badge>

          <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700">
            SERVER{" "}
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.4)]">
              LEADERBOARDS
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground/80 font-medium animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
            Track the top players across the network. Statistics are updated
            every 5 minutes.
          </p>
        </div>

        {/* 2. CATEGORY TABS */}
        <div className="mb-24 flex justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <Tabs value={tab} onValueChange={setTab} className="w-full max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 p-2 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="gap-2 py-4 px-4 rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:border-white/10 border border-transparent transition-all font-bold text-muted-foreground"
                >
                  <cat.icon
                    className={cn(
                      "h-4 w-4",
                      tab === cat.id ? cat.color : "text-muted-foreground",
                    )}
                  />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* 3. PODIUM (1st, 2nd, 3rd) */}
        <div className="mb-24 grid grid-cols-1 gap-4 md:grid-cols-3 items-end max-w-5xl mx-auto px-4">
          {/* 2ND PLACE */}
          {second && (
            <PodiumCard
              player={second}
              rank={2}
              value={category.format(second.value)}
              categoryConfig={category}
              delay="delay-200"
            />
          )}

          {/* 1ST PLACE */}
          {first && (
            <PodiumCard
              player={first}
              rank={1}
              value={category.format(first.value)}
              categoryConfig={category}
              isWinner
              delay="delay-0"
            />
          )}

          {/* 3RD PLACE */}
          {third && (
            <PodiumCard
              player={third}
              rank={3}
              value={category.format(third.value)}
              categoryConfig={category}
              delay="delay-300"
            />
          )}
        </div>

        {/* 4. LIST VIEW (Rest of players) */}
        <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <Card className="overflow-hidden rounded-3xl border-white/5 bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-12 items-center gap-4 bg-black/20 px-8 py-5 text-xs font-black uppercase tracking-widest text-muted-foreground/50 border-b border-white/5">
              <div className="col-span-2 md:col-span-1">#</div>
              <div className="col-span-6 md:col-span-6">Player</div>
              <div className="col-span-4 md:col-span-2 text-center hidden md:block">
                Trend
              </div>
              <div className="col-span-4 md:col-span-3 text-right">Value</div>
            </div>

            <div className="divide-y divide-white/5">
              {rest.map((p, index) => (
                <LeaderboardRow
                  key={p.uuid}
                  player={p}
                  rank={index + 4}
                  formattedValue={category.format(p.value)}
                />
              ))}
            </div>

            {rest.length === 0 && (
              <div className="p-12 text-center text-muted-foreground font-medium">
                No more players to display in this category.
              </div>
            )}
          </Card>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="rounded-xl border-white/10 bg-transparent hover:bg-white/5 font-bold px-8"
            >
              VIEW FULL LEADERBOARD
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* SUB-COMPONENTS                                                     */
/* ------------------------------------------------------------------ */

function PodiumCard({
  player,
  rank,
  value,
  isWinner = false,
  delay,
  categoryConfig,
}: any) {
  // Using Visage API for full body 3D render
  const skinUrl = `https://visage.surgeplay.com/full/512/${player.uuid}`;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center animate-in fade-in zoom-in duration-700",
        isWinner ? "md:-mt-16 z-20 order-first md:order-none" : "z-10",
        delay,
      )}
    >
      {/* Crown / Rank Indicator */}
      <div className="mb-4 relative">
        {isWinner ? (
          <Crown className="h-10 w-10 text-amber-400 fill-amber-400 animate-bounce drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
        ) : (
          <Badge
            variant="outline"
            className="border-white/10 bg-black/40 text-muted-foreground font-black px-3 py-1 text-xs"
          >
            #{rank}
          </Badge>
        )}
      </div>

      {/* 3D Skin Render */}
      <div className="relative group w-full flex justify-center h-64 md:h-80 transition-transform duration-500 hover:scale-105">
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-60",
            isWinner ? "bg-primary" : "bg-white/20",
          )}
        />
        <img
          src={skinUrl}
          alt={player.name}
          className={cn(
            "h-full object-contain drop-shadow-2xl z-10",
            isWinner ? "scale-110" : "scale-100 opacity-90",
          )}
        />
      </div>

      {/* Info Card */}
      <Card
        className={cn(
          "mt-4 w-full overflow-hidden border-white/5 p-6 text-center transition-all hover:border-white/20 backdrop-blur-xl",
          isWinner
            ? "bg-white/10 border-primary/30 shadow-2xl shadow-primary/10"
            : "bg-white/5",
        )}
      >
        <div className="text-xl font-bold tracking-tight mb-1 text-white">
          {player.name}
        </div>
        <div
          className={cn(
            "text-2xl md:text-3xl font-black tracking-tighter",
            isWinner ? categoryConfig.color : "text-muted-foreground",
          )}
        >
          {value}
        </div>
      </Card>
    </div>
  );
}

function LeaderboardRow({ player, rank, formattedValue }: any) {
  return (
    <div className="grid grid-cols-12 items-center gap-4 px-8 py-4 transition-colors hover:bg-white/[0.03] group">
      {/* Rank */}
      <div className="col-span-2 md:col-span-1 font-mono text-sm font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">
        #{rank}
      </div>

      {/* Player Info */}
      <div className="col-span-6 md:col-span-6 flex items-center gap-4 font-bold">
        <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-black/20">
          <img
            src={`https://visage.surgeplay.com/head/64/${player.uuid}`}
            alt={player.name}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-base md:text-lg tracking-tight text-white/90 group-hover:text-white transition-colors truncate">
          {player.name}
        </span>
      </div>

      {/* Trend (Desktop Only) */}
      <div className="col-span-4 md:col-span-2 hidden md:flex justify-center">
        {player.change === "new" && (
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 font-black text-[10px] px-1.5 h-5">
            NEW
          </Badge>
        )}
        {player.change.startsWith("+") && (
          <span className="flex items-center text-emerald-500 font-bold text-xs">
            <ArrowUp className="mr-1 h-3 w-3" />{" "}
            {player.change.replace("+", "")}
          </span>
        )}
        {player.change.startsWith("-") && (
          <span className="flex items-center text-rose-500 font-bold text-xs">
            <ArrowDown className="mr-1 h-3 w-3" />{" "}
            {player.change.replace("-", "")}
          </span>
        )}
        {player.change === "0" && (
          <Minus className="h-3 w-3 text-muted-foreground/30" />
        )}
      </div>

      {/* Value */}
      <div className="col-span-4 md:col-span-3 text-right">
        <span className="font-mono text-base md:text-lg font-black tracking-tighter text-white">
          {formattedValue}
        </span>
      </div>
    </div>
  );
}
