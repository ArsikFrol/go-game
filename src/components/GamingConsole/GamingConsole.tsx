import React from 'react'
import styles from './styles.module.css'

import piple from '../../image/gamingConsole/piple.webp'
import sony from '../../image/gamingConsole/sonyDualshock.webp'
import star from '../../image/gamingConsole/star.webp'
import sonyJoystick from '../../image/gamingConsole/sonyJoystick.webp'
import cross from '../../image/gamingConsole/cross.webp'
import arrows from '../../image/gamingConsole/arrows.webp'
import points from '../../image/gamingConsole/points.webp'

import Button from '../UI/Button'

type Props = {}

const listStar = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

const GamingConsole = React.memo(function GamingConsole(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <div className={styles.gamingConsole}>Gaming Consoles</div>
                <div className={styles.title}>Try It, Rent It, < br /> <span>Save $50!</span></div>
                <div className={styles.desc}>It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters as opposed.</div>
                <Button text='Get Started Now' padding='13px 20px' />
            </div>
            <div className={styles.rightContent}>
                <img draggable='false' src={piple} className={styles.pipleImage} />
                <div className={styles.sonyContent}>
                    <div className={styles.leftSony}>
                        <div className={styles.titleSony}>Sony Dualshock 4 Wireless Controller </div>
                        <div className={styles.price}>$50 Per Hour</div>
                        <div className={styles.rowStar}>
                            {
                                listStar.map((obj: any) => {
                                    return (
                                        <img draggable='false' src={star} key={obj.id} />
                                    )
                                })
                            }
                            <div className={styles.estimation}>125+Review</div>
                        </div>
                    </div>
                    <div className={styles.rightSony}>
                        <img draggable='false' src={sony} />
                    </div>
                </div>
                <div className={styles.sonyJoystick}>
                    <div className={styles.leftJoystick}>
                        <img draggable='false' src={sonyJoystick} />
                    </div>
                    <div className={styles.rightJoystick}>
                        <div className={styles.titleSony}>Sony Dualshock 4 Wireless Controller </div>
                        <div className={styles.price}>$50 Per Hour</div>
                        <div className={styles.rowStar}>
                            {
                                listStar.map((obj: any) => {
                                    return (
                                        <img draggable='false' src={star} key={obj.id} />
                                    )
                                })
                            }
                            <div className={styles.estimation}>125+Review</div>
                        </div>
                    </div>
                </div>
            </div>
            <img draggable='false' src={cross} className={styles.crossImage} />
            <img draggable='false' src={arrows} className={styles.arrowsImage} />
            <img draggable='false' src={points} className={styles.pointsImage} />
        </div>
    )
})

export default GamingConsole