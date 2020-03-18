
import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card = ({img,string}) => {

    return (
        <>
            <Emoji src={img}></Emoji>
            <Description desc={string}></Description>
        </>
    )

}

export default Card