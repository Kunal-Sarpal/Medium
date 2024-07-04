import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "zodjicommon";
import { DATABASE_URL } from "../config";
import "nehu_taun/style.css"


function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
    const [postsInput, setPostInputs] = useState<SignupInput>({
        email:"",
        password:"",
        name:""
    })


    async function sendRequest(){
        try{
            // backend ignore name
            const response =   await axios.post(`${DATABASE_URL}/api/v1/user${type === "signup" ? "/signup" : "/signin" }`,postsInput);
            const newdata = await response.data;
            
            console.log(newdata);
            localStorage.setItem("token",newdata);
            navigate("/blogs")
            

        }
        catch(e){
            alert("Error while Signing");
        }
    }
    return (
         
        <div className="h-screen flex justify-center flex-col items-center">
            <div className="flex justify-center flex-col items-center  w-fit ">

                <div className="text-3xl font-extrabold">
                
                {type === "signup" ? (" Create an  Account"):("Login an Account")}
                </div>

                <div className="text-slate-400">

                    {type === "signin" ? "Dont have an account ?":"Alerady have and Account ?"} <Link className="pl-2 underline" to= {type === "signin" ? "/signup":"/signin"}>{type === "signin" ? "signup":"  signin"}</Link>
                </div>
                <div className="w-full mt-5">
                    {type === "signup" ? (<>  <LabelledInput label="Name" placeholder="Kunal Sarpal" onChange={(e:any)=>{
                        
                       setPostInputs({
                        ...postsInput,
                        name: e.target.value
                       })
                    }}/></>):(null)}
                  
                    <LabelledInput label="Email" placeholder="Kunal@gmail.com" onChange={(e:any)=>{
                        
                        setPostInputs({
                            ...postsInput,
                            email: e.target.value
                           })
                    }}/>
                    <LabelledInput label="password" type="password" placeholder="password" onChange={(e:any)=>{
                        
                        setPostInputs({
                            ...postsInput,
                            password: e.target.value
                           })
                    }}/>
                    <button onClick={sendRequest} className="form-button font-sans font-bold text-[18px]">{type === "signup" ? "SignUp": "SignIn"}</button>
                </div>
            </div>


        </div>
    )
}
interface LabelledInput{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>) => void;
    type?:string;
}
// @ts-ignore

export function LabelledInput({ label, placeholder, onChange,type }:LabelledInput) {
    return <div>

         

        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label  className="block text-zinc-400 pl-1 tracking-tight  text-sm font-medium">{label}</label>
                {/* <input onChange={onChange} type={type} id="email" className="bg-gray-50 input-1  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required /> */}
                <input onChange={onChange} type={type} className="input-1 text-sm " placeholder={placeholder} required/>
            {/* <button className="button-1 w12-c ">Submit</button> */}

            </div>
        </form>

    </div>
}
export default Auth