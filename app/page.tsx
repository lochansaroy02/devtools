"use client";

import {
  ArrowRight,
  Binary,
  Braces,
  CaseUpper,
  Clock,
  Fingerprint,
  SearchCode,
  ShieldCheck,
  Type
} from "lucide-react";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  const tools = [
    {
      title: "Word Counter",
      description: "Analyze text length, word count, and reading time.",
      link: "/word-counter",
      icon: <Type size={24} />,
      color: "text-blue-500",
    },
    {
      title: "Case Converter",
      description: "Switch between camelCase, snake_case, and more.",
      link: "/case-converter",
      icon: <CaseUpper size={24} />,
      color: "text-purple-500",
    },
    {
      title: "Base Converter",
      description: "Convert numbers between Binary, Hex, and Decimal.",
      link: "/base-converter",
      icon: <Binary size={24} />,
      color: "text-emerald-500",
    },
    {
      title: "JSON Formatter",
      description: "Beautify or minify complex JSON data structures.",
      link: "/json-formatter",
      icon: <Braces size={24} />,
      color: "text-orange-500",
    },
    {
      title: "Hash Generator",
      description: "Securely generate MD5, SHA-256, and SHA-512 hashes.",
      link: "/hash-generator",
      icon: <Fingerprint size={24} />,
      color: "text-pink-500",
    },
    {
      title: "JWT Decoder",
      description: "Inspect and decode JSON Web Tokens instantly.",
      link: "/jwt-decoder",
      icon: <ShieldCheck size={24} />,
      color: "text-cyan-500",
    },
    {
      title: "Timestamp Converter",
      description: "Convert Unix timestamps to human-readable dates.",
      link: "/timestamp-converter",
      icon: <Clock size={24} />,
      color: "text-indigo-500",
    },
    {
      title: "Regex Tester",
      description: "Test and debug regular expressions in real-time.",
      link: "/regex-tester",
      icon: <SearchCode size={24} />,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Developer Tools Kit
        </h1>
        <p className="text-lg text-zinc-500 max-w-2xl">
          A suite of lightweight, client-side utilities designed to speed up your development workflow. No data leaves your browser.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <button
            key={tool.title}
            onClick={() => router.push(tool.link)}
            className="group relative flex flex-col items-start p-6 rounded-2xl border border-zinc-200 bg-white text-left transition-all hover:shadow-xl hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            {/* Tool Icon */}
            <div className={`mb-4 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900 ${tool.color} transition-transform group-hover:scale-110`}>
              {tool.icon}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                {tool.title}
                <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-zinc-400" />
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {tool.description}
              </p>
            </div>

            {/* Subtle Gradient Hover Effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-zinc-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {/* Footer Branding */}
      <div className="pt-10 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-4 grayscale opacity-50">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Built for Developers</span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;