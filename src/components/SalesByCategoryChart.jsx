import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const salesByCategory = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 450 },
    { name: "Home", value: 500 },
    { name: "Books", value: 250 },
    { name: "others", value: 300 },
]

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"]
const SalesByCategoryChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >

            <h2 className='text-xl font-semibold text-gray-100 mb-4' >
                Sales by Category
            </h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={salesByCategory}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {
                                salesByCategory.map((item, index) => {
                                    return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                })
                            }

                        </Pie>
                        <Tooltip
                            contentStyle={{ background: "rgba(31,41,55,0.8)", borderColor: "#4B5563" }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>


        </motion.div>
    )
}

export default SalesByCategoryChart
