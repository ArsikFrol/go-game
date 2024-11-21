import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

import Button from '../UI/Button'

import ghost from '../../image/ghost.webp'
import pipleVR from '../../image/pipleVR.webp'

type Props = {}

const AminationLeft = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const AnimationRight = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const VRGlasses = React.memo(function VRGlasses(props: Props) {
    return (
        <div className={styles.wrapper} id='about'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={AminationLeft}
                custom={1}
                className={styles.leftContent}>
                <img draggable='false' src={pipleVR} />
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={AnimationRight}
                custom={1}
                className={styles.rightContent}>
                <div className={styles.aboutVR}>About VR Glasses</div>
                <div className={styles.title}>The New VR Glasses Series</div>
                <div className={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed.</div>
                <Button text='Get started Now' padding='13px 35px' />
            </motion.div>
            <img draggable='false' src={ghost} className={styles.ghostImage} />
        </div>
    )
})

export default VRGlasses