'use client';

import React, { useState } from 'react';

const images = [
  '/logo-cloud/tiktok.png',
  '/logo-cloud/linkedin.png',
  '/logo-cloud/bs.png',
  '/logo-cloud/reddit.png',
  '/logo-cloud/ig.png',
  '/logo-cloud/fb.png',
  '/logo-cloud/x.png',
  '/logo-cloud/yt.png',
  '/logo-cloud/gg.png',
  '/logo-cloud/pin.png',
  '/logo-cloud/tg.png',
];

export default function ContinuousScroll() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden w-full bg-transparent py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex w-max whitespace-nowrap animate-scroll ${paused ? 'pause-scroll' : ''}`}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="mx-3 w-24 h-10 lg:w-42 px-2 flex items-center justify-center  border-gray-200 rounded-lg bg-white -sm"
          >
            <img
              src={src}
              alt={`Logo ${index}`}
              className="max-h-10 object-contain filter grayscale contrast-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
