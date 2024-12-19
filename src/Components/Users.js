import React, {useState} from 'react'
import users from './user.json'
import { FaSearch } from 'react-icons/fa';
export const Users = () => {
    const [list, setlist] = useState(users);
    const [query, setQuery] = useState('')
    const[sort, setSort] = useState('Roll');
    const[order, setOrder] =  useState('Roll')
    const [results, setResults] = useState();

    const sortList= (results, sort, order) => {
            if(order==='Asscending'){
                results.sort((a, b)=>a[sort]<b[sort]?-1:1)
            }
            else if(order==='Desceding'){
                results.sort((a, b)=>a[sort]<b[sort]?1:-1)
            }
            return results
    }
    
 const getSearch = (e) =>{
    const results = users.filter((user)=>{
        if(e.target.value==='') return users;
        if(user["roll"].includes(e.target.value)) return user["roll"].includes(e.target.value);
        return user["name"].toLowerCase().includes(e.target.value.toLowerCase())
    })
    setResults(results)
    setQuery(e.target.value);
    setlist(sortList(results,sort, order))
   
 }

 const changeSortField = (field)=>{
setSort(field)
setQuery(query)
setlist(!results?sortList(users,field, order):sortList(results,field, order))
 }
 const changeOrderType = (type)=>{
    setOrder(type)
    setQuery(query)
    setlist(!results?sortList(users,sort, type):sortList(results,sort, type))
     }
  return (
   
    <div className="grid justify-items-center pb-10">
        <p className="py-6 text-2xl font-bold  font-mono tet-2xl  text-center">User Lists</p>
        <form>
            <span className="flex">Search     <input tyype="number" onChange={getSearch}  className="rounded-lg mb-4 px-5 py-1 mx-2 border-b-2 border-gray-500"/><FaSearch></FaSearch>
            <select name="sortBy" className="px-5 py-1 rounded-lg ml-5 mr-2 mb-4"
            onChange={(e)=>changeSortField(e.target.value)}>
            <option value="None" >None</option>
               <option value="Roll" >Roll</option>
               <option value="Name" >Name</option>
             
            </select>
            <select name="order" 
            onChange = {(e)=>changeOrderType(e.target.value)}
            className="px-5 py-1 rounded-lg mx-2 mb-4">
            <option value="None" >None</option>
               <option value="Asscending" >Asscending</option>
               <option value="Desceding" >Desceding</option>
             
            </select>
            </span>
        
        </form>
         <table className="
         border-2 border-gray-800  px-[100px] mx-[70px] py-2">
           
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
