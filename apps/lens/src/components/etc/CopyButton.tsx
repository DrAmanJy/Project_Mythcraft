"use client";
import React from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

function CopyButton({
  value,
  style,
  label,
  size,
  variant,
  icon,
  afterLable,
}: any) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      variant={variant ? variant : "default"}
      size={size ? size : "default"}
      className={style}
      onClick={copy}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-500" /> {afterLable}{" "}
        </>
      ) : (
        <>
          {icon ? icon : ""} {label}
        </>
      )}
    </Button>
  );
}
export default CopyButton;
