import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  FileText,
  Loader2,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';

export type PageType = 'faq' | 'contact' | 'privacy' | 'terms';

interface SupportPageProps {
  page: PageType;
  onNavigate: (page: PageType | 'home') => void;
}

const faqItems = [
  {
    question: 'What is NodeBox and how is it different from Docker or a VM?',
    answer:
      'NodeBox runs untrusted JavaScript or TypeScript inside lightweight V8 isolates with a very small memory footprint and fast startup times. It is designed for tool execution, sandboxed code evaluation, and agentic workflows rather than general-purpose long-running server hosting.',
  },
  {
    question: 'Does NodeBox support MCP and AI agent tool execution?',
    answer:
      'Yes. NodeBox is designed for Model Context Protocol-compatible tool execution and tool isolation in environments where trust boundaries matter. This makes it useful for agent runtimes and local tool orchestration.',
  },
  {
    question: 'Can I run it locally without a cloud service?',
    answer:
      'Yes. The project emphasizes local-first execution and edge-friendly deployment. It can be used on developer machines, CI runners, and lightweight runtime environments without requiring a full container runtime for every sandbox.',
  },
  {
    question: 'What kinds of workloads are appropriate for NodeBox?',
    answer:
      'It is best suited for isolated code execution, dynamic tool workflows, agent sandboxing, data processing tasks, and controlled runtime environments where security and low overhead are important.',
  },
  {
    question: 'Are there any restrictions on network access or filesystem use?',
    answer:
      'The runtime is meant to include security boundaries such as syscall filtering, memory limits, egress restrictions, and in-memory file systems. Policy controls can be defined around execution limits, domain allowlists, and resource constraints.',
  },
];

const quickLinks = [
  { label: 'Documentation', href: '#faq', icon: FileText },
  { label: 'Contact support', href: '#contact', icon: Mail },
  { label: 'Privacy policy', href: '#privacy', icon: ShieldCheck },
  { label: 'Terms of service', href: '#terms', icon: CheckCircle2 },
];

export function SupportPage({ page, onNavigate }: SupportPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setLoadError(null);
    const timer = window.setTimeout(() => {
      try {
        if (!faqItems.length) {
          setLoadError('No FAQ entries are currently available.');
        }
      } catch {
        setLoadError('Something went wrong while loading the FAQ.');
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, [page]);

  const pageTitle = useMemo(() => {
    switch (page) {
      case 'faq':
        return 'Frequently asked questions';
      case 'contact':
        return 'Contact the NodeBox team';
      case 'privacy':
        return 'Privacy policy';
      case 'terms':
        return 'Terms of service';
      default:
        return 'Support';
    }
  }, [page]);

  const handleFieldChange = (field: keyof typeof formState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormError('Please complete your name, email, and message before sending.');
      setFormStatus('error');
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setFormError('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setFormError('');

    window.setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 450);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-mono uppercase tracking-[0.25em] text-orange-400">Support</p>
          <h1 className="text-3xl font-black text-white md:text-4xl">{pageTitle}</h1>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-orange-500/40 hover:text-white"
        >
          Return home
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-[#0f1116] p-4">
          <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">Pages</p>
          <nav aria-label="Support navigation" className="space-y-2">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => onNavigate(href.replace('#', '') as PageType | 'home')}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                  page === href.replace('#', '')
                    ? 'border-orange-500/40 bg-orange-500/10 text-orange-200'
                    : 'border-white/5 bg-white/[0.02] text-slate-300 hover:border-white/10 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ArrowRight className="h-4 w-4 opacity-60" />
              </button>
            ))}
          </nav>
        </aside>

        <main className="rounded-2xl border border-white/10 bg-[#0b0d12] p-6 md:p-8">
          {page === 'faq' && (
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-slate-300">
                <MessageSquareText className="h-5 w-5 text-orange-400" />
                <p className="text-sm font-medium">Knowledge base</p>
              </div>

              {isLoading ? (
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-slate-300" role="status" aria-live="polite">
                  <Loader2 className="h-4 w-4 animate-spin text-orange-400" />
                  Loading frequently asked questions...
                </div>
              ) : loadError ? (
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-red-200" role="alert">
                  <div className="flex items-center gap-2">
                    <CircleAlert className="h-4 w-4" />
                    {loadError}
                  </div>
                </div>
              ) : faqItems.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-slate-300" role="status">
                  No FAQ entries are currently available.
                </div>
              ) : (
                <div className="space-y-3">
                  {faqItems.map((item, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                      <div key={item.question} className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                        <button
                          type="button"
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
                          className="flex w-full items-center justify-between gap-4 p-4 text-left"
                          aria-expanded={isExpanded}
                        >
                          <span className="font-medium text-slate-100">{item.question}</span>
                          <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {isExpanded && (
                          <div className="border-t border-white/10 px-4 py-4 text-sm leading-7 text-slate-300">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {page === 'contact' && (
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm text-slate-300">
                  Reach the NodeBox team for product questions, partnership requests, enterprise support, or issues with the runtime.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-sm text-slate-300">
                    <span className="mb-2 block">Name</span>
                    <input
                      value={formState.name}
                      onChange={(event) => handleFieldChange('name', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                      placeholder="Your name"
                      aria-label="Name"
                    />
                  </label>

                  <label className="block text-sm text-slate-300">
                    <span className="mb-2 block">Email</span>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(event) => handleFieldChange('email', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                      placeholder="name@company.com"
                      aria-label="Email"
                    />
                  </label>
                </div>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Company</span>
                  <input
                    value={formState.company}
                    onChange={(event) => handleFieldChange('company', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                    placeholder="Optional"
                    aria-label="Company"
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Message</span>
                  <textarea
                    value={formState.message}
                    onChange={(event) => handleFieldChange('message', event.target.value)}
                    className="min-h-[160px] w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                    placeholder="Tell us about your use case, integration, or issue."
                    aria-label="Message"
                  />
                </label>

                {formStatus === 'error' && (
                  <div className="rounded-xl border border-red-500/25 bg-red-500/5 p-3 text-sm text-red-200" role="alert">
                    {formError}
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3 text-sm text-emerald-200" role="status">
                    Your message has been queued successfully. Our team will get back to you shortly.
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send message'
                    )}
                  </button>

                  <span className="text-xs text-slate-500">Typical response time: 1–2 business days</span>
                </div>
              </form>
            </div>
          )}

          {page === 'privacy' && (
            <div className="space-y-5 text-sm leading-7 text-slate-300">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium text-slate-100">Privacy policy</p>
              </div>
              <p>
                NodeBox respects the privacy of developers, evaluators, and visitors who use the project website or SDK materials. We do not intentionally collect personal data beyond what is needed to improve documentation, support, and product quality.
              </p>
              <p>
                When you submit a contact form, we may retain the information you provide in order to respond to your request. We do not sell your data, and we keep collection to the minimum required for support, communication, and product reliability.
              </p>
              <p>
                The runtime itself is designed to run locally and to minimize data exfiltration. In security-sensitive environments, deployments should enforce their own retention, logging, and access policies according to the requirements of the host environment.
              </p>
            </div>
          )}

          {page === 'terms' && (
            <div className="space-y-5 text-sm leading-7 text-slate-300">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-medium text-slate-100">Terms of service</p>
              </div>
              <p>
                NodeBox is provided as an open-source runtime and associated website materials for educational, development, and experimentation purposes. It is not a managed SaaS product unless separately offered by a provider.
              </p>
              <p>
                Users are responsible for evaluating security, regulatory, and operational suitability before using NodeBox in production environments. This includes defining resource limits, network policies, and appropriate monitoring for any workloads executed within isolated sandboxes.
              </p>
              <p>
                The project is distributed under the MIT License, and source code contributions are governed by the repository’s contribution policies. No warranty is provided beyond the terms expressed in the repository and applicable open-source license.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
