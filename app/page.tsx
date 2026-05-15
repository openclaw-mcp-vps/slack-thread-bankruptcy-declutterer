export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Team Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-archive overwhelming<br />
          <span className="text-[#58a6ff]">Slack threads</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop drowning in endless Slack threads. Automatically detect bloated, off-topic conversations and archive them — with smart suggestions to move discussions where they belong.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">For engineering managers &amp; team leads. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Thread Analytics</h3>
            <p className="text-sm text-[#8b949e]">Track length, participants, and topic drift across every thread in your workspace.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">Smart Archiving</h3>
            <p className="text-sm text-[#8b949e]">Set rules once. Threads that exceed your thresholds get archived automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔀</div>
            <h3 className="font-semibold text-white mb-1">Channel Suggestions</h3>
            <p className="text-sm text-[#8b949e]">Get AI-powered recommendations for the right channel to continue each conversation.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Slack workspaces",
              "Real-time webhook monitoring",
              "Automated archiving rules",
              "Channel migration suggestions",
              "Analytics dashboard",
              "Email digest reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to Slack?</h3>
            <p className="text-sm text-[#8b949e]">We use Slack's official OAuth flow. You authorize the app with your workspace and we receive real-time events via webhooks — no passwords stored.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as an "overwhelming" thread?</h3>
            <p className="text-sm text-[#8b949e]">You define the rules: message count, participant count, days of inactivity, or topic drift score. Defaults are sensible out of the box.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I recover archived threads?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Archived threads are never deleted — they're moved to a dedicated archive channel and fully searchable. You can restore any thread with one click.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Slack Thread Bankruptcy Declutterer. All rights reserved.
      </footer>
    </main>
  );
}
