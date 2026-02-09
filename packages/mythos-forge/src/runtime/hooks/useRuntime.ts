import { useContext } from "react";
import { RuntimeContext } from "../context"; 

export function useRuntime() {
  const ctx = useContext(RuntimeContext);
  if (!ctx) throw new Error("Runtime missing");
  return ctx;
}
