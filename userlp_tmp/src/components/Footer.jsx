import { logo } from '../assets';
import { footerLinksA, socialMediaLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col sm:py-16 py-6 gap-8">
      <div className="flex justify-center items-start md:flex-row flex-col w-full">



        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinksA.map(({ id, title, links }) => (
            <div key={id} className="flex-1 flex flex-col min-w-[160px]">
              <h4 className="paragraph text-white">{title}</h4>
              <ul className="list-none">
                {links.map(({ name, link }) => (
                  <li key={name} className="mt-4">
                    <a
                      href={link}
                      className="font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-zinc-700 pt-4">
        <p className="paragraph text-white">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>

        <div className="flex flex-row gap-6 md:mt-0 mt-6">
          {socialMediaLinks.map(({ id, icon, link }) => (
            <img key={id} src={icon} alt={id} href={link} />
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
