export const InputDate = (props) => {
  const {
    type = "date",
    value,
    placeholder,
    onChange,
    name,
    label,
    error,
  } = props;
  console.log(error);

  return (
    <div className="flex flex-col gap-0.5 ml-8 mt-2">
      <div className="flex">
        <label className="">{label}</label>
        <p className="text-red-700">*</p>
      </div>
      <input
        className="border border-[#ced7e1] rounded-sm p-2 mt-1 w-80"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
