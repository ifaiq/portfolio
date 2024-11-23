import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoDocumentTextOutline } from 'react-icons/io5';

const AboutT: React.FC = () => {
    return (
        <div
            id="about"
            className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-8 overflow-hidden px-4 py-8 text-[#f0f0f0] sm:space-y-12 sm:py-12 md:py-16"
        >
            <div className="flex w-full max-w-6xl flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
                <div className="flex w-full flex-col items-start justify-center space-y-4 rounded-xl border border-[#292929] p-4 sm:space-y-6 sm:p-6 md:space-y-8">
                    <h1 className="text-3xl font-extrabold sm:text-4xl md:text-6xl lg:text-7xl">Welcome to My Fitness Journey!</h1>
                    <div className="space-y-2 text-sm text-[#8b8b8b] sm:text-base md:text-lg lg:text-xl">
                        <p>
                            I’m <span className="font-bold">Faiq Shariff</span>, a passionate fitness enthusiast and personal trainer committed to helping individuals unlock their full potential. With years of experience in weightlifting, boxing, and martial arts, I understand the importance of balancing strength, endurance, and mental well-being.
                        </p>
                        <p>
                            Fitness isn’t just about physical transformation — it’s a lifestyle that empowers you to grow stronger, inside and out. While I’m relatively new to professional training, I’ve spent countless hours mastering the techniques that have helped me and others achieve incredible results.
                        </p>
                        <p>
                            My focus is on sustainable progress, personalized coaching, and building a strong foundation for long-term health. When I’m not training, you’ll find me exploring new fitness methodologies, geeking out over workout plans, or refining my knowledge to deliver top-tier guidance to my clients.
                        </p>
                    </div>
                </div>
                {/* <div className="aspect-video h-full w-full overflow-hidden rounded-xl border border-[#292929] md:aspect-square md:w-fit">
                    <Image
                        src="/fitness-journey.jpg"
                        alt="Fitness Journey"
                        width={295}
                        height={295}
                        className="h-full w-full object-cover"
                    />
                </div> */}
            </div>
            {/* <button className="flex items-center space-x-2 rounded-xl border border-[#292929] p-2 font-semibold text-[#f0f0f0] transition-all duration-300 hover:scale-105 sm:p-3">
                <IoDocumentTextOutline size={20} className="sm:text-2xl" />{' '}
                <span className="text-sm sm:text-base">View My Resume</span>
            </button> */}
        </div>
    );
};

export default AboutT;
