// Trainer.js
'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import About from './AboutE'
import ReactLenis from '@studio-freight/react-lenis'
import PreviousWorkT from './PreviousWorkT'
import AboutT from './AboutT'
import Goodbye from './Goodbye'

export default function Trainer({ onBack }: { onBack: () => void }) {
    const lenisOptions = {
        lerp: 0.05,
        duration: 1.2,
        smoothTouch: false,
        smooth: true,
    };
    return (
        <ReactLenis root options={lenisOptions}>
            <div className="min-h-screen bg-gray-900">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full"
                >
                    <div className="fixed top-6 left-6 z-50">
                        <Button
                            variant="outline"
                            onClick={onBack}
                            className="flex items-center space-x-2"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span>Back</span>
                        </Button>
                    </div>

                    <div className="w-full">
                        <AboutT />
                        <PreviousWorkT />
                        <Goodbye />
                    </div>
                </motion.div>
            </div>
        </ReactLenis>
    )
}
