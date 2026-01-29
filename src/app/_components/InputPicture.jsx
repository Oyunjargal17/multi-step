export const InputPicture = (props) => {
  const {
    type = "file",
    value,
    placeholder,
    onChange,
    name,
    label,
    error,
    ref,
    image,
  } = props;
  console.log(error);

  return (
    <div className="flex flex-col gap-2 ml-8 mt-2 ">
      <div className="flex">
        <label className="">{label}</label>
        <p className="text-red-700">*</p>
      </div>
      <div className="flex relative border border-[#ced7e1] rounded-sm w-80 h-50">
        <input
          className="cursor-pointer w-full h-full opacity-0"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          ref={ref}
        />
        <div className="flex justify-center items-center absolute">
          <img
            className="w-20 h-20 text-center"
            src="./addImage.svg"
            alt="addImage"
          />
        </div>
        {image && (
          <img className="absolute rounded-sm w-full h-full" src={image} />
        )}
      </div>
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
