import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
