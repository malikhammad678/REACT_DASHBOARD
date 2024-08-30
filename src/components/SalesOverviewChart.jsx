import React,{ useState } from 'react'
import {motion} from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer  } from 'recharts'

const monthlySalesData = [
    {name:"Jan", sales:4000},
    {name:"Feb", sales:3000},
    {name:"Mar", sales:4500},
    {name:"Apr", sales:6000},
    {name:"May", sales:5000},
    {name:"Jun", sales:8000},
    {name:"Jul", sales:10000}
]
const SalesOverviewChart = () => {
    const [selectedTime, setSelectedTime] = useState("This Month")
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
    initial={{opacity:0, y:20}}
    animate= {{opacity:1, y:0}}
    transition={{delay:0.3}}
    >
    <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>
            Sales Overview
        </h2>

        <select
        className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)} 
        >
        <option>This Week</option>
        <option>This Month</option>
        <option>This Quarter</option>
        <option>This Year</option>
           
        </select>
    </div>

    <div className='w-full h-80'>
     <ResponsiveContainer>
        <AreaChart data={monthlySalesData}>
        <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
        <XAxis dataKey="name" stroke='#9CA3AF'  />
        <YAxis stroke='#9CA3AF' />
        <Tooltip
        contentStyle={{background:"rgba(31,41,55,0.8)", borderColor:"#4B5563"}}
        itemStyle={{color:"#E5E7EB"}}
        />
        <Area
        type="monotone" dataKey="sales" stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3}
        />
        </AreaChart>
     </ResponsiveContainer>
    </div>

    </motion.div>
  )
}

export default SalesOverviewChart
