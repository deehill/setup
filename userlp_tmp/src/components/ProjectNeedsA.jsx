import { Button, FeatureCard } from '../components';
import { projectNeedsA } from '../constants';

const ProjectNeeds = () => {
  return (
    <section id="projectNeeds" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
This has the projectNeeds section..
        </h2>
<p className="paragraph text-white">
 What We Need From You   
 abc com needs users alot and more of you 
 we need to have users spread the word
 in order to operate our goal is to work with 
  local companies to have them advertise to the college community
  as such we need to have more and current information from you 
  the target college community on what types of businesses you want  
  to frequent what types of services you want to use
 -in other words, what can local companies do for the site (and for 
  you, our/their market) to show them some love!

 We need to have XX number of user sign up so we can get a feel for  
  the interest. 
 If cheaper books, as well as deals from local companies excite you, 
  sign up. 
 We're working on some sort of rewards to give the users who refer the 
  top number of users
</p>

      </div>

    </section>
  );
};

export default ProjectNeeds;

