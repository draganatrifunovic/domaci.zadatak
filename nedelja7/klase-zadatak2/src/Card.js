import React from 'react'
import Emoji from './Emoji';
import Description from './Description';

class Card extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <Emoji src={this.props.img}></Emoji>
                <Description desc={this.props.string}></Description>
            </>
        )
    }

}

export default Card