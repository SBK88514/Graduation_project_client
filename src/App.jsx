import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/contexts/AuthContext";
import Navbar from "./components/section/Navbar";
import ButtonAddIssue from "./components/ui/ButtonAddIssue";
import IssueModal from "./components/modal/IssueModal";
import EmployeeModal from "./components/modal/employeeModal";
import BackgroundLayout from "./components/ui/BackgroundLayout";
import NavPublic from "./components/section/NavPublic";

function ProtectedRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}

function Root({ isAuth }) {
  console.log(isAuth);
  return (
    <>
      <BackgroundLayout>
        {isAuth ? (
          <>
            <Navbar />
            <ButtonAddIssue />
          </>
        ) : (
          <NavPublic />
        )}
        <Outlet />
        <IssueModal />
        <EmployeeModal />
      </BackgroundLayout>
    </>
  );
}

function App() {
  const { isAuth } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isAuth={isAuth} />}>
        {/* Public Routes */}
        <Route element={isAuth ? <Navigate to={"/welcomepage"} /> : <Outlet />}>
          <Route
            index
            lazy={async () => ({
              Component: (
                await import("./components/pages/publicPages/mainPage/HomePage")
              ).default,
            })}
          />
          <Route
            path="login"
            lazy={async () => ({
              Component: (await import("./components/pages/publicPages/Login"))
                .default,
            })}
          />
        </Route>

        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route
            path="welcomepage"
            lazy={async () => ({
              Component: (
                await import("./components/pages/privatePages/WelcomePage")
              ).default,
            })}
          />

          <Route
            path="addissue"
            lazy={async () => ({
              Component: (await import("./components/pages/forms/IssueForm"))
                .default,
            })}
          />
          <Route
            path="myissue"
            lazy={async () => ({
              Component: (await import("./components/cards/MyIssues")).default,
            })}
          />
          <Route
            path="allissues"
            lazy={async () => ({
              Component: (await import("./components/cards/CardIssues"))
                .default,
            })}
          />
          <Route
            path="myissuehistory"
            lazy={async () => ({
              Component: (await import("./components/cards/MyIssuesHistory"))
                .default,
            })}
          />
        </Route>
        <Route
          path="LeadershipTeam"
          lazy={async () => ({
            Component: (
              await import(
                "./components/pages/publicPages/mainPage/LeadershipTeam"
              )
            ).default,
          })}
        />
        <Route
          path="AboutPage"
          lazy={async () => ({
            Component: (
              await import("./components/pages/publicPages/mainPage/AboutPage")
            ).default,
          })}
        />
        <Route
          path="ContactPage"
          lazy={async () => ({
            Component: (
              await import(
                "./components/pages/publicPages/mainPage/ContactPage"
              )
            ).default,
          })}
        />
        <Route
          path="Offices"
          lazy={async () => ({
            Component: (
              await import("./components/pages/publicPages/mainPage/Offices")
            ).default,
          })}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
