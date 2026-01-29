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
      <div className=" relative border border-[#ced7e1] rounded-sm w-80 h-50">
        <input
          className="absolute  inset-0 cursor-pointer w-full h-full opacity-0 z-10"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          ref={ref}
        />
        <div className="flex flex-col justify-center items-center w-full h-full">
          <img
            className="w-15 h-15 text-center"
            src="./addImage.svg"
            alt="addImage"
          />
          <p className="text-center text-sm">Add image</p>
        </div>
        {image && (
          <img
            className="absolute inset-0 object-cover z-0 rounded-sm w-full h-full"
            src={image}
          />
        )}
      </div>
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
