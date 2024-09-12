import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import NewHeader from "../components/NewHeader.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
         <NewHeader/>
         <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.MENU}
      element={
        <Layout>
         <NewHeader/>
         <Menu/>
        </Layout>
      }
    />
     <Route
      path={RoutePaths.GALLERY}
      element={
        <Layout>
         <NewHeader/>
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
