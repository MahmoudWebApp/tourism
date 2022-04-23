import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const ContactUs = () => {
    return (
        <section className='bg-slate-100 dark:bg-gray-800 lg:py-32'>
            <div className=" w-full lg:w-11/12 xl:w-9/12 mx-auto">
                <div className="shadow-lg lg:rounded-xl bg-cover bg-center relative py-12 px-12 bg-img z-10">
                    <div className='bg-black/70 absolute inset-0 h-full lg:rounded-xl -z-10'></div>
                    <div className="flex flex-col-reverse  items-end gap-12 lg:flex-row lg:gap-0">
                        <div className=' w-full lg:w-1/2 text-gray-100'>
                            <div className="mb-5">
                                <p className="text-4xl font-bold font-comf mb-5">
                                    Find Us
                                </p>
                                <div className="flex gap-6">
                                    <div className="border-r border-white pr-4">
                                        <p className="font-bold text-2xl font-libre">New York</p>
                                        <p className='text-sm'>Derrick Street Boston, MA 02130 USA</p>
                                    </div>
                                    <div className="border-r border-white pr-4">
                                        <p className="font-bold text-2xl font-libre">California</p>
                                        <p className='text-sm'>Derrick Street Boston, MA 02130 USA</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-2xl font-libre">Delhi</p>
                                        <p className='text-sm'>Derrick Street Boston, MA 02130 USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-full lg:w-1/2'>
                            <div className="bg-white dark:bg-gray-800 max-w-lg rounded-md shadow p-6 lg:ml-auto space-y-6 text-gray-600 dark:text-gray-100">
                                <div>
                                    <p className="text-4xl font-bold font-monte mb-4">Get In Touch</p>
                                    <p>Need help or have some feedback for us?</p>
                                    <p>Fill out the form below to contact our team.</p>
                                </div>
                                <form className='space-y-4'>
                                    <div className="flex text-gray-600 dark:text-gray-100 gap-10">
                                        <div>
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" placeholder='John' className='bg-white dark:bg-gray-800  dark:border-gray-700 py-2 px-3 w-full text-gray-600 dark:text-gray-100 rounded-md border mt-0.5 ' id='firstName' />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" placeholder='Doe' className='bg-white dark:bg-gray-800 dark:border-gray-700 py-2 px-3 w-full text-gray-600 dark:text-gray-100 rounded-md border mt-0.5 ' id='lastName' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" placeholder='Doe' className='bg-white dark:bg-gray-800 dark:border-gray-700 py-2 px-3 w-full text-gray-600 dark:text-gray-100 rounded-md border mt-0.5 ' id='email' />
                                    </div>
                                    <div>
                                        <label htmlFor="massage">Massage</label>
                                        <textarea rows="4" placeholder='Good Job! I only have this question...' className='bg-white dark:bg-gray-800  dark:border-gray-700 py-2 px-3 w-full text-gray-600 dark:text-gray-100 rounded-md border mt-0.5 ' id='massage' />
                                    </div>
                                    <div>
                                        <button className='py-2 px-3 rounded-md shadow bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-xl'>
                                            <LocalShippingIcon className='align-middle mr-1' />
                                            Get In Touch
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs