import jobcat from "../../staticdata"
import { BiCategory } from 'react-icons/bi'
import Banner from "../../assets/images/Banner.png"
const Home = () => {
    return <>
        <div className="banner bg-Banner bg-contain md:bg-cover bg-no-repeat h-[80vh]">
            <div className="container pt-10 md:pt-36">
                <h1 className="font-bold text-2xl container font-serif md:text-4xl">Find A <span className="text-primary">Job 
                </span >That<br /> <span className="text-primary">Matches</span> Your <br />Passion
                </h1>
                <p className="py-4 font-serif text-xl container">Hand-picked opportunities to work from home, remotely, freelace, full-time,<br/>
                    part-time, contract and internships.</p>
                <div className="my-2 flex container">
                    <input type="text" className="border-2 border-primary  p-3 w-[40vw] " name="search" placeholder="Search your job title ............" />
                    <button className="bg-primary text-white p-3 text-2xl ">Search</button>
                </div>
            </div>
        </div>
        <h2>Categories</h2>
        <div className=" container grid grid-cols-6 list-none text-left ">
    
            {
                jobcat.map(el => {
                    return <li className=""><BiCategory className="inline"/>{el}</li>
                })
            }
        </div>
        {/* <img src={Banner}/> */}
    </>
}
export default Home