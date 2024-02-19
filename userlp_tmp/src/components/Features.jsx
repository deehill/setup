import { Button, FeatureCard } from '../components';
import { features } from '../constants';

const Features = () => {
  return (
    <section id="features" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
          You do the business, <br className="sm:block hidden" /> we&apos;ll handle the money
        </h2>
        <p className="font-normal text-lg leading-8 text-white max-w-screen-xs mt-5">
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles={`mt-10`}>Get Started</Button>
      </div>

      <div className="flex flex-1 justify-center items-center flex-col md:ml-10 ml-0 md:mt-0 mt-10">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
