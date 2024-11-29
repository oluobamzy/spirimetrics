import React from 'react';
import { Share2, BarChart3, Mail, Clock, Users, FileText } from 'lucide-react';

const features = [
  {
    name: 'Unified Social Posting',
    description: 'Post content across all social platforms simultaneously with just one click.',
    icon: Share2,
  },
  {
    name: 'Engagement Analytics',
    description: 'Track member engagement, time spent, and sharing metrics in real-time.',
    icon: BarChart3,
  },
  {
    name: 'Automated Email Campaigns',
    description: 'Send personalized messages to your email list when new content is published.',
    icon: Mail,
  },
  {
    name: 'Scheduled Publishing',
    description: 'Plan and schedule your content ahead of time for optimal engagement.',
    icon: Clock,
  },
  {
    name: 'Member Management',
    description: 'Easily manage and track your organization\'s member engagement.',
    icon: Users,
  },
  {
    name: 'Content Distribution',
    description: 'Automatically distribute sermon notes and content across all channels.',
    icon: FileText,
  },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for powerful engagement
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to manage your digital presence and engage with your community effectively.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}