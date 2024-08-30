import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit,Edit2,Search,Trash2 } from 'lucide-react'
const productData = [
    {id:1,name:"Wireless Bluetooth", category:"Electronics", price:26.99, stock:98, sales:200},
    {id:2,name:"Leather Wallet", category:"Accesories", price:19.99, stock:102, sales:220},
    {id:3,name:"Smart Watch", category:"Electronics", price:29.00, stock:120, sales:250},
    {id:4,name:"Coffee Maker", category:"Home", price:30.00, stock:70, sales:290},
]
const ProductTable = () => {

  const [searchTerms, setSearchTerms] = useState("")
  const [filteredProduct,setFilteredProduct] = useState(productData);

  const handleSearch = (e) => {
    const terms = e.target.value.toLowerCase();
    setSearchTerms(terms);
    const filterItems = productData.filter(product => product.name.toLowerCase().includes(terms) || product.category.toLowerCase().includes(terms))
    setFilteredProduct(filterItems);
  };
  return (
    <motion.div
             className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-700 mb-7'
             initial= {{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.2}}
             >
       <div className='flex justify-between items-center mb-6 w-full'>
  <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
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
         Category
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Price
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Stock
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Sales
        </th>
        <th
        className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
        >
         Action
        </th>
      </tr>
    </thead>
    <tbody className='divide-y divide-gray-400'>
      {
        filteredProduct.map((item) => {
         return (
          <motion.tr
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration:0.3}}
          >

            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center tracking-wider'>
               
               {item.name}

            </td>

            <td className='px-6 py-6 whitespace-nowrap text-sm text-gray-300'>
       
              {item.category}

            </td>
            <td className='px-6 py-6 whitespace-nowrap text-sm text-gray-300'>
       
              ${item.price.toFixed(2)}

            </td>
            <td className='px-6 py-6 whitespace-nowrap text-sm text-gray-300'>
       
              {item.stock}

            </td>
            <td className='px-6 py-6 whitespace-nowrap text-sm text-gray-300'>
       
              {item.sales}

            </td>

            <td  className = 'px-6 py-6 whitespace-nowrap flex text-sm text-gray-300'>
            <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
              <Edit size={18} />
            </button>
            <button className='text-red-400 hover:text-red-300 mr-2'>
              <Trash2 size={18} />
            </button>
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

export default ProductTable
