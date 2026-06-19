'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Select all sibling paragraphs inside the container
      const targets = gsap.utils.toArray('.trigger-item');

      targets.forEach((target: any) => {
        ScrollTrigger.create({
          trigger: target,
          start: 'top top', // 'when top of element hits top of viewport'
          onEnter: () => {
            console.log(`${target.innerText} hit the top!`);
            // Change background color dynamically
            gsap.to(target, { backgroundColor: '#ef4444', duration: 0.3 });
          },
          onLeaveBack: () => {
            console.log(`${target.innerText} went back down.`);
            // Revert background color
            gsap.to(target, { backgroundColor: '#3b82f6', duration: 0.3 });
          }
        });

      });
    }, { scope: containerRef }); // Scope selectors to this container

  return (
    <main className="min-h-[200vh] pt-[50vh] bg-gray-900 text-white flex flex-col items-center">
      <p className="mb-20 text-gray-400">Scroll down to see the effect</p>

      {/* Parent Container */}
      <div ref={containerRef} className="flex flex-col gap-20 w-full max-w-md">
        <p className="trigger-item p-6 bg-blue-500 rounded text-center font-bold sticky top-0">
          Brother Element 1
        </p>
        <p className="trigger-item p-6 bg-blue-500 rounded text-center font-bold sticky top-0">
          Brother Element 2
        </p>
        <p className="trigger-item p-6 bg-blue-500 rounded text-center font-bold sticky top-0">
          Brother Element 3
        </p>
      </div>
    </main>
  );
}
