import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

const ProductPerformanceData = [
    {name:"Product 1", sales:"4500", revenue:"2400", profit:"3300"},
    {name:"Product 2", sales:"6000", revenue:"3000", profit:"6700"},
    {name:"Product 3", sales:"5000", revenue:"4500", profit:"9800"},
    {name:"Product 4", sales:"2300", revenue:"6000", profit:"1300"},
    {name:"Product 5", sales:"9000", revenue:"5600", profit:"5600"},
    {name:"Product 6", sales:"6000", revenue:"2300", profit:"7800"}
]
const ProductPerformance = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    >

<h2 className='text-xl font-semibold text-gray-100 mb-4' >
                Product Performance
            </h2>

            <div style={{width:"100%", height:300}}>
                <ResponsiveContainer>
                    <BarChart data={ProductPerformanceData}>
                    <CartesianGrid strokeDasharray='3 3' stroke = "#374151"  />
                     <XAxis dataKey="name" stroke='#9CA3AF' />
                     <YAxis stroke='#9CA3AF' />
                     <Tooltip
        contentStyle={{background:"rgba(31,41,55,0.8)", borderColor:"#4B5563"}}
        itemStyle={{color:"#E5E7EB"}}
        />
        <Bar dataKey="sales" fill='#10B981'/>
        <Bar dataKey="revenue" fill='#10B981'/>
        <Bar dataKey="profit" fill='#10B981'/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

      
    </motion.div>
  )
}

export default ProductPerformance;
