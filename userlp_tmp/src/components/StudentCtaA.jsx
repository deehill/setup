import { Button, FeatureCard } from '../components';
import { studentctaA } from '../constants';

const StudentCta = () => {
  return (
    <section id="studentcta" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
Call To Action! (How to Help)br />

        </h2>

<p className="paragraph text-white">
As a Student reading this (or you're associated with a Student), you have a 
chance to help provide cheaper textbooks. We need users to signup(join) the 
site to build the community for the textbook process. The signup process slots 
the user in the Waitlist. 


signup/register to refer other users
 rewards for referral is being worked out. It won't be cash! that would add to the 
 cost of the books.
 -we might take suggestions from the community for what/how referrals should work 
 -since we're going to be having advertisers around the community, the referral 
 process might be a waitlist to allow users to be salesReps.. or to get a slice 
 of the revs... for the college/over a time frame...
</p>



      </div>

    </section>
  );
};

export default StudentCta;

