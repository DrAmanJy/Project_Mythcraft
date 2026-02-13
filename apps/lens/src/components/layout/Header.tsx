"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogIn, Menu, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// 1. Added STORE back to navigation links
const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "VOTE", href: "/vote" },
  { name: "STORE", href: "/store" },
  { name: "LEADERBOARD", href: "/leaderboard" },
  { name: "ABOUT", href: "/about" },
];

const SERVER_IP = "play.mythcraft.net";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const username = "DrAmanJy";
  // ----------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    toast.success("IP Copied!", {
      description: "See you on the server!",
    });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "border-white/10 bg-black/60 backdrop-blur-xl py-3"
          : "border-transparent bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Zap className="h-6 w-6 text-primary fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter leading-none text-white">
              MYTH<span className="text-primary">CRAFT</span>
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Survival Season 1
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP NAV (Now includes Store) */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)]"
                    : "text-muted-foreground hover:text-white hover:bg-white/5",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 3. ACTIONS (Login/Profile Only on Desktop) */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              // LOGGED IN STATE
              <Button
                variant="ghost"
                size="sm"
                className="h-10 pl-2 pr-4 font-bold hover:bg-white/5"
                asChild
              >
                <Link href="/profile">
                  <img
                    src={`https://minotar.net/helm/${username}/100.png`}
                    alt="Skin"
                    className="mr-2 h-6 w-6 rounded-sm"
                  />
                  PROFILE
                </Link>
              </Button>
            ) : (
              // LOGGED OUT STATE
              <Button
                variant="default" // Made this default to pop more since it's the only button
                size="sm"
                className="h-10 font-bold px-6 shadow-lg shadow-primary/20"
                asChild
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                <p>
                  <LogIn className="mr-2 h-4 w-4" /> LOGIN
                </p>
              </Button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full bg-[#0a0a0a] border-white/10 p-0"
            >
              <SheetHeader className="p-6 border-b border-white/10 text-left flex flex-row items-center justify-between">
                <SheetTitle className="font-black text-2xl">MENU</SheetTitle>
                {isLoggedIn && (
                  <Link href="/profile" onClick={() => setIsOpen(false)}>
                    <img
                      src={`https://minotar.net/helm/${username}/100.png`}
                      alt="Skin"
                      className="h-8 w-8 rounded-md border border-white/20"
                    />
                  </Link>
                )}
              </SheetHeader>

              <div className="flex flex-col p-6 gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-black tracking-tight py-4 border-b border-white/5 hover:text-primary transition-colors flex items-center justify-between group",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.name}
                    <Zap className="h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                ))}

                {/* Mobile Login Link */}
                {!isLoggedIn && (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black tracking-tight py-4 border-b border-white/5 hover:text-primary transition-colors flex items-center justify-between text-muted-foreground"
                  >
                    LOGIN
                    <LogIn className="h-6 w-6" />
                  </Link>
                )}
              </div>

              {/* COPY IP - Only in Hamburger now */}
              <div className="absolute bottom-10 left-6 right-6">
                <Button
                  size="lg"
                  className="w-full font-black text-lg h-14"
                  onClick={copyIp}
                >
                  COPY IP: {SERVER_IP}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
