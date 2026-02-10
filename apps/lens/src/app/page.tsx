"use client";

import { ThemeRenderer } from "@mythos-forge/core";
import { lensRuntime } from "../themeRuntime";
import { homePage } from "../pageConfigs/home";

export default function Page() {
  return (
    <div className=" bg-black text-white min-h-screen">
      <ThemeRenderer plan={homePage} runtime={lensRuntime} />
    </div>
  );
}
