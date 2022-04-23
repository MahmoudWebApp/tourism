import { discoverData } from "../dummyData"
import Button from "./ui/Button"
import Heading from "./ui/Heading"

const DiscoverCate = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-32">
            <div className="w-10/12 md:8/12 mx-auto">
                <Heading title1={"Discover by Categories"} title2={"Discover Places by Categories"} />
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-10'>
                        {discoverData && discoverData.map((item) =>
                            <a key={item.id} href="#nothing" className='p-4 bg-white dark:bg-gray-800 w-50 shadow-md space-y-5 rounded-lg hover:shadow-lg transition-all'>
                                <img src={item.iconUrl} alt="" className='w-32 h-32 mx-auto' />
                                <div className='space-y-2 text-center'>
                                    <p className="text-gray-700  dark:text-gray-100 text-lg font-semibold mb-3">
                                        {item.title}
                                    </p>
                                </div>
                            </a>
                        )}
                    </div>
                    <Button>
                        Discover More
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DiscoverCate