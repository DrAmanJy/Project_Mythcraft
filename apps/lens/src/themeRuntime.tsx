import { createRuntime } from "@mythos-forge/core";

// App logic (can be anything)
function testAction() {
  alert("CTA works from Lens runtime");
}
function aman() {
  alert("fuck youu");
}

export const lensRuntime = createRuntime({
  actions: {
    "cta.test": testAction,
    "cta.aman": aman,
  },

  // UI primitives Lens provides
  ui: {
    button: (props: any) => <button {...props} />,
  },
});
