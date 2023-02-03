import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Phone = () => {

    const [a,setA] = useState(10);
    
    let [phone, setPhone] = useState({
        brand: "Apple",
        color: "Silver",
        price: 45000
    })
    
    return (
        <>
            <pre>Mobile: {JSON.stringify(phone)}</pre>
            <Card style={{ width: '18rem' }} className="ms-5">
                <Card.Img variant="top" src="https://images.pexels.com/photos/14121456/pexels-photo-14121456.jpeg?auto=compress&cs=tinysrgb&w=300" />
                <Card.Body>
                    <Card.Title>iPhone 14</Card.Title>
                    <Card.Text className='mb-2'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        {/* <h3 className="text-success m-0">A value: {a}</h3> */}
                    </Card.Text>
                    <div className="text-secondary mb-2 "> Price: {phone.price}</div>
                    <Button variant="warning">Order Now</Button>
                </Card.Body>
            </Card>
        </>
  )
}

export default Phone

/*
   binding state data (static) - TO - JXS (one-way binding)
*/