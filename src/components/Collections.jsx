import { collectionsData } from "../dummyData";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const Collections = () => {
  return (
    <section className='bg-slate-100 dark:bg-gray-800 py-32'>
      <div className="w-10/12 md:w-8/12 mx-auto">
        <Heading title1={"Discover by Collections"} title2={"Discover List of Top Places by Collections"}/> 
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            {collectionsData && collectionsData.map((coll) => <div key={coll.id} className='relative w-50 h-64 overflow-hidden shadow-md hover:shadow-lg'>
              <img src={coll.imgUrl} alt={coll.title} className='rounded w-full h-full object-cover shadow ' />
              <div className='bg-gradient-to-t from-black via-transparent inset-0 absolute rounded'></div>
              <div className='absolute bottom-2 left-3 '>
                <p className='text-white text-lg font-semibold'>{coll.title}</p>
                <p className='text-white text-sm '>21 Places</p>
              </div>
            </div>)}
          </div>
          <Button>
            More Collections
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Collections