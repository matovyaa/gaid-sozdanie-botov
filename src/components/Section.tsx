import { Section as SectionType } from '../data/sections';
import { getSectionContent } from '../content/sectionContent';

interface SectionProps {
  section: SectionType;
  index: number;
}

export default function Section({ section, index }: SectionProps) {
  const content = getSectionContent(index + 1);

  return (
    <section id={section.id} className="mb-8 sm:mb-12 lg:mb-16 scroll-mt-4 sm:scroll-mt-8">
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-start sm:items-center gap-2 sm:gap-3">
          <span className="text-3xl sm:text-4xl flex-shrink-0">{section.emoji}</span>
          <span className="leading-tight">{index + 1}. {section.title}</span>
        </h2>
        <div className="prose prose-invert prose-purple max-w-none text-sm sm:text-base">
          {content}
        </div>
      </div>
    </section>
  );
}
