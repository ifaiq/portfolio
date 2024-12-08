import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timelineT';
import Link from 'next/link';

export default function PreviousWorkT() {

  const data = [
    {
      title: 'Holistic Fitness',
      content: (
        <div>
          <p className="pl-5 text-neutral-300">
            True fitness is about more than just working out — it’s a lifestyle that integrates physical strength, mental resilience, and emotional balance. I focus on helping clients develop sustainable habits that enhance their overall well-being.

          </p>
          <br />
          <ul className="list-disc pl-5 text-neutral-300">
            <li><strong>Strength:</strong> Building functional strength to enhance daily life and athletic performance.</li>
            <li><strong>Conditioning:</strong> Improving cardiovascular endurance, agility, and stamina for a well-rounded fitness base.</li>
            <li><strong>Mindfulness:</strong> Developing mental focus and positive habits to stay motivated.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/hw.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/16.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Nutrition Guidance',
      content: (
        <div>
          <p className="pl-5 text-neutral-300">
            Nutrition is the cornerstone of health and fitness. I emphasize a balanced and personalized approach that fuels your goals, whether that’s muscle gain, fat loss, or general well-being.</p>
          <br />

          <ul className="list-disc pl-5 text-neutral-300">
            <li><strong>Fueling Performance:</strong> Understanding macronutrients to optimize energy levels and recovery.</li>
            <li><strong>Sustainable Habits:</strong> Creating a nutrition plan that fits your lifestyle and long-term goals.</li>
            <li><strong>Mindful Eating:</strong> Building awareness around food choices to create a healthy relationship with eating.</li>
          </ul>

          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/ng.jpg"
              alt="Nutrition Guidance" width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Strength & Conditioning',
      content: (
        <div>
          <p className="pl-5 text-neutral-300">
            Whether you&apos;re lifting weights, boxing, or working on functional movement, my philosophy prioritizes building a strong, resilient body. Strength and conditioning aren’t just about looking good — they’re about moving better, feeling better, and performing at your best.
          </p>
          <br />

          <ul className="list-disc pl-5 text-neutral-300">
            <li><strong>Progressive Overload:</strong> Gradually increasing intensity to safely build strength.</li>
            <li><strong>Functional Training:</strong> Exercises designed to mimic real-life movements for improved mobility and stability.</li>
            <li><strong>Recovery:</strong> Ensuring adequate rest and active recovery to prevent burnout and injuries.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/sc.jpg"
              alt="Strength & Conditioning"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/ste.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-black" id="prev-work">
      <Timeline data={data} />
    </div>
  );
}
