'use client'

import { SetStateAction, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Engineer from './Engineer'
import Trainer from './Trainer'
import Summary from './Summary'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from 'next/link'

export default function Intro() {
    const [activeProfile, setActiveProfile] = useState('summary')

    return (
        <div className=" bg-gray-900 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <AnimatePresence mode="wait">
                {activeProfile === 'summary' && (
                    <Summary onNavigate={(profile: SetStateAction<string>) => setActiveProfile(profile)} />
                )}
                {activeProfile === 'engineer' && (
                    <Engineer onBack={() => setActiveProfile('summary')} />
                )}
                {activeProfile === 'trainer' && (
                    <Trainer onBack={() => setActiveProfile('summary')} />
                )}
            </AnimatePresence>
        </div>
    )
}
