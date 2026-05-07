interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language = 'text' }: CodeBlockProps) {
  return (
    <div className="relative my-4 sm:my-6">
      {language && (
        <div className="absolute top-0 right-0 px-2 sm:px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-bl-lg z-10">
          {language}
        </div>
      )}
      <pre className="bg-slate-950/70 border border-purple-500/20 rounded-lg p-3 sm:p-4 overflow-x-auto">
        <code className="text-xs sm:text-sm text-gray-300 font-mono whitespace-pre-wrap break-words block">
          {children}
        </code>
      </pre>
    </div>
  );
}
