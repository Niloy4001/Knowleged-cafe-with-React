import PropTypes from 'prop-types';

const BookTitle = ({title}) => {
    // console.log(title);
    
    return (
        <div>
            <h1 className="p-3  md:p-5 bg-white rounded-lg text-[#111111] font-semibold text-base lg:text-lg ">{title}</h1>
        </div>
    );
};


BookTitle.propTypes = {
    title:PropTypes.array.isRequired,
}

export default BookTitle;