import Auth from "../components/Auth"
import Quote from "../components/Quote"
// import "nehu_taun/style.css"



function Signin() {
  return (
    <div className="">
        <div className="grid grid-cols-2 h-fit ">
            <div className="col-span-full lg:col-span-1 h-fit">
                <Auth type="signin"/>
            </div>
        
        <div className="hidden lg:block lg:col-span-1">

        <Quote/>
        </div>
        </div>
    </div>
  )
}

export default Signin