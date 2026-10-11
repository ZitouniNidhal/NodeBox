import React from 'react';
import { BarChart3 } from 'lucide-react';

export const Benchmarks: React.FC = () => {
  const metricCards = [
    {
      title: 'Cold Start Latency (Lower is better)',
      unit: 'ms',
      footer: 'NodeBox achieves superior efficiency & density',
      items: [
        { name: 'NodeBox Isolate Engine', value: 12, color: 'from-cyan-400 to-sky-500', highlight: true },
        { name: 'ArcBox Labs', value: 48, color: 'from-sky-500 to-indigo-500', highlight: false },
        { name: 'E2B Sandboxes', value: 210, color: 'from-slate-600 to-slate-500', highlight: false },
        { name: 'Docker Container', value: 850, color: 'from-slate-700 to-slate-600', highlight: false },
      ],
    },
    {
      title: 'Max Concurrent Sandboxes per 8GB Server (Higher is better)',
      unit: 'instances',
      footer: 'NodeBox achieves superior efficiency & density',
      items: [
        { name: 'NodeBox Isolate Engine', value: 1200, color: 'from-cyan-400 to-sky-500', highlight: true },
        { name: 'ArcBox Labs', value: 250, color: 'from-sky-500 to-indigo-500', highlight: false },
        { name: 'E2B Sandboxes', value: 60, color: 'from-slate-600 to-slate-500', highlight: false },
        { name: 'Docker Container', value: 30, color: 'from-slate-700 to-slate-600', highlight: false },
      ],
    },
  ];

  return (
    <section id="benchmarks" className="border-b border-white/5 bg-[#030c17] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="text-5xl font-black tracking-[-0.06em] text-white md:text-6xl lg:text-[7rem] leading-[0.94]">
            Empirical Benchmark <span className="bg-gradient-to-r from-[#7ee9ff] via-[#4ed7de] to-[#7aa7ff] bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300 md:text-2xl">
            Tested on Apple M3 Max &amp; AWS c6i.4xlarge nodes running NodeBox 1.4 vs ArcBox vs E2B vs Docker engine.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {metricCards.map((metric, index) => {
            const maxValue = Math.max(...metric.items.map((item) => Number(item.value)));

            return (
              <div
                key={metric.title}
                className="rounded-[28px] border border-[#1a2a39] bg-[#071421] p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] md:p-6"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h3 className="max-w-[88%] text-[1.7rem] font-extrabold leading-[1.1] tracking-[-0.05em] text-slate-100 md:text-[2.2rem]">
                    {metric.title}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-[#0d1725] text-slate-400">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-5">
                  {metric.items.map((item) => {
                    const width = Math.max((Number(item.value) / maxValue) * 100, 12);

                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-4 text-[0.95rem] font-medium md:text-[1.1rem]">
                          <span className={item.highlight ? 'text-[#67dff6]' : 'text-slate-300'}>{item.name}</span>
                          <span className={item.highlight ? 'text-[#67dff6]' : 'text-slate-400'}>
                            {item.value} {metric.unit}
                          </span>
                        </div>

                        <div className="h-2.5 w-full overflow-hidden rounded-full border border-white/5 bg-[#0d1a2c]">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${item.color} ${item.highlight ? 'shadow-[0_0_12px_rgba(72,204,255,0.45)]' : ''}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-[0.84rem] font-medium text-slate-400 md:text-[0.9rem]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#59d9f5]" />
                  {metric.footer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
