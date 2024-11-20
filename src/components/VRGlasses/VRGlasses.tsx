import React from 'react'
import styles from './styles.module.css'

import Button from '../UI/Button'

import ghost from '../../image/ghost.webp'
import pipleVR from '../../image/pipleVR.webp'

type Props = {}

const VRGlasses = React.memo(function VRGlasses(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <img draggable='false' src={pipleVR} />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.aboutVR}>About VR Glasses</div>
                <div className={styles.title}>The New VR Glasses Series</div>
                <div className={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed.</div>
                <Button text='Get started Now' padding='13px 35px' />
            </div>
        </div>
    )
})

export default VRGlasses