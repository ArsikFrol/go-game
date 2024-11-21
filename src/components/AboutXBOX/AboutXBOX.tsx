import React from 'react'
import styles from './styles.module.css'

import XBOX from '../../image/XBOX.webp'
import Button from '../UI/Button'

type Props = {}

const AboutXBOX = React.memo(function AboutXBOX(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <div className={styles.about}>About XBOX, PS</div>
                <div className={styles.title}>The New Xbox, PsSeries</div>
                <div className={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed.</div>
                <Button text='Get Started Now' padding='13px 20px' />
            </div>
            <div className={styles.rightContent}>
                <img draggable='false' src={XBOX} />
            </div>
        </div>
    )
})

export default AboutXBOX