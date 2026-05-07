import CodeBlock from './CodeBlock';

interface BilingualCodeProps {
  english: string;
  russian: string;
  language?: string;
}

export default function BilingualCode({ english, russian, language = 'text' }: BilingualCodeProps) {
  return (
    <div className="space-y-3 my-6">
      <div>
        <div className="text-xs sm:text-sm text-purple-300 font-semibold mb-2 flex items-center gap-2">
          <span>🇬🇧 Английский (для ИИ)</span>
        </div>
        <CodeBlock language={language}>
          {english}
        </CodeBlock>
      </div>
      
      <div>
        <div className="text-xs sm:text-sm text-green-300 font-semibold mb-2 flex items-center gap-2">
          <span>🇷🇺 Русский перевод (для понимания)</span>
        </div>
        <div className="bg-slate-950/50 border border-green-500/20 rounded-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap font-mono">
            {russian}
          </p>
        </div>
      </div>
    </div>
  );
}
