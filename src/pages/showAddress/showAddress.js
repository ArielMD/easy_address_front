import { useEffect, useState } from "react";
import addressService from "../../services/address";
import { useParams } from "react-router-dom";
import { FormContainer, FormTitle, Button } from "./styles";

const ShowAddress = () => {
  const { id } = useParams();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    addressService()
      .findAddressById(id)
      .then((response) => setAddress(response));
  }, [id]);

  return (
    <FormContainer className="container p-5">
      <FormTitle>INGRESA TU DIRECCIÓN</FormTitle>
      <div className="col-sm-12 col-md-8  card p-5 m-auto">
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-6 ">
            <label className="form-label">País</label>
            <input
              value={address?.country || ""}
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Calle</label>
          <input
            value={address?.street || ""}
            className="form-control"
            disabled
          />
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label className="form-label">Número Exterior</label>
            <input
              value={address?.external_number || ""}
              className="form-control"
              disabled
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Número Interior</label>
            <input
              value={address?.internal_number || ""}
              className="form-control"
              disabled
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Estado</label>
            <input
              value={address?.state || ""}
              className="form-control"
              disabled
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Ciudad</label>
            <input
              value={address?.city || ""}
              className="form-control"
              disabled
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Municipio</label>
            <input
              value={address?.municipality || ""}
              className="form-control"
              disabled
            />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Colonia</label>
            <input
              value={address?.colonia || ""}
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button to="/" className="btn btn-success" type="button">
            nuevo
          </Button>

          <Button to={`/edit/${id}`} className="btn btn-warning" type="button">
            Ir a editar
          </Button>
          <Button to={"/show/all"} className="btn btn-primary" type="button">
            ver lista
          </Button>
        </div>
      </div>
    </FormContainer>
  );
};

export default ShowAddress;
