import * as yup from "yup";

const inquiryFormSchema = yup.object().shape({
  name: yup.string().required("Name field is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email field is required"),
  phone: yup.string().required("Phone field is required"),
  budget: yup.string().required("Budget field is required"),
  message: yup.string().required("Message field is required"),
  agreement: yup.boolean().required("You have to agree to this").oneOf([true], "You have to agree to this"),
});

export default inquiryFormSchema;
