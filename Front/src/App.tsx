import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { lazy } from "react";
import ServersOnSideLayout from "./layouts/ServersOnSideLayout/ServersOnSideLayout";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const ServerPage = lazy(() => import("./pages/ServerPage/ServerPage"));
const OptionsPage = lazy(() => import("./pages/OptionsPage/OptionsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const Chat = lazy(() => import("./components/Chat/Chat"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ServersOnSideLayout>
              <MainPage />
            </ServersOnSideLayout>
          }
        />
        <Route
          path="/options"
          element={
            <PrivateRoute>
              <OptionsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/:serverId"
          element={
            <PrivateRoute>
              <ServersOnSideLayout>
                <ServerPage />
              </ServersOnSideLayout>
            </PrivateRoute>
          }
        >
          <Route path=":channelId" element={<Chat />} />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
