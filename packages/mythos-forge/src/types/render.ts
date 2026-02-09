export type RenderNode = {
  id?: string;
  component: string;
  props?: Record<string, any>;
  children?: RenderNode[];
};

export type RenderPlan = RenderNode[];
