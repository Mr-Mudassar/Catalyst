import * as Yup from "yup";
import {
  REQUIRED,
  LONG_LASTNAME,
  LONG_FIRSTNAME,
  SHORT_FIRSTNAME,
  INVALID_LASTNAME,
  INVALID_PASSWORD,
  INVALID_FIRSTNAME,
  REQUIRED_LASTNAME,
  PASSWORD_REQUIRED,
  REQUIRED_PASSWORD,
  REQUIRED_FIRSTNAME,
  SIGNUP_SHORT_LASTNAME,
  REQUIRED_NEW_PASSWORD,
  REQUIRED_PHONE_NUMBER,
  REQUIRED_EMAIL_ADDRESS,
  MISMATCH_CONFIRM_PASSWORD,
  INVALID_CONTACT_EMAIL_ADDRESS,
  REQUIRED_CONFIRM_NEW_PASSWORD,
  LONG_Shelter_NAME,
  REQUIRED_SHELTER_NAME,
  SHORT_Shelter_NAME,
  INVALID_Contact_NAME,
  REQUIRED_Contact_NAME,
  LONG_Contact_NAME,
  SHORT_Contact_NAME,
  INVALID_SHELTER_NAME,
  REQUIRED_STATE,
  INVALID_STATE,
  SHORT_STATE,
  LONG_STATE,
  REQUIRED_ZIPCODE,
  ZIPCODE_MINIMUM_LENGTH,
  ZIPCODE_MAXIMUM_LENGTH,
  Product_Subscription_REQUIRED,
  Quantity_Subscription_REQUIRED,
  Frequency_Subscription_REQUIRED,
  Duration_Subscription_REQUIRED,
} from "../../utils/staticMessages";

const shelterNameValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, INVALID_SHELTER_NAME)
  .min(2, SHORT_Shelter_NAME)
  .max(100, LONG_Shelter_NAME)
  .required(REQUIRED_SHELTER_NAME);

const contactNameValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, INVALID_Contact_NAME)
  .min(2, SHORT_Contact_NAME)
  .max(40, LONG_Contact_NAME)
  .required(REQUIRED_Contact_NAME);

const stateValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, INVALID_STATE)
  .min(2, SHORT_STATE)
  .max(20, LONG_STATE)
  .required(REQUIRED_STATE);

// Zipcode Field Validation (for U.S. ZIP codes)
const zipcodeValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^\d{5}$/, "Zip Code must be exactly 5 digits")
  .min(5, ZIPCODE_MINIMUM_LENGTH)
  .max(5, ZIPCODE_MAXIMUM_LENGTH)
  .required(REQUIRED_ZIPCODE);

const firstNameValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, INVALID_FIRSTNAME)
  .min(2, SHORT_FIRSTNAME)
  .max(20, LONG_FIRSTNAME)
  .required(REQUIRED_FIRSTNAME);

const lastNameValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, INVALID_LASTNAME)
  .min(2, SIGNUP_SHORT_LASTNAME)
  .max(20, LONG_LASTNAME)
  .required(REQUIRED_LASTNAME);

const ContactemailValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    INVALID_CONTACT_EMAIL_ADDRESS
  )
  .min(6, "Email address should be at least 6 characters")
  .max(100, "Email address should be at most 100 characters")
  .required(REQUIRED_EMAIL_ADDRESS);

const passwordValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .min(8, INVALID_PASSWORD)
  .max(16, INVALID_PASSWORD)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
    INVALID_PASSWORD
  )
  .required(REQUIRED_PASSWORD);

const newPasswordValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .min(8, INVALID_PASSWORD)
  .max(16, INVALID_PASSWORD)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
    INVALID_PASSWORD
  )
  .required(REQUIRED_NEW_PASSWORD);

const confirmNewPasswordValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .min(8, INVALID_PASSWORD)
  .max(16, INVALID_PASSWORD)
  .oneOf([Yup.ref("newPassword"), ""], MISMATCH_CONFIRM_PASSWORD)
  .required(REQUIRED_CONFIRM_NEW_PASSWORD);

const phoneNumberValidaton = Yup.string().required(REQUIRED_PHONE_NUMBER);
const phoneNumberValidatonNotRequired = Yup.string();

const requiredValidation = Yup.string().required(REQUIRED).trim();

const addressValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/, "Invalid Address")
  .min(5, "Address should not be less than 5 characters")
  .max(50, "Address should be less than 50 characters")
  .required("Address is required");

const signInPasswordValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .min(8, INVALID_PASSWORD)
  .max(16, INVALID_PASSWORD)
  .required(PASSWORD_REQUIRED);

const noOfAdoptersForRatio = Yup.number()
  .typeError("Please enter a valid number")
  .integer("Only numbers are allowed")
  .max(99999999, "Please enter a ratio value with no more than 8 digits.") // 8-digit max
  .required(REQUIRED);

const requiredApartmentValidation = Yup.string()
  .trim("Remove extra spaces")
  .strict(true)
  .matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/, "Invalid Address")
  .max(50, "Apartment name can not be more than 50 characters");

const noOfProductSubscription = Yup.string().required(
  Product_Subscription_REQUIRED
);

const noOfQuantitySubscription = Yup.string().required(
  Quantity_Subscription_REQUIRED
);

const noOfFrequencySubscription = Yup.string().required(
  Frequency_Subscription_REQUIRED
);

const noOfDurationSubscription = Yup.string().required(
  Duration_Subscription_REQUIRED
);

export const ADMIN_SIGNIN_SCHEMA = Yup.object().shape({
  email: ContactemailValidation,
  password: signInPasswordValidation,
});

export const SIGNIN_SCHEMA = Yup.object().shape({
  email: ContactemailValidation,
  password: signInPasswordValidation,
});

export const SIGNUP_SCHEMA = Yup.object().shape({
  shelterName: shelterNameValidation,
  address: addressValidation,
  state: stateValidation,
  city: requiredValidation,
  zipCode: zipcodeValidation,
  contactName: contactNameValidation,
  email: ContactemailValidation,
  phoneNumber: phoneNumberValidaton,
  password: passwordValidation,
  catsNumber: requiredValidation,
  adoptMonthly: requiredValidation,
});

export const ADMIN_SIGNUP_SCHEMA = Yup.object().shape({
  shelterName: shelterNameValidation,
  address: addressValidation,
  state: stateValidation,
  city: requiredValidation,
  zipCode: zipcodeValidation,
  contactName: contactNameValidation,
  email: ContactemailValidation,
  password: passwordValidation,
  catsNumber: requiredValidation,
  adoptMonthly: requiredValidation,
});

export const FORGOT_PASSWORD_SCHEMA = Yup.object().shape({
  email: ContactemailValidation,
});

export const NEW_PASSWORD_SCHEMA = Yup.object().shape({
  newPassword: newPasswordValidation,
  confirmPassword: confirmNewPasswordValidation,
});

export const CHANGE_PASSWORD_SCHEMA = Yup.object().shape({
  oldPassword: passwordValidation,
  newPassword: newPasswordValidation,
  confirmNewPassword: confirmNewPasswordValidation,
});

export const PROFILE_FORM_SCHEMA = Yup.object().shape({
  shelterName: shelterNameValidation,
  address: addressValidation,
  state: stateValidation,
  zipCode: zipcodeValidation,
  contactName: contactNameValidation,
  email: ContactemailValidation,
  phoneNumber: phoneNumberValidaton,
  catsNumber: requiredValidation,
  adoptMonthly: requiredValidation,
});

export const SHOPING_ORDER_FORM_SCHEMA = Yup.object().shape({
  firstName: firstNameValidation,
  address: addressValidation,
  state: stateValidation,
  city: requiredValidation,
  zipCode: zipcodeValidation,
  lastName: lastNameValidation,
  email: ContactemailValidation,
  phoneNumber: phoneNumberValidatonNotRequired,
  apartment: requiredApartmentValidation,
});

export const SHELTER_RATIO_FORM_SCHEMA = Yup.object().shape({
  numberOfAdopters: noOfAdoptersForRatio,
  numberOfPack: noOfAdoptersForRatio,
});
export const ADD_SUBSCRIPTION_FORM_SCHEMA = Yup.object().shape({
  productId: noOfProductSubscription,
  quantity: noOfQuantitySubscription,
  frequency: noOfFrequencySubscription,
  duration: noOfDurationSubscription,
});
