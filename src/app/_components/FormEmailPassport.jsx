const { Input } = require("./Input");

export const FormEmailPassport = ({
  formData,
  onChange,
  formError,
  updateFormError,
  handleNext,
  handlePrev,
}) => {
  const onSubmit = () => {
    const { eMail, phoneNumber, password, confirmPassword } = formData;
    const newError = {};

    if (eMail === "") {
      newError["eMail"] = "hooson bj bolohgui";
    }

    if (phoneNumber === "") {
      newError["phoneNumber"] = "hooson bj bolohgui";
    }
    if (password === "") {
      newError["password"] = "hooson bj bolohgui";
    }
    if (confirmPassword === "") {
      newError["confirmPassword"] = "hooson bj bolohgui";
    }
    console.log(newError);
    updateFormError(newError);
    console.log("hi");
  };

  return (
    <div>
      <Input
        name="eMail"
        label="Email"
        placeholder="e-mail оруулна уу?"
        value={formData.eMail}
        onChange={onChange}
        error={formError.eMail}
        require={false}
      />
      <Input
        name="phoneNumber"
        label="Phone number"
        placeholder="Utasnii dugaaraa оруулна уу?"
        value={formData.phoneNumber}
        onChange={onChange}
        error={formError.phoneNumber}
        require={false}
      />
      <Input
        name="password"
        label="Password"
        placeholder="passwordoo оруулна уу?"
        value={formData.password}
        onChange={onChange}
        error={formError.password}
        require={false}
      />
      <Input
        name="confirmPassword"
        label="Confirt password"
        placeholder="passwordoo batatgana уу?"
        value={formData.confirmPassword}
        onChange={onChange}
        error={formError.confirmPassword}
        require={false}
      />

      <div className="flex justify-center ">
        {/* <button onClick={onSubmit}>Step2</button> */}
        <button
          onClick={handlePrev}
          className="bg-[#121315] text-white rounded-sm mt-21 p-1"
        >
          back
        </button>
        <button
          onClick={onSubmit}
          className="bg-[#121315] text-white w-80 rounded-sm mt-21 p-1"
        >
          Continue 2/3
        </button>
      </div>
    </div>
  );
};
