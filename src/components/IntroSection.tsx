export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
      <div className="bg-gradient-to-br from-purple-900/40 via-slate-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl sm:text-5xl">👋</div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-300 mb-3 sm:mb-4">
              Приветствие от автора
            </h2>
            <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Всем привет, это <strong className="text-purple-300">Матти/Matte (matovya)</strong>! 
              </p>
              <p>
                Вы можете знать меня как автора благодаря{' '}
                <a 
                  href="https://frendi.ai/user/455adeea-33b7-44a2-a640-89bff5eefd20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors"
                >
                  профилю на Frendi
                </a>
                {' '}или моему каналу в Telegram —{' '}
                <a 
                  href="https://t.me/matovya_creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors inline-flex items-center gap-1"
                >
                  «Хрущевка frendi.ai»
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </a>
              </p>
              <p>
                Вы давно меня просили создать гайд по созданию персонажей, так что представляю вашему вниманию этот гайд.
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 mt-4 sm:mt-5">
                <p className="text-xs sm:text-sm text-purple-200 flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">💡</span>
                  <span>
                    <strong>Совет:</strong> Если вам нужна помощь с составлением инструкций, используйте{' '}
                    <a 
                      href="https://frendi.ai/chat/dcb15e92-989e-42d5-9c0f-2577bd81162b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-200 underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors font-semibold"
                    >
                      Ассистента LLM | AI | RP
                    </a>
                    {' '}на Frendi — он поможет с переводом, структурой и созданием контента для вашего персонажа.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
