import ConnectionCard from "@/components/etc/ConnectionCard";
import CopyButton from "@/components/etc/CopyButton";
import FeatureItem from "@/components/etc/FeatureItem";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Monitor,
  Shield,
  Smartphone,
  Sword,
  Ticket,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
const SERVER_CONFIG = {
  name: "MYTHCRAFT",
  nameStart: "MYTH",
  nameEnd: "CRAFT",
  season: 1,
  ip: {
    java: "play.mythcraft.net",
    bedrock: "play.mythcraft.net",
    port: 19132,
  },
  links: {
    discord: "https://discord.gg/your-link",
    store: "/store",
  },
  stats: {
    playersOnline: "1,200+",
    tps: "20",
  },
};
export default function Page() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-40 pb-32 overflow-hidden flex flex-col items-center">
        {/* Modern Background: Grid + Radial Blur */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-8 py-1.5 px-4 gap-3 border-primary/20 bg-primary/10 text-primary font-bold tracking-tight backdrop-blur-md animate-in fade-in zoom-in-95 duration-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            SEASON {SERVER_CONFIG.season} IS NOW LIVE
          </Badge>
          <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-9xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            {SERVER_CONFIG.nameStart}
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.4)]">
              {SERVER_CONFIG.nameEnd}
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-xl text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-10 duration-1000">
            The world’s most immersive survival experience. Custom bosses,
            unique mechanics, and a player-driven economy.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <CopyButton
              size="lg"
              style="h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
              label="PLAY NOW"
              afterLable="Ip Copied"
              icon={<Zap className="mr-2 h-5 w-5 fill-current" />}
            ></CopyButton>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-2xl border-white/10 bg-white/5 backdrop-blur-md font-bold"
              asChild
            >
              <Link href={SERVER_CONFIG.links.store}>VIEW STORE</Link>
            </Button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" /> {SERVER_CONFIG.stats.playersOnline}{" "}
              Players
            </div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2 text-emerald-500">
              <div className="h-2 w-2 rounded-full bg-current animate-pulse" />
              {SERVER_CONFIG.stats.tps} TPS Stable
            </div>
          </div>
        </div>
      </section>
      {/* 2. CONNECTION CARDS */}
      <section className="-mt-16 container mx-auto px-4 relative z-10">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <ConnectionCard
            icon={<Monitor className="h-6 w-6" />}
            title="Java Edition"
            description="Universal PC Experience"
            ip={SERVER_CONFIG.ip.java}
            accent="bg-primary text-primary"
          />
          <ConnectionCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Bedrock Edition"
            description={`Mobile & Console (Port ${SERVER_CONFIG.ip.port})`}
            ip={SERVER_CONFIG.ip.bedrock}
            accent="bg-emerald-500 text-emerald-500"
          />
        </div>
      </section>
      {/* 3. FEATURES */}
      <section className="py-40 container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Next-Gen Gameplay
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground font-medium text-lg">
            Stop playing vanilla. Experience custom-coded features that redefine
            the survival genre.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <FeatureItem
            icon={<Sword className="h-6 w-6 text-red-500" />}
            title="Infernal Bosses"
            description="Unique boss AI patterns and legendary drop tables."
          />
          <FeatureItem
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="Legendary Gear"
            description="Over 400+ custom enchants and set bonuses."
          />
          <FeatureItem
            icon={<Ticket className="h-6 w-6 text-amber-500" />}
            title="Battle Pass"
            description="Earn exclusive cosmetics by completing daily quests."
          />
        </div>
      </section>
      {/* 4. DISCORD CALL TO ACTION */}
      <section className="container mx-auto px-4 pb-40">
        <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/5 bg-linear-to-b from-white/5 to-transparent p-12 md:p-24 text-center transition-all hover:border-primary/20">
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />

          <h2 className="relative z-10 mb-6 text-4xl font-black md:text-6xl tracking-tighter">
            Join the Discord
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg text-muted-foreground/80 font-medium">
            Be part of the myth. Get support, find a clan, and enter giveaways
            in our active community server.
          </p>
          <Button
            size="lg"
            asChild
            className="relative z-10 h-14 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] px-10 text-base font-black shadow-2xl shadow-indigo-500/20 transition-all hover:-translate-y-1"
          >
            <Link href={SERVER_CONFIG.links.discord}>
              OPEN DISCORD <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
