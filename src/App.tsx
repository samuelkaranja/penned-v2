import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  CreatePostPage,
  DetailsPage,
  HomePage,
  LoginPage,
  ProfilePage,
  SignUpPage,
} from "./pages";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { MainLayout, PrivateRoute, PublicRoute } from "./components";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/details/:id"
              element={
                <PrivateRoute>
                  <DetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/createpost"
              element={
                <PrivateRoute>
                  <CreatePostPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />

          {/* Catch-all route for non-existent URLs */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
