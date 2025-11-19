import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
  {/* Floating game elements background */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 text-6xl animate-bounce">🎮</div>
    <div className="absolute top-40 right-20 text-5xl animate-pulse">⭐</div>
    <div className="absolute bottom-32 left-1/4 text-7xl animate-bounce delay-100">🏆</div>
    <div className="absolute bottom-20 right-1/3 text-6xl animate-pulse delay-200">🎯</div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
        <span className="text-white font-bold text-sm uppercase tracking-wider">Real Results</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
        Students Actually Love<br />Doing Homework Now 🤯
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
        Don&apos;t just take our word for it—see how we&apos;re turning homework tears into victory cheers
      </p>
    </div>

    {/* Testimonials grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      
      {/* Testimonial 1 - Student */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-purple-200 hover:border-purple-400">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-3 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
          <span className="text-3xl">🎮</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://i.pravatar.cc/150?img=22" 
              width={64} 
              height={64} 
              alt="Maya Chen profile"
              className="rounded-2xl border-4 border-purple-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">Maya Chen</h3>
            <p className="text-purple-600 font-semibold text-sm">8th Grader, Chicago</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📈</span>
            <span className="font-black text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              B → A+
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-600">Math grade in 6 weeks</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "I used to DREAD math homework. Now I literally race my brother to finish assignments first because it feels like playing Zelda but I&apos;m actually learning fractions. My teacher asked what changed and I told her about the dungeon puzzles—she didn&apos;t believe me until she saw my test scores! 🎯"
        </p>
      </div>

      {/* Testimonial 2 - Parent */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-pink-200 hover:border-pink-400">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-3 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
          <span className="text-3xl">🙌</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://i.pravatar.cc/150?img=47" 
              width={64} 
              height={64} 
              alt="Jennifer Martinez profile"
              className="rounded-2xl border-4 border-pink-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
              <span className="text-white text-xs font-bold">👍</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">Jennifer Martinez</h3>
            <p className="text-pink-600 font-semibold text-sm">Parent of 3, Austin TX</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⏰</span>
            <span className="font-black text-3xl bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">
              2.5 hrs saved
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-600">Every single evening</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "Homework time went from a 2-hour battle with tears and yelling to 30 minutes of my kids actually ASKING to do assignments. The parent dashboard shows me exactly where they struggle, and I&apos;m not constantly checking &apos;did you finish?&apos; The family plan pays for itself just in saved sanity. Best $20/month I spend! 💜"
        </p>
      </div>

      {/* Testimonial 3 - Teacher */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-yellow-200 hover:border-yellow-400 md:col-span-2 lg:col-span-1">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-3 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
          <span className="text-3xl">📚</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://i.pravatar.cc/150?img=33" 
              width={64} 
              height={64} 
              alt="Mr. David Thompson profile"
              className="rounded-2xl border-4 border-yellow-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-1">
              <span className="text-white text-xs font-bold">🏆</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">Mr. David Thompson</h3>
            <p className="text-yellow-600 font-semibold text-sm">5th Grade Teacher, Seattle</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">✅</span>
            <span className="font-black text-3xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              94% completion
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-600">Up from 67% last year</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "In 18 years of teaching, I&apos;ve never seen homework completion rates this high. The comprehension analytics show me EXACTLY which concepts each student struggles with—not just &apos;wrong answer&apos; but WHY. My struggling readers are finally engaging because of the text-to-speech. This is the future of homework. 🚀"
        </p>
      </div>

      {/* Testimonial 4 - Student (younger) */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-green-200 hover:border-green-400">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl p-3 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
          <span className="text-3xl">🌟</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://i.pravatar.cc/150?img=15" 
              width={64} 
              height={64} 
              alt="Liam Parker profile"
              className="rounded-2xl border-4 border-green-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-1">
              <span className="text-white text-xs font-bold">⚡</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">Liam Parker</h3>
            <p className="text-green-600 font-semibold text-sm">4th Grader, Denver</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎯</span>
            <span className="font-black text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Level 47
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-600">Highest in his class!</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "My character is a space explorer and every science question helps me discover new planets! I got to name one &apos;Liamtopia&apos; 😂. My friends think homework is boring but I show them my achievements and now 6 kids from my class use it. Can you add dinosaurs next?? That would be SO COOL! 🦖"
        </p>
      </div>

      {/* Testimonial 5 - Parent (single parent) */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-indigo-200 hover:border-indigo-400">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-3 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
          <span className="text-3xl">💪</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://i.pravatar.cc/150?img=38" 
              width={64} 
              height={64} 
              alt="Rashida Johnson profile"
              className="rounded-2xl border-4 border-indigo-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-pink-500 rounded-full p-1">
              <span className="text-white text-xs font-bold">💖</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">Rashida Johnson</h3>
            <p className="text-indigo-600 font-semibold text-sm">Working Mom, Atlanta</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💰</span>
            <span className="font-black text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              $400/mo saved
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-600">No more tutoring needed</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "As a single mom working two jobs, I can&apos;t always help with homework. This app IS the help. My daughter Sofia went from needing $100/week tutoring to doing everything independently. The progress notifications keep me in the loop even when I&apos;m at work. She&apos;s proud, I&apos;m proud, and we&apos;re saving money. Win-win-win! 🎉"
        </p>
      </div>

      {/* Testimonial 6 - Homeschool parent */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-orange-200 hover:border-orange-400">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-3 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
          <span className="text-3xl">🏡</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://i.pravatar.cc/150?img=41" 
              width={64} 
              height={64} 
              alt="Emily Rodriguez profile"
              className="rounded-2xl border-4 border-orange-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
              <span className="text-white text-xs font-bold">✨</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-gray-900">Emily Rodriguez</h3>
            <p className="text-orange-600 font-semibold text-sm">Homeschool Mom, Phoenix</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">👥</span>
            <span className="font-black text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              4 kids
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-600">All learning independently</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "Homeschooling 4 kids (ages 6-14) was overwhelming until Homework Gamifier. Each child works at their own pace with personalized game themes. My 6yo has a fairy tale world, my 14yo chose sci-fi. The adaptive learning means I'm not constantly switching between grade levels. They actually ASK for more 'game time'—which is learning! 🌈"
        </p>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 p-1 rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
        <div className="bg-white px-8 py-6 rounded-3xl">
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Ready to end homework battles? 🎮✨
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Join <span className="font-bold text-purple-600">10,000+ families</span> who made homework fun
          </p>
          <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 text-white font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
            Start Free Trial Today →
          </button>
          <p className="text-sm text-gray-500 mt-3">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}