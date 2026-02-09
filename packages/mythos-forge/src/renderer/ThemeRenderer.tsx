"use client";

import React from "react";
import { RuntimeContext } from "../runtime/context";
import { componentRegistry } from "../registry/core";
import type { RenderPlan } from "../types/render";

function renderPlan(plan: RenderPlan | unknown): React.ReactNode {
  if (!Array.isArray(plan)) return null;

  return plan.map((node, i) => {
    const Component = componentRegistry[node.component];

    if (!Component) {
      console.warn("Unknown component:", node.component);
      return null;
    }

    return (
      <Component key={node.id || i} {...(node.props || {})}>
        {node.children && node.children.length > 0
          ? renderPlan(node.children)
          : null}
      </Component>
    );
  });
}

export function ThemeRenderer({
  plan,
  runtime,
}: {
  plan: RenderPlan;
  runtime: any;
}) {
  return (
    <RuntimeContext.Provider value={runtime}>
      {renderPlan(plan)}
    </RuntimeContext.Provider>
  );
}
