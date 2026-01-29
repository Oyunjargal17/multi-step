"use client";

import { useRef, useState } from "react";

import { FormUserInfo } from "./FormUserInfo";
import { FormEmailPassport } from "./FormEmailPassport";
import { FormBirthday } from "./FormBirthday";
import { Success } from "./Success";
import { UI } from "./UI";
import { differenceInYears } from "date-fns";

const today = new Date();

export const Form = () => {
  const ref = useRef();
  const [step, setStep] = useState(3);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirthday: "",
    profileImage: "",
  });
  const difference = differenceInYears(today, formData.dateOfBirthday);
  console.log("difference :", difference);

  console.log("formData", formData);
  const [image, setImage] = useState(null);

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirthday: "",
    profileImage: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log("name: ", name);

    if (name === "profileImage") {
      const file = ref.current.files[0];
      if (file && file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        setImage(previewUrl);
      }
    }
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    updateFormError({ [name]: "" });
  };

  const updateFormError = (error) => {
    setFormError({ ...formError, ...error });
  };

  const handleNext = () => {
    setStep(step + 1);
    // setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
    // setStep((prev) => prev - 1);
  };

  return (
    <div className="bg-[#f4f4f4] h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-100 h-fit bg-white rounded-sm">
          <div>
            {step === 1 && (
              <>
                <UI />
                <FormUserInfo
                  formData={formData}
                  onChange={onChange}
                  formError={formError}
                  updateFormError={updateFormError}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </>
            )}
            {step === 2 && (
              <>
                <UI />
                <FormEmailPassport
                  formData={formData}
                  onChange={onChange}
                  formError={formError}
                  updateFormError={updateFormError}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              </>
            )}
            {step === 3 && (
              <>
                <UI />
                <FormBirthday
                  formData={formData}
                  onChange={onChange}
                  formError={formError}
                  updateFormError={updateFormError}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  ref={ref}
                  image={image}
                  difference={difference}
                  setImage={setImage}
                />
              </>
            )}
            {step === 4 && (
              <>
                <Success />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// export const Form = () => {
//   const [inputValue, setInputValue] = useState();
//   const [items, setItems] = useState([]);

//   const add = () => {
//     setItems([...items, inputValue]);
//     setInputValue("");
//     console.log([...items, inputValue]);
//   };
//   const onChange = (e) => {
//     console.log(e.target.value);
//     setInputValue(e.target.value);
//   };
//   return (
//     <div>
//       <input
//         value={inputValue}
//         className="border"
//         type="text"
//         onChange={(e) => onChange(e)}
//       />
//       <button onClick={add}>submit</button>
//       <ul>
//         {items.map((item, index) => {
//           return <li key={index}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };
