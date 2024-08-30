import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react'
import StateCard from '../components/StateCard'
import UserTable from '../components/UserTable'
import UserGrowthChart from '../components/UserGrowthChart'
import UserHeatChart from '../components/UserHeatChart'
import UserDemoGraphicsChart from '../components/UserDemoGraphicsChart'
const Users = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
    <Header title= "Users" />
    <main className='max-w-7x1 mx-auto py-6 px-4 lg:px-8'>
         <motion.div
         className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
         initial= {{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.5}}
         >
            <StateCard name="Total Users" Icon = {UserIcon} value = "130,345" color="#6366F1" />
                <StateCard name="Active Users" Icon = {UserCheck} value = "23,450" color="#885CF6" />
                <StateCard name="New Users Today" Icon = {UserPlus} value = "38,578" color="#EC4899" />
                <StateCard name="Churn Rate" Icon = {UserX} value = "2.4%" color="#108981" />
          </motion.div>
         <UserTable />

         <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 '>
          <UserGrowthChart />
          <UserHeatChart />
          <UserDemoGraphicsChart />
         </div>
          </main>
          </div>
  )
}

export default Users
