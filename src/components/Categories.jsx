import CardCate from "./CardCate";
import { categories } from "../dummyData";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const Categories = () => {
    return (
        <section>
            <div className="bg-slate-100 dark:bg-gray-800 py-32">
                <div className="w-8/12 md:w-10/12 lg:w-8/12 mx-auto">
                    <Heading title1={"Categories"} title2={"Discover "}/>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto'>
                            {categories && categories.map((item) => <CardCate key={item.id} data={item} />)}
                        </div>
                        <Button>Discover More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories