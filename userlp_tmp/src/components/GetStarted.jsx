import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center rounded-full bg-blue-gradient w-36 h-36 cursor-pointer p-1">
      <button className="flex flex-col justify-center items-center rounded-full w-full h-full bg-primary">
        <p className="text-lg text-gradient">
          <span className="flex justify-center items-center">
            Get
            <img src={arrowUp} alt="" />
          </span>
          Started
        </p>
      </button>
    </div>
  );
};

export default GetStarted;
