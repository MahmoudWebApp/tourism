import Rating from '@mui/material/Rating';
import PlaceIcon from '@mui/icons-material/Place';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
const CardCate = ({ data }) => {
    const { imgUrl, rating, reviews, title, location } = data;
    return (
        <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-md shadow overflow-hidden hover:shadow-xl transition-all">
            <div className='h-48 overflow-hidden'>
                <img src={imgUrl} alt={title} className='w-full h-full object-cover' />
            </div>
            <div className="px-6 py-4 space-y- relative">
                <div className="flex-items-center text-sm">
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly className='text-amber-400' />
                    <span className='ml-2 text-xs text-gray-600 dark:text-gray-100'>{reviews} Reviews</span>
                </div>
                <p className="text-lg font-bold text-gray-600  dark:text-gray-100">
                    {title}
                </p>
                <p className="text-sm text-gray-600  dark:text-gray-100">
                    <PlaceIcon className='align-middle text-gray-500 -ml-1' />
                    {location}
                </p>
                <div>
                    <span className="text-xs px-2 py-0.5 ml-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-full" >clink</span>
                    <span className="text-xs px-2 py-0.5 ml-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-full" >hospital</span>
                    <span className="text-xs px-2 py-0.5 ml-1 bg-amber-100 border border-amber-200 text-amber-700 rounded-full" >$$</span>
                </div>
                <div className="absolute right-3 bottom-1">
                    <span className="text-red-500">
                        <LocalFireDepartmentIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardCate;