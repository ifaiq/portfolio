'use client'

import { useRouter } from 'next/navigation'
import Engineer from '@/components/Engineer'

export default function EngineerPage() {
    const router = useRouter()

    const handleBack = () => {
        router.push('/')
    }

    return <Engineer onBack={handleBack} />
}