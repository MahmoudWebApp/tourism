import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Testimonials = () => {
    return (
        <section className='bg-white dark:bg-gray-800  py-36 relative z-10'>
            <div className='bg-slate-50 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-md w-8/12 absolute bottom-0 right-0 top-16 -z-10 rounded-tl-3xl'></div>
            <div className='w-8/12 lg:w-10/12 xl:w-8/12 mx-auto'>
                <div className="mb-20">
                    <p className="text-3xl md:text-4xl font-bold font-libre text-gray w-full lg:w-5/12">
                        What Our Customers Are Saying
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className="w-full md:w-1/2 mb-6 lg:mb-0">
                        <div className='w-full lg:w-10/12 h-72 relative mb-6'>
                            <div className='dot-pattern opacity-30 h-48 w-32 absolute -top-24 -left-16 -z-10'></div>
                            <div className='dot-pattern opacity-30 h-48 w-32 absolute -bottom-24 -right-16 -z-10'></div>
                            <div className="absolute z-10 -top-6 -right-6">
                                <div className='bg-indigo-500 h-16 w-16 rounded-full flex items-center justify-center'>
                                    <FormatQuoteIcon className='text-white' sx={{fontSize:"3rem"}}/>
                                </div>
                            </div>
                            <img src="assets/images/testimonials/testimonial-2.jpg" alt="" className='w-full h-full object-cover  rounded-md shadow-md' />
                        </div>
                        <div className="flex gap-1">
                            <button className='flex items-center justify-center h-10 w-10 bg-amber-400 text-white shadow-md hover:shadow-xl rounded-full p-2'>
                                <ChevronLeftIcon className="text-middle text-3xl text-gray-50" />
                            </button>
                            <button className='flex items-center justify-center h-10 w-10 bg-amber-400 text-white shadow-md hover:shadow-xl rounded-full p-2'>
                                <ChevronRightIcon className="text-middle text-3xl text-gray-50" />
                            </button>
                        </div>
                    </div>
                    <div className=" w-full lg:w-1/2 text-gray-600 dark:text-gray-100">
                        <p className="text-xl font-bold capitalize mb-3">
                            help us improve our productivity
                        </p>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam, commodi nesciunt placeat quibusdam voluptatum dolor numquam libero natus ipsa vero doloremque tempora tenetur, qui soluta molestias, in facilis eum.
                        </p>
                        <div >
                            <p className='font-bold text-lg'>Jon Doe</p>
                            <p>Lead Marketing Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials