import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.css'
import Button from '../UI/Button';

type Props = {
    obj: any
    checkMark: string;
    standardCheckMark: string;
    checkMarkWhite: string;
    graffiti: string;
}

const Amination = {
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

const CartPricing = React.memo(function CartPricing({ graffiti, obj, checkMark, standardCheckMark, checkMarkWhite }: Props) {
    return (
        <motion.div initial='hidden' whileInView='visible' variants={Amination} custom={1} className={obj.title == 'Standard' ? styles.wrapperStandard : styles.wrapperCart}>
            <div className={styles.titleCart}>{obj.title}</div>
            <div className={styles.price}>$<span className={styles.countPrice}>{obj.price}</span> / Per Hour</div>
            <div className={styles.columnPluses}>
                {
                    obj.pluses.map((plus: string, index: number) => {
                        return (
                            <div className={styles.elem} key={index}>
                                <img draggable='false' src={obj.title == 'Standard' ? checkMarkWhite : checkMark} />
                                <div className={styles.text}>{plus}</div>
                            </div>
                        )
                    })
                }
            </div>
            <img draggable='false' src={graffiti} className={styles.graffitiImage} />
            <img className={obj.title == 'Standard' ? styles.checkMarkStandard : styles.none} src={standardCheckMark} />
            <Button text='Select This Plan' padding='13px 70px' />
        </motion.div>
    )
})

export default CartPricing