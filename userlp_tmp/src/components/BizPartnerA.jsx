import { Button, FeatureCard } from '../components';
import { bizpartnerA } from '../constants';

const BizPartner = () => {
  return (
    <section id="bizpartner" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
This has the users section..<br/>
        </h2>
<p className="paragraph text-white">User Overview/Section<br/>
Local Business are key to the success of the TextBook Platform for the college student. The platform <br/>
 allows the business to advertise to the local college community, not only while the user <br/>
 is on the site, but also via targeted txt msgs. The businesses are key parts of the process, as the <br/>
 Ad revenue from the Business, allows the platform to operate, while keeping the price of the <br/>
 books as cheap as possible.<br/>

Check out the business site for more information on Local Businesses joining the platform for <br/>
 advertising, and how the advertising process helps lower the cost of textbooks for the <br/>
 college communities. <br/>
</p>

      </div>

    </section>
  );
};

export default BizPartner;
