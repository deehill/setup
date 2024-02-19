import { Button, FeatureCard } from '../components';
import { signupA } from '../constants';

const Signup = () => {
  return (
    <section id="signup" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex justify-center items-start flex-col">
        <h2 className="heading-2 text-white">
This has the signup form section<br />

        </h2>

<p className="paragraph text-white">
the I want to give my email  Id m interested <br />
the I m giving more data as well  to help the local biz get on board <br />
</p>

<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Sign Up to Join the List for Cheaper Textbooks!</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Spread the Message!</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">Local Biz!</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					(Generate Count/# of signed up users/partners) members
				</div>

				<form 
					action="" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-slate-600 md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
					</div>
				</div>
			</footer>
		</div>	



<p className=" text-white">
emailDialog <br />
userDataDialog Form process <br />

-SignUp/Join<br />

While this operation/site is targeted to helping students who <br />
 pay for their books to get cheaper textbooks, it would be great <br />
 for you to join anyway. In order to lower the price of the books, <br />
 local businesses are advertising to the college communities, and <br />
 the more "potential" student data, the better!<br />
 
Input Form<br />
-during the main page<br />
1st<br />
last name<br />
email<br />
phone<br />
do you pay for your own textbooks<br />

college major<br />
year in college<br />
fulltime/parttime<br />


 if you do pay for your books..<br />
how important is the cost of your textbook<br />
can you estimate the price of your textbooks/semester<br />

how much are your textbooks<br />
 by term -- give $ ranges have a radio select<br />
   0-100<br />
   100-300<br />
   300-500<br />
	etc..<br />
  
where do you get your textbooks<br />
 bookstore<br />
 online(amazon,etc)<br />
 free in class<br />
 combined with tuition<br />
 access<br />
 custom/inclass/access<br />
 	does your school bundle cost of textbooks with tuition
	would you use cheaper books instead of bundling
	do you get online/delivered items (amazon/etsy/etc..)
	would you be good with getting your books from a fedex/ups 
	 location to reduce porch pirate/theft

would you be more inclined to do business with <br />
 local companies that help lower your tetbook cost<br />
 yes/no<br />

would you be more inclined to do business with 
 local companies that help lower your tetbook cost


would you be willing to refer other user to sign up to <br />
 try out this site<br />
 yes/no<br />

what city/college<br />
 select list of cities/colleges/other<br />

do you do social media<br />
 tiktok<br />
 instagram<br />
 twitter<br />
 fb<br />
 other<br />

question for user to see if user uses local businesses<br />
  -in order to provide cheaper books, businesses local <br />
	to college comunities are offering to advertise to <br />
	the users on the booksite platform.<br />

  -the process needs to make the case to the businesses <br />
	that enough users would/might look favorably on these <br />
	businesses<br />

	-do you/your friends spend time/money on local businesses<br />
<br />
	-what type of local businesses do you/your friends use<br />
<br />
	would you/your friends be more likely to use a business that <br />
	 advertised on this site, (assuming you needed <br />
	 what the biz offered)<br />

<br />
Would you/your friends be more likely to use companies that helped support <br />
 cheaper books<br />
 yes/no<br />
<br />

What kind of businesses would you be inclined to want to see ads <br />
 from<br />
etc..<br />
etc <br />
</p>



      <div className="flex-1">
        <h2 className="heading-2 text-white">Try our service now.</h2>
        <p className="paragraph text-white max-w-screen-xs mt-4">
          Join us...
        </p>
      </div>

      <div className="flex justify-center items-center sm:mt-0 mt-10">
        <Button>Get Started</Button>
      </div>

      </div>

    </section>
  );
};

export default Signup;

