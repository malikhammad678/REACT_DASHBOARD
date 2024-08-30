import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const channelStatusData = [
    { name: "Organic Search", value: 3000 },
    { name: "Paid Search", value: 4000 },
    { name: "Direct", value: 6000 },
    { name: "Social Media", value: 2000 },
    { name: "Referral", value: 7000 },
    { name: "Email", value: 10000 },
]

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"]

const ChannelPerformance = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >

            <h2 className='text-xl font-semibold text-gray-100 mb-4' >
                Channel Performance
            </h2>

            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={channelStatusData} cx={"50%"} cy={"50%"} outerRadius={80} fill='#8884d8' dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {
                                channelStatusData.map((entry, index) => {
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

export default ChannelPerformance;
