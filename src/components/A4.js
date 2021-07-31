import { Button } from 'react-bootstrap';
import React, {useState, useCallback, useRef} from 'react'
import Card from './Card'
import PriceTag from './PriceTag'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const A4 = ({product, props}) => {
    const [show, setShow] = useState(true)

    const repeatCardArr = [
        {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12}
    ]

    const cards = repeatCardArr.map((item) =>
    <div key={item.id}>
        <Card show={show}/>
    </div>
    )

    const priceTag = repeatCardArr.map((item) =>
    <div key={item.id}>
        <PriceTag product={product}/>
    </div>
    )

    const onCapture = () =>{
        htmlToImage.toJpeg(document.getElementById('prezzo'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
       }

    return (
        <div  style={{
            display: 'flex',
        }}
        >
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '297mm',
            height: '21cm',
            background: 'white',
            alignItems: 'center'
            
        }}
            id='prezzo'
        >
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '241mm',
                    height: '18cm',
                    borderRight: '1px solid black',
                }}
            >
                {cards}
            </div>
        </div>
        <div>
        {show && <Button onClick={() => setShow(false)} style={{
            margin: '30px'}}>Done</Button>}
        {!show && <Button onClick={() => onCapture()} style={{
            margin: '30px'}}>download</Button>} 
        </div>  
        </ div>
    )
}

export default A4
