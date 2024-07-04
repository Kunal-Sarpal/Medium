import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Signin  from './pages/Signin'
import  Blog  from './pages/Blog'
import "nehu_taun/style.css"
import Blog1 from './pages/Blog1'
import Publish from './pages/Publish'

  
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<Blog1 />} />
          <Route path="/publish" element={<Publish   />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App