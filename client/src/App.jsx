import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AgreementOfSaleForm from "./pages/Docs/AOS";
import FlatSaleDeedForm from "./pages/Docs/DOSF";
import LandSaleDeedForm from "./pages/Docs/DOSL";
import EmployeeNDAForm from "./pages/Docs/ENDNCA";
import LicenseAgreementForm from "./pages/Docs/LLA";
import NDAForm from "./pages/Docs/NDA";
import POW from "./pages/Docs/POW";
import Home from "./pages/Home";
import SlectionPage from "./pages/SelectionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/select" element={<Layout />}>
          <Route index element={<SlectionPage />} />
        </Route>
        <Route path="/select/NDA" element={<Layout />}>
          <Route index element={<NDAForm />} />
        </Route>
        <Route path="/select/POW" element={<Layout />}>
          <Route index element={<POW />} />
        </Route>
        <Route path="/select/LLA" element={<Layout />}>
          <Route index element={<LicenseAgreementForm />} />
        </Route>
        <Route path="/select/ENDNCA" element={<Layout />}>
          <Route index element={<EmployeeNDAForm />} />
        </Route>
        <Route path="/select/DOSF" element={<Layout />}>
          <Route index element={<FlatSaleDeedForm />} />
        </Route>
        <Route path="/select/AOS" element={<Layout />}>
          <Route index element={<AgreementOfSaleForm />} />
        </Route>
        <Route path="/select/DOSL" element={<Layout />}>
          <Route index element={<LandSaleDeedForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
