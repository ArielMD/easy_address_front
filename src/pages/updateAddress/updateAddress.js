import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import addressService from "../../services/address";
import AddressForm from "../../components/addressForm";
import { FormContainer, FormTitle, Error } from "./styles";

const UpdateAddress = () => {
  const [error, seterror] = useState(false);
  const [address, setAddress] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    addressService()
      .findAddressById(id)
      .then((response) => setAddress(response));
  }, [id]);

  const update = (data) => {
    addressService()
      .update(data)
      .then((response) => {
        seterror(false);
        navigate(`/show/${response.id}`);
      })
      .catch((_error) => {
        seterror(true);
      });
  };

  return (
    <FormContainer className="container p-5">
      <FormTitle>INGRESA TU DIRECCIÓN</FormTitle>
      {error && <Error>No se pudó guardar la dirección</Error>}
      <AddressForm callback={update} type="Actualizar" address={address} />
    </FormContainer>
  );
};

export default UpdateAddress;
