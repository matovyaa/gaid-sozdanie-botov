interface VisualDividerProps {
  icon?: string;
}

export default function VisualDivider({ icon = '✨' }: VisualDividerProps) {
  return (
    <div className="flex items-center gap-4 my-8 sm:my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500/50" />
      <span className="text-2xl sm:text-3xl">{icon}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500/50" />
    </div>
  );
}
