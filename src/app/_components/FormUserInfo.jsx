const { Input } = require("./Input");

export const FormUserInfo = ({
  formData,
  onChange,
  formError,
  updateFormError,
  handleNext,
}) => {
  const onValidation = () => {
    const { firstName, lastName, userName } = formData;
    const newError = {};

    if (firstName === "") {
      newError["firstName"] = "Хоосон утга оруулахгүй байх";
    }

    if (lastName === "") {
      newError["lastName"] = "Хоосон утга оруулахгүй байх";
    }
    if (userName === "") {
      newError["userName"] = "Хоосон утга оруулахгүй байх";
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
  };

  return (
    <div>
      <Input
        name="firstName"
        label="First name"
        placeholder="Нэрээ оруулна уу?"
        value={formData.firstName}
        onChange={onChange}
        error={formError.firstName}
        require={false}
        type="text"
      />
      <Input
        name="lastName"
        label="Last name"
        placeholder="Овогоо оруулна уу?"
        value={formData.lastName}
        onChange={onChange}
        error={formError.lastName}
        require={false}
        type="text"
      />
      <Input
        name="userName"
        label="User name"
        placeholder="Хэрэглэгчийн нэрээ оруулна уу?"
        value={formData.userName}
        onChange={onChange}
        error={formError.userName}
        require={false}
        type="text"
      />
      <div className="flex justify-center mb-4 ">
        <button
          onClick={onSubmit}
          className="bg-[#121315] text-white w-80 rounded-sm mt-21 p-1"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
