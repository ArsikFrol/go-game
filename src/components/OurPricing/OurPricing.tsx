import React from 'react'
import styles from './styles.module.css'

import checkMark from '../../image/checkMark.webp'
import standardCheckMark from '../../image/standardCheckMark.webp'
import checkMarkWhite from '../../image/checkMarkWhite.webp'
import graffiti from '../../image/graffiti.webp'

import CartPricing from './CartPricing'

type Props = {}

const listCart = [
    { id: 1, title: 'Basic', price: 50, pluses: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'] },
    { id: 2, title: 'Standard', price: 95, pluses: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'] },
    { id: 3, title: 'Premiun', price: 120, pluses: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'] }

]

const OurPricing = React.memo(function OurPricing(props: Props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.ourPricing}>Our Pricing</div>
            <div className={styles.title}>Choose Your Plan</div>
            <div className={styles.rowCart}>
                {
                    listCart.map((obj: any) => {
                        return (
                            <CartPricing graffiti={graffiti} key={obj.id} checkMarkWhite={checkMarkWhite} obj={obj} standardCheckMark={standardCheckMark} checkMark={checkMark} />
                        )
                    })
                }
            </div>
        </div>
    )
})

export default OurPricing