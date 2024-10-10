'use client'

import Lottie from 'lottie-react'
import main from '@/public/animations/Main_30FPS.json'

const style = {
    width: '424px',
    height: '424px',
}

export const MainDuoAnimation = () => (
    <Lottie style={style} animationData={main} loop={false} />
)
