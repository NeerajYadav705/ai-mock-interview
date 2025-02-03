import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import ProtectedRoutes from "./layouts/protected-routes";

import HomePage from "@/routes/home";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import { MainLayout } from "./layouts/main-layout";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
// import { MockLoadPage } from "./routes/mock-load-page";

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
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route 
            path="interview/:interviewId/start"
            element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback/>}/>
          </Route> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
