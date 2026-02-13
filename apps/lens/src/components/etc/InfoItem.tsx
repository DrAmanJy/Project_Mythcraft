export default function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 min-w-30">
      <div className="flex items-center gap-2 mb-1 text-white/40">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="font-bold text-white tracking-tight">{value}</div>
    </div>
  );
}
