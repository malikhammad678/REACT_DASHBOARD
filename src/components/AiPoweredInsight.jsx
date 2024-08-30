import React from 'react'
import { color, motion } from 'framer-motion'
import { TrendingUp, User, ShoppingBag, DollarSign } from 'lucide-react'

const INSIGHTS = [
    {
        icon:TrendingUp,
        color:"text-green-500",
        insight:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, numquam? Ut molestias commodi, vitae libero exercitationem sunt facilis numquam hic"
    },
    {
        icon:User,
        color:"text-blue-500",
        insight:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, numquam?"
    },
    {
        icon:ShoppingBag,
        color:"text-purple-500",
        insight:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, numquam?"
    },
    {
        icon:DollarSign,
        color:"text-yellow-500",
        insight:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, numquam?"
    }
]

const AiPoweredInsight = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-8'
    initial={{opacity:0, y:20}}
    animate= {{opacity:1, y:0}}
    transition={{delay:1.0}}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4' >
                Ai Powered Insights
            </h2>
            <div className='space-y-4'>
                {
                    INSIGHTS.map((insight, index) => {
                        return (
                            <div key={index} className='flex items-center space-x-3'>
                                <div className={`p-2 rounded-full ${insight.color} bg-opacity-20`}>
                                    <insight.icon className={`h-6 w-6 ${insight.color}`}  />
                                </div>
                                <p className='text-gray-300'>{insight.insight}</p>
                            </div>
                        )
                    })
                }
            </div>
    </motion.div>
  )
}

export default AiPoweredInsight
