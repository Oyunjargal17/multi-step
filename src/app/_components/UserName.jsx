export const Username = () => {
  return (
    <div>
      <div className="flex gap-0.5 ml-8 mt-2">
        <p>Username</p>
        <p className="text-red-700">*</p>
      </div>
      <input
        className="border border-[#ced7e1] rounded-sm ml-8 mt-1 p-2 w-80"
        placeholder="Placeholder"
        type="text"
      />
    </div>
  );
};
