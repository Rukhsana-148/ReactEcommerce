import React, {useState} from 'react'
import users from './user.json'
import { FaSearch } from 'react-icons/fa';
export const Users = () => {
    const [list, setlist] = useState(users);
    const [query, setQuery] = useState('')

    
 const getSearch = (e) =>{
    const results = users.filter((user)=>{
        if(e.target.value=='') return users;
        if(user["roll"].includes(e.target.value)) return user["roll"].includes(e.target.value);
        return user["name"].toLowerCase().includes(e.target.value.toLowerCase())
    })
    setQuery(e.target.value);
    setlist(results)
   
 }
  return (
   
    <div className="grid justify-items-center pb-10">
        <p className="py-6 text-2xl font-bold  font-mono tet-2xl  text-center">User Lists</p>
        <form>
            <span className="flex">Search     <input tyype="number" onChange={getSearch}  className="rounded-lg mb-4 px-5 py-1 mx-2 border-b-2 border-gray-500"/><FaSearch></FaSearch></span>
            </form>
         <table className="
         border-2 border-gray-800  px-[100px] mx-[70px] py-2"
         >
           
        <thead>
            <th className="bg-black text-white px-5 py-2 ">Roll</th>
            <th className="bg-black text-white px-5 py-2">Name</th>
            <th className="bg-black text-white px-5 py-2">
                Phone
            </th>
         </thead>
         <tbody>
       {
        list.map((item)=>{
       return<tr>
        <td className="px-5 py-2 bg-gray-200 font-mono border-b-2 border-r-2 border-gray-700"
        >
            {item.roll}
        </td>
        <td className="px-5 py-2 bg-gray-200 font-mono border-b-2 border-r-2 border-gray-700"
        >
            {item.name}
        </td>
        <td className="px-5 py-2 bg-gray-200 font-mono border-b-2 border-r-2 border-gray-700"
        >
            {item.Phone}
        </td>
       </tr>
     
    
        })
       }
           </tbody>
           </table>
    </div>
  )
}
