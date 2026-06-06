import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import Error from "../pages/Error";
import Layout from "../components/Layout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
