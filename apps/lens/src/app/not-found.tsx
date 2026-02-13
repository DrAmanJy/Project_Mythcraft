import { Button } from "@/components/ui/button";
import { ArrowLeft, Ban, Map, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#020203] text-foreground">
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Red/Void Glow for Error State */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <main className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        {/* 1. ANIMATED ICON */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.2)] animate-in zoom-in-50 duration-500">
          <Ban className="h-10 w-10 text-red-500" />
        </div>

        {/* 2. MAIN TEXT */}
        <h1 className="mb-2 text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 md:text-9xl animate-in slide-in-from-bottom-4 duration-700">
          404
        </h1>

        <h2 className="mb-6 text-2xl font-bold uppercase tracking-widest text-red-500 animate-in slide-in-from-bottom-6 duration-700 delay-100">
          Chunk Not Loaded
        </h2>

        <p className="mb-10 max-w-lg text-lg text-muted-foreground font-medium animate-in slide-in-from-bottom-8 duration-700 delay-200">
          You've ventured too far into the void. The page you are looking for
          either doesn't exist or has been corrupted by dark magic.
        </p>

        {/* 3. ACTION BUTTONS */}
        <div className="flex flex-col gap-4 sm:flex-row animate-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button
            size="lg"
            className="h-12 rounded-xl bg-white text-black hover:bg-white/90 font-black shadow-xl shadow-white/10"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              RETURN TO SPAWN
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 font-bold"
            asChild
          >
            <Link href="/vote">
              <Map className="mr-2 h-4 w-4" />
              VIEW VOTE MAP
            </Link>
          </Button>
        </div>

        {/* 4. FOOTER DECORATION */}
        <div className="mt-16 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/30">
          <span className="h-px w-12 bg-white/10" />
          ERROR CODE: VOID_EXCEPTION
          <span className="h-px w-12 bg-white/10" />
        </div>
      </main>
    </div>
  );
}
