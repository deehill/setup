import { Button, FeatureCard } from '../components';
import { whyusA } from '../constants';

const WhyUs = () => {
  return (
    <section id="whyus" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
This has the updated why us section  <br />
        </h2>

<p className="paragraph text-white">
show diagram flow of overall textbook/ad process

                      user looks at site       +
                                               |
                                     user views class/book(s)
                                               |
                                  site displays ad(s) from local company!
                                               |
                                      user selects/buys book
                                               |
                                               |
                            user hopefully engages with advertiser
							user gets cheaper books
  create diagram image to show overall process/flow 
  of project process


What are we doing
  providing the same tetbooks as the local 
   bookstore for as cheaply as possible
    there is no additional profit added to the price
Why are we doing it
  books have gotten too expensive
  this is our attempt at making the process 
   cheaper 
How is platform able to run if not charging the 
 students for profit on the books
 -we work with local businesses who want to advertise to 
  the college community, and agree books are too expensive
 -by advertising to the student college community via the 
  site various advertising, these companies support the 
  operation.
Role of local advertisers
 Local companies who want to support the college community and 
  think books are too expensive, want to help  advertise on the 
  platform.
 The ad rev allows site to operate, books to be shipped.
 Advertisements are shown in the platform, as well as via occassional 
  txt msg.

How are books shipped
 Once the book is ordered, the item is shipped from the distributor 
  to the closest delivery site. This will normally be a fedexups 
  associated business. 
 The operation will not ship to home addresses due to porch pirates


        </p>
      </div>

    </section>
  );
};

export default WhyUs;
