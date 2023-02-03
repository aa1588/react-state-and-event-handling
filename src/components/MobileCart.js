import React, { useState } from 'react'

const MobileCart = () => {

    let [phone, setPhone] = useState({
        brand : "Lenevo",
        color : "black",
        price : 25000
    });

    let incrPriceBy = (amount) => {
        setPhone((prevState)=>{
            console.log(prevState)
            return {
                ...prevState,
                price : prevState.price + amount
            }
        })
    }

    let decrPriceBy = (amount) => {
        setPhone((prevState) => {
            return {
                ...prevState,
                price : prevState.price - amount
            }
        })
    }

  return (
    <>
        <pre>{JSON.stringify(phone)}</pre>
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                SmartPhones Department
                            </h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Brand : {phone.brand}
                                </li>
                                <li className="list-group-item">
                                    Color : {phone.color}
                                </li>
                                <li className="list-group-item">
                                   Price : {phone.price} 
                                </li>
                            </ul>
                            <button className='btn btn-success m-2' onClick={()=>incrPriceBy(500)}>Incr Price</button>
                            <button className='btn btn-warning m-2' onClick={()=>decrPriceBy(500)}>Decr Price</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default MobileCart