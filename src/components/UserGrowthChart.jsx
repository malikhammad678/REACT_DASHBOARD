import React from 'react'
import { LineChart, Line , XAxis, YAxis, CartesianGrid , Tooltip, ResponsiveContainer  } from 'recharts'
import { motion } from 'framer-motion'

const GrowthData = [
    {name:"Jan", user:"1000"},
    {name:"Feb", user:"1500"},
    {name:"Mar", user:"2500"},
    {name:"Apr", user:"3000"},
    {name:"May", user:"4000"},
    {name:"Jun", user:"5000"}
]
const UserGrowthChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-700'
    initial = {{opacity:0, y:20}}
    animate = {{ opacity:1,y:0 }}
    transition={{delay:0.2}}
    >

        <h2 className='text-lg font-medium mb-4 text-gray-100 '>
            User Growth
        </h2>

        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={GrowthData}>
               <CartesianGrid strokeDasharray='3 3' stroke='#485563' />
               <XAxis dataKey={"name"} stroke='#9ca3af' />
               <YAxis dataKey={"user"} stroke='#9ca3af' />
               <Tooltip
               contentStyle={{
                backgroundColor : "rgba(31,41,55,0.8)",
                borderColor:"#485563"
               }}
               itemStyle={{color:"#E5E7EB"}}
               />
                <Line
                type="monotone"
                dataKey="user"
                stroke='#6366F1'
                strokeWidth={2}
                dot = {{fill:"#6366F1", strokeWidth:1,r:5 }}
                activeDot = {{r:7, strokeWidth:1}}
                >
                </Line>
              </LineChart>
            </ResponsiveContainer>
        </div>
       
    </motion.div>
  )
}

export default UserGrowthChart
