import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blog/blogs'
import Bookmark from './components/bookmark/Bookmark'


function App() {



  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])

  // console.log(blogs);

  return (
    <>

      <div className='w-[90%] mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-3 gap-6'>
          <Blogs blogs={blogs}></Blogs>
          <Bookmark></Bookmark>
        </div>


      </div>


    </>
  )
}

export default App
