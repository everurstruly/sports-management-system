export default function StatsSection() {
  return (
    <section>
      <div className="max-w-5xl px-5 mx-auto space-y-8 md:space-y-16">
        {/* <div className="relative z-10 max-w-xl mx-auto space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Tailark in numbers</h2>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div> */}

        <div className="grid gap-x-8 gap-y-3 divide-y *:text-center *:py-3 sm:grid-cols-3 sm:gap-2 sm:divide-x sm:divide-y-0">
          <div>
            <div className="font-sans text-2xl">+1200</div>
            <p className="text-xs font-semibold">Stars on GitHub</p>
          </div>
          <div>
            <div className="font-sans text-2xl">22 Million</div>
            <p className="text-xs font-semibold">Active Users</p>
          </div>
          <div>
            <div className="font-sans text-2xl">+500</div>
            <p className="text-xs font-semibold">Powered Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
