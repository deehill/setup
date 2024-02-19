import { card } from '../assets';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex flex-1 flex-col justify-center items-start">
        <h2 className="heading-2 text-white">
          Find a better card deal <br className="sm:block hidden" /> in few easy steps
        </h2>
        <p className="paragraph text-white max-w-screen-xs mt-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
          tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles="mt-6">Get Started</Button>
      </div>

      <div className="flex flex-1 justify-center items-center md:mr-10 m-0 md:mt-0 mt-10 relative">
        <img src={card} alt="Card deals" className="w-full h-full relative z-10" />

        <div className="absolute z-[1] w-full h-full bg-[#ffffff33] blur-[750px] rounded-full"></div>
      </div>
    </section>
  );
};

export default CardDeal;
