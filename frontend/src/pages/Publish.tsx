import { useState } from 'react';
import axios from 'axios';
import AppBar from '../components/AppBar';
import { useNavigate } from 'react-router-dom';
import { createBlogInput } from 'zodjicommon';
// import { z } from 'zod';
import { IoIosArrowRoundBack } from 'react-icons/io';

function Publish() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState<any>({ title: '', content: '' });
    const navigate = useNavigate();

    const handleSubmit = async () => {
        // Reset errors
        setErrors({ title: '', content: '' });

        // Validate form data
        const validation = createBlogInput.safeParse({ title, content });

        if (!validation.success) {
            // Extract errors and update state
            const newErrors = validation.error.errors.reduce((acc:any, error:any):any => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});
            setErrors(newErrors);
            return;
        }

        try {
            await axios.post('https://backend.sarpalkunal7.workers.dev/api/v1/blog', {
                title: title,
                content: content
            }, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                }
            });

            // Navigate to the blogs page after successful creation
            navigate("/blogs");

        } catch (error) {
            console.error('Error creating blog post:', error);
            // Handle error scenario here
        }
    };

    return (
        <>
            <AppBar />
            <div className='absolute p-3 w-fit  shadow ml-10 mt-2 hover:shadow hover:bg-zinc-800 hover:text-zinc-300 hover:border-none duration-150 rounded-full text-3xl font-semibold' onClick={()=>navigate(-1)}><IoIosArrowRoundBack /></div>
            <div className='max-w-screen-sm m-auto h-fit mt-10 rounded  shadow-zinc-300 flex flex-col justify-center shadow-md pt-5'>
                <div className='text-7xl m-5 font-light text-zinc-700'>Create Blog..</div>
                <div className='relative m-5'>
                    <label className='absolute top-[-12px] text-zinc-500 left-5 bg-white'>Title</label>
                    <input
                        className='input-1 py-5 text-sm'
                        placeholder='Enter title here...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                </div>

                <div className='relative m-5'>
                    <label className='absolute top-[-12px] text-zinc-500 left-5 bg-white'>Content</label>
                    <textarea 
                        className='input-1 py-5 h-40 text-sm'
                        placeholder='Enter content here...'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                </div>

                <input
                    type='submit'
                    className='m-auto w-full form-button rounded-none font-normal'
                    value={"Create"}
                    onClick={handleSubmit}
                />
            </div>
        </>
    );
}

export default Publish;
