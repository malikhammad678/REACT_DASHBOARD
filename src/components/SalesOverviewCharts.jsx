import React from 'react'
import { LineChart, Line , XAxis, YAxis, CartesianGrid , Tooltip, ResponsiveContainer  } from 'recharts'
import { motion } from 'framer-motion'

const SalesData = [
    {name:"July", sales:"4200"},
    {name:"Aug", sales:"3800"},
    {name:"Sep", sales:"5100"},
    {name:"Oct", sales:"4600"},
    {name:"Nov", sales:"4700"},
    {name:"Dec", sales:"7200"},
    {name:"Jan", sales:"8100"},
    {name:"Feb", sales:"7500"},
    {name:"Mar", sales:"7000"},
    {name:"Apr", sales:"6300"},
    {name:"May", sales:"7600"},
    {name:"Jun", sales:"8000"}
]
const SalesOverviewCharts = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-700'
    initial = {{opacity:0, y:20}}
    animate = {{ opacity:1,y:0 }}
    transition={{delay:0.2}}
    >

        <h2 className='text-lg font-medium mb-4 text-gray-100 '>
            Sales Overview
        </h2>

        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={SalesData}>
               <CartesianGrid strokeDasharray='3 3' stroke='#485563' />
               <XAxis dataKey={"name"} stroke='#9ca3af' />
               <YAxis dataKey={"sales"} stroke='#9ca3af' />
               <Tooltip
               contentStyle={{
                backgroundColor : "rgba(31,41,55,0.8)",
                borderColor:"#485563"
               }}
               itemStyle={{color:"#E5E7EB"}}
               />
                <Line
                type="monotone"
                dataKey="sales"
                stroke='#6366F1'
                strokeWidth={3}
                dot = {{fill:"#6366F1", strokeWidth:2,r:6 }}
                activeDot = {{r:8, strokeWidth:2}}
                >
                </Line>
              </LineChart>
            </ResponsiveContainer>
        </div>
       
    </motion.div>
  )
}

export default SalesOverviewCharts
