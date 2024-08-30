import React from 'react'
import { motion } from 'framer-motion'
const SettingSection = ({icon:Icon, title, children}) => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl lg:col-span-2 p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >

        <div className='flex items-center mb-4'>
            <Icon className = "text-indigo-400" size={24} />
            <h2 className='text-xl font-semibold text-gray-100 ml-2'>
             {title}
            </h2>
        </div>
      {children}
    </motion.div>
  )
}

export default SettingSection
