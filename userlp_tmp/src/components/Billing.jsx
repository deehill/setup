import { apple, bill, google } from '../assets';

const Billing = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className="flex flex-1 justify-center items-center md:mr-10 m-0 md:mt-0 mt-10 relative">
        <img src={bill} alt="billing" className="w-full h-full relative z-10" />

        <div className="absolute z-[1] w-1/2 h-1/2 bg-[#ffffff33] blur-[750px] rounded-full"></div>
      </div>

      <div className="flex flex-col flex-1 justify-center items-start">
        <h2 className="heading-2 text-white">
          Easily control your <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className="paragraph text-white max-w-screen-xs mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
          ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex gap-4 flex-row flex-wrap sm:mt-8 mt-6">
          <img
            src={apple}
            alt="Apple App Store"
            className="w-32 h-11 object-contain cursor-pointer"
          />
          <img
            src={google}
            alt="Google PlayStore"
            className="w-32 h-11 object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
