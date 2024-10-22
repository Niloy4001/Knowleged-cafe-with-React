import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blog/blogs'
import Bookmark from './components/Bookmark/Booktitle/Bookmark'


function App() {



  const [blogs, setBlogs] = useState([])
  const [blogObj, setBlogObj] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  


  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])


  const handleBookMark = (blogs) => {
    const newBlogObj = [...blogObj,blogs];
    setBlogObj(newBlogObj)

    setReadingTime(readingTime + blogs.readingTime)
    // console.log(blogObj);
        


  }
  // console.log(blogs);

  return (
    <>

      <div className='w-[90%] mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-3 gap-6'>
          <Blogs
            blogs={blogs}
            handleBookMark={handleBookMark}
          ></Blogs>
          <Bookmark
          blogObj={blogObj}
          readingTime={readingTime}
          ></Bookmark>
        </div>


      </div>


    </>
  )
}

export default App
