import React from 'react'
import styles from './styles.module.css'

type Props = {
    text: string,
    padding: string
}

const Button = React.memo(function Button(props: Props) {
    return (
        <div className={styles.wrapper} style={{ padding: `${props.padding}` }}>
            {props.text}
        </div>
    )
})

export default Button