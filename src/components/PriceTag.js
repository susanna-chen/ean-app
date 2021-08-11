import React from 'react'
import { Row, Col } from 'react-bootstrap';
import useFitText from "use-fit-text";

const PriceTag = props => {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Barcode = require('react-barcode');

    const { fontSize, ref } = useFitText({minFontSize: 10, maxFontSize: 300});

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '4.5cm',
            width: '8cm',
            padding: '0.5cm',
            margin: '-29%',
            borderRadius: '5px',
            margin: 0,
            background: 'white'
        }}
        id='prezzo'
        >
            <Row
                ref={ref}
                style={{ fontSize, height: '2cm', width: '100%', fontWeight:'bold'}}
            >
                    {props.product}
            </Row>
                
                
            <Row style={{
                margin: '-19px'
            }}>
                <Col style={{ fontSize: '38px'
 }}>€{props.price}</Col>
                <Col >
                    <Barcode
                    value={props.ean}
                    height={40}
                    width={1.3}
                    fontSize={8}
                    format="EAN13"
                    style={{
                        margin: 0,
                        padding: 0
                    }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default PriceTag
