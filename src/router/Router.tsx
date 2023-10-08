import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import UserDescription from "../pages/UserDescription/UserDescription";
import RepositoryDescription from "../pages/RepositoryDescription/RepositoryDescription";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userName" element={<UserDescription />} />
        <Route
          path="/repository"
          element={<RepositoryDescription />}
        />
        {/*         <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
