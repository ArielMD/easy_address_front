import * as yup from "yup";

export const addressSchema = yup.object().shape({
  street: yup.string().trim().required("La calle es requerida"),
  externalNumber: yup
    .string()
    .trim()
    .required("el número exterior es requerido"),
  internalNumber: yup
    .string()
    .trim()
    .required("el número interior es requerido"),
  postalCode: yup.string().trim().required("El código postal es requerido"),
  colonia: yup.string().trim().required("La colonia es requerida"),
  municipality: yup.string().trim().required("el municipio es requerido"),
  city: yup.string().trim().required("La ciudad es requerida"),
  country: yup.string().trim().required("el país es requerido"),
});
