"use client";

import { useState } from "react";
import { FormUserInfo } from "./FormUserInfo";
import { FormEmailPassport } from "./FormEmailPassport";

export const Form = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    updateFormError({ [name]: "" });
  };

  const updateFormError = (error) => {
    setFormError({ ...formError, ...error });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-[#f4f4f4] h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-100 h-150 bg-white rounded-sm">
          <img className="w-10 h-10 mt-8 ml-8" src="/logo.png" alt="logo" />
          <h1 className="font-bold ml-8 mt-4">Join Us! 😎</h1>
          <p className="text-sm ml-8 text-[#8e8e8e]">
            Please provide all current information accurately.
          </p>
          <div>
            {step === 1 && (
              <FormUserInfo
                formData={formData}
                onChange={onChange}
                formError={formError}
                updateFormError={updateFormError}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {step === 2 && (
              <FormEmailPassport
                formData={formData}
                onChange={onChange}
                formError={formError}
                updateFormError={updateFormError}
                handlePrev={handlePrev}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// import { useState } from "react";
// import { Continue } from "./Continue";
// import { FirstName } from "./FirstName";
// import { LastName } from "./LastName";
// import { Username } from "./UserName";

// export const Multi = () => {
//   const [inputFirstValue, setInputFirstValue] = useState("");

//   const inputFirst = () => {};

//   const handleAdd = () => {
//     console.log(inputFirstValue);
//   };

//   return (
//     <div className="bg-[#f4f4f4] h-screen">
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="w-100 h-150 bg-white rounded-sm">
//           <img className="w-10 h-10 mt-8 ml-8" src="/logo.png" alt="logo" />
//           <h1 className="font-bold ml-8 mt-4">Join Us! 😎</h1>
//           <p className="text-sm ml-8 text-[#8e8e8e]">
//             Please provide all current information accurately.
//           </p>
//           <FirstName inputFirst={inputFirst} />
//           <LastName />
//           <Username />
//           <Continue handleAdd={handleAdd} />
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client"

// import { useState } from "react"

// export const Multi= () =>
// {
//   const [count, setCount] = useState(0)
//   const add= () =>
// {
//   setCount((prev)=> prev +1)
// }

//  return ( <div>
//   {count === 0 ? (<EmptyState add={add}/>) : (<Status count={count} add={add}/>)}
//  </div>

//  )
// }

// const Status= ({count, add}) =>

// {

//   return (<div>
//     <div>
// <p>{`Item is: ${count}`}</p>
// <button onClick={add}>Add</button>

//     </div>
//   </div>)
// }

// const EmptyState= ({add}) =>
// {
//   return (
//     <div>
//       <div>
//        <p>No items</p>
//        <button onClick={add}>Add</button>

//       </div>
//     </div>
//   )
// }
// export const Form = () => {
//   const [input, setInput] = useState("");
//   const [items, setItems] = useState([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//   });

//   const onChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInput(e.target.value);
//     console.log(e.target.value);
//   };

//   const add = () => {
//     setItems([...items, input]);
//     setInput("");
//   };
//   console.log(add);
//   return (
//     <div>
//       <div>
//         <input
//           onChange={(e) => {
//             onChange(e);
//           }}
//           value={input}
//           type="text"
//           className="border"
//         />
//         <button onClick={add}>Submit</button>
//         <p>Tanii bichsen text</p>{" "}
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
