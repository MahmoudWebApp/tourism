import React from 'react'

const Navbar = () => {
    return (
        <nav className='absolute right-0 left-0 z-10 text-white '>
            <div className="w-11/12 lg:w-9/12 xl:w-8/12 mx-auto py-5 flex justify-between items-center font-comf ">
                <div><a href="#nothing" className="text-sm lg:text-lg">
                    Tourism </a></div>
                <div><button className="text-sm py-2 px-4 rounded-md border border-amber-500 bg-transparent text-amber-500 hover:bg-amber-500 hover:text-white transition-all">
                    Add Listing
                </button>
                </div>
                <div className='space-x-4'>
                    <button className="text-sm lg:text-lg">
                        Sign In</button>
                    <button className="text-sm lg:text-lg">
                        Sign Up</button>
                </div>
            </div>

        </nav >
    )
}

export default Navbar