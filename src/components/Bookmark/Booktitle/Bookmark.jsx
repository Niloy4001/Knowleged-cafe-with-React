
import PropTypes from 'prop-types';
import BookTitle from '../BookTitle';


const Bookmark = ({blogObj,readingTime}) => {
    console.log(blogObj);
    
    return (
        <div className="col-span-1 lg:col-span-1">
            <div>
                <h1 className="text-[#6047EC] font-bold text-xl lg:text-2xl text-center py-3 lg:py-5 border border-solid border-[#6047EC]/[0.1] rounded-lg bg-[#EFECFD]">Spent time on read : {readingTime} min</h1>
            </div>
            <div className="bg-[#EFECFD] p-4 lg:p-8  space-y-4">
                <h3 className="text-[#111111] font-bold text-xl lg:text-2xl">Bookmarked Blogs : {blogObj.length} </h3>
                <div className='space-y-4'>
                    
                    {
                        blogObj.map((item)=><BookTitle 
                        key={item.id}
                        title= {item.title}
                        ></BookTitle>)
                    }
                </div>
                
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    blogObj:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired,
}

export default Bookmark;