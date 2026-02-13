import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronsUp,
  Crown,
  Gem,
  Key,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const STORE_DATA = {
  battlepasses: [
    {
      id: "bp-standard",
      name: "Premium",
      price: 14.99,
      description: "Unlock the full season experience.",
      color: "text-amber-400",
      icon: <Star className="h-6 w-6 text-amber-400" />,
      btnClass: "bg-amber-500 hover:bg-amber-600 text-black",
      features: [
        "Unlock Paid Track (100+ Levels)",
        "Exclusive 'Dragonborn' Skin",
        "3x Key Multiplier",
        "Weekly Quests Access",
      ],
    },
    {
      id: "bp-plus",
      name: "Premium+",
      price: 24.99,
      description: "Get a massive head start.",
      color: "text-red-400",
      isRecommended: true,
      icon: <Crown className="h-6 w-6 text-red-400" />,
      btnClass:
        "bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white shadow-lg shadow-red-500/20",
      features: [
        "All Premium Perks",
        "Instant 20 Tier Skips",
        "Exclusive 'Awakened' Title",
        "+10% Season XP Boost",
      ],
    },
  ],
  ranks: [
    {
      id: "hero",
      name: "HERO",
      price: 9.99,
      color: "text-blue-400",
      bg: "bg-blue-500",
      features: [
        "Reserved Slots",
        "White Chat Color",
        "3 Sethomes",
        "/workbench",
      ],
    },
    {
      id: "legend",
      name: "LEGEND",
      price: 24.99,
      popular: true,
      color: "text-purple-400",
      bg: "bg-purple-500",
      features: [
        "All Hero Perks",
        "Colored Chat",
        "5 Sethomes",
        "/enderchest",
        "Priority Queue",
      ],
    },
    {
      id: "mythic",
      name: "MYTHIC",
      price: 49.99,
      color: "text-red-500",
      bg: "bg-red-500",
      features: [
        "All Legend Perks",
        "RGB Glow",
        "Unlimited Sethomes",
        "/fly (Lobby)",
        "Custom Tag",
      ],
    },
  ],
  keys: [
    {
      id: "vote",
      name: "Vote Key",
      price: 1.99,
      amount: 5,
      color: "text-emerald-400",
      bg: "bg-emerald-500",
    },
    {
      id: "rare",
      name: "Rare Key",
      price: 4.99,
      amount: 3,
      color: "text-blue-400",
      bg: "bg-blue-500",
    },
    {
      id: "mythic",
      name: "Mythic Key",
      price: 9.99,
      amount: 1,
      color: "text-amber-400",
      bg: "bg-amber-500",
    },
  ],
};

export default function StorePage() {
  return (
    <>
      {/* --- BACKGROUND EFFECTS (Matches Home Page) --- */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="fixed left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <main className="container mx-auto px-4 py-32 md:py-40">
        {/* 1. HERO SECTION */}
        <div className="mb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-8 py-1.5 px-4 gap-3 border-primary/20 bg-primary/10 text-primary font-bold tracking-tight backdrop-blur-md animate-in fade-in zoom-in-95 duration-700"
          >
            <ShoppingCart className="h-3 w-3" /> OFFICIAL SERVER STORE
          </Badge>

          <h1 className="mb-6 text-6xl md:text-8xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700">
            ENHANCE YOUR <br />
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.4)]">
              EXPERIENCE
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
            Support the server and unlock exclusive cosmetics, ranks, and
            boosters. All purchases directly support development.
          </p>
        </div>

        {/* 2. BATTLEPASS SECTION */}
        <section className="max-w-6xl mx-auto mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Crown className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  Battle Pass
                </h2>
                <p className="text-muted-foreground font-medium">
                  Season 1: Awakening
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 font-bold tracking-widest animate-pulse"
            >
              ENDS IN 12 DAYS
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {STORE_DATA.battlepasses.map((bp) => (
              <Card
                key={bp.id}
                className={cn(
                  "relative rounded-[2rem] border overflow-hidden transition-all duration-300 hover:-translate-y-1",
                  bp.isRecommended
                    ? "bg-gradient-to-b from-amber-950/20 to-black/40 border-amber-500/30 shadow-2xl shadow-amber-900/10"
                    : "bg-white/5 border-white/10 hover:border-white/20",
                )}
              >
                {bp.isRecommended && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                )}

                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn("p-3 rounded-xl bg-white/5", bp.color)}>
                      {bp.icon}
                    </div>
                    {bp.isRecommended && (
                      <Badge className="bg-amber-500 text-black font-black border-none px-3 py-1">
                        BEST VALUE
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-4xl font-black italic tracking-tighter mb-2 text-white">
                    {bp.name}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-8">
                    {bp.description}
                  </p>

                  <div className="flex-1 space-y-4 mb-10">
                    {bp.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        {feat.includes("20 Tier") ? (
                          <ChevronsUp className="h-5 w-5 text-amber-500 shrink-0" />
                        ) : (
                          <Check className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                        <span
                          className={cn(
                            "text-sm font-bold",
                            feat.includes("20 Tier")
                              ? "text-white"
                              : "text-muted-foreground",
                          )}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-3xl font-black text-white">
                        ${bp.price}
                      </span>
                      <span className="text-sm font-bold text-muted-foreground mb-1.5">
                        / season
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className={cn(
                        "w-full h-14 rounded-xl text-base font-black shadow-lg transition-all",
                        bp.btnClass,
                      )}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. RANKS SECTION */}
        <section className="max-w-7xl mx-auto mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Server Ranks
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STORE_DATA.ranks.map((rank) => (
              <Card
                key={rank.id}
                className={cn(
                  "relative rounded-[2rem] border transition-all duration-300 hover:border-primary/30",
                  rank.popular
                    ? "bg-white/5 border-primary/40 shadow-2xl shadow-primary/5 z-10 scale-105"
                    : "bg-white/5 border-white/5 opacity-80 hover:opacity-100",
                )}
              >
                {rank.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground font-bold border-none px-4 py-1">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div
                    className={cn(
                      "h-20 w-20 rounded-2xl flex items-center justify-center mb-6 bg-white/5",
                      rank.color,
                    )}
                  >
                    <Shield className="h-10 w-10 fill-current opacity-80" />
                  </div>

                  <h3
                    className={cn(
                      "text-3xl font-black tracking-tight mb-2",
                      rank.color,
                    )}
                  >
                    {rank.name}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-8">
                    ${rank.price}
                  </div>

                  <div className="space-y-4 mb-8 w-full text-left">
                    {rank.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            rank.bg.replace("bg-", "bg-opacity-100 bg-"),
                          )}
                        />
                        <span className="text-sm font-medium text-muted-foreground">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full h-12 mt-auto font-bold rounded-xl"
                    variant={rank.popular ? "default" : "secondary"}
                  >
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. KEYS SECTION */}
        <section className="max-w-6xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="flex items-center gap-4 mb-10">
            <Key className="h-8 w-8 text-white/20" />
            <h2 className="text-3xl font-black tracking-tight">Crate Keys</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {STORE_DATA.keys.map((k) => (
              <Card
                key={k.id}
                className="group rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden hover:border-white/10"
              >
                <CardContent className="p-6 relative">
                  {/* Background Glow on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                      k.bg,
                    )}
                  />

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div
                      className={cn(
                        "h-14 w-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10",
                        k.color,
                      )}
                    >
                      <Gem className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-white">
                        ${k.price}
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-bold border-white/10 text-muted-foreground"
                      >
                        x{k.amount} BUNDLE
                      </Badge>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-bold text-lg text-white mb-1">
                      {k.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-6">
                      Opens the {k.name.split(" ")[0]} Crate at spawn.
                    </p>

                    <Button
                      variant="ghost"
                      className="w-full border border-white/10 bg-black/20 hover:bg-white/10 font-bold rounded-xl h-11"
                    >
                      PURCHASE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
