import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

const CardDiv = (props) => {

    return (
        <CardColumns style={{display: 'flex', flexDirection: 'row'}}>
            {props.children}
        </CardColumns>

    );



};

export default CardDiv;