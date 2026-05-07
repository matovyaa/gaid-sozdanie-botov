import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  text: string;
  translation: string;
}

export default function Tooltip({ text, translation }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="inline-flex items-baseline gap-1 relative group">
      <code className="text-purple-300 bg-slate-950/50 px-1.5 py-0.5 rounded text-sm">
        {text}
      </code>
      <button
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors cursor-help"
        aria-label="Показать перевод"
      >
        <HelpCircle size={14} className="flex-shrink-0" />
      </button>
      
      {isVisible && (
        <span className="absolute bottom-full left-0 mb-2 z-10 w-max max-w-xs sm:max-w-sm">
          <span className="block bg-slate-800 text-gray-200 text-xs sm:text-sm px-3 py-2 rounded-lg shadow-xl border border-purple-500/30">
            {translation}
            <span className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-slate-800"></span>
          </span>
        </span>
      )}
    </span>
  );
}
