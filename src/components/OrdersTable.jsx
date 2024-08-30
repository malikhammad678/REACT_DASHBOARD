import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit, Eye, Search, Trash2 } from 'lucide-react';


const orderData = [
    { id: "OT0001", customer: "Ayan", total: 225.4, status: "Delivered", date: "2024/07/01" },
    { id: "OT0002", customer: "Ahmed", total: 244.4, status: "Processing", date: "2024/07/04" },
    { id: "OT0003", customer: "Ali", total: 345.0, status: "Shipped", date: "2024/07/05" },
    { id: "OT0004", customer: "Bilal", total: 567.4, status: "Pending", date: "2024/07/07" },
    { id: "OT0005", customer: "Dawood", total: 200.0, status: "Delivered", date: "2024/07/08" },
    { id: "OT0006", customer: "Ahmad", total: 225.4, status: "Processing", date: "2024/07/10" }
]
const OrdersTable = () => {

    const [searchTerms, setSearchTerms] = useState("");
    const [filteredProduct, setFilteredProduct] = useState(orderData);

    const handleSearch = (e) => {
        const searchTermsLower = e.target.value.toLowerCase();
        setSearchTerms(searchTermsLower);
        const filterOrders = orderData.filter(product => product.customer.toLowerCase().includes(searchTermsLower) || product.id.toLowerCase().includes(searchTermsLower));
        setFilteredProduct(filterOrders);
    }
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-700 mt-7'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6 w-full'>
                <h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
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
                <table className='min-w-full divide-y divide-y-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Order ID
                            </th>
                            <th className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Customer
                            </th>
                            <th className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Total
                            </th>
                            <th className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Status
                            </th>
                            <th className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Date
                            </th>
                            <th className='px-6 py-5 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700'>
     {
       filteredProduct.map((order,index) => {
        return (
          <motion.tr
          key={order.id}
          initial = {{opacity:0}}
          animate = {{opacity:1}}
          transition={{duration:0.3}}
          >

          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
            
             {order.id}
        
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
            
             {order.customer}
        
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
            
             ${order.total.toFixed(2)}
        
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
            
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                order.status === "Delivered" ? "bg-green-100 text-green-800" : order.status === "Processing" ? "bg-yellow-100 text-yellow-800" : order.status === "Shipped" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800" 
            }`}>{order.status}</span>
           
          </td>

          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
            
            {order.date}
       
         </td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
              <button className='text-indigo-400 hover:text-indigo-300 mr-2'><Eye size={18} /></button>
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

export default OrdersTable
