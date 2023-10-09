// import { Outlet } from "react-router-dom";

import classes from "./App.module.css";
import { SearchProvider } from "./provider/SearchContext";
import Router from "./router/Router";

function App() {
  return (
    <SearchProvider>
      <div className={classes.app}>
        <img
          className={classes.logo}
          src="/images/github-icons-logo-white.png"
          alt="Logo de GitHub"
        />

        <h1>Github</h1>
        <Router />
      </div>
    </SearchProvider>
  );
}

export default App;
