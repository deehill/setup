import { Button, FeatureCard } from '../components';
import { aboutusA } from '../constants';

const Aboutus = () => {
  return (
    <section id="aboutus" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
 This is the about us contact section  <br />
        </h2>
<p className="paragraph text-white">
-About/Contact us
 --bottom of the main page<br />
email

Work/Partner With Us<br />
Be a Student Sales Rep<br />
Be A Local Biz/Advertiser<br />

</p>

      </div>

    </section>
  );
};

export default Aboutus;

