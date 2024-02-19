import { testimonials } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:py-16 py-6">
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6">
          <h2 className="heading-2 text-white w-full">
            What people are <br className="sm:block hidden" /> saying about us.
          </h2>

          <div className="w-full">
            <p className="paragraph text-white text-left max-w-md">
              Everything you need to accept card payments and grow your business anywhere on the
              planet.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap xl:justify-between justify-center w-full gap-6">
          {testimonials.map((testimonial) => (
            <FeedbackCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
