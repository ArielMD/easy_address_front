import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import addressService from "../services/address";
import { Submit, Button } from "./styles";

const AddressForm = ({ callback, type, address }) => {
  const [states, setstates] = useState([]);
  const [currentState, setCurrentState] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const [
    country,
    street,
    externalNumber,
    internalNumber,
    _state,
    city,
    municipality,
    postalCode,
    colonia,
  ] = watch([
    "country",
    "street",
    "externalNumber",
    "internalNumber",
    "state",
    "city",
    "municipality",
    "postalCode",
    "colonia",
  ]);

  useEffect(() => {
    if (address) {
      setCurrentState(address.state);
      setValue("country", address.country.toLowerCase());
      setValue("street", address.street);
      setValue("externalNumber", address.external_number);
      setValue("internalNumber", address.internal_number);
      setValue("state", address.state);
      setValue("city", address.city);
      setValue("municipality", address.municipality);
      setValue("postalCode", address.postal_code.toString());
      setValue("colonia", address.colonia);
    }
    addressService()
      .getData()
      .then((response) => {
        setstates(response);
      });
  }, [address, setValue]);

  const onSubmit = (data) => {
    if (address) {
      data.id = address.id;
    }
    callback(data);
  };

  return (
    <form
      className="col-sm-12 col-md-8  card p-5 m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row d-flex justify-content-center">
        <div className="mb-3 col-6 ">
          <select
            {...register("country", { required: true })}
            className={`form-select ${errors.country ? "is-invalid" : ""}`}
            value={country || ""}
          >
            <option value="">selecciona una país</option>
            <option value="mexico">Mexico</option>
            <option disabled value="argentina">
              Argentina
            </option>
            <option disabled value="brazil">
              Brasil
            </option>
          </select>
          <div className="invalid-feedback">
            {errors.country && errors.country.message}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Calle</label>
        <input
          className={`form-control ${errors.street ? "is-invalid" : ""}`}
          type="text"
          placeholder="Ingresa una calle"
          {...register("street", { required: true })}
          value={street || ""}
        />
        <div className="invalid-feedback">
          {errors.street && "Este campo es obligatorio"}
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-6">
          <label className="form-label">Número Exterior</label>
          <input
            className={`form-control ${
              errors.externalNumber ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="Ingresa tu número exterior"
            {...register("externalNumber", { required: true })}
            value={externalNumber || ""}
          />
          <div className="invalid-feedback">
            {errors.externalNumber && "Este campo es obligatorio"}
          </div>
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Número Interior</label>
          <input
            className={`form-control ${
              errors.internalNumber ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="Ingresa tu número interior"
            {...register("internalNumber", { required: true })}
            value={internalNumber || ""}
          />
          <div className="invalid-feedback">
            {errors.internalNumber && "Este campo es obligatorio"}
          </div>
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Estado</label>
          <select
            {...register("state", { required: true })}
            className={`form-select ${errors.state ? "is-invalid" : ""}`}
            onChange={(e) => setCurrentState(e.target.value)}
            value={currentState || ""}
          >
            <option value="">selecciona un estado</option>
            {Object.keys(states).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Ciudad</label>
          <select
            className={`form-select ${errors.city ? "is-invalid" : ""}`}
            {...register("city", { required: true })}
            value={city || ""}
          >
            <option value="">selecciona una ciudad</option>
            {states[currentState] &&
              states[currentState].map((municipality) => (
                <option key={municipality} value={municipality}>
                  {municipality}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Municipio</label>
          <select
            className={`form-select ${errors.municipality ? "is-invalid" : ""}`}
            {...register("municipality", { required: true })}
            value={municipality || ""}
          >
            <option value="">selecciona un municipio</option>
            {states[currentState] &&
              states[currentState].map((municipality, index) => (
                <option key={`${municipality}-${index}`} value={municipality}>
                  {municipality}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Código postal</label>
          <input
            className={`form-control ${errors.postalCode ? "is-invalid" : ""}`}
            type="text"
            placeholder="Ingresa tu número número postal"
            {...register("postalCode", { required: true })}
            value={postalCode || ""}
          />
          <div className="invalid-feedback">
            {errors.codePostal && "Este campo es obligatorio"}
          </div>
        </div>
        <div className="mb-3 col-12">
          <label className="form-label">Colonia</label>
          <input
            className={`form-control ${errors.colonia ? "is-invalid" : ""}`}
            type="text"
            placeholder="Ingresa tu número interior"
            {...register("colonia", { required: true })}
            value={colonia || ""}
          />
          <div className="invalid-feedback">
            {errors.colonia && "Este campo es obligatorio"}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Submit className="btn btn-warning" type="submit">
          {type}
        </Submit>
        <Button to={"/show/all"} className="btn btn-primary" type="button">
          ver lista
        </Button>
      </div>
    </form>
  );
};

export default AddressForm;
