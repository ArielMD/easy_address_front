import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAddressPage from "./pages/createAddress";
import ShowAddressPage from "./pages/showAddress";
import ListddressesPage from "./pages/listAddresses";
import UpdateAddressPage from "./pages/updateAddress/updateAddress";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<CreateAddressPage />} />
          <Route exact path="/show/:id" element={<ShowAddressPage />} />
          <Route exact path="/show/all" element={<ListddressesPage />} />
          <Route exact path="/edit/:id" element={<UpdateAddressPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
