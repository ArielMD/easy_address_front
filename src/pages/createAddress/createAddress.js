import AddressForm from "../../components/addressForm";
import { FormContainer, FormTitle, Error } from "./styles";
import addressService from "../../services/address";
import { useState } from "react/cjs/react.development";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreateAddress = () => {
  const [error, seterror] = useState(false);

  const navigate = useNavigate();

  const create = useCallback(
    (data) => {
      addressService()
        .saveAddress(data)
        .then((response) => {
          navigate(`/show/${response.id}`);
          seterror(false);
        })
        .catch((_error) => seterror(true));
    },
    [navigate]
  );

  return (
    <FormContainer className="container p-5">
      <FormTitle>INGRESA TU DIRECCIÓN</FormTitle>
      {error && <Error>No se pudó guardar la dirección</Error>}
      <AddressForm callback={create} type="Crear" />
    </FormContainer>
  );
};

export default CreateAddress;
