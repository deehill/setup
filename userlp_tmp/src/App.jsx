
{/*
	changing the files in the test app..
	-to test for the different hoobank..
	-the idea is to be able to get the navbar to "be non-scrollable
	 with the rest of the site scrolling..
*/}

import styles from "./style";

import { BrowserRouter } from "react-router-dom";
import './index.css';

{/*
import { Clients, CTA, Features, Footer, Hero, Navbar, NavbarA, Product, Stats } from './components';
*/}
import { Clients, CTA, Features, Footer, Hero, Navbar, NavbarA, Product, Stats, HomeA,TgtStatsA, BizPartnerA, StudentCtaA,  whyusA, usersA, ProjectNeedsA, SignupA, UreferralA, WorkWithUsA, AboutusA, PlatformsitesA } from './components';

import './css/app.css';
import CountDownTimer from './components/CountDownTimer';

{/*
const App = () => (
*/}
function App() {
	return (

	<BrowserRouter basename={"/userlp"}>
{/*
  <div className="bg-primary w-full overflow-hidden">
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="box-width">
        <NavbarA />
      </div>
    </div>
*/}
	<>
		<div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9]`}>
			<div className={`${styles.boxWidth}`}>
				<NavbarA />
			</div>
		</div>
		<div className="bg-primary w-full overflow-hidden">


			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<HomeA />
				        <CountDownTimer />

				</div>
			</div>

{/*
    <div className="bg-primary flex justify-center items-start">
      <div className="box-width">
        <HomeA />
      </div>
    </div>
*/}


			<div className="bg-primary flex justify-center items-center sm:px-16 px-6">
				<div className="box-width">
					<whyusA />
{/*
        <Stats />
        <Features />
        <Product />
        <Clients />

					<CTA />
*/}

					<usersA /> 
					<ProjectNeedsA /> 
					<SignupA />
					<UreferralA /> 
					<AboutusA />
					<PlatformsitesA />

					<Footer />

				</div>
			</div>

		</div>
	</>
	</BrowserRouter>

	);
}


export default App;
