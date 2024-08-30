import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'

const dailySalesData = [
    {day:"Mon", sales:100},
    {day:"Tue", sales:300},
    {day:"Wed", sales:400},
    {day:"Thu", sales:200},
    {day:"Fri", sales:670},
    {day:"Thu", sales:1000},
    {day:"Sat", sales:1200},
    {day:"Sun", sales:700}
]
const DailySalesTrend = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    >

<h2 className='text-xl font-semibold text-gray-100 mb-4' >
                Daily Sales
            </h2>

            <div style={{width:"100%", height:300}}>
                <ResponsiveContainer>
                    <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke = "#374151"  />
                     <XAxis dataKey="day" stroke='#9CA3AF' />
                     <YAxis stroke='#9CA3AF' />
                     <Tooltip
        contentStyle={{background:"rgba(31,41,55,0.8)", borderColor:"#4B5563"}}
        itemStyle={{color:"#E5E7EB"}}
        />
        <Bar dataKey="sales" fill='#10B981'/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

      
    </motion.div>
  )
}

export default DailySalesTrend
