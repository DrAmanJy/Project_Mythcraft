function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/2 transition-all hover:bg-white/4 hover:border-white/10">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground/70 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}
export default FeatureItem;
