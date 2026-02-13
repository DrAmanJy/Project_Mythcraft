import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, MessageCircle, Twitter, Youtube, Zap } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "SERVER",
    links: [
      { label: "Play Now", href: "#" },
      { label: "Vote", href: "/vote" },
      { label: "Store", href: "/store" },
      { label: "Wiki", href: "/wiki" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Tickets", href: "/ticket" },
      { label: "Bugs", href: "/bugs" },
      { label: "Staff", href: "/apply" },
      { label: "Appeal", href: "/appeal" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Rules", href: "/rules" },
    ],
  },
];

const SOCIALS = [
  { icon: <Twitter className="h-4 w-4" />, href: "#" },
  { icon: <Instagram className="h-4 w-4" />, href: "#" },
  { icon: <Youtube className="h-4 w-4" />, href: "#" },
  { icon: <MessageCircle className="h-4 w-4" />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#050505] pt-10 md:pt-24">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-32 bg-primary/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-8 xl:grid-cols-12 mb-10 md:mb-16">
          {/* 1. BRANDING COLUMN */}
          <div className="xl:col-span-4 flex flex-col items-start text-left">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 md:mb-6 group"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl tracking-tighter leading-none text-white">
                  MYTH<span className="text-primary">CRAFT</span>
                </span>
                <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                  Survival Season 1
                </span>
              </div>
            </Link>

            <p className="mb-6 md:mb-8 max-w-sm text-sm text-muted-foreground/80 font-medium leading-relaxed">
              Next-gen survival multiplayer. Join 1,200+ players experiencing
              custom bosses and a player-driven economy.
            </p>
          </div>

          {/* 2. LINKS GRID - Compact 2-column grid on mobile */}
          <div className="xl:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            {FOOTER_LINKS.map((column, i) => (
              <div key={i} className="flex flex-col gap-3 md:gap-4">
                <h4 className="font-black text-white tracking-widest text-xs md:text-sm uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-0.5 bg-primary rounded-full" />
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-2 md:gap-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-muted-foreground font-medium hover:text-white transition-all text-sm hover:translate-x-1"
                      >
                        {/* Subtle dot only visible on hover */}
                        <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-white/5" />

        {/* 3. BOTTOM BAR */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 py-6 md:py-8 text-center md:text-left">
          <p className="text-[10px] md:text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Project MythCraft. Not affiliated
            with Mojang Studios.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            {SOCIALS.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-muted-foreground hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
