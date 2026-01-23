"use client";

export const Continue = ({ handleAdd }) => {
  return (
    <div>
      <div className="flex justify-center ">
        <button
          onClick={handleAdd}
          className="bg-[#121315] text-white w-80 rounded-sm mt-21 p-1"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
