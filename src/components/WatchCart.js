import React, { useState } from 'react'

const WatchCart = () => {

    let [watches,setWatches] = useState([
        {
            id: "AA001",
            imgUrl: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price : 4850,
            name : "Lenevo Watch",
            qty : 2
        },
        {
            id: "AA002",
            imgUrl: "https://images.pexels.com/photos/1075189/pexels-photo-1075189.jpeg?auto=compress&cs=tinysrgb&w=300",
            price : 3800,
            name : "Samsung Watch",
            qty : 5
        },
        {
            id: "AA003",
            imgUrl: "https://images.pexels.com/photos/2494608/pexels-photo-2494608.jpeg?auto=compress&cs=tinysrgb&w=300",
            price : 5800,
            name : "iPhone Watch",
            qty : 4
        },
        {
            id: "AA004",
            imgUrl: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=300",
            price : 2800,
            name : "Mi Watch",
            qty : 1
        }
    ]);

    let incrQty = (watchId) =>{
       let updateWatches = watches.map((watch,index) => {
            if(watch.id === watchId){
                return {
                    ...watch,
                    qty: watch.qty + 1 
                }
            }
            else{
                return watch;
            }
        })
        setWatches(()=>{
            return updateWatches;
        })
    }
    let decrQty = (watchId) =>{
        let updateWatches = watches.map((watch,index) => {
             if(watch.id === watchId){
                 return {
                     ...watch,
                     qty: watch.qty - 1 > 0 ? watch.qty -1 : 1
                 }
             }
             else{
                 return watch;
             }
         })
         setWatches(()=>{
             return updateWatches;
         })
     }

     let deleteWatch = (watchId) => {
        setWatches((prevState)=>{
            return prevState.filter(watch => watch.id !== watchId)
        })
     }

     let calculateGrandTotal = () =>{
        let total = 0;
        for(let watch of watches){
            total += (watch.qty * watch.price)
        }
        return total;
     }
  return (
    <>
        <div className="container m-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success"> Watch Cart</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at soluta ipsum sunt nisi numquam, officia hic aut. Non, at?</p>
                </div>   
            </div>
            <div className="row mt-3 ">
                    <div className="col">
                        <table className="table table-hover text-center table-striped">
                            <thead>
                                <tr>
                                    <th>SNo</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    watches.map((watch)=>{
                                        return(
                                           <tr key={watch.id}>
                                            <td>{watch.id}</td>
                                            <td>
                                                <img src={watch.imgUrl} alt="" width={50} height={40}/>
                                            </td>
                                            <td>{watch.name}</td>
                                            <td>{watch.price}</td>
                                            <td>
                                                <i onClick={()=>decrQty(watch.id)} className="bi bi-dash-circle-fill me-1 text-success" />
                                                {watch.qty} 
                                                <i onClick={()=>incrQty(watch.id)} className="bi bi-plus-circle-fill ms-1 text-success" />
                                            </td>
                                            <td>{watch.price} </td>
                                            <td>{watch.qty * watch.price} </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={()=>{deleteWatch(watch.id)}}>
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                           </tr>
                                        )
                                    })
                                } 
                                <tr>
                                    <td colSpan={4}></td>
                                    <td>Grand Total</td>
                                    <td>{calculateGrandTotal()}</td>
                                </tr>  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default WatchCart