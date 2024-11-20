import React from 'react'
import styles from './styles.module.css'

import logo from '../../image/logo.webp'
import Button from '../UI/Button'

type Props = {}

const navList = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About Us' },
    { id: 3, text: 'Prices' },
    { id: 4, text: 'Rules' }
]

interface navListInter {
    id: number,
    text: string
}

const Header = React.memo(function Header(props: Props) {
    return (
        <div className={styles.wrapper}>
            <img draggable='false' src={logo} style={{ cursor: 'pointer' }} />
            <div className={styles.nav}>
                {
                    navList.map((obj: navListInter) => {
                        return (
                            <div className={styles.navElem} key={obj.id}>{obj.text}</div>
                        )
                    })
                }
                <Button text='Get Started Now' padding='13px 20px' />
            </div>
        </div>
    )
})

export default Header