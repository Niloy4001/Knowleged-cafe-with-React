import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blogs, handleBookMark, handleMarkAsRead }) => {
    const { authorAvatar, authorName, courseThumbnail, hashTag, postDate, readingTime, title, id } = blogs
    // console.log(blogs);
    // console.log(authorAvatar,authorName,courseThumbnail,hashTag,id,postDate,readingTime,title);

    return (
        <div>
            <div className='mb-4 lg:mb-8 '>
                <img src={courseThumbnail} alt="" className='w-full md:h-[450px] h-72 rounded-lg object-cover' />
            </div>
            <div className='flex justify-between items-center mb-2 lg:mb-5 '>
                <div className='flex items-center gap-3 '>
                    <div><img src={authorAvatar} alt="" className='w-[60px] h-[60px] rounded-full ' /></div>
                    <div>
                        <h3 className='text-[#111111] font-bold text-base lg:text-2xl '>{authorName}</h3>
                        <p className='text-[#111111]/[0.6] font-semibold text-sm lg:text-base '>{postDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 '>
                    <p>{readingTime} min </p>
                    <p className='cursor-pointer ' onClick={() => handleBookMark(blogs)}><IoBookmarksOutline /></p>
                </div>
            </div>
            <h1 className='text-[#111111] font-bold text-xl md:text-[40px] mb-2 lg:mb-4 '>{title} </h1>
            <p className='text-[#111111]/[0.6] font-medium text-sm lg:text-base mb-3 lg:mb-5'>{hashTag} </p>
            <div>
                <button className='text-[#6047EC] font-semibold text-sm md:text-xl underline' onClick={() => handleMarkAsRead(id)}>Mark as reads</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blogs: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;