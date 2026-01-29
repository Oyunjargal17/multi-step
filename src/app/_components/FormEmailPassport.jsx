const { Input } = require("./Input");

export const FormEmailPassport = ({
  formData,
  onChange,
  formError,
  updateFormError,
  handleNext,
  handlePrev,
}) => {
  const onValidation = () => {
    const { eMail, phoneNumber, password, confirmPassword } = formData;
    const newError = {};
    const phoneRegex = /^\+?\d{8}$/;
    const eMailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (eMail === "") {
      newError["eMail"] = "Хоосон байж болохгүй";
    } else if (!eMailRegex.test(eMail)) {
      newError["eMail"] = "Алдаатай И-мэйл байна";
    }

    if (phoneNumber === "") {
      newError["phoneNumber"] = "Хоосон байж болохгүй";
    } else if (!phoneRegex.test(phoneNumber)) {
      newError["phoneNumber"] = "Утасны дугаар буруу байна";
    }
    if (password === "") {
      newError["password"] = "Хоосон байж болохгүй";
    } else if (!passwordRegex.test(password)) {
      newError["password"] = "Нууц үгийн шаардлага хангахгүй байна";
    }
    if (confirmPassword === "") {
      newError["confirmPassword"] = "Хоосон байж болохгүй";
    } else if (password !== confirmPassword) {
      newError["confirmPassword"] = "Нууц үг тохирохгүй байна";
    }
    console.log(handleNext);
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
  console.log(handleNext);

  return (
    <div>
      <Input
        name="eMail"
        label="Email"
        placeholder="И-мэйлээ оруулна уу?"
        value={formData.eMail}
        onChange={onChange}
        error={formError.eMail}
        require={false}
        type="text"
      />
      <Input
        name="phoneNumber"
        label="Phone number"
        placeholder="Утасны дугаараа оруулна уу?"
        value={formData.phoneNumber}
        onChange={onChange}
        error={formError.phoneNumber}
        require={false}
        type="text"
      />
      <Input
        name="password"
        label="Password"
        placeholder="Нууц үгээ оруулна уу?"
        value={formData.password}
        onChange={onChange}
        error={formError.password}
        require={false}
        type="password"
      />
      <Input
        name="confirmPassword"
        label="Confirt password"
        placeholder="Нууц үгээ бататгана уу?"
        value={formData.confirmPassword}
        onChange={onChange}
        error={formError.confirmPassword}
        require={false}
        type="password"
      />

      <div className="flex justify-center gap-4 mb-4  ">
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
          Continue 2/3
        </button>
      </div>
    </div>
  );
};
