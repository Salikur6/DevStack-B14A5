import bannerImg from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="container mx-auto px-3 flex flex-wrap sm:flex-nowrap justify-center sm:justify-around my-25 gap-2">
            <div className='w-full sm:w-1/2 text-center sm:text-start '>
                <h1 className='font-intel text-3xl sm:text-[1.9rem] md:text-[2.5rem] font-bold mb-4'>Build Your Ideal <br />
                <span className='linear'>
                    Development Stack
                    </span></h1>
                <p className='font-jakarta mb-7 font-light text-justify lg:w-3/4 w-5/6 mx-auto sm:mx-0'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project. </p>

<div>
    <button className=' text-white bg-linear btn rounded-2xl mr-3'>Explore Technologies</button>
    <button className='btn rounded-2xl'>Learn More</button>
</div>
            </div>

            <div>
                <img src={bannerImg} width={'350px'} height={'350px'}  alt="" />
            </div>
        </div>
    );
};

export default Banner;