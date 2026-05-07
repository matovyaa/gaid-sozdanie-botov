import { ReactNode } from 'react';
import { Info, Lightbulb, AlertTriangle, Zap } from 'lucide-react';

interface InfoBoxProps {
  children: ReactNode;
  type?: 'info' | 'tip' | 'warning' | 'highlight';
  className?: string;
}

export default function InfoBox({ children, type = 'info', className = '' }: InfoBoxProps) {
  const config = {
    info: {
      icon: Info,
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-500/50',
      iconColor: 'text-blue-400'
    },
    tip: {
      icon: Lightbulb,
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-500/50',
      iconColor: 'text-yellow-400'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-500/50',
      iconColor: 'text-orange-400'
    },
    highlight: {
      icon: Zap,
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-500/50',
      iconColor: 'text-purple-400'
    }
  };

  const { icon: Icon, bgColor, borderColor, iconColor } = config[type];

  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-3 sm:p-4 my-4 sm:my-6 ${className}`}>
      <div className="flex gap-2 sm:gap-3">
        <Icon className={`${iconColor} flex-shrink-0 mt-0.5 sm:mt-1`} size={18} />
        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
