const Button = ({ styles, children }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-medium text-lg text-primary bg-blue-gradient outline-none rounded-lg ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
