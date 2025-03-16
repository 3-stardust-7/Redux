import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Store/store";

const RootLayout = () => {
  return (
    <>
    {/* now all components know aboyt redux state */}
      <Provider store={store}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
