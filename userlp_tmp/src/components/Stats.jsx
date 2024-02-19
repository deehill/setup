import { stats } from '../constants';

const Stats = () => {
  return (
    <section
      id="stats"
      className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6"
    >
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-1 justify-start items-center flex-row m-3">
          <h4 className="text-white font-semibold xs:text-[42px] text-4xl">{stat.value}</h4>
          <p className="text-gradient font-normal xs:text-xl text-base uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
