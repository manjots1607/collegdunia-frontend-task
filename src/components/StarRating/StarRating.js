import React from 'react';
import {FaStar} from "react-icons/fa";

function StarRating(props) {

    const stars=[];

    for(let i=0;i<(props.total||5); i++ ){
        stars.push(<FaStar color={i<props.value? (props.activeColor||"#444") : (props.color||"#adadad") } />)
    }

    return (
        <React.Fragment>
            {stars}
        </React.Fragment>
    )
}


export default StarRating

