import React from 'react';
import { ArrowRight, Share2, BarChart3, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Automate Your{' '}
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative">Digital Engagement</span>
          </span>{' '}
          Strategy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Seamlessly manage and amplify your organization's digital presence across all platforms. 
          Connect, engage, and analyze - all in one place.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#"
            className="rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started
            <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </a>
          <a
            href="#"
            className="rounded-xl bg-slate-100 px-8 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-200"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </div>
  );
}