import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import TableOfContents from './components/TableOfContents';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Section from './components/Section';
import { sections } from './data/sections';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85vw] sm:w-80 bg-slate-900/98 backdrop-blur-md border-r border-purple-500/20 z-40 transition-transform duration-300 overflow-y-auto shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-purple-400">📋 Оглавление</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white p-1"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <TableOfContents onItemClick={() => setIsMobileMenuOpen(false)} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-80">
        <Hero />
        <IntroSection />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {sections.map((section, index) => (
            <Section key={section.id} section={section} index={index} />
          ))}

          {/* Footer */}
          <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-purple-500/20 text-center text-gray-400 px-4">
            <p className="mb-4 text-lg sm:text-xl">✨ Вместо заключения</p>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4">
              Создать хорошего персонажа — это не разовое действие. Первая версия почти никогда не идеальная, 
              и это нормально. Ты тестируешь, замечаешь что работает не так, правишь инструкцию, меняешь тон, 
              переписываешь первое сообщение.
            </p>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Со временем ты начнёшь чувствовать, как именно ИИ «слышит» твои слова. Это как писать с соавтором, 
              которого надо просто научить твоему стилю.
            </p>
            <p className="font-semibold text-purple-400 text-base sm:text-lg">
              Главное — начать. Остальное приходит с практикой.
            </p>
            <p className="mt-6 text-lg sm:text-xl">🖤 Удачи с созданием. Пусть твои персонажи живут.</p>
          </footer>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
