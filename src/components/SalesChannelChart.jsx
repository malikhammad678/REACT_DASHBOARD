import React from 'react';
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const COLORS = ["#6366F1", "#885CF6", "#EC4899", "#108981", "#F59E00"];

const salesChannelData = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Market Place", value: 29500 },
  { name: "Social Media", value: 2100 }
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl lg:col-span-2 p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>
      <div className='h-80'>
        <BarChart
          width={900}
          height={350}
          data={salesChannelData}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#485563' />
          <XAxis dataKey="name" stroke='#9ca3af' />
          <YAxis stroke='#9ca3af' />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.8)",
              borderColor: "#485563"
            }}
            itemStyle={{ color: "#E5E7EB" }}
          />
          <Legend />
          <Bar dataKey="value" fill='#8884d8'>
            {salesChannelData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
