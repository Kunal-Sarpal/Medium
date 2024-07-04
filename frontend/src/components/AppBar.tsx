import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard"
import { IoIosCreate } from "react-icons/io";


function AppBar() {
    return (
        <div className="flex justify-between p-5 px-6 shadow h-12 items-center">
            <div className="text-xl font-mono font-bold"><div className="overflow-hidden">
                <div className="flex animate- duration-700  transition-transform">
                    <div className="flex  duration-1000 ">Th
                        <div className="flex animate-pulse duration-1000">o
                            <div className="flex duration-1000">u
                                <div className="flex animate-pulse duration-1000">g
                                    <div className="flex">h
                                    </div><div className="">t</div>
                                </div>s
                            </div>
                        </div>
                    </div>
                </div>


            </div></div>
            <div className="flex items-center justify-center gap-10">
              
                <div className="button-12 overflow-hidden w-[30px] shadow shadow-green-500  h-2 rounded-md  text-sm "><div className="">
                    
                    <Link className="button-10 font-light text-sm  flex justify-center items-center gap-1 text-zinc-500" to={"/publish"}><IoIosCreate /> New</Link></div> 
                    
                    </div>
                <div >
                    <Avatar size="big" name="Kunal" />
                
                </div>
                
               
            </div>
        </div>
    )
}

export default AppBar