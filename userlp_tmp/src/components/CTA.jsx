import Button from './Button';

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:flex-row flex-col rounded-3xl sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 bg-gradient-to-bl from-zinc-700">
      <div className="flex-1">
        <h2 className="heading-2 text-white">Try our service now.</h2>
        <p className="paragraph text-white max-w-screen-xs mt-4">
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className="flex justify-center items-center sm:mt-0 mt-10">
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default CTA;
