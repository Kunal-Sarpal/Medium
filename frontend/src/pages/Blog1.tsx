import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog";
import Skelton from "./Sketon";

function Blog1() {
    const {id} = useParams();

    const {loading ,blog} = useBlog({
        id: id || ""
    });
    if(loading){
        return <div><Skelton num={blog}/></div>
    }
  return (
    <div>
        <FullBlog blog={blog}/>
      
    </div>
  )
}

export default Blog1