import React, { useState } from 'react'

const Counter = () => {

    let [counter,setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prevState)=>{
            return prevState + 1;
        })
    }

    const decrementByNum = (number) => {
        setCounter((prevState) => {
            return prevState - number;
        })
    }

    const handleReset = () => {
        setCounter(() => {
            return 0;
        })
    }

  return (
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <div className="display-3">{counter}</div>
                            <button onClick={handleIncrement} className="btn btn-success me-2">Increment </button>
                            <button onClick = {() => decrementByNum(5)} className="btn btn-warning me-2">Decrement</button>
                            <button  onClick = {handleReset} className='btn btn-danger '>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter

/*
    pass state data to JSX and update state with event being raised (Two-way Data Binding)
*/