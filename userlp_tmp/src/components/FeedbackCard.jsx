import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col rounded-3xl max-w-sm my-5 px-10 py-12 hover:bg-gradient-to-br hover:from-zinc-700">
      <img src={quotes} alt="quotes" className="w-11 h-7 object-contain" />

      <p className="paragraph text-white my-10">{content}</p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-xl text-white leading-8 font-semibold">{name}</h4>
          <p className="text-base text-dimWhite leading-6 font-normal">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
