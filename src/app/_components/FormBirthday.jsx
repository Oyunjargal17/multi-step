import { InputDate } from "./InputDate";
import { InputPicture } from "./InputPicture";

const { Input } = require("./Input");

export const FormBirthday = ({
  formData,
  onChange,
  formError,
  updateFormError,
  handleNext,
  handlePrev,
  ref,
  image,
  difference,
  setImage,
}) => {
  const onValidation = () => {
    const { dateOfBirthday, profileImage } = formData;
    const newError = {};

    if (dateOfBirthday === "") {
      newError["dateOfBirthday"] = "Хоосон утга оруулахгүй байх";
    } else if (difference <= 18) {
      newError["dateOfBirthday"] = "Та 18 нас хүрсэн байх ёстой!";
    }

    if (profileImage === "") {
      newError["profileImage"] = "Та заавал зурагаа оруулна уу?";
    }

    const isValid = Object.keys(newError).length === 0;

    updateFormError(newError);

    return isValid;
  };

  const onSubmit = () => {
    const isValid = onValidation();

    if (isValid) {
      handleNext();
    }
    console.log(handleNext);
  };

  return (
    <div>
      <InputDate
        name="dateOfBirthday"
        label="Date of birth"
        placeholder="Төрсөн он, сар, өдөрөө оруулна уу?"
        value={formData.dateOfBirthday}
        onChange={onChange}
        error={formError.dateOfBirthday}
        require={false}
      />

      <InputPicture
        name="profileImage"
        label="Profile image"
        placeholder="Та өөрийн зурагаа оруулна уу?"
        value={formData.profileImage}
        onChange={onChange}
        error={formError.profileImage}
        require={false}
        ref={ref}
        image={image}
        setImage={setImage}
      />

      <div className="flex justify-center gap-4 mb-4 ">
        <button
          onClick={handlePrev}
          className="bg-white border text-black w-20 rounded-sm mt-21 p-1"
        >
          back
        </button>
        <button
          onClick={onSubmit}
          className="bg-[#121315] text-white w-54 rounded-sm mt-21 p-1"
        >
          Continue 3/3
        </button>
      </div>
    </div>
  );
};
