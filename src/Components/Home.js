import React, {useState} from 'react'
import { Products } from './Products'
import Swal from 'sweetalert2'

export const Home = ({mainPage}) => {
  const [cartCount, setCartCount] = useState(0); 
const handleCart1 = () => {
     const  Count = cartCount+1;
      setCartCount(Count)
      
      Swal.fire({
        title: "Producted is Added!",
        icon: "success",
        draggable: true,
        
        text: "Product has been added to your cart!",
      });
      mainPage(Count)
    };
  return (
    <>
    <div className='bg-gray-300 flex'>
        <div className="canva   px-[40px]"><img src='th.png' alt='Canva'/></div>
        <div className="right text-end ml-[500px] w-[700px]  mr-[170px] ">
            <h2 className='text-center font-bold font-mono  text-4xl py-[50px] text-gray-700'>ITLogikoShop</h2>
            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugiat vero quasi recusandae, amet culpa voluptas molestiae labore maxime, asperiores quas dolorum minus quo nemo error voluptates magni obcaecati quibusdam?</p>
        </div>
    </div>
        <Products addToCart={handleCart1}/>
    </>
  )
}
