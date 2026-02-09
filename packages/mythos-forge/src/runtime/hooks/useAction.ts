import { useRuntime } from "./useRuntime";

export function useAction(actionId?: string) {
  const runtime = useRuntime();

  if (!actionId) return undefined;

  return runtime.actions[actionId];
}
