import { Link } from "react-router-dom"

const Header = () => {
    return <>
        <header >
            <nav className="container flex justify-between items-center py-2 ">
                <div className="">
                    <p className=" font-bold text-3xl    text-primary sm:text-4xl">JobsPortal</p>
                </div>
                <div className="flex gap-4">
                    <Link to={"/login"}>Login </Link>
                    <Link to={"/post"}> <button className="bg-primary text-white p-1 rounded-md ">Post a job</button></Link>
                </div>
            </nav>
        </header>
    </>
}

export default Header