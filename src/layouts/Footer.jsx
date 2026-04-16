import BlurText from '@/components/BlurText'
import React from 'react'
import { LazyMotion, domAnimation, motion } from "framer-motion"

const Footer = () => {
  return (
    <div>
           <LazyMotion features={domAnimation}>
                    <motion.div
                        className="relative w-full bg-orange-900 text-white"
                    >
                        <div className='text-center p-6'>
                            <BlurText
                                text="Copyright © 2026 - All Rights Reserved - MilestoneBuilders,Powered by harishkumarsivaraman@gmail.com"
                                delay={50}
                                animateBy="words"
                                direction="top"
                                className="scroll-m-20 text-sm flex items-center justify-center font-semibold  tracking-tight"
                            />

                        </div>

                    </motion.div>

                </LazyMotion>
    </div>
  )
}

export default Footer
