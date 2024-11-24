'use client'

import { SetStateAction, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Engineer from './Engineer'
import Trainer from './Trainer'
import Summary from './Summary'

export default function Intro() {
    const [activeProfile, setActiveProfile] = useState('summary')

    return (
        <div className="bg-gradient-to-r from-black rounded-xl to-white flex flex-col items-center justify-center p-6">
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
