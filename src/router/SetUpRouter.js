import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/admin/Dashboard";
import EditSewa from "../pages/admin/kos/EditSewa";
import { SewaAdmin } from "../pages/admin/kos/SewaAdmin";
import User from "../pages/admin/User";
import { Daftar } from "../pages/Daftar";
import LayoutUser from "../pages/LayoutUser";
import { Login } from "../pages/Login";
import { Detail } from "../pages/users/Detail";
import { Home } from "../pages/users/Home";
import { Kontrakan } from "../pages/users/Kontrakan";
import { Kos } from "../pages/users/Kos";
import PageSearch from "../pages/users/PageSearch";
import Ruko from "../pages/users/Ruko";
import Sewa from "../pages/users/Sewa";
import WishList from "../pages/users/WishList";
import PrivateAdmin from "./PrivateAdmin";

function SetUpRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutUser />}>
            <Route index element={<Home />} />
            <Route path="/kontrakan/:id" element={<Kontrakan />} />
            <Route path="/ruko/:id" element={<Ruko />} />
            <Route path="/kos/:id" element={<Kos />} />
            <Route path="/search/:name" element={<PageSearch />} />
            <Route path="/wish" element={<WishList />} />
            <Route path="/semua" element={<Sewa />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="/admin" element={<PrivateAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="sewaAdmin" element={<SewaAdmin />} />
            <Route path="edit/:id" element={<EditSewa />} />
            <Route path="users" element={<User />} />
            {/* <Route path="rukoAdmin" element={<RukoAdmin />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default SetUpRouter;
