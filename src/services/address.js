import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "test"
    ? "https://api.backend.dev/api"
    : "http://localhost:3000/api";

const addressService = () => {
  const getData = async () => {
    const response = await axios.get(`${baseURL}/search/country?q=mexico`);

    return response.data;
  };

  const saveAddress = async (data) => {
    const body = transformData(data);
    const response = await axios.post(`${baseURL}/addresses/`, body);
    return response.data;
  };

  const findAddressById = async (id) => {
    const response = await axios.get(`${baseURL}/addresses/${id}`);
    return response.data;
  };

  const findAllAddresses = async () => {
    const response = await axios.get(`${baseURL}/addresses`);
    return response.data;
  };

  const update = async (data) => {
    const body = transformData(data);
    const response = await axios.put(`${baseURL}/addresses/${data.id}`, body);
    return response.data;
  };

  const deleteAddressesById = async (id) => {
    const response = await axios.delete(`${baseURL}/addresses/${id}`);
    return response.data;
  };

  const transformData = (data) => {
    const body = {
      country: data.country,
      state: data.state,
      postal_code: data.postalCode,
      city: data.city,
      external_number: data.externalNumber,
      internal_number: data.internalNumber,
      municipality: data.municipality,
      street: data.street,
      colonia: data.colonia,
    };

    return body;
  };
  return {
    getData,
    saveAddress,
    findAddressById,
    findAllAddresses,
    deleteAddressesById,
    update,
  };
};

export default addressService;
