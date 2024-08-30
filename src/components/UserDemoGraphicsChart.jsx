import React from 'react'
import { motion } from 'framer-motion'

import { PieChart, Pie , Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const COLORS = ["#8884D8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"]

const UserDemoGraphicsData = [
  {name:"18-24", value:20},
  {name:"24-30", value:30},
  {name:"30-36", value:35},
  {name:"36-42", value:15},
  {name:"42+", value:10},
]
const UserDemoGraphicsChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2'
    initial = {{opacity:0, y:20}}
    animate = {{ opacity:1,y:0 }}
    transition={{delay:0.2}}
    >
    
    <h2 className='text-xl font-semibold text-gray-100 mb-4'>User Demographics</h2>
    <div style={{width:"100%", height:300}}>
    <ResponsiveContainer>
      <PieChart>
        <Pie
        data={UserDemoGraphicsData}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill='#8884d8'
        dataKey='value'
        label = {({name,percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {
            UserDemoGraphicsData.map((item,index) => {
              return (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              )
            })
          }
        </Pie>
        <Tooltip
               contentStyle={{
                backgroundColor : "rgba(31,41,55,0.8)",
                borderColor:"#485563"
               }}
               itemStyle={{color:"#E5E7EB"}}
               />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    </div>


      </motion.div>
  )
}

export default UserDemoGraphicsChart
