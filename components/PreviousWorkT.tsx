import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timelineT';
import Link from 'next/link';

export default function PreviousWorkT() {


  // <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
  //   {[
  //     {
  //       title: 'Holistic Fitness',
  //       content: (
  //         <div className="flex flex-wrap items-start gap-6">
  //           <div className="space-y-4">
  //             <p>
  //               True fitness is about more than just working out — it’s a lifestyle that integrates physical strength, mental resilience, and emotional balance. I focus on helping clients develop sustainable habits that enhance their overall well-being.
  //             </p>
  //             <ul className="list-disc pl-5 text-neutral-300">
  //               <li><strong>Strength:</strong> Building functional strength to enhance daily life and athletic performance.</li>
  //               <li><strong>Conditioning:</strong> Improving cardiovascular endurance, agility, and stamina for a well-rounded fitness base.</li>
  //               <li><strong>Mindfulness:</strong> Developing mental focus and positive habits to stay motivated.</li>
  //             </ul>
  //           </div>
  //           <img
  //             src="/hw.jpg"
  //             alt="Holistic Fitness"
  //             className="w-full max-w-[12rem] rounded-lg shadow-md object-cover sm:w-48"
  //           />
  //         </div>
  //       ),
  //     },
  //     {
  //       title: 'Nutrition Guidance',
  //       content: (
  //         <div className="flex flex-wrap items-start gap-6">
  //           <div className="space-y-4">
  //             <p>
  //               Nutrition is the cornerstone of health and fitness. I emphasize a balanced and personalized approach that fuels your goals, whether that’s muscle gain, fat loss, or general well-being.
  //             </p>
  //             <ul className="list-disc pl-5 text-neutral-300">
  //               <li><strong>Fueling Performance:</strong> Understanding macronutrients to optimize energy levels and recovery.</li>
  //               <li><strong>Sustainable Habits:</strong> Creating a nutrition plan that fits your lifestyle and long-term goals.</li>
  //               <li><strong>Mindful Eating:</strong> Building awareness around food choices to create a healthy relationship with eating.</li>
  //             </ul>
  //           </div>
  //           <img
  //             src="/ng.jpg"
  //             alt="Nutrition Guidance"
  //             className="w-full max-w-[12rem] rounded-lg shadow-md object-cover sm:w-48"
  //           />
  //         </div>
  //       ),
  //     },
  //     {
  //       title: 'Strength & Conditioning',
  //       content: (
  //         <div className="flex flex-wrap items-start gap-6">
  //           <div className="space-y-4">
  //             <p>
  //               Whether you&apos;re lifting weights, boxing, or working on functional movement, my philosophy prioritizes building a strong, resilient body. Strength and conditioning aren’t just about looking good — they’re about moving better, feeling better, and performing at your best.
  //             </p>
  //             <ul className="list-disc pl-5 text-neutral-300">
  //               <li><strong>Progressive Overload:</strong> Gradually increasing intensity to safely build strength.</li>
  //               <li><strong>Functional Training:</strong> Exercises designed to mimic real-life movements for improved mobility and stability.</li>
  //               <li><strong>Recovery:</strong> Ensuring adequate rest and active recovery to prevent burnout and injuries.</li>
  //             </ul>
  //           </div>
  //           <img
  //             src="/sc.jpg"
  //             alt="Strength & Conditioning"
  //             className="w-full max-w-[12rem] rounded-lg shadow-md object-cover sm:w-48"
  //           />
  //         </div>
  //       ),
  //     },
  //   ].map((item, index) => (
  //     <div key={index} className="flex flex-col md:flex-row md:gap-10 md:pt-40">
  //       <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
  //         <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-3">
  //           <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
  //         </div>
  //         <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl">{item.title}</h3>
  //       </div>

  //       <div className="relative w-full pl-6 md:pl-4">
  //         <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden">{item.title}</h3>
  //         {item.content}
  //       </div>
  //     </div>
  //   ))}
  //   <div
  //     style={{
  //       height: height + 'px',
  //     }}
  //     className="absolute left-8 top-0 w-[2px] bg-neutral-700 md:left-8"
  //   >
  //     <motion.div
  //       style={{
  //         height: heightTransform,
  //         opacity: opacityTransform,
  //       }}
  //       className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 to-transparent"
  //     />
  //   </div>
  // </div>
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
