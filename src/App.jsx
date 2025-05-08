import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./Pages/Product";
//to implement routing we have some classes to import
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="category/:categoryName" element={<CategoryPage />} />
      </Route>
    )
  );

//herer RouterProvider must be root and wrap all others like navigation
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
// import Product from './Pages/Product'
// import { Provider } from "./components/ui/provider";

// function App() {

//   return (
//     <>
//       <Provider>
//         <Product />
//       </Provider>
//     </>
//   );
// }

// export default App
