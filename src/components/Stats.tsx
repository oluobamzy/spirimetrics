import React from 'react';

const stats = [
  { id: 1, name: 'Organizations using our platform', value: '500+' },
  { id: 2, name: 'Average engagement increase', value: '150%' },
  { id: 3, name: 'Posts automated monthly', value: '50K+' },
  { id: 4, name: 'Time saved per week', value: '15hrs' },
];

export function Stats() {
  return (
    <div className="bg-indigo-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-200">
              Our platform helps organizations increase engagement and save time
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-indigo-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}