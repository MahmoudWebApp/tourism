import React from 'react'
import { featuresData } from '../dummyData'
import CardFeature from './CardFeature'

const Features = () => {
    return (
        <section className='bg-slate-100 dark:bg-gray-800 py-32'>
            <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
                <div className="text-center text-gray-600 dark:text-gray-100 mb-12">
                    <p className='text-4xl font-bold mb-2'>Our Valuable Features</p>
                    <p className='text-sm'>Actualize at conscious supponam ac. Vacem si longo mo co veris entis. </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 lg:gap-10 xl:gap-16'>
                    {featuresData && featuresData.map(item => <CardFeature key={item.id} title={item.title} subTitle={item.subTitle} icon={item.icon} />)}
                </div>
            </div>
        </section>
    )
}

export default Features