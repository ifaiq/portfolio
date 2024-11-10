'use client'

import { useRouter } from 'next/navigation'
import Trainer from '@/components/Trainer'

export default function TrainerPage() {
    const router = useRouter()

    const handleBack = () => {
        router.push('/')
    }

    return <Trainer onBack={handleBack} />
}