'use client'

import { SetStateAction, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Engineer from './Engineer'
import Trainer from './Trainer'
import Summary from './Summary'

export default function Intro() {
    const [activeProfile, setActiveProfile] = useState('summary')

    return (
        <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
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
