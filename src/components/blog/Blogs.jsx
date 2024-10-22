
import PropTypes from 'prop-types';
import Blog from './blog';

const Blogs = ({blogs}) => {
    // console.log(blogs);
    

    return (
        <div className="col-span-1 md:col-span-2 space-y-10 lg:space-y-16 pb-16 lg:pb-28 ">
            {
                blogs.map((item)=> <Blog key={item.id} blogs={item}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    blogs:PropTypes.array.isRequired
}

export default Blogs;