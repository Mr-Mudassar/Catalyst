import { Label } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { memo, useEffect, useState } from "react";

const PhoneInputField = (props) => {
  const { value, setFieldValue, inputProps, className, disabled, label } =
    props;

  const [tempValue, setTempValue] = useState(value || "");

  useEffect(() => {
    setTempValue(value || ""); // Ensure the value is empty if undefined
  }, [value]);

  const handleInputChange = (value) => {
    if (value === "1") {
      setTempValue(""); // Keep the field empty if only "+1" is present
      setFieldValue(inputProps.name, ""); // Pass an empty string to the form field
    } else {
      setTempValue(value);
      setFieldValue(inputProps.name, value);
    }
  };


  return (
    <>
      <Label className="mb-0 p-0 fw-bold text-green">{label}</Label>
      <PhoneInput
        inputProps={{
          ...inputProps,
        }}
        country={"us"}
        onlyCountries={["us"]}
        countryCodeEditable={false}
        masks={{ us: "... - ... - ...." }}
        value={tempValue}
        className={`${className} border ltr`}
        onChange={handleInputChange}
        disabled={disabled}
      />
    </>
  );
};

export default memo(PhoneInputField);
