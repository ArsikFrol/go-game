import React from 'react'
import styles from './styles.module.css'

import logo from '../../image/logo.webp'
import faceBook from '../../image/footer/facebook.webp'
import inst from '../../image/footer/instagram.webp'
import twitter from '../../image/footer/twitter.webp'

type Props = {}

const Footer = React.memo(function Footer(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <img draggable='false' src={logo} />
            </div>
            <div className={styles.rightContent}>
                <img draggable='false' src={faceBook} />
                <img draggable='false' src={twitter} />
                <img draggable='false' src={inst} />
            </div>
        </div>
    )
})

export default Footer