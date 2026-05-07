export default function Hero() {
  return (
    <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-slate-950/80 to-slate-950" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight px-2">
          🎭 Полный гайд по созданию персонажа на Frendi AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
          От идеи до живого бота — пошагово, с примерами и без воды
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 px-2">
          <div className="flex items-center gap-2 bg-purple-900/30 px-3 sm:px-4 py-2 rounded-full">
            <span className="text-purple-400 text-lg">📚</span>
            <span>17 разделов</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-900/30 px-3 sm:px-4 py-2 rounded-full">
            <span className="text-purple-400 text-lg">⏱️</span>
            <span>30-40 мин</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-900/30 px-3 sm:px-4 py-2 rounded-full">
            <span className="text-purple-400 text-lg">💯</span>
            <span>С примерами</span>
          </div>
        </div>
      </div>
    </div>
  );
}
