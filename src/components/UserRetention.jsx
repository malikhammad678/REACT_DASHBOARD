import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const DailyOrdersData = [
    {name:"Week 1", retention:100},
    {name:"Week 2", retention:75},
    {name:"Week 3", retention:70},
    {name:"Week 4", retention:60},
    {name:"Week 5", retention:50},
    {name:"Week 6", retention:45},
    {name:"Week 7", retention:35},
    {name:"Week 8", retention:20}
]
const UserRetention = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    >

<h2 className='text-xl font-semibold text-gray-100 mb-4 h-20' >
              User Retentation
            </h2>
      

    <div style={{width:"100%", height:300}}>
        <ResponsiveContainer>
            <LineChart data={DailyOrdersData}>
                <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
                <XAxis dataKey='name' stroke='#9CA3AF' />
                <YAxis stroke='#9CA3AF' />
                <Tooltip
        contentStyle={{background:"rgba(31,41,55,0.8)", borderColor:"#4B5563"}}
        itemStyle={{color:"#E5E7EB"}}
        />
        <Legend />
        <Line type='monotone' dataKey='retention' stroke='#8B5CF6' strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
    </motion.div>
  )
}

export default UserRetention
