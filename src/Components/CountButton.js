import React,{useState} from 'react'

export const CountButton = ({updateCounter}) => {
 const [count, setCount] = useState(0)

const increementCounter = () =>{
    const newValue = count+1;
    setCount(newValue)
    updateCounter(newValue)
}
  return (
    <div>CountButton
{count} <br/>
<button className="btn px-6 py-2 bg-black text-white" onClick={increementCounter}>Click</button>
    </div>
   
  )
}
