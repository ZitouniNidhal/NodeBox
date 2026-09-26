import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-semibold tracking-wider text-orange-400 uppercase mb-3">
            System Architecture
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Why NodeBox is <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-green-400 bg-clip-text text-transparent">10x Faster & Lighter</span>
          </p>
          <p className="mt-4 text-slate-400 text-sm">
            Comparison between traditional container hypervisors (Docker / QEMU / ArcBox) vs NodeBox V8 Isolate snapshot pools.
          </p>
        </div>

        {/* 3D Visual Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group max-w-5xl mx-auto">
          <img
            src="/images/nodebox_3d_architecture.jpg"
            alt="NodeBox 3D Architecture Layers"
            className="w-full max-h-[380px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-orange-300">
            <span className="bg-[#0a0a0a]/90 px-3 py-1.5 rounded-lg border border-orange-500/30">
              Layer 1: V8 Isolate Execution Pool &bull; Layer 2: MemFS Snapshot &bull; Layer 3: Seccomp-BPF Guard
            </span>
            <span className="text-green-400 font-bold bg-[#0a0a0a]/90 px-3 py-1.5 rounded-lg border border-green-500/30 hidden sm:block">
              Zero-Disk I/O Overhead
            </span>
          </div>
        </div>

        {/* Architecture Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Container Card */}
          <div className="glass-card rounded-2xl p-6 border-white/10 bg-white/[0.02] relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-200">Traditional MicroVM / Docker</h3>
                  <p className="text-xs text-slate-400">QEMU, Firecracker, Containerd</p>
                </div>
              </div>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20">
                100ms - 800ms boot
              </span>
            </div>

            {/* Stack Visual */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg text-slate-300 flex justify-between">
                <span>User AI Code / Node Process</span>
                <span className="text-slate-500">App Space</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-lg text-slate-400 flex justify-between">
                <span>Full Linux Kernel + RootFS (glibc, systemd)</span>
                <span className="text-rose-400">Heavy (~150MB)</span>
              </div>
              <div className="p-3 bg-white/[0.01] border border-white/10 rounded-lg text-slate-500 flex justify-between">
                <span>Hypervisor Layer (QEMU / KVM / Firecracker)</span>
                <span className="text-rose-400">High Overhead</span>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded-lg text-slate-600 flex justify-between">
                <span>Host Kernel & Hardware</span>
                <span className="text-slate-500">Physical Server</span>
              </div>
            </div>
          </div>

          {/* NodeBox Card */}
          <div className="glass-card rounded-2xl p-6 border-orange-500/30 bg-white/[0.03] relative shadow-xl shadow-orange-500/5">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-orange-500/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100">NodeBox V8 Isolate Architecture</h3>
                  <p className="text-xs text-orange-300">Local-first Isolate Snapshot Pool</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded border border-green-500/30">
                &lt; 14ms boot
              </span>
            </div>

            {/* Stack Visual */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-200 flex justify-between font-bold">
                <span>Untrusted AI Tool / JS Execution</span>
                <span className="text-orange-400">Isolate Sandbox</span>
              </div>
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg text-slate-300 flex justify-between">
                <span>POSIX Virtual Memory FS (MemFS)</span>
                <span className="text-green-400">Zero-Disk (&lt; 1ms)</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/10 rounded-lg text-slate-400 flex justify-between">
                <span>Seccomp-BPF Guard & Network Policy</span>
                <span className="text-green-400">Zero-Trust Shield</span>
              </div>
              <div className="p-3 bg-white/[0.01] border border-white/10 rounded-lg text-slate-500 flex justify-between">
                <span>NodeBox Host Engine & V8 Worker Pool</span>
                <span className="text-orange-400">Ultra-Light (~6MB)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

