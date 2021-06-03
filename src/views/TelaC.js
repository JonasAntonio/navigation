import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const numero = props.route.params !== undefined && props.route.params.numero 
                    ? props.route.params.numero 
                    : parseInt(Math.random() * 100)
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}