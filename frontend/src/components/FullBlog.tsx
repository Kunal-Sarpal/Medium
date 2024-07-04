// import React from 'react';
import BlogCard, { Avatar } from './BlogCard';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import AppBar from './AppBar';

interface Blog {
    id: number;
    title: string;
    content: string;
    createdAt: string; // Assuming createdAt is a string for date formatting
    author: {
        name: string | null;
        bio?: string; // Adding bio as an optional field
        posts: {
            id: number;
            title: string;
            content: string;
            published: boolean;
            authorId: string;
            createdAt: string; // Assuming createdAt is a string for date formatting
        }[];
    };
}

function FullBlog({ blog }: { blog: any }) {
    const navigate = useNavigate();
    return (
        <div className='absolute w-full select-none'>
            <AppBar />
            <div className='absolute border-[1px] w-fit border-zinc-300 shadow ml-10 mt-1 hover:shadow-xl hover:bg-zinc-800 hover:text-zinc-300 hover:border-none duration-150 rounded-full text-3xl font-semibold' onClick={() => navigate(-1)}>
                <IoIosArrowRoundBack />
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 p-6 bg-gray-50 rounded-lg overflow-hidden">

                <div className="col-span-1 h-[78vh] overflow-y-auto p-4">
                    <div className="text-5xl font-bold text-gray-900 mb-4">
                        {blog.title}
                    </div>
                    <div className="text-zinc-600  text-lg font-normal mb-4">
                        {blog.content}
                    </div>
                    <div className="text-zinc-600 text-sm font-normal">
                        
                        {new Date(blog.createdAt).toLocaleString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: true
                        })}
                    </div>
                </div>

                <div className="col-span-1 shadow-xl absolute w-[50%] top-15 right-0 h-full overflow-y-auto">
                    <div className="p-4">
                        <div className="text-2xl font-semibold text-gray-900 flex  gap-2 items-center">
                    <Avatar size="big" name={blog.author.name || "Anonymous"}/>
                           <div className='font-bold'>{blog.author.name || "Anonymous"}</div> 
                        </div>
                        <div className="text-gray-600 text-sm mt-2">
                            {blog.author.bio || "Passionate about all things tech, from coding to the latest gadgets. A software developer by day and a hacker by night, always eager to learn and explore new technologies. In my free time, you can find me contributing to open-source projects or diving into the latest sci-fi novels."}
                        </div>
                    </div>
                    <div>

                 
                        <div className="text-xl font-semibold mb-2 px-4">Recent Posts by <span className='text-orange-500'>{blog.author.name || "Anonymous"}</span></div>
                        <ul className="divide-y divide-gray-300">
                            {blog.author.posts.map((item:Blog, index:any) => (
                                <li key={index} className="py-4 px-4">
                                    
                                        <BlogCard
                                            authorName={blog.author.name || "Anonymous"}
                                            title={item.title}
                                            content={item.content}
                                            publishedDate={
                                                <span>
                                                    {new Date(item.createdAt).toLocaleString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        second: 'numeric',
                                                        hour12: true
                                                    })}
                                                </span>
                                            }
                                            id={item.id}
                                        />
                                    {/* </Link> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FullBlog;
