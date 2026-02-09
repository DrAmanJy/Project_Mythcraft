import type { ComponentType } from "react";
import { SimpleBox } from "./components/SimpleBox";
import { SimpleButton } from "./components/SimpleButton";
import { SimpleCard } from "./components/SimpleCard";
import { SimpleText } from "./components/SimpleText";
import { Stack } from "./components/Stack";

export const componentRegistry: Record<string, ComponentType<any>> = {
  SimpleCard,
  SimpleBox,
  SimpleButton,
  SimpleText,
  Stack
};
