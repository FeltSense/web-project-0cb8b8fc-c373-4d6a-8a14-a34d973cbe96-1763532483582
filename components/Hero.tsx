export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating game elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-32 left-[15%] text-6xl animate-float">🎮</div>
    <div className="absolute top-1/4 right-[10%] text-5xl animate-float animation-delay-1000">⭐</div>
    <div className="absolute bottom-1/3 left-[8%] text-4xl animate-float animation-delay-2000">🚀</div>
    <div className="absolute top-1/2 right-[20%] text-5xl animate-float animation-delay-3000">🎯</div>
    <div className="absolute bottom-1/4 right-[12%] text-4xl animate-float animation-delay-1500">💎</div>
  </div>

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left content */}
      <div className="text-center lg:text-left z-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-5 py-2 mb-6 animate-bounce-slow">
          <span className="text-2xl">🎓</span>
          <span className="text-white font-bold text-sm sm:text-base">AI-Powered Learning Revolution</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight">
          Homework
          <span className="block text-yellow-300 drop-shadow-lg animate-pulse-slow">Just Got</span>
          <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Epic! 🔥</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
          Turn boring assignments into <span className="text-yellow-300 font-bold">addictive games</span>. 
          Level up your grades while actually having fun. No cap! 
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-white">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span className="text-2xl">⚡</span>
            <span className="font-bold">80% completion rate</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span className="text-2xl">📈</span>
            <span className="font-bold">40% better scores</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
          <button className="group relative bg-white text-purple-600 px-8 py-4 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Playing Free
              <span className="text-2xl group-hover:rotate-12 transition-transform">🎮</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <span>Watch Demo</span>
            <span className="text-xl">▶️</span>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold">4.9/5 from parents</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span className="font-semibold">Free for 30 days</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-semibold">No credit card</span>
        </div>
      </div>

      {/* Right content - Hero image/mockup */}
      <div className="relative z-10 lg:scale-110">
        {/* Phone mockup container */}
        <div className="relative mx-auto max-w-sm lg:max-w-md">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-[3rem] blur-2xl opacity-60 animate-pulse-slow"></div>
          
          {/* Phone frame */}
          <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 transform hover:rotate-2 transition-transform duration-500">
            {/* Screen */}
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* App content */}
              <div className="px-5 py-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-white/80 text-sm font-medium">Current Quest</p>
                    <h3 className="text-white text-xl font-black">Math Adventure 🎯</h3>
                  </div>
                  <div className="bg-yellow-400 text-purple-900 rounded-full px-3 py-1 font-black text-sm">
                    LVL 12
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-white/20 backdrop-blur-sm rounded-full h-3 mb-6 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-full rounded-full w-3/4 animate-pulse"></div>
                </div>

                {/* Game cards */}
                <div className="space-y-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">🧩</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">Algebra Puzzle</p>
                        <p className="text-sm text-gray-600">Solve 5 equations</p>
                      </div>
                      <div className="text-2xl">⭐⭐⭐</div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">🎲</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">Number Quest</p>
                        <p className="text-sm text-gray-600">Battle the boss!</p>
                      </div>
                      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-300 to-orange-400 rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">🏆</div>
                      <div className="flex-1">
                        <p className="font-black text-gray-900">Daily Bonus!</p>
                        <p className="text-sm text-gray-800 font-bold">+500 XP Available</p>
                      </div>
                      <div className="text-2xl animate-bounce">🎁</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating achievement badges */}
          <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl animate-float border-4 border-yellow-400">
            <div className="text-center">
              <div className="text-4xl mb-1">🎖️</div>
              <p className="text-xs font-black text-gray-800">Streak: 7 days!</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-2xl animate-float animation-delay-2000 border-4 border-green-400">
            <div className="text-center">
              <div className="text-4xl mb-1">💯</div>
              <p className="text-xs font-black text-gray-800">Perfect Score!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm font-medium">Scroll to explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
    .animate-bounce-slow {
      animation: bounce-slow 2s ease-in-out infinite;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    .animation-delay-1500 {
      animation-delay: 1.5s;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>
  );
}