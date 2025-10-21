import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import UserDetails from "../Pages/UserDetails/UserDetails";

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:name" element={<UserDetails />} />
          <Route path="/*" element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
