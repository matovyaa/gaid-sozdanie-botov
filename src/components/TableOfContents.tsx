import { tableOfContentsItems } from '../data/sections';

interface TableOfContentsProps {
  onItemClick?: () => void;
}

export default function TableOfContents({ onItemClick }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onItemClick?.();
    }
  };

  return (
    <nav className="space-y-1 sm:space-y-2">
      {tableOfContentsItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-purple-900/30 active:bg-purple-900/50 transition-colors text-xs sm:text-sm text-gray-300 hover:text-purple-300"
        >
          <span className="text-purple-400 font-semibold mr-2">{item.number}.</span>
          <span className="leading-tight">{item.title}</span>
        </button>
      ))}
    </nav>
  );
}
