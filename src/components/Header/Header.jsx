import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-8 lg:py-16'>
            <h1 className="font-bold text-2xl lg:text-[40px] text-[#111111]">Knowledge Cafe</h1>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;