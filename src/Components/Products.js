import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import data from './products.json'
import Type from './Data.json'
import { Filter } from './Filter'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export const Products = ({addToCart}) => {

  const[currentPage, setCurrentPage] = useState(1);

  const productPerPgae = 4;
  const lastIndex = currentPage*productPerPgae;
  const firstIndex = lastIndex-productPerPgae;

  const [selectedItem, setSelectedItem] = useState("");
 
const records = data.slice(firstIndex, lastIndex);
const pages = Math.ceil(data.length/productPerPgae);
console.log("Pages"+pages)
const numbers = [...Array(pages+1).keys()].slice(1);
console.log("Numbers  : " +numbers)
//filter by type



  return (
    <div className='px-[60px] py-[10px] '>
      <p className='text-3xl font-bold font-mono text-center'>Products</p>

<Filter
></Filter>
    <div className="allProducts grid grid-cols-4 gap-2">
    
{
records
 .map((infos)=>{
  return<>
  <div className="card w-[300px]  rounded px-7 py-7">
          <img src={infos.img} alt="shoes" className='w-[200px] h-[160px]'/>

          <div className="flex py-3"><p className='w-[250px]'>{infos.name
            }</p><p className='ml-[130px]'>{infos.price
            }/=</p></div>
          
          <p className='btn text-center w-full bg-black py-[10px] rounded text-white' onClick={addToCart}>Add To Cart</p>
        </div>
  </>
 }
 )
}

         
       
      </div>
      <ul class="flex">
        <li>
          <button className="mr-2 px-8 py-1 bg-gray-300 radius-xl
          "
           onClick={prevPage}>Prev</button>
        </li>
    
      {
        numbers.map((number, index)=>{
          const isActive = currentPage===number;
          return<>
          <li key={index}>
            <p 
            style={{
              backgroundColor : isActive?"black":"white",
              color:isActive?"white":"black",
              padding:"2px 19px",
             borderRadius:"10px",
             cursor:"pointer"

            }}
            onClick={(e)=>{
              e.preventDefault();
 changeCPage(number);
            }
            }>{number}</p>
   </li>
        </>
        }
        )}
    
        <li >
          <button  className="ml-2 px-8 py-1 bg-gray-300 radius-xl"
           onClick={nextPage}>Next</button>
       
        </li>
      </ul>


    </div>
  )
  function showSelectedvalue(event){
    alert(event.target.value)
  alert(1)
  }
 
  function prevPage(){
 if(currentPage!== firstIndex&&firstIndex!=0

 ){
  setCurrentPage(currentPage-1)
 }else{
  
 }
 }

  function changeCPage(id){
      setCurrentPage(id)
  }
  function nextPage(){
   
    if(currentPage!==lastIndex&&lastIndex<data.length

    ){
     
     setCurrentPage(currentPage+1)
     
    }
     }
}
