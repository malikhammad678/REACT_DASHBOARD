import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const userData = [
    {id:1, name:"Hammad", email:"hammadahmed@gmail.com", role:"Admin", status:"Active"},
    {id:2, name:"Zain", email:"Zain@gmail.com", role:"Customer", status:"Active"},
    {id:3, name:"Dawood", email:"Dawood@gmail.com", role:"Moderator", status:"Inactive"},
    {id:4, name:"Haris", email:"haris@gmail.com", role:"Moderator", status:"Active"},
]
const UserTable = () => {
  const [searchTerms,setSearchTerms] = useState("")
  const [filteredUser,setfilteredUser] = useState(userData)

  const handleSearch = (e) => {
    const terms = e.target.value.toLowerCase();
    setSearchTerms(terms);
    const filterItems = userData.filter(user => user.name.toLowerCase().includes(terms))
    setfilteredUser(filterItems);
  }
  return (
    <motion.div
             className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-700 mb-7'
             initial= {{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.2}}
             >
    <div className='flex justify-between items-center mb-6 w-full'>
  <h2 className='text-xl font-semibold text-gray-100'>User List</h2>
  <div className='relative'>
    <input
      type="text"
      placeholder='Search...'
      className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
      onChange={handleSearch}
      value={searchTerms}
    />
    <Search className='absolute top-2.5 left-3 text-gray-400' />
  </div>
</div>

<div className='overflow-x-auto'>
  <table className='min-w-full divide-y divide-gray-700'>
  <thead>
      <tr>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Name
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Email
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Role
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Status
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Actions
        </th>
      </tr>
    </thead>
    <tbody className='divide-y divide-gray-700'>
     {
      filteredUser.map((user,index) => {
        return (
          <motion.tr
          initial = {{opacity:0}}
          animate = {{opacity:1}}
          transition={{duration:0.3}}
          >
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='flex items-center'>
              <div className='flex shrink-0 h-10 w-10'>
                <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold '>
                  {user.name.charAt(0)}
                </div>
              </div>
              <div className='ml-4'>
                <div className='text-sm font-medium text-gray-100'>{user.name}</div>
              </div>
            </div>
          </td>

          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-300'>
             {user.email}
            </div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
              <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100 '>
                {user.role}
              </span>
          </td>
            <td className='px-6 py-4 whitespace-nowrap'>
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active" ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"}`} >
                {user.status}
              </span>
            </td>

            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
              <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
              <button className='text-red-400 hover:text-red-300'>Delete</button>
            </td>
          </motion.tr>
        )
      })
     }
    </tbody>
  </table>
</div>
    </motion.div>

    
  )
}

export default UserTable
