import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectedRoutes from "./layouts/protected-routes";

import HomePage from "@/routes/home";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import { MainLayout } from "./layouts/main-layout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* pullic routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authenctication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          {/* all protected routes */}
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
