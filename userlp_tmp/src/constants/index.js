import {
  people01,
  people02,
  people03,
  send,
  shield,
  star,
  airbnb,
  binance,
  coinbase,
  dropbox,
  instagram,
  facebook,
  linkedin,
  twitter,
} from '../assets';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

const navLinksA = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'tgtstats',
    title: 'TgtStats',
  },
/*
  {
    id: 'whyus',
    title: 'Whyus',
  },

  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
  {
    id: 'users',
    title: 'users',
  },
  {
    id: 'projectNeeds',
    title: 'projectNeeds',
  },
*/
  {
    id: 'bizpartner',
    title: 'Partner/Biz Overview',
  },
  {
    id: 'studentcta',
    title: 'Student/Action',
  },
  {
    id: 'signup',
    title: 'Signup/Waitlist',
  },
/*
  {
    id: 'ureferral',
    title: 'ureferral',
  },
*/
  {
    id: 'workwithus',
    title: 'Work With Us',
  },
  {
    id: 'aboutus',
    title: 'About Us',
  },
/*
  {
    id: 'platformsites',
    title: 'platformsites',
  },
*/
];

const navLinksA_jul20_23 = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'tgttats',
    title: 'TgtStats',
  },
/*
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
*/
  {
    id: 'users',
    title: 'users',
  },
  {
    id: 'projectNeeds',
    title: 'projectNeeds',
  },
  {
    id: 'signup',
    title: 'signup',
  },
  {
    id: 'ureferral',
    title: 'ureferral',
  },
  {
    id: 'aboutus',
    title: 'aboutus',
  },
  {
    id: 'platformsites',
    title: 'platformsites',
  },
];



const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Rewards',
    content: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content: 'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content: 'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];

const testimonials = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
];

const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
];

const footerLinks = [
  {
    id: 'footer-1',
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    id: 'footer-2',
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    id: 'footer-3',
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

const footerLinksA = [
  {
    id: 'footer-1',
    title: 'Work With Us',
    links: [
      {
        name: 'Students - CommunitySales Reps',
        link: 'foo',
      },
      {
        name: 'Local Biz AdvertiserPartner',
        link: 'foo2',
      },
    ],
  },
];


const socialMediaLinks = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];


const homeA = [
  {
    id: 'home-1',
    title: 'blah',
  },
];
const tgtstatsA = [
  {
    id: 'tgtstats-1',
    title: 'blah',
  },
];

const bizpartnerA = [
  {
    id: 'bizpartner-1',
    title: 'blah',
  },
];
const studentctaA = [
  {
    id: 'studentcta-1',
    title: 'blah',
  },
];

const whyusA = [
  {
    id: 'whyus-1',
    title: 'blah',
  },
];
const usersA = [
  {
    id: 'users-1',
    title: 'blah',
  },
];


const projectNeedsA = [
  {
    id: 'projectNeeds-1',
    title: 'blah',
  },
];


const signupA = [
  {
    id: 'signup-1',
    title: 'blah',
  },
];


const ureferralA = [
  {
    id: 'ureferral-1',
    title: 'blah',
  },
];

const workwithusA = [
  {
    id: 'workwithus-1',
    title: 'blah',
  },
];

const aboutusA = [
  {
    id: 'aboutus-1',
    title: 'blah',
  },
];

const platformsitesA = [
  {
    id: 'platform-1',
    title: 'blah',
  },
];


{/*
export { navLinks, navLinksA, stats, features, testimonials, clients, footerLinks, socialMediaLinks };
*/}
export { navLinks, navLinksA, stats, features, testimonials, clients, footerLinks, footerLinksA, socialMediaLinks,  homeA, tgtstatsA, bizpartnerA, whyusA, usersA, projectNeedsA, signupA, ureferralA, workwithusA, aboutusA, platformsitesA };


