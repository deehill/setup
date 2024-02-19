import { discount, robot } from '../assets';
import { GetStarted } from '../components';

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex flex-1 flex-col justify-center items-start xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-2 px-4 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg mb-2">
          <img src={discount} alt="discount" className="w-8 h-8 mr-2" />
          <p className="text-dimWhite paragraph">
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-7xl text-6xl text-white ss:leading-tight leading-snug w-full">
            The Next <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Generation</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-semibold ss:text-[70px] text-6xl text-white ss:leading-tight leading-snug">
          Payment Method.
        </h1>
        <p className="text-dimWhite paragraph max-w-screen-xs mt-5">
          Our team of experts uses a methodology to identify the credit cards most likely to fit
          your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className="flex flex-1 justify-center items-center relative my-10 md:my-0">
        <img src={robot} alt="robot-hand" className="w-full h-full relative z-[5]" />

        <div className="absolute z-[1] w-4/5 h-4/5 bottom-40 bg-[#ffffff33] blur-[750px] rounded-full"></div>
        <div className="absolute z-0 w-1/2 h-1/2 bottom-20 right-20 bg-gradient-to-l from-cyan-900 blur-[128px]"></div>
      </div>

      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
