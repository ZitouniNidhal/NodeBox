import React from 'react';

const metrics = [
  { value: '12 ms',   label: 'COLD START'          },
  { value: '1 ms',    label: 'SANDBOX DESTROY'      },
  { value: '6 MB',    label: 'MEMORY PER SANDBOX'   },
  { value: '1 200',   label: 'SANDBOXES / 8 GB NODE' },
];

export const MetricsBanner: React.FC = () => (
  <div className="border-y border-white/[0.06] bg-[#080808]">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="py-5 px-6 flex flex-col gap-1 group hover:bg-white/[0.02] transition-colors"
          >
            <span className="text-2xl sm:text-3xl font-black font-mono text-orange-400 group-hover:text-orange-300 transition-colors">
              {value}
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-widest text-slate-500 uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
