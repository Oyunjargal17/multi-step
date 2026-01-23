"use client";

import { useState } from "react";

export const FirstName = ({ inputFirst }) => {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };
  return (
    <div>
      <div className="flex gap-0.5 ml-8 mt-2">
        <p>First name</p>
        <p className="text-red-700">*</p>
      </div>
      <input
        value={firstName}
        onChange={(e) => handleChange(e)}
        className="border border-[#ced7e1] rounded-sm ml-8 mt-1 p-2 w-80"
        placeholder="Placeholder"
        type="text"
      />
      <div>
        <p>{firstName}</p>
      </div>
    </div>
  );
};
