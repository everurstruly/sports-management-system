type StatsSectionProps = {
  className?: string;
};

export default function StatsBlock({ className }: StatsSectionProps) {
  return (
    <div
      className={
        "*:text-center sm:*:px-4 *:px-3.5 grid grid-cols-3 divide-x divide-zinc-400" +
        (className ? ` ${className}` : "")
      }
    >
      <div>
        <h5 className="font-medium text-sm md:text-2xl mb-1">+1200</h5>
        <p className="text-xs font-medium leading-3.5">Stars on GitHub</p>
      </div>
      <div>
        <h5 className="font-medium text-sm md:text-2xl mb-1">22 Million</h5>
        <p className="text-xs font-medium leading-3.5">Active Users</p>
      </div>
      <div>
        <h5 className="font-medium text-sm md:text-2xl mb-1">+500</h5>
        <p className="text-xs font-medium leading-3.5">Powered Apps</p>
      </div>
    </div>
  );
}

{
  /* <div className="relative z-10 max-w-xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl font-medium lg:text-5xl">Tailark in numbers</h2>
        <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
    </div> */
}
