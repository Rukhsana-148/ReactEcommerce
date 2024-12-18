import React from 'react'
import data from './products.json'


export const Filter = (

) => {
const types:string[] =[];
    let count =0;
    for(let i = 0; i < data.length;i++){
      if(!types.includes(data[i].type)){
      types.push(data[i].type);
      }
    }

  return (
    <div>
        <div class="flex">

{
  types.map((type, index)=>{
    return<>
<ul className="flex">
  <li key={index} className="px-7 py-2 bg-gray-300 mr-5" 
  >
    {type}
  </li>

</ul>
</>
  }
)
}

</div>
    </div>
  )
}
