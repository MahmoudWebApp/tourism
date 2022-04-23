import React from 'react'

const CardFeature = ({ title, icon, subTitle }) => {
    return (
        <div className='p-4 rounded-md hover:bg-white dark:hover:bg-transparent border border-transparent dark:hover:border-gray-700 dark:bg-gray-800 hover:shadow-lg transition-all'>
            <button className=' bg-slate-100 p-2 rounded-md transition-all'>
                <span className='text-indigo-500'>
                    {icon}
                </span>
            </button>
            <p className='text-xl font-bold mt-3 mb-2 text-gray-600 dark:text-gray-100'>{title}</p>
            <p className='text-gray-500'>{subTitle}</p>
        </div>
    )
}

export default CardFeature