import CardTeam from "./CardTeam"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
const Teams = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-36 relative">
      <div className="w-8/12 lg:10/12 xl:8/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="hidden lg:inline teamSvg w-1/2 h-full absolute top-0 left-0 bottom-0 opacity-30"></div>
            <div className="hidden lg:inline w-1/2 bg-gradient-to-t from-gray-50 dark:from-gray-800 via-transparent absolute top-0 left-0 bottom-0 h-full"></div>
            <div className="flex justify-center gap-12">
              <div className="flex flex-col gap-12">
                <CardTeam imgUrl={"assets/images/team/smile.jpeg"} title={"Fate Foo"} subTitle={"CED"} />
                <CardTeam imgUrl={"assets/images/team/smile_man_1.jpg"} title={"Fate Foo"} subTitle={"CED"} />
              </div>
              <div className="flex flex-col gap-12 mt-12">
                <CardTeam imgUrl={"assets/images/team/smile_4.jpg"} title={"Fate Foo"} subTitle={"CED"} />
                <CardTeam imgUrl={"assets/images/team/smile_6.jpg"} title={"Fate Foo"} subTitle={"CED"} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-bold uppercase text-indigo-300 mb-1">
              Our Support Heroes
            </p>
            <p className="text-4xl font-bold text-gray-600 dark:text-gray-100">Meet The Team</p>
            <p className="mt-3 text-gray-500 text-md xl:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa minima consectetur repellat commodi iste soluta accusantium quae quam eos officia, eligendi voluptatum neque nam architecto voluptatibus, quaerat alias harum. Minima.</p>
            <div className="mt-8">
              <button className="transition-colors mr-4 py-2 px-3 border-2 border-gray-500 font-semibold text-gray-500 shadow-md hover:bg-gray-500 hover:text-white rounded-full">
                <PeopleAltIcon className="align-middle mr-1" />
                 Meet Us</button>
              <button className="transition-colors mr-4 py-2 px-3 border-2 bg-blue-400 border-blue-400 font-semibold text-white shadow-md hover:bg-blue-500 hover:border-blue-400 rounded-full">
                <LightbulbIcon className="align-middle mr-1" />
                 Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams