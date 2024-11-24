'use client';

import { useMotionValueEvent, useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full bg-black font-sans" ref={containerRef}>
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-8 lg:px-10">
                <h2 className="mb-6 max-w-4xl text-lg font-semibold text-white sm:text-2xl md:text-4xl xl:text-6xl">
                    My Philosophy
                </h2>
                <p className="max-w-5xl text-sm text-neutral-300 sm:text-base md:text-lg">
                    A balanced approach to physical, mental, and emotional well-being is the foundation of true health. Fitness is not just about building strength in the gym; it&apos;s about nurturing a mindset that supports resilience and self-love. While physical exercise helps to improve body composition and performance, mental well-being is just as crucial. It involves cultivating a positive mindset, managing stress, and fostering emotional resilience. Together, these elements create a sustainable foundation for long-term health and success. I believe that every aspect of life is interconnected, and when we work on improving our physical fitness, we also enhance our mental clarity and emotional stability. This holistic approach ensures that every client can thrive, not just in their workouts, but in every part of their life.
                </p>
            </div>

            <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
                {[
                    {
                        title: 'Holistic Fitness',
                        content: (
                            <div className="flex flex-wrap items-start gap-6">
                                <div className="space-y-4">
                                    <p>
                                        True fitness is about more than just working out — it’s a lifestyle that integrates physical strength, mental resilience, and emotional balance. I focus on helping clients develop sustainable habits that enhance their overall well-being.
                                    </p>
                                    <ul className="list-disc pl-5 text-neutral-300">
                                        <li><strong>Strength:</strong> Building functional strength to enhance daily life and athletic performance.</li>
                                        <li><strong>Conditioning:</strong> Improving cardiovascular endurance, agility, and stamina for a well-rounded fitness base.</li>
                                        <li><strong>Mindfulness:</strong> Developing mental focus and positive habits to stay motivated.</li>
                                    </ul>
                                </div>
                                <img
                                    src="/hw.jpg"
                                    alt="Holistic Fitness"
                                    className="w-full max-w-[12rem] rounded-lg shadow-md object-cover sm:w-48"
                                />
                            </div>
                        ),
                    },
                    {
                        title: 'Nutrition Guidance',
                        content: (
                            <div className="flex flex-wrap items-start gap-6">
                                <div className="space-y-4">
                                    <p>
                                        Nutrition is the cornerstone of health and fitness. I emphasize a balanced and personalized approach that fuels your goals, whether that’s muscle gain, fat loss, or general well-being.
                                    </p>
                                    <ul className="list-disc pl-5 text-neutral-300">
                                        <li><strong>Fueling Performance:</strong> Understanding macronutrients to optimize energy levels and recovery.</li>
                                        <li><strong>Sustainable Habits:</strong> Creating a nutrition plan that fits your lifestyle and long-term goals.</li>
                                        <li><strong>Mindful Eating:</strong> Building awareness around food choices to create a healthy relationship with eating.</li>
                                    </ul>
                                </div>
                                <img
                                    src="/ng.jpg"
                                    alt="Nutrition Guidance"
                                    className="w-full max-w-[12rem] rounded-lg shadow-md object-cover sm:w-48"
                                />
                            </div>
                        ),
                    },
                    {
                        title: 'Strength & Conditioning',
                        content: (
                            <div className="flex flex-wrap items-start gap-6">
                                <div className="space-y-4">
                                    <p>
                                        Whether you&apos;re lifting weights, boxing, or working on functional movement, my philosophy prioritizes building a strong, resilient body. Strength and conditioning aren’t just about looking good — they’re about moving better, feeling better, and performing at your best.
                                    </p>
                                    <ul className="list-disc pl-5 text-neutral-300">
                                        <li><strong>Progressive Overload:</strong> Gradually increasing intensity to safely build strength.</li>
                                        <li><strong>Functional Training:</strong> Exercises designed to mimic real-life movements for improved mobility and stability.</li>
                                        <li><strong>Recovery:</strong> Ensuring adequate rest and active recovery to prevent burnout and injuries.</li>
                                    </ul>
                                </div>
                                <img
                                    src="/sc.jpg"
                                    alt="Strength & Conditioning"
                                    className="w-full max-w-[12rem] rounded-lg shadow-md object-cover sm:w-48"
                                />
                            </div>
                        ),
                    },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:gap-10 md:pt-40">
                        <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                            <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-3">
                                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
                            </div>
                            <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl">{item.title}</h3>
                        </div>

                        <div className="relative w-full pl-6 md:pl-4">
                            <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden">{item.title}</h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + 'px',
                    }}
                    className="absolute left-8 top-0 w-[2px] bg-neutral-700 md:left-8"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 to-transparent"
                    />
                </div>
            </div>
        </div>



    );
};
