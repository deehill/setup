const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="flex flex-row p-6 rounded-2xl bg-transparent hover:bg-gradient-to-br hover:from-zinc-700 my-3">
      <div className="w-16 h-16 rounded-full bg-dimBlue flex justify-center items-center">
        <img src={icon} alt="star" className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="font-semibold text-white text-lg leading-tight mb-1">{title}</h4>
        <p className="font-normal text-dimWhite text-base leading-normal">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
