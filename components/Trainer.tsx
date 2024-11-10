// Trainer.js
'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import About from './AboutE'

export default function Trainer({ onBack }) {
    const sceneVariants = {
        initial: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    }

    return (
        <motion.div
            key="trainer"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={sceneVariants}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
        >
            <Card>
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">Personal Trainer</h2>
                        <Button variant="ghost" onClick={onBack}>
                            <ChevronLeft className="h-4 w-4 mr-2" /> Back
                        </Button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Dedicated to helping clients achieve their fitness goals.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        <li>Customized Workout Plans</li>
                        <li>Nutrition Coaching</li>
                        <li>Strength Training</li>
                        <li>Functional Fitness</li>
                    </ul>
                </CardContent>
            </Card>
            <About />
        </motion.div>
    )
}
