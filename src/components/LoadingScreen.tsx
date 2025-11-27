export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Taoist symbol animation */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Yin Yang symbol */}
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-spin">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-black"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full border-2 border-white"></div>
          </div>

          {/* Central dot */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Loading text */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-2">
            正在排盘中
          </h3>
          <p className="text-yellow-300 loading-dots text-lg">请稍候</p>
        </div>

        {/* Traditional Chinese elements */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-yellow-400 animate-pulse">
            <div className="text-4xl mb-2">🌟</div>
            <div className="text-sm">天干</div>
          </div>
          <div className="text-red-400 animate-pulse delay-100">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-sm">地支</div>
          </div>
          <div className="text-green-400 animate-pulse delay-200">
            <div className="text-4xl mb-2">🌿</div>
            <div className="text-sm">五行</div>
          </div>
          <div className="text-blue-400 animate-pulse delay-300">
            <div className="text-4xl mb-2">💧</div>
            <div className="text-sm">阴阳</div>
          </div>
          <div className="text-gray-400 animate-pulse delay-400">
            <div className="text-4xl mb-2">⛰️</div>
            <div className="text-sm">八卦</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-8">
          <div className="relative h-2 bg-black/30 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-500 rounded-full animate-loading-move"></div>
          </div>
        </div>

        {/* Ancient wisdom quotes */}
        <div className="text-center text-gray-400 text-sm max-w-md mx-auto">
          <p className="mb-2">&quot;天人感应，五行相生&quot;</p>
          <p className="mb-2">&quot;察天时，顺地利，应人和&quot;</p>
          <p>&quot;命里有时终须有，命里无时莫强求&quot;</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-yellow-500/20 text-6xl animate-float">
          道
        </div>
        <div className="absolute bottom-20 right-10 text-yellow-500/20 text-5xl animate-float animation-delay-2000">
          易
        </div>
        <div className="absolute top-1/2 left-5 text-yellow-500/20 text-4xl animate-float animation-delay-1000">
          命
        </div>
        <div className="absolute top-1/2 right-5 text-yellow-500/20 text-4xl animate-float animation-delay-3000">
          理
        </div>

        <style jsx>{`
          @keyframes loading-move {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-loading-move {
            animation: loading-move 2s infinite;
          }

          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-400 { animation-delay: 400ms; }

          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-3000 { animation-delay: 3s; }
        `}</style>
      </div>
    </div>
  );
}