'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/logo-cloud/savvycal.svg',
  '/logo-cloud/savvycal.svg',
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
  '/logo-cloud/savvycal.svg',
];

export default function ImageCarousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 4 },
      },
    ],
  };

  return (
    <div className="w-full py-6 -mt-8 lg:mt-8 px-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="w-full h-[60px] overflow-hidden bg-white flex items-center justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain filter grayscale contrast-200"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
