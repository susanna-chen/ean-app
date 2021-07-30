import React, {useState} from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';
import PriceTag from './PriceTag';

const Card = (props) => {

    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [ean, setEan] = useState('')

    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '8cm',
            padding: '0',
            border: '1px solid black',
            alignContent: 'center',
        }}
            
        >
            { props.show && <>

            <FloatingLabel
                controlId="floatingInput"
                label="Product"
            >
                <Form.Control type="text" placeholder="product" onChange={e => setProduct(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Price">
                <Form.Control type="text" placeholder="Price" onChange={e => setPrice(e.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="EAN">
                <Form.Control type="text" placeholder="EAN" onChange={e => setEan(e.target.value)}/>
            </FloatingLabel>
            </>}
            <div>
                <PriceTag product={product} price={price} ean={ean}/>
            </div>
        </div>
        </>
    )
}

export default Card


