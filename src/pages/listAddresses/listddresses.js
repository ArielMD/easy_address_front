import { useEffect, useState } from "react";
import addressService from "../../services/address";
import { Container, Title, Button } from "./styles";

const Listddresses = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    addressService()
      .findAllAddresses()
      .then((response) => setAddresses(response));
  }, []);

  const deleteAddress = (id) => {
    addressService()
      .deleteAddressesById(id)
      .then((_response) => {
        const newAddresses = addresses.filter((address) => address.id !== id);
        setAddresses(newAddresses);
      });
  };

  return (
    <Container className="container-fluid p-3 mt-4">
      <Title>Lista de direcciones registradas</Title>
      <div className="mb-4">
        <Button to="/" className="btn btn-primary" type="button">
          nuevo
        </Button>
      </div>
      <div className="col-12 card p-5 m-auto table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">País</th>
              <th scope="col">Estado</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Colonia</th>
              <th scope="col">Municipio</th>
              <th scope="col">Código postal</th>
              <th scope="col">N. interno</th>
              <th scope="col">N. externo</th>
              <th scope="col">Calle</th>
              <th scope="col-3"></th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address) => {
              return (
                <tr key={address.id}>
                  <td>{address.country}</td>
                  <td>{address.state}</td>
                  <td>{address.city}</td>
                  <td>{address.colonia}</td>
                  <td>{address.municipality}</td>
                  <td>{address.postal_code}</td>
                  <td>{address.internal_number}</td>
                  <td>{address.external_number}</td>
                  <td>{address.street}</td>
                  <td>
                    <Button
                      to={`/show/${address.id}`}
                      className="btn btn-success"
                    >
                      Ver
                    </Button>
                  </td>
                  <td>
                    <Button
                      to={`/edit/${address.id}`}
                      className="btn btn-warning"
                    >
                      Editar
                    </Button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAddress(address.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Listddresses;
