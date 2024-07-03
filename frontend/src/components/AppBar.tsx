import { Avatar } from "./BlogCard"

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
            <div ><Avatar size="big" name="Kunal" /></div>
        </div>
    )
}

export default AppBar