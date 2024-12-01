'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Code, Dumbbell } from "lucide-react"
import { useRouter } from 'next/navigation'
import { SetStateAction } from 'react'

interface SummaryProps {
    onNavigate: (profile: SetStateAction<string>) => void;
}
export default function Summary({ onNavigate }: SummaryProps) {
    const router = useRouter()
    const sceneVariants = {
        initial: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    }

    return (
        <div>
            <motion.div
                key="summary"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={sceneVariants}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl flex flex-col md:flex-row items-stretch rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex w-full flex-col md:flex-row">
                    {/* Left Side - Software Engineer */}
                    <div className="flex-1 p-8 space-y-4 bg-black text-white rounded-tl-lg rounded-bl-lg flex flex-col justify-between items-center">
                        <h2 className="text-2xl font-bold">Software Engineer</h2>
                        <p className="text-gray-400 text-center max-w-xs">
                            With 6 years of expertise, I design and develop high-performance backend systems using Node.js, Python, and cloud technologies, creating intelligent solutions for optimal user experiences.
                        </p>
                        <Button
                            onClick={() => router.push('/engineer')}
                            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                        >
                            <Code className="mr-2 h-4 w-4" /> Learn More
                        </Button>
                    </div>

                    {/* Right Side - Personal Trainer */}
                    <div className="flex-1 p-8 space-y-4 bg-white text-black rounded-tr-lg rounded-br-lg flex flex-col justify-between items-center">
                        <h2 className="text-2xl font-bold">Personal Trainer</h2>
                        <p className="text-gray-600 text-center max-w-xs">
                            Passionate about fitness, I help others reach their goals through strength and functional training, driven by a goal-oriented mindset.
                        </p>
                        <Button
                            onClick={() => router.push('/trainer')}
                            className="bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                        >
                            <Dumbbell className="mr-2 h-4 w-4" /> Learn More
                        </Button>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}