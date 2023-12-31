const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-black hover:text-white hover:border-white transition-colors duration-500
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"} `}
    >
      {label}

      {iconUrl && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
