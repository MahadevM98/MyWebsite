"use client";

import { TypeAnimation } from 'react-type-animation';

export function Quote() {
  return (
    <section id="quote" className="w-full py-20 md:py-32 flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <TypeAnimation
          sequence={[
            'With a sprinkle of curiosity and a dash of effort, you can turn any challenge into a skill.',
            1000,
            "In today's digital world, technical knowledge is just a journey, not a destination.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl font-mono text-cyan-300/80"
          style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
          repeat={Infinity}
          cursor={true}
        />
      </div>
    </section>
  );
}
