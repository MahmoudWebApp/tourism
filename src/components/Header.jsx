import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <header className='relative h-screen'>
            <img src="assets/images/hero/hero_4.jpg" alt="hero_4" className='h-full w-full object-cover' />
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 h0full w-full">
                <div className="flex min-h-full w-full items-center justify-center">
                    <div className='space-y-4'>
                        <div className="text-white text-center">
                            <p className='text-2xl lg:text-4xl capitalize font-comf mb-4 font-bold'>Discover places that people love</p>
                            <p className='text-lg w-8/12 mx-auto'>we will help you to find the best places in the world</p>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                            <div>
                                <input type="text" placeholder='location' className="rounded w-80 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100 py-3 px-4 focus:outline-none" />
                            </div>
                            <div>
                                <input type="text" placeholder='I,m Looking for ...' className="rounded w-80 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100 py-3 px-4 focus:outline-none" />
                            </div>
                            <div>
                                <button className="rounded-md py-2 lg:py-2.5 px-4 lg:px-6 bg-amber-500 text-lg text-white hover:bg-amber-600">
                                    <SearchIcon />Search</button>
                            </div>
                        </div>
                        <div className='w-9/12 mx-auto'>
                            <ul className='flex flex-wrap gap-5  justify-center text-sm text-white'>
                                <li className='capitalize'><a href="#nothing" className='hover:text-amber-500'><RestaurantMenuIcon className="align-middle"/>Restaurants</a></li>
                                <li className='capitalize'><a href="#nothing" className='hover:text-amber-500'><LocalCafeIcon  className='align-middle'/>cafe</a></li>
                                <li className='capitalize'><a href="#nothing" className='hover:text-amber-500'><FitnessCenterIcon  className='align-middle'/>gym</a></li>
                                <li className='capitalize'><a href="#nothing" className='hover:text-amber-500'><LocalHospitalIcon  className='align-middle'/>hospital</a></li>
                                <li className='capitalize'><a href="#nothing" className='hover:text-amber-500'><SchoolIcon  className='align-middle'/>school</a></li>
                                <li className='capitalize'><a href="#nothing" className='hover:text-amber-500'><ShoppingCartIcon className='align-middle' />shopping</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header