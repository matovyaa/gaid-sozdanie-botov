interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="bg-slate-800/30 border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{emoji}</div>
      <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
