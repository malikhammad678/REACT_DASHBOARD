import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const OrdersStatusData = [
    { name: "Pending", value: 30 },
    { name: "Processing", value: 40 },
    { name: "Shipped", value: 60 },
    { name: "Delivered", value: 200 }
]

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"]

const DailyOrderDestribution = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >

            <h2 className='text-xl font-semibold text-gray-100 mb-4' >
                Orders Distribution
            </h2>

            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={OrdersStatusData} cx={"50%"} cy={"50%"} labelLine={false} outerRadius={80} fill='#8884d8' dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {
                                OrdersStatusData.map((entry, index) => {
                                    return (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    )
                                })
                            }
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#485563"
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </motion.div>
    )
}

export default DailyOrderDestribution
