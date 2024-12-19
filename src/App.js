
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Components/Home';
import { Contacts } from './Components/Contacts';
import { Products } from './Components/Products';
import { About } from './Components/About';
import { FaCartShopping } from 'react-icons/fa6'
import { Users } from './Components/Users';
import Swal from 'sweetalert2';
import { CountButton } from './Components/CountButton';

function App() {
   const [cartCount, setCartCount] = useState(0); 
    const cartHandle1 = (count) => {
     setCartCount(count)
    };
   const countHandle = () => {
        const  Count = cartCount+1;
         setCartCount(Count)
         
         Swal.fire({
           title: "Producted is Added!",
           icon: "success",
           draggable: true,
           
           text: "Product has been added to your cart!",
         });
        }
    
    
  return (
    <div className="App">
      <Router>
      <div className="body flex bg-gray-400 py-5 px-4">
      <div className="flex pt-[20px] h-auto w-full ">
      <img src='logo.jpeg' alt="logo" className='w-[80px] -mt-[30px] h-[80px] mr-[10px] rounded-full'/><h4 classname="ml-[70px] font-mono">ITLogiko Shop</h4>
      </div>
      <div className="right  pt-[20px]">
     

       
       <ul className='flex w-[500px]'>
        
        <li className="mx-5"><Link  to="/">Home</Link></li>      
        <li className="mx-5"><Link to="/products">Products</Link></li>
        <li className="mx-5"><Link to="/count">Counter</Link></li>
        <li className="mx-5"><Link to="/contacts">Contact</Link></li>
        <li className="mx-5"><Link to="/users">Users</Link></li>
        <li><sup>{cartCount}</sup><FaCartShopping></FaCartShopping></li>
       </ul>
      
      </div>
     </div>
     <Routes>
        <Route path="/" element={<Home mainPage={cartHandle1}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products addToCart={countHandle}/>}/>
       <Route path="/contacts" element={<Contacts />}/>
        <Route path="/users" element={<Users/>}/>
       </Routes>
       </Router>
     
      </div>
     
    
  );
}

export default App;
