export function Stack({
  children,
  gap = 0,
}: {
  children?: React.ReactNode;
  gap?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}
