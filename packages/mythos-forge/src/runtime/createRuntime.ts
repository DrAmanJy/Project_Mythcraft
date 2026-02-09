import { ActionMap } from "./types";

export function createRuntime(runtime: {
  actions: ActionMap;
  ui?: Record<string, any>;
}) {
  return runtime;
}
