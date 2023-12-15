import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import UserDescription from "../pages/UserDescription/UserDescription";
import RepositoryDescription from "../pages/RepositoryDescription/RepositoryDescription";
import SearchHistory from "../pages/SearchHistory/SearchHistory";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userName" element={<UserDescription />} />
        <Route path="/repository" element={<RepositoryDescription />} />
        <Route path="/historic-searches" element={<SearchHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
